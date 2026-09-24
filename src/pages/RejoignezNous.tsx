import { Helmet } from 'react-helmet-async';
import { useState, type FormEvent } from 'react';
import { 
  Heart, 
  Sparkles, 
  Briefcase, 
  Clock, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Send, 
  User, 
  Mail, 
  Phone, 
  ArrowRight,
  Calendar
} from 'lucide-react';
import { Button } from '../components/ui/Button';

interface JobOffer {
  id: string;
  title: string;
  type: string;
  badge: string;
  duration?: string;
  location: string;
  isFeatured?: boolean;
  isExpired?: boolean;
  description: string;
  missions: string[];
  profile?: string;
}

const OFFERS: JobOffer[] = [
  {
    id: 'benevole',
    title: 'Devenir bénévole au CCIB38',
    type: 'Bénévolat & Engagement solidaire',
    badge: 'Rejoignez l\'aventure',
    isFeatured: true,
    isExpired: false,
    location: 'CCIB38 - 18 Rue des Trembles, Grenoble',
    description: "Donnez du sens à votre temps libre ! Que vous ayez 2 heures par semaine ou quelques jours par mois, rejoignez une équipe chaleureuse et dynamique pour soutenir nos actions éducatives, culturelles et solidaires.",
    missions: [
      "Animation d'ateliers et projets éducatifs selon vos compétences",
      "Soutien logistique et accueil lors de nos conférences et événements",
      "Communication, création de supports visuels ou réseaux sociaux",
      "Projets d'entraide, bricolage ou secrétariat associatif"
    ],
    profile: "Toute personne enthousiaste, bienveillante et désireuse de partager ses compétences au service de la communauté."
  },
  {
    id: 'stage-territoire',
    title: 'Chargée de développement et animation territoire',
    type: 'Stage de 6 mois',
    badge: 'Offre expirée',
    duration: '6 mois',
    isFeatured: false,
    isExpired: true,
    location: 'CCIB38 - Grenoble',
    description: "Accompagnement du déploiement des projets territoriaux, coordination des partenariats associatifs et participation active à l'animation des événements culturels.",
    missions: [
      "Animation de la vie associative et relations avec les acteurs locaux",
      "Coordination logistique et suivi des projets culturels",
      "Participation aux bilans d'actions et à la veille partenariale"
    ],
    profile: "Stage pourvu. Cette offre est désormais clôturée et n'accepte plus de nouvelles candidatures."
  }
];

export default function RejoignezNous() {
  const [selectedOffer, setSelectedOffer] = useState<JobOffer | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    activity: '',
    emailContact: '',
    phone: '',
    message: ''
  });

  const handleOpenModal = (offer: JobOffer) => {
    if (offer.isExpired) return;
    setSelectedOffer(offer);
    setIsSuccess(false);
    setErrorMessage(null);
    setFormData({
      fullName: '',
      activity: '',
      emailContact: '',
      phone: '',
      message: ''
    });
  };

  const handleCloseModal = () => {
    setSelectedOffer(null);
    setIsSuccess(false);
    setErrorMessage(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedOffer) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    setIsSuccess(false);

    // Format the email message with user's activity, skills and details
    const formattedMessage = `=== CANDIDATURE POUR L'OFFRE ===\nPoste / Rôle : ${selectedOffer.title}\n\nActivité principale actuelle : ${formData.activity.trim()}\n\nCompétences, disponibilités et motivations :\n${formData.message.trim()}`;

    const payload = {
      fullName: formData.fullName.trim(),
      emailContact: formData.emailContact.trim(),
      phone: formData.phone.trim(),
      subject: `Candidature : ${selectedOffer.title}`,
      message: formattedMessage
    };

    try {
      const response = await fetch('https://ecole.ccib38.fr/nous-contacter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: '',
          activity: '',
          emailContact: '',
          phone: '',
          message: ''
        });
      } else {
        setErrorMessage("Une erreur est survenue lors de l'envoi de votre candidature. Veuillez réessayer ou nous contacter directement par email.");
      }
    } catch {
      setErrorMessage("Impossible de joindre le serveur pour le moment. Veuillez vérifier votre connexion ou nous contacter à contact@ccib38.fr.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FBF9] pb-24 font-sans">
      <Helmet>
        <title>Rejoignez-nous & Offres - CCIB38</title>
        <meta 
          name="description" 
          content="Découvrez nos opportunités d'engagement au Centre Culturel Ibn Badis de Grenoble. Devenez bénévole ou rejoignez nos équipes associatives." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-emerald-400 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Heart className="w-3.5 h-3.5 text-emerald-300" />
              Engagement & Carrières
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
              Rejoignez <span className="font-bold text-emerald-200">notre équipe</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
              Contribuez à une aventure humaine enrichissante. À travers le bénévolat et l'engagement associatif, mettez vos compétences au service de notre communauté.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-emerald-100">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800">
                Nos offres actuelles
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Postulez directement en ligne en quelques clics
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Candidatures ouvertes
            </div>
          </div>

          <div className="space-y-8">
            {OFFERS.map((offer) => {
              if (offer.isFeatured) {
                // Featured Volunteer Offer Card
                return (
                  <div 
                    key={offer.id}
                    id={`offer-${offer.id}`}
                    className="relative bg-gradient-to-br from-emerald-800 via-emerald-800 to-emerald-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-emerald-500/30 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-300/30 text-xs font-bold uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                          {offer.badge}
                        </span>
                        <div className="flex items-center gap-4 text-xs text-emerald-200/90">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                            {offer.location}
                          </span>
                        </div>
                      </div>

                      <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-700/60 border border-emerald-400/30 flex items-center justify-center text-emerald-200 shrink-0">
                            <Heart className="w-6 h-6 fill-emerald-300/20" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                              {offer.title}
                            </h3>
                            <p className="text-emerald-200 text-sm font-medium">
                              {offer.type}
                            </p>
                          </div>
                        </div>

                        <p className="text-emerald-100/90 text-base md:text-lg leading-relaxed mt-4 mb-6">
                          {offer.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 mb-3">
                            Quelques exemples de missions bénévoles :
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {offer.missions.map((mission, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-sm text-emerald-100/90">
                                <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                                <span>{mission}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-2xl p-4 mb-8">
                          <p className="text-xs text-emerald-200/90 leading-relaxed">
                            <strong className="text-white">Profil :</strong> {offer.profile}
                          </p>
                        </div>

                        <Button
                          id="btn-apply-benevole"
                          onClick={() => handleOpenModal(offer)}
                          size="lg"
                          className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-8 py-4 rounded-full shadow-lg shadow-emerald-950/40 text-base md:text-lg transition-transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                        >
                          <Heart className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                          Devenir bénévole maintenant
                          <ArrowRight className="w-4 h-4 text-emerald-700" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              }

              // Standard or Expired Offer Card
              return (
                <div 
                  key={offer.id}
                  id={`offer-${offer.id}`}
                  className={`bg-white rounded-3xl p-6 sm:p-8 shadow-sm border transition-all duration-300 ${
                    offer.isExpired 
                      ? 'border-slate-200 bg-slate-50/70 opacity-80' 
                      : 'border-emerald-100 hover:border-emerald-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      offer.isExpired 
                        ? 'bg-slate-200 text-slate-600' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {offer.isExpired ? (
                        <>
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          {offer.badge}
                        </>
                      ) : (
                        <>
                          <Briefcase className="w-3.5 h-3.5 text-emerald-700" />
                          {offer.badge}
                        </>
                      )}
                    </span>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      {offer.duration && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {offer.duration}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {offer.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                      offer.isExpired 
                        ? 'bg-slate-200 text-slate-500' 
                        : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold ${
                        offer.isExpired ? 'text-slate-600 line-through' : 'text-slate-800'
                      }`}>
                        {offer.title}
                      </h3>
                      <p className="text-slate-500 text-sm mt-0.5 font-medium">
                        {offer.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {offer.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Missions principales :
                    </h4>
                    <ul className="space-y-1.5">
                      {offer.missions.map((mission, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {offer.profile && (
                    <div className="bg-[#F9FBF9] border border-slate-200/80 rounded-2xl p-4 mb-6 text-xs text-slate-600">
                      <strong className="text-slate-800">Profil requis :</strong> {offer.profile}
                    </div>
                  )}

                  <div>
                    {offer.isExpired ? (
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-200 text-slate-500 text-sm font-semibold cursor-not-allowed">
                        <AlertCircle className="w-4 h-4" />
                        Offre expirée (candidatures clôturées)
                      </div>
                    ) : (
                      <Button
                        id={`btn-apply-${offer.id}`}
                        onClick={() => handleOpenModal(offer)}
                        className="rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 shadow-sm inline-flex items-center gap-2"
                      >
                        Postuler à cette offre
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Candidature spontanée Banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-emerald-100 text-center shadow-sm">
            <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
              Vous avez d'autres compétences à partager ?
            </h3>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
              Que vous soyez enseignant, professionnel de santé, informaticien, juriste, communicant ou artisan, votre aide est toujours la bienvenue au Centre Culturel Ibn Badis.
            </p>
            <Button
              onClick={() => handleOpenModal(OFFERS[0])}
              variant="outline"
              className="rounded-full border-emerald-700 text-emerald-800 hover:bg-emerald-50 px-6 py-2.5 font-medium"
            >
              Envoyer une proposition spontanée
            </Button>
          </div>
        </div>
      </section>

      {/* Modal Popup Form */}
      {selectedOffer && (
        <div 
          id="job-application-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden relative my-8">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white p-6 sm:p-7 relative">
              <button 
                id="close-modal-btn"
                onClick={handleCloseModal}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Fermer la fenêtre"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="pr-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                  Candidature en ligne
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {selectedOffer.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-slate-800 mb-2">
                    Candidature envoyée avec succès !
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Merci pour votre engagement. Votre message et vos informations ont bien été transmis à l'équipe du Centre Culturel Ibn Badis. Nous vous recontacterons très prochainement.
                  </p>
                  <Button
                    onClick={handleCloseModal}
                    className="rounded-full bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-2.5"
                  >
                    Fermer
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Nom et Prénom */}
                  <div>
                    <label 
                      htmlFor="modal-fullName" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Nom et Prénom <span className="text-emerald-700">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        id="modal-fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ex : Mohamed Benali"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Activité principale actuellement */}
                  <div>
                    <label 
                      htmlFor="modal-activity" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Activité principale actuelle <span className="text-emerald-700">*</span>
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        id="modal-activity"
                        type="text"
                        required
                        value={formData.activity}
                        onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                        placeholder="Ex : Enseignant, Étudiant en Master, Ingénieur, Retraité..."
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Téléphone en grille */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label 
                        htmlFor="modal-emailContact" 
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Email de contact <span className="text-emerald-700">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="modal-emailContact"
                          type="email"
                          required
                          value={formData.emailContact}
                          onChange={(e) => setFormData({ ...formData, emailContact: e.target.value })}
                          placeholder="nom@exemple.fr"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        htmlFor="modal-phone" 
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                      >
                        Numéro de téléphone <span className="text-emerald-700">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          id="modal-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="06 12 34 56 78"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message & Compétences */}
                  <div>
                    <label 
                      htmlFor="modal-message" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Vos compétences & Ce que vous pouvez apporter <span className="text-emerald-700">*</span>
                    </label>
                    <textarea
                      id="modal-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Expliquez brièvement votre parcours, vos compétences clés, ce qui vous motive et vos disponibilités éventuelles..."
                      className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                    >
                      Annuler
                    </button>
                    <Button
                      id="submit-application-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-7 py-2.5 shadow-sm inline-flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Envoyer ma candidature
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

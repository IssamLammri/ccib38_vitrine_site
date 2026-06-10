import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    emailContact: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const response = await fetch('https://ecole.ccib38.fr/nous-contacter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: '',
          emailContact: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FBF9] pb-24">
      <Helmet>
        <title>Contactez-nous - CCIB38</title>
        <meta name="description" content="Contactez le Centre Culturel Ibn Badis à Grenoble." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shrink-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             <span className="inline-flex items-center justify-center px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 rounded text-xs font-bold uppercase tracking-widest mb-6">
                Assistance
             </span>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
               <span className="font-bold text-emerald-100">Contactez</span>-nous
             </h1>
             <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed font-sans max-w-2xl mx-auto">
               Une question, une suggestion ou besoin d'informations supplémentaires ? Notre équipe est à votre écoute !
             </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none">
          <svg className="block w-full h-[30px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C8.59,2.83,57.19,10,101.44,14.62,176.47,22.25,249.2,33.52,321.39,56.44Z" fill="#F9FBF9"></path>
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-emerald-100">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">Envoyez-nous un message</h2>
            
            {isSuccess && (
              <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl border border-emerald-200 mb-6 font-medium">
                Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
              </div>
            )}

            {isError && (
              <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200 mb-6 font-medium">
                Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="emailContact" className="block text-sm font-medium text-slate-700 mb-1">Adresse e-mail</label>
                  <input
                    type="email"
                    id="emailContact"
                    name="emailContact"
                    required
                    value={formData.emailContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                  placeholder="Demande d'information"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none resize-none"
                  placeholder="Bonjour, je souhaite avoir plus d'informations concernant..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full py-4 rounded-xl text-md flex justify-center items-center gap-2 mt-4"
              >
                {isSubmitting ? 'Envoi en cours...' : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Informations utiles</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Notre Adresse</h4>
                    <p className="text-slate-600 mt-1">18 Rue des Trembles<br/>38100 Grenoble</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Téléphone</h4>
                    <p className="text-slate-600 mt-1">04 58 00 89 73</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Email</h4>
                    <p className="text-slate-600 mt-1">contact@ccib38.fr</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Horaires d'ouverture</h4>
                    <p className="text-slate-600 mt-1 text-sm leading-relaxed">
                      Mercredi : 14h00 - 18h00<br/>
                      Samedi & Dimanche : 09h00 - 12h15 / 14h00 - 17h15<br/>
                      <span className="text-slate-500 italic text-xs">Jours de semaine : selon programme de soutien scolaire</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-emerald-100 flex-1 min-h-[300px]">
              <iframe 
                src="https://maps.google.com/maps?q=18%20Rue%20des%20Trembles,%2038100%20Grenoble&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '300px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Google Maps CCIB38"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

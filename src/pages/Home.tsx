import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Users, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import heroImage from '../assets/images/centre_culturel_hero_1781101698592.png';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'centre' | 'mission' | 'valeurs'>('centre');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small timeout to allow render to complete
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Also set the correct tab if they clicked on vision
          if (location.hash === '#vision') {
            setActiveTab('mission');
          } else if (location.hash === '#a-propos') {
            setActiveTab('centre');
          }
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>CCIB38 - Centre Culturel Ibn Badis de Grenoble</title>
        <meta name="description" content="Découvrez le Centre Culturel Ibn Badis de Grenoble (CCIB38). Activités, cours de religion, soutien scolaire et événements culturels pour tous." />
      </Helmet>


      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 bg-gradient-to-br from-emerald-900 to-emerald-800 shrink-0">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 pointer-events-none">
           <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="var(--color-ccib-teal-light)" d="M42.7,-73.4C55.9,-67.8,67.6,-57.4,75.2,-44.6C82.8,-31.8,86.4,-15.9,85.1,-0.7C83.7,14.4,77.4,28.8,69.1,41.2C60.8,53.6,50.4,63.9,37.8,70.9C25.2,77.9,10.4,81.6,-4.4,80.1C-19.1,78.6,-33.7,71.8,-47.2,63C-60.6,54.1,-72.9,43.2,-79.8,29.3C-86.7,15.4,-88.2,-1.5,-83.4,-16.9C-78.6,-32.3,-67.5,-46.2,-54.1,-52.1C-40.8,-58,-25.2,-56,-11.2,-61.2C2.8,-66.4,15.5,-78.9,29.5,-79C43.5,-79.1,58.7,-66.9,42.7,-73.4Z" transform="translate(100 100)" />
           </svg>
        </div>
        
        {/* Yellow Circle decor */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-ccib-yellow rounded-full z-0 opacity-90 hidden md:block" />

        {/* Dotted pattern right */}
        <div className="absolute top-1/3 right-10 z-0 hidden lg:block opacity-60">
           <svg width="80" height="120" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
             <defs>
                <pattern id="dotsMain" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                   <circle fill="var(--color-ccib-teal)" cx="2" cy="2" r="2"></circle>
                </pattern>
             </defs>
             <rect x="0" y="0" width="80" height="120" fill="url(#dotsMain)"></rect>
           </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-6 italic text-white">
                Centre <span className="font-bold not-italic text-emerald-100">Culturel</span><br />
                <span className="font-bold not-italic text-emerald-100">Ibn Badis Grenoble</span>
              </h1>
              <p className="text-lg md:text-xl text-emerald-100/80 mb-8 max-w-lg leading-relaxed">
                Un espace dédié à la transmission du savoir, à l'épanouissement personnel et au vivre-ensemble. Rejoignez notre communauté !
              </p>
              <Button size="lg" className="rounded-full shadow-lg shadow-emerald-900/50 bg-emerald-600 text-white border-0 hover:bg-emerald-500 hover:-translate-y-0.5 transition-all group">
                Rejoins-nous 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Image composition simulating the screenshot */}
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto">
                <img 
                  src={heroImage} 
                  alt="Centre Culturel Ibn Badis" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Stats Badge */}
              <div className="absolute -bottom-10 -left-6 md:-left-12 bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-50 flex flex-col items-center gap-6 min-w-[140px] z-20">
                <div className="text-center">
                  <span className="block text-4xl font-display font-bold text-emerald-700 mb-1">1.1K</span>
                  <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">Bénéficiaires</span>
                </div>
                <div className="w-12 h-px bg-slate-200"></div>
                <div className="text-center">
                  <span className="block text-4xl font-display font-bold text-emerald-600 mb-1">5+</span>
                  <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">Services</span>
                </div>
              </div>

              {/* Decorative elements behind image */}
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-ccib-teal-light rounded-full -z-10 blur-2xl opacity-60"></div>
              
              {/* Overlay pattern for image area */}
              <div className="absolute -top-12 -left-12 z-0 opacity-80">
                 <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                      <pattern id="dotsPink" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                         <circle fill="var(--color-ccib-pink)" cx="3" cy="3" r="3"></circle>
                      </pattern>
                   </defs>
                   <rect x="0" y="0" width="120" height="120" fill="url(#dotsPink)"></rect>
                 </svg>
              </div>
              <div className="absolute -top-16 left-20 z-0">
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 15C10 -5 20 -5 27.5 15C35 35 45 35 52.5 15M2.5 25C10 5 20 5 27.5 25C35 45 45 45 52.5 25" stroke="var(--color-ccib-teal)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave bottom transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none">
          <svg className="block w-full h-[80px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C8.59,2.83,57.19,10,101.44,14.62,176.47,22.25,249.2,33.52,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-24 bg-[#F9FBF9] relative scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10 w-4/5 mx-auto lg:mx-0">
                <div className="rounded-[40px] overflow-hidden border-8 border-white shadow-xl relative aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Communauté qui se tient la main" className="w-full h-full object-cover" />
                </div>
                
                {/* Secondary overlapping image */}
                <div className="absolute -bottom-12 -right-8 md:-right-16 w-2/3 rounded-full overflow-hidden border-8 border-white shadow-2xl aspect-square">
                   <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Personne avec casque" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Decorative graphic circles */}
              <div className="absolute top-10 right-0 lg:-right-4 w-32 h-32 rounded-full border-[6px] border-ccib-pink z-20"></div>
              <div className="absolute top-24 right-4 lg:right-8 z-0">
                 <svg width="60" height="80" viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
                   <defs>
                      <pattern id="dotsTealAbout" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                         <circle fill="var(--color-ccib-teal)" cx="2" cy="2" r="2"></circle>
                      </pattern>
                   </defs>
                   <rect x="0" y="0" width="60" height="80" fill="url(#dotsTealAbout)"></rect>
                 </svg>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
              <span id="vision" className="scroll-mt-28"></span>
              <p className="uppercase text-[10px] font-bold tracking-widest text-emerald-700 mb-4">À Propos De Nous</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight text-slate-800 mb-8">
                Nous créons du lien <span className="text-emerald-700 font-bold">à travers la culture</span>, l'apprentissage et le vivre-ensemble.
              </h2>

              {/* Custom Tabs */}
              <div className="flex gap-6 border-b border-emerald-100 mb-8 overflow-x-auto no-scrollbar pb-2">
                <button 
                  onClick={() => setActiveTab('centre')}
                  className={`font-semibold pb-2 whitespace-nowrap transition-colors ${activeTab === 'centre' ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-slate-500 hover:text-emerald-700'}`}
                >
                  À propos du Centre
                </button>
                <button 
                  onClick={() => setActiveTab('mission')}
                  className={`font-semibold pb-2 whitespace-nowrap transition-colors ${activeTab === 'mission' ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-slate-500 hover:text-emerald-700'}`}
                >
                  Notre mission
                </button>
                <button 
                  onClick={() => setActiveTab('valeurs')}
                  className={`font-semibold pb-2 whitespace-nowrap transition-colors ${activeTab === 'valeurs' ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-slate-500 hover:text-emerald-700'}`}
                >
                  Nos valeurs
                </button>
              </div>

              <div className="prose prose-lg text-slate-600 mb-8 font-sans min-h-[120px]">
                {activeTab === 'centre' && (
                  <p>
                    Ouvert à tous, notre centre culturel est un espace vivant où petits et grands se retrouvent pour apprendre, 
                    créer, s'exprimer et tisser des liens. Cours de langues, ateliers créatifs, activités intergénérationnelles... 
                    Ici, on avance ensemble, dans la convivialité et la bienveillance.
                  </p>
                )}
                {activeTab === 'mission' && (
                  <p>
                    Créer un lieu ouvert à toutes et tous, où la culture, l'éducation et le lien social se rencontrent. Nous accompagnons chaque personne, quel que soit son âge ou son parcours, dans son envie d'apprendre, de s'exprimer, de découvrir et de grandir aux côtés des autres.
                  </p>
                )}
                {activeTab === 'valeurs' && (
                  <p>
                    Au cœur de nos actions : l'accueil, le respect, le partage et la diversité. Nous croyons en une culture accessible à tous, porteuse de lien social, de dialogue et d'ouverture. Chaque activité que nous proposons est pensée pour encourager l'inclusion, la solidarité et le vivre-ensemble.
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                     <span className="text-emerald-700 font-bold text-sm leading-none">✓</span>
                  </div>
                  Un centre à taille humaine, ancré dans son quartier
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                     <span className="text-emerald-700 font-bold text-sm leading-none">✓</span>
                  </div>
                  Des activités pour tous les âges, toute l'année
                </li>
              </ul>
              
              <Button variant="outline" className="rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">En savoir plus sur nous</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="uppercase text-[10px] font-bold tracking-widest text-emerald-700 mb-4">Notre Équipe</p>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-800 mb-6">Des personnes <span className="text-emerald-700 font-bold">engagées</span></h2>
            <p className="text-lg text-slate-600">
              Notre force réside dans une gouvernance moderne et une équipe où s'allient la sagesse de nos aînés et le dynamisme des jeunes. Des cadres formateurs professionnels et des bénévoles dévoués œuvrent au quotidien sur les différents axes de l'association.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F9FBF9] p-8 rounded-3xl border border-emerald-100 text-center flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all">
               <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-6">
                 <Users className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-800 mb-3">Gouvernance Moderne</h3>
               <p className="text-slate-600 text-sm leading-relaxed">
                 Un Bureau et un Conseil d'Administration (CA) très structurés, offrant une vision claire, une organisation solide et une gestion transparente du centre.
               </p>
            </div>
            
            <div className="bg-[#F9FBF9] p-8 rounded-3xl border border-emerald-100 text-center flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all">
               <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-6">
                 <GraduationCap className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-800 mb-3">Cadres Formateurs</h3>
               <p className="text-slate-600 text-sm leading-relaxed">
                 Des enseignants et de vrais professionnels très compétents pour assurer avec pédagogie et excellence l'apprentissage de tous.
               </p>
            </div>

            <div className="bg-[#F9FBF9] p-8 rounded-3xl border border-emerald-100 text-center flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all">
               <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-6">
                 <Heart className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-800 mb-3">Force Bénévole</h3>
               <p className="text-slate-600 text-sm leading-relaxed">
                 Le cœur de l'association : une belle alchimie entre l'expérience précieuse de nos anciens et la force de frappe ainsi que l'énergie des jeunes.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#F9FBF9]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-slate-800 mb-6">Nos Activités Principales</h2>
            <p className="text-lg text-slate-600">
              Le CCIB38 propose une variété d'activités pour enrichir les connaissances et accompagner la réussite de la communauté.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:border-emerald-300 transition-all duration-300 border border-emerald-100 group flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Les cours d'arabe</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                Des cours structurés pour comprendre et approfondir les fondements, l'éthique et la spiritualité, adaptés à différents niveaux.
              </p>
              <Link to="/cours" className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-2 group/link">
                Découvrir le programme
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:border-emerald-300 transition-all duration-300 border border-emerald-100 group flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Événements & Conférences</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                Rencontres, expositions et débats culturels ouverts à toute la communauté pour favoriser le dialogue et le partage.
              </p>
              <Link to="/evenements" className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-2 group/link">
                Voir l'agenda
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:border-emerald-300 transition-all duration-300 border border-emerald-100 group relative overflow-hidden flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform relative z-10">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 relative z-10">Soutien Scolaire</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 relative z-10">
                Accompagnement personnalisé pour les élèves du primaire au lycée. Aide aux devoirs, méthodologie et préparation aux examens.
              </p>
              <Link to="/soutien" className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-2 group/link relative z-10">
                S'inscrire
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-emerald-800">
        {/* Abstract background blobs for CTA */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" />
            <circle cx="20" cy="80" r="40" fill="white" />
            <circle cx="80" cy="20" r="30" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">Prêt à nous rejoindre ?</h2>
          <p className="text-ccib-teal-light text-lg mb-10 max-w-2xl mx-auto">
            Inscrivez-vous dès maintenant à nos cours ou participez à nos prochains événements. 
            Notre équipe est à votre disposition pour toute information.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="rounded-full bg-white text-emerald-800 hover:bg-emerald-50 min-w-[200px]">
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

import { Helmet } from 'react-helmet-async';
import { BookOpen, Calendar, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Activites() {
  const activitesPrincipales = [
    {
      title: "Préceptes de l'Islam",
      icon: <BookOpen className="w-10 h-10 text-emerald-700" />,
      description: "Des cours structurés pour comprendre et approfondir les fondements, l'éthique et la spiritualité, adaptés à différents niveaux.",
      link: "/cours",
      linkText: "Découvrir le programme",
      bgClass: "bg-emerald-50",
      borderClass: "border-emerald-100",
    },
    {
      title: "Événements & Conférences",
      icon: <Calendar className="w-10 h-10 text-emerald-700" />,
      description: "Rencontres, expositions et débats culturels ouverts à toute la communauté pour favoriser le dialogue et le partage.",
      link: "/conferences",
      linkText: "Voir l'agenda",
      bgClass: "bg-teal-50",
      borderClass: "border-teal-100",
    },
    {
      title: "Soutien Scolaire",
      icon: <GraduationCap className="w-10 h-10 text-emerald-700" />,
      description: "Accompagnement personnalisé pour les élèves du primaire au lycée. Aide aux devoirs, méthodologie et préparation aux examens.",
      link: "/soutien",
      linkText: "S'inscrire",
      bgClass: "bg-cyan-50",
      borderClass: "border-cyan-100",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FBF9]">
      <Helmet>
        <title>Activités & Services - CCIB38</title>
        <meta name="description" content="Découvrez les principales activités du Centre Culturel Ibn Badis : préceptes de l'islam, événements & conférences, et soutien scolaire." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shrink-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             <span className="inline-flex items-center justify-center px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 rounded text-xs font-bold uppercase tracking-widest mb-6">
                Nos Pôles
             </span>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
               <span className="font-bold text-emerald-100">Activités Principales</span> du Centre
             </h1>
             <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed font-sans max-w-2xl mx-auto">
               Un lieu de vie, d'éducation et de culture conçu pour rassembler, apprendre et s'épanouir ensemble.
             </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none">
          <svg className="block w-full h-[30px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C8.59,2.83,57.19,10,101.44,14.62,176.47,22.25,249.2,33.52,321.39,56.44Z" fill="#F9FBF9"></path>
          </svg>
        </div>
      </section>

      {/* Activités Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activitesPrincipales.map((act, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] border border-emerald-100/50 flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1 group">
                <div className={`w-20 h-20 rounded-2xl ${act.bgClass} border ${act.borderClass} flex items-center justify-center shrink-0 mb-8`}>
                  {act.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{act.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-1 mb-8">
                  {act.description}
                </p>
                <Link to={act.link} className="inline-flex items-center justify-center gap-2 font-medium text-emerald-700 hover:text-emerald-800 group-hover:gap-3 transition-all duration-300 w-full rounded-2xl bg-emerald-50/50 hover:bg-emerald-100 py-3 px-4">
                  {act.linkText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link to="/activites-secondaires" className="inline-flex items-center text-slate-500 hover:text-emerald-700 transition-colors font-medium border-b border-dashed border-slate-300 hover:border-emerald-400 pb-1">
               Voir aussi nos activités occasionnelles et ateliers
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

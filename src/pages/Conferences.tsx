import { Helmet } from 'react-helmet-async';
import { Calendar, MapPin, Mic, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { conferencesData } from '../data/conferences';

export default function Conferences() {
  return (
    <div className="min-h-screen bg-[#F9FBF9]">
      <Helmet>
        <title>Conférences - CCIB38</title>
        <meta name="description" content="Découvrez les conférences organisées par le Centre Culturel Ibn Badis. IA, astronomie, contrôle parental et bien d'autres thèmes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shrink-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             <span className="inline-flex items-center justify-center px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 rounded text-xs font-bold uppercase tracking-widest mb-6">
                Culture & Échanges
             </span>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
               <span className="font-bold text-emerald-100">Conférences</span> & Débats
             </h1>
             <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed font-sans max-w-2xl mx-auto">
               Des rencontres thématiques pour s'informer, comprendre notre monde et échanger dans la bienveillance.
             </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none">
          <svg className="block w-full h-[30px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C8.59,2.83,57.19,10,101.44,14.62,176.47,22.25,249.2,33.52,321.39,56.44Z" fill="#F9FBF9"></path>
          </svg>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="space-y-8">
              {conferencesData.sort((a, b) => a.status === 'à venir' ? -1 : 1).map((conf, index) => (
                <Link to={`/conferences/${conf.id}`} key={index} className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm border ${conf.status === 'à venir' ? 'border-emerald-300 ring-1 ring-emerald-50' : 'border-emerald-100 opacity-90'} flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden transition-all hover:shadow-md hover:border-emerald-300 group block`}>
                  
                  {conf.status === 'à venir' && (
                    <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl z-10">
                      Prochainement
                    </div>
                  )}

                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    {conf.icon}
                  </div>
                  
                  <div className="flex-1 w-full">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">{conf.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {conf.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 md:gap-8 text-sm pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span className="font-medium">{conf.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <Mic className="w-4 h-4 text-emerald-600" />
                        <span className="font-medium">Animé par : {conf.speaker}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                          <ArrowRight className="w-5 h-5 text-emerald-700" />
                      </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16 text-center bg-emerald-50/50 border border-emerald-100 rounded-2xl p-8">
               <h4 className="text-xl font-bold text-slate-800 mb-3">Restez à l'écoute !</h4>
               <p className="text-slate-600">
                 D'autres conférences passionnantes sont en cours de préparation. 
                 Consultez régulièrement cette page pour découvrir notre programmation complète.
               </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

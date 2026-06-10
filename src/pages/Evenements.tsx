import { Helmet } from 'react-helmet-async';
import { Calendar, Gift, MapPin, PartyPopper, Smile, Trophey } from 'lucide-react';

export default function Evenements() {
  const events = [
    {
      title: "Fête de fin d'année 2025/2026",
      date: "Dimanche 14 Juin 2026",
      location: "CCIB38",
      locationUrl: "https://maps.app.goo.gl/mpNQPVw6tzz8BRQb6",
      status: "à venir",
      access: "Ouvert au public",
      icon: <PartyPopper className="w-8 h-8 text-emerald-700" />,
      description: "Célébration festive de la clôture de notre année scolaire. Un moment inoubliable de joie, de récompenses et de partage pour clore l'année en beauté.",
      features: [
        "Structure gonflable & Toboggan",
        "Pêche aux canards (pour les plus petits)",
        "Grandes compétitions éducatives et ludiques",
        "Remise de cadeaux pour les gagnants",
        "Jeux en équipe et défis divers"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FBF9]">
      <Helmet>
        <title>Événements - CCIB38</title>
        <meta name="description" content="Découvrez nos événements, dont la grande fête de fin d'année remplie de jeux, toboggans, et compétitions !" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shrink-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             <span className="inline-flex items-center justify-center px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 rounded text-xs font-bold uppercase tracking-widest mb-6">
                Vie du Centre
             </span>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
               <span className="font-bold text-emerald-100">Événements</span> & Festivités
             </h1>
             <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed font-sans max-w-2xl mx-auto">
               Des moments de convivialité, de rencontre et de joie collective pour petits et grands.
             </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none">
          <svg className="block w-full h-[30px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C8.59,2.83,57.19,10,101.44,14.62,176.47,22.25,249.2,33.52,321.39,56.44Z" fill="#F9FBF9"></path>
          </svg>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-emerald-300 ring-1 ring-emerald-50 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden transition-all hover:shadow-md">
                
                {event.status === 'à venir' && (
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl z-10">
                    Grand Événement
                  </div>
                )}

                <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  {event.icon}
                </div>
                
                <div className="flex-1 w-full">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">{event.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                    {event.description}
                  </p>
                  
                  <div className="bg-[#F9FBF9] p-6 rounded-xl border border-emerald-100 mb-8">
                     <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                       <Gift className="w-5 h-5 text-emerald-600" />
                       Au programme :
                     </h4>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
                        {event.features.map((feature, idx) => (
                           <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold mt-0.5">•</span>
                              {feature}
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <span>Date : {event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                      <span>Lieu : </span>
                      {event.locationUrl ? (
                        <a href={event.locationUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 hover:underline">
                          {event.location || 'CCIB38'}
                        </a>
                      ) : (
                        <span>{event.location || 'CCIB38'}</span>
                      )}
                    </div>
                    {event.access && (
                      <div className="flex items-center gap-2">
                        <Smile className="w-5 h-5 text-emerald-600" />
                        <span>Accès : {event.access}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

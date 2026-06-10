import { Helmet } from 'react-helmet-async';
import { Camera, Code, Cpu, Mic, Puzzle } from 'lucide-react';

export default function Activites() {
  const activities = [
    {
      title: "Jeux d'échecs",
      icon: <Puzzle className="w-8 h-8 text-emerald-700" />,
      description: "Apprentissage et pratique des échecs pour développer la concentration, la stratégie et la logique de manière ludique."
    },
    {
      title: "Programmation Informatique",
      icon: <Code className="w-8 h-8 text-emerald-700" />,
      description: "Initiation aux bases du code et de la logique informatique. Création de petits jeux et applications pour comprendre le monde du numérique."
    },
    {
      title: "Public Speaking",
      icon: <Mic className="w-8 h-8 text-emerald-700" />,
      description: "Ateliers d'art oratoire pour apprendre à s'exprimer en public, vaincre la timidité et structurer son discours."
    },
    {
      title: "Photographie",
      icon: <Camera className="w-8 h-8 text-emerald-700" />,
      description: "Découverte des bases de la photographie, du cadrage et de la lumière pour capturer le monde avec un regard créatif."
    },
    {
      title: "Arduino & Robotique",
      icon: <Cpu className="w-8 h-8 text-emerald-700" />,
      description: "Ateliers de robotique et d'électronique avec des cartes Arduino pour concevoir et programmer de petits systèmes interactifs."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FBF9]">
      <Helmet>
        <title>Activités - CCIB38</title>
        <meta name="description" content="Découvrez nos activités secondaires et occasionnelles : Échecs, Programmation, Photographie, Robotique, etc." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shrink-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             <span className="inline-flex items-center justify-center px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 rounded text-xs font-bold uppercase tracking-widest mb-6">
                Découverte
             </span>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
               <span className="font-bold text-emerald-100">Activités</span> Secondaires
             </h1>
             <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed font-sans max-w-2xl mx-auto">
               Des ateliers enrichissants pour éveiller la curiosité et développer de nouvelles passions.
             </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none">
          <svg className="block w-full h-[30px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C8.59,2.83,57.19,10,101.44,14.62,176.47,22.25,249.2,33.52,321.39,56.44Z" fill="#F9FBF9"></path>
          </svg>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Des ateliers occasionnels</h2>
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 text-slate-700 leading-relaxed">
              Ces activités sont <strong>secondaires et occasionnelles</strong>. 
              Elles sont généralement programmées pendant l'année, notamment <strong>pendant les vacances scolaires</strong>, 
              sous forme de stages ou d'ateliers découverte.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 flex flex-col items-start hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mb-6">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{activity.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-slate-500 italic text-sm">
              *Les plannings d'ouverture de ces activités seront communiqués sur nos réseaux sociaux et par email à nos adhérents à l'approche des vacances scolaires.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

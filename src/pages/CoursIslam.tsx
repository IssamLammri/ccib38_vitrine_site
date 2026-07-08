import { Helmet } from 'react-helmet-async';
import { BookOpen, Calendar, Clock, Heart, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function CoursIslam() {
  return (
    <div className="overflow-hidden bg-[#F9FBF9] min-h-screen">
      <Helmet>
        <title>Les cours d'arabe - CCIB38</title>
        <meta name="description" content="Découvrez notre programme d'enseignement des cours d'arabe. Un accompagnement bienveillant pour la réussite de vos enfants." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shrink-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             <span className="inline-flex items-center justify-center px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 rounded text-xs font-bold uppercase tracking-widest mb-6">
                Programme Éducatif
             </span>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
               Les <span className="font-bold text-emerald-100">cours d'arabe</span>
             </h1>
             <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed font-sans max-w-2xl mx-auto">
               Un apprentissage complet pour comprendre sa religion, développer un bon comportement et s'épanouir dans la société.
             </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none">
          <svg className="block w-full h-[30px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C8.59,2.83,57.19,10,101.44,14.62,176.47,22.25,249.2,33.52,321.39,56.44Z" fill="#F9FBF9"></path>
          </svg>
        </div>
      </section>

      {/* Intro & Importance */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Pourquoi ce programme ?</h2>
               <div className="prose prose-lg text-slate-600 font-sans">
                 <p>
                   L'apprentissage de l'arabe ne se limite pas à la transmission de connaissances. Il s'agit de forger la personnalité de l'enfant autour de valeurs nobles telles que le respect, la bienveillance et l'honnêteté.
                 </p>
                 <p>
                   En combinant cet enseignement avec des <strong>cours de langue arabe</strong>, clés de la compréhension des textes, nous donnons à vos enfants les outils nécessaires pour comprendre leur foi avec intelligence et ouverture.
                 </p>
               </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 relative">
               <div className="absolute -top-6 -right-6 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shadow-sm">
                 <Star className="text-emerald-700 w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                 <Heart className="w-5 h-5 text-emerald-600" />
                 L'impact sur nos enfants
               </h3>
               <ul className="space-y-4 text-slate-600">
                 <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <p><strong>Un bon comportement :</strong> L'apprentissage de l'éthique musulmane (Al-Akhlaq) est essentiel pour interagir sainement avec sa famille et ses concitoyens.</p>
                 </li>
                 <li className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <p><strong>La réussite sociétale :</strong> Des enfants épanouis dans leur identité deviennent des adultes moteurs et positifs pour la société.</p>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organisation & Emploi du temps */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Organisation de l'année</h2>
            <p className="text-slate-600">
              Notre programme est structuré sur <strong>32 semaines</strong> d'apprentissage par an, garantissant un suivi régulier et qualitatif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center">
              <Calendar className="w-10 h-10 text-emerald-700 mb-4" />
              <h3 className="font-bold text-lg text-slate-800 mb-2">Durée du cursus</h3>
              <p className="text-slate-600 text-sm">32 semaines par année scolaire</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center">
              <Clock className="w-10 h-10 text-emerald-700 mb-4" />
              <h3 className="font-bold text-lg text-slate-800 mb-2">Volume horaire</h3>
              <p className="text-slate-600 text-sm">3 heures et 15 minutes par semaine</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
              <BookOpen className="w-10 h-10 text-emerald-700 mb-4" />
              <h3 className="font-bold text-lg text-slate-800 mb-2">Contenu</h3>
              <p className="text-slate-600 text-sm">Langue arabe, religion, comportement moral</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl p-8 shadow-sm border border-emerald-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Créneaux disponibles (au choix)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               <div className="flex items-center justify-center p-3 rounded-xl border border-emerald-100 bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                 <span className="font-medium text-slate-700 text-sm">Mercredi</span>
               </div>
               <div className="flex items-center justify-center p-3 rounded-xl border border-emerald-100 bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                 <span className="font-medium text-slate-700 text-sm">Samedi Matin</span>
               </div>
               <div className="flex items-center justify-center p-3 rounded-xl border border-emerald-100 bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                 <span className="font-medium text-slate-700 text-sm">Samedi Après-midi</span>
               </div>
               <div className="flex items-center justify-center p-3 rounded-xl border border-emerald-100 bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                 <span className="font-medium text-slate-700 text-sm">Dimanche Matin</span>
               </div>
               <div className="flex items-center justify-center p-3 rounded-xl border border-emerald-100 bg-emerald-50/50 hover:bg-emerald-50 transition-colors md:col-span-2">
                 <span className="font-medium text-slate-700 text-sm">Dimanche Après-midi</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs & Inscription */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Tarifs Annuels</h2>
            <p className="text-slate-600">
              Des tarifs dégressifs pour accompagner toutes les familles dans l'éducation de leurs enfants. 
              <br /><span className="text-sm text-slate-500 mt-2 block">Note : Des frais supplémentaires s'appliquent pour l'achat des livres (selon le niveau de l'élève).</span>
              <span className="text-xs font-semibold text-emerald-700 mt-2 block">*Frais d'inscription de 10€ à ajouter au tarif de base par enfant.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
            {/* Tarif 1 enfant */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100 relative flex flex-col">
               <h3 className="text-xl font-bold text-slate-800 mb-1">1 Enfant</h3>
               <div className="my-6">
                 <span className="text-4xl font-display font-bold text-emerald-700">230€</span>
                 <span className="text-slate-500 font-medium"> / an</span>
               </div>
               <ul className="space-y-3 text-slate-600 flex-1 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-emerald-500 font-bold">✓</span> 32 semaines
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-lg mt-4">
                    + 10€ d'inscription
                  </li>
               </ul>
            </div>

            {/* Tarif 2 enfants */}
            <div className="bg-gradient-to-b from-emerald-700 to-emerald-800 rounded-3xl p-8 shadow-xl shadow-emerald-900/20 text-white relative flex flex-col transform md:-translate-y-4">
               <h3 className="text-xl font-bold text-emerald-50 mb-1">2 Enfants</h3>
               <div className="my-6">
                 <span className="text-4xl font-display font-bold text-white">430€</span>
                 <span className="text-emerald-200 font-medium"> / an</span>
               </div>
               <ul className="space-y-3 text-emerald-50 flex-1 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-emerald-300 font-bold">✓</span> 32 semaines
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-emerald-900 bg-emerald-100/90 p-2 rounded-lg mt-4 shadow-inner">
                    + 10€ d'inscription / enfant
                  </li>
               </ul>
            </div>

            {/* Tarif 3 enfants */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100 relative flex flex-col">
               <h3 className="text-xl font-bold text-slate-800 mb-1">3 Enfants</h3>
               <div className="my-6">
                 <span className="text-4xl font-display font-bold text-emerald-700">600€</span>
                 <span className="text-slate-500 font-medium"> / an</span>
               </div>
               <ul className="space-y-3 text-slate-600 flex-1 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-emerald-500 font-bold">✓</span> 32 semaines
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-lg mt-4">
                    + 10€ d'inscription / enfant
                  </li>
               </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
            {/* Tarif 4 enfants */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100 relative flex flex-col">
               <h3 className="text-xl font-bold text-slate-800 mb-1">4 Enfants</h3>
               <div className="my-6">
                 <span className="text-4xl font-display font-bold text-emerald-700">740€</span>
                 <span className="text-slate-500 font-medium"> / an</span>
               </div>
               <ul className="space-y-3 text-slate-600 flex-1 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-emerald-500 font-bold">✓</span> 32 semaines
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-lg mt-4">
                    + 10€ d'inscription / enfant
                  </li>
               </ul>
            </div>

            {/* Tarif 5 enfants et + */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100 relative flex flex-col">
               <h3 className="text-xl font-bold text-slate-800 mb-1">5 Enfants et +</h3>
               <div className="my-6">
                 <span className="text-4xl font-display font-bold text-emerald-700">170€</span>
                 <span className="text-slate-500 font-medium text-sm"> / enfant / an</span>
               </div>
               <ul className="space-y-3 text-slate-600 flex-1 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-emerald-500 font-bold">✓</span> 32 semaines
                  </li>
                  <li className="flex items-center gap-2 text-sm font-semibold text-emerald-800 bg-emerald-50 p-2 rounded-lg mt-4">
                    + 10€ d'inscription / enfant
                  </li>
               </ul>
            </div>
          </div>

          <div className="text-center">
             <a href="https://portail.ccib38.fr/inscription" target="_blank" rel="noopener noreferrer">
               <Button size="lg" className="rounded-full shadow-lg shadow-emerald-700/20 bg-emerald-600 text-white hover:bg-emerald-500 transition-all text-base md:text-lg px-8 py-6 h-auto">
                 S'inscrire pour l'année 2026/2027
               </Button>
             </a>
          </div>
        </div>
      </section>

    </div>
  );
}

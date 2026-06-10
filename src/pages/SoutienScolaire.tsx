import { Helmet } from 'react-helmet-async';
import { BookOpen, Calculator, FlaskConical, Globe, GraduationCap, Languages, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function SoutienScolaire() {
  return (
    <div className="min-h-screen bg-[#F9FBF9]">
      <Helmet>
        <title>Soutien Scolaire - CCIB38</title>
        <meta name="description" content="Soutien scolaire pour tous les niveaux. Professeurs ingénieurs et compétents. Tarifs accessibles pour aider nos enfants à réussir." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white shrink-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             <span className="inline-flex items-center justify-center px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 rounded text-xs font-bold uppercase tracking-widest mb-6">
                Accompagnement
             </span>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
               <span className="font-bold text-emerald-100">Soutien Scolaire</span> & Réussite
             </h1>
             <p className="text-lg md:text-xl text-emerald-100/90 leading-relaxed font-sans max-w-2xl mx-auto">
               Un accompagnement bienveillant et structuré pour aider les enfants de nos parents à exceller dans leur parcours scolaire.
             </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none">
          <svg className="block w-full h-[30px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C8.59,2.83,57.19,10,101.44,14.62,176.47,22.25,249.2,33.52,321.39,56.44Z" fill="#F9FBF9"></path>
          </svg>
        </div>
      </section>

      {/* Importance & Méthodologie */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
               <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">L'importance du soutien scolaire</h2>
               <div className="prose prose-lg text-slate-600 font-sans">
                 <p>
                   Le parcours scolaire est parfois parsemé de défis. Le soutien scolaire joue un rôle crucial dans la vie de l'enfant : il permet de restaurer la confiance en soi, de combler les lacunes et de consolider les acquis.
                 </p>
                 <p>
                   Notre objectif est d'aider les parents en offrant à leurs enfants un encadrement de qualité. Nous ne donnons pas seulement des cours, nous transmettons une <strong>méthodologie de travail</strong> indispensable pour les études supérieures et la vie professionnelle.
                 </p>
               </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 flex flex-col gap-6">
               <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                     <Users className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-slate-800 mb-2">Des professeurs compétents</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">
                       Notre équipe est composée d'ingénieurs et de professionnels qualifiés, dotés d'une forte pédagogie et d'une passion pour la transmission du savoir.
                     </p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                     <TrendingUp className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                     <h3 className="text-lg font-bold text-slate-800 mb-2">Une vraie méthodologie</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">
                       Apprendre à s'organiser, comprendre ses erreurs et structurer son raisonnement. Nos professeurs enseignent <em>comment</em> apprendre.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Niveaux et Matières */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Niveaux et Matières</h2>
            <p className="text-slate-600">
              Un accompagnement sur-mesure pour tous les âges de la scolarité.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
             <span className="px-5 py-2 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-100 shadow-sm">École Primaire</span>
             <span className="px-5 py-2 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-100 shadow-sm">Collège</span>
             <span className="px-5 py-2 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-100 shadow-sm">Lycée</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
             <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
               <Calculator className="w-8 h-8 text-emerald-600 mb-3" />
               <h3 className="font-bold text-slate-800">Mathématiques</h3>
             </div>
             <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
               <BookOpen className="w-8 h-8 text-emerald-600 mb-3" />
               <h3 className="font-bold text-slate-800">Français</h3>
             </div>
             <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
               <FlaskConical className="w-8 h-8 text-emerald-600 mb-3" />
               <h3 className="font-bold text-slate-800">Physique-Chimie</h3>
             </div>
             <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
               <Globe className="w-8 h-8 text-emerald-600 mb-3" />
               <h3 className="font-bold text-slate-800">SVT</h3>
             </div>
             <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center hover:border-emerald-300 transition-colors">
               <Languages className="w-8 h-8 text-emerald-600 mb-3" />
               <h3 className="font-bold text-slate-800">Anglais</h3>
             </div>
          </div>
          <p className="text-center text-sm font-medium text-slate-500 mt-6 italic">
            *D'autres matières peuvent être dispensées sur demande.
          </p>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Des tarifs raisonnables</h2>
            <p className="text-slate-600 leading-relaxed">
              Nous avons à cœur de proposer des tarifs accessibles. L'engagement s'effectue <strong>à l'année</strong>. Pour faciliter le règlement, nous offrons la possibilité d'<strong>échelonner le paiement par chèque</strong> (jusqu'à 10 fois maximum). 
              Le tarif mensuel indiqué est lissé sur l'année, sans lien direct avec le nombre exact de semaines ou de séances par mois.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Tarif Standard */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100 relative flex flex-col">
               <h3 className="text-xl font-bold text-slate-800 mb-1">Tarif Unique</h3>
               <p className="text-xs text-slate-500 mb-4">Pour 1 enfant et 1 matière</p>
               <div className="my-4">
                 <span className="text-4xl font-display font-bold text-emerald-700">30€</span>
                 <span className="text-slate-500 font-medium"> / mois</span>
               </div>
               <p className="text-slate-600 text-sm font-medium mt-auto border-t border-emerald-50 pt-4">
                 Tarif fixe par mois calendaire pour 1 matière.
               </p>
            </div>

            {/* Tarif Réduit */}
            <div className="bg-gradient-to-b from-emerald-700 to-emerald-800 rounded-3xl p-8 shadow-xl shadow-emerald-900/20 text-white relative flex flex-col">
               <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-yellow-400 text-yellow-950 font-bold px-4 py-1 rounded-full text-xs tracking-wider uppercase shadow-md">
                 Tarif Réduit
               </div>
               <h3 className="text-xl font-bold text-emerald-50 mb-1">Pack Famille / Multi-matières</h3>
               <p className="text-xs text-emerald-200 mb-4">À partir de 3 enfants inscrits <strong className="text-white">OU</strong> 2 matières ou plus pour 1 enfant</p>
               <div className="my-4">
                 <span className="text-4xl font-display font-bold text-white">25€</span>
                 <span className="text-emerald-200 font-medium"> / mois / mat. / enf.</span>
               </div>
               <p className="text-emerald-100 text-sm font-medium mt-auto border-t border-emerald-600 pt-4">
                 Réduction appliquée pour récompenser votre fidélité et alléger les charges familiales.
               </p>
            </div>

          </div>

          <div className="text-center mt-12">
             <a href="/contact">
               <Button size="lg" className="rounded-full shadow-lg shadow-emerald-700/20 bg-emerald-600 text-white hover:bg-emerald-500 transition-all text-base md:text-lg px-8 py-6 h-auto">
                 Nous contacter pour s'inscrire
               </Button>
             </a>
          </div>
        </div>
      </section>

    </div>
  );
}

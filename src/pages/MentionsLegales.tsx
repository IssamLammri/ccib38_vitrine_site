import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#F9FBF9] pb-24">
      <Helmet>
        <title>Mentions Légales - CCIB38</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white shrink-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             <h1 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-6">
               <span className="font-bold text-white">Mentions</span> Légales
             </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-16 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-slate-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8 first:mt-0">1. Éditeur des sites</h2>
          <p className="mb-4">
            L'ensemble des sites internet rattachés au domaine <strong>ccib38.fr</strong> sont édités par le Centre Culturel Ibn Badis (CCIB38), association à but non lucratif.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Adresse :</strong> 18 Rue des Trembles, 38100 Grenoble</li>
            <li><strong>Téléphone :</strong> 04 58 00 89 73</li>
            <li><strong>Email :</strong> contact@ccib38.fr</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">2. Directeur de la publication</h2>
          <p className="mb-6">Le directeur de la publication est le secrétaire de l'association CCIB38.</p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">3. Hébergement</h2>
          <p className="mb-4">
            Ces sites sont hébergés par la société <strong>OVH SAS</strong>.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Siège social :</strong> 2 rue Kellermann - 59100 Roubaix - France</li>
            <li><strong>Téléphone :</strong> 1007</li>
            <li><strong>Site web :</strong> www.ovh.com</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">4. Propriété intellectuelle</h2>
          <p className="mb-6">
            L'ensemble de ces sites relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">5. Données personnelles</h2>
          <p className="mb-6">
            Le CCIB38 s'engage à ce que la collecte et le traitement de vos données, effectués à partir des sites du domaine ccib38.fr, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés. Pour plus d'informations, veuillez consulter notre <Link to="/politique-confidentialite" className="text-emerald-600 hover:underline font-medium">Politique de confidentialité</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

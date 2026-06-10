import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#F9FBF9] pb-24">
      <Helmet>
        <title>Politique de Confidentialité - CCIB38</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white shrink-0">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
             <h1 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-6">
               <span className="font-bold text-white">Politique</span> de Confidentialité
             </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-16 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-slate-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8 first:mt-0">1. Introduction</h2>
          <p className="mb-6">
            Le Centre Culturel Ibn Badis (CCIB38) accorde une grande importance à la protection de vos données personnelles et au respect de votre vie privée. La présente politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos données dans le cadre du respect du Règlement Général sur la Protection des Données (RGPD).
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">2. Données collectées</h2>
          <p className="mb-6">
            Nous collectons les données personnelles que vous nous fournissez volontairement lors de l'utilisation de notre formulaire de contact ou lors de votre inscription à nos activités (nom, prénom, e-mail, téléphone, etc.).
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">3. Utilisation des données</h2>
          <p className="mb-4">
            Vos données personnelles sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Répondre à vos demandes d'informations (formulaire de contact).</li>
            <li>Gérer votre inscription à nos activités (soutien scolaire, cours, événements).</li>
            <li>Vous informer de nos actualités si vous y avez consenti.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">4. Conservation des données</h2>
          <p className="mb-6">
            Les données personnelles sont conservées pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, dans la limite des obligations légales de conservation.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">5. Partage des données</h2>
          <p className="mb-6">
            Le CCIB38 s'engage à ne jamais vendre, louer ou céder vos données à des tiers. Les données peuvent être traitées par nos prestataires techniques (comme notre hébergeur OVH) dans le strict cadre du fonctionnement du site.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">6. Vos droits (RGPD)</h2>
          <p className="mb-4">
            Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez des droits suivants sur vos données :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Droit d'accès, de rectification et d'effacement.</li>
            <li>Droit à la limitation et à l'opposition du traitement.</li>
            <li>Droit à la portabilité de vos données.</li>
          </ul>
          <p className="mb-6">
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>contact@ccib38.fr</strong> ou par courrier au 18 Rue des Trembles, 38100 Grenoble.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">7. Sécurité</h2>
          <p className="mb-6">
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité de vos données personnelles contre tout accès, altération ou destruction non autorisés.
          </p>
        </div>
      </div>
    </div>
  );
}

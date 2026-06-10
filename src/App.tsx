import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CoursIslam from './pages/CoursIslam';
import Conferences from './pages/Conferences';
import ConferenceDetail from './pages/ConferenceDetail';
import SoutienScolaire from './pages/SoutienScolaire';
import Activites from './pages/Activites';
import ActivitesSecondaires from './pages/ActivitesSecondaires';
import Evenements from './pages/Evenements';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center px-4">
      <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Page en construction</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        Cette section du site web est actuellement en cours de développement. Revenez bientôt !
      </p>
      <a href="/" className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-ccib-teal text-white hover:bg-teal-600 shadow-sm h-10 px-4 py-2">
        Retour à l'accueil
      </a>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cours" element={<CoursIslam />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/conferences/:id" element={<ConferenceDetail />} />
            <Route path="/soutien" element={<SoutienScolaire />} />
            <Route path="/activites" element={<Activites />} />
            <Route path="/activites-secondaires" element={<ActivitesSecondaires />} />
            <Route path="/evenements" element={<Evenements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

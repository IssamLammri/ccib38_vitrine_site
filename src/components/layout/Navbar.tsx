import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState, useRef, useEffect } from 'react';

const searchIndex = [
  { id: 1, title: 'Accueil', path: '/', type: 'Page', keywords: 'bienvenue, centre, mission, objectifs, actualités' },
  { id: 2, title: 'À propos de nous', path: '/#a-propos', type: 'Section', keywords: 'histoire, culture, islam, grenoble, ibn badis, lien' },
  { id: 3, title: 'Notre vision / mission', path: '/#vision', type: 'Section', keywords: 'valeurs, objectifs, spiritualité, apprentissage, vivre-ensemble' },
  { id: 4, title: 'Notre équipe', path: '/#equipe', type: 'Section', keywords: 'membres, bénévoles, bureau, ca, administration, formateurs, jeunes, anciens, gouvernance' },
  { id: 5, title: 'Activités principales', path: '/activites', type: 'Page', keywords: 'pôles, services, cours, enseignement, éducation' },
  { id: 6, title: 'Activités occasionnelles', path: '/activites-secondaires', type: 'Page', keywords: 'sorties, goûter, ateliers, enfants, loisirs' },
  { id: 7, title: 'Événements', path: '/evenements', type: 'Page', keywords: 'fêtes, rencontres, célébrations, agenda' },
  { id: 8, title: "Fête de fin d'année 2025/2026", path: '/evenements', type: 'Événement', keywords: 'clôture, juin, 14 juin, ccib38, récompenses, ouvert au public' },
  { id: 9, title: 'Conférences', path: '/conferences', type: 'Page', keywords: 'débats, spiritualité, religion, science, éducation' },
  { id: 10, title: 'Le rôle de la famille en Islam', path: '/conferences/1', type: 'Conférence', keywords: 'famille, éducation, parents, enfants' },
  { id: 11, title: 'La spiritualité au quotidien', path: '/conferences/2', type: 'Conférence', keywords: 'foi, foi au quotidien, pratique' },
  { id: 12, title: 'Nous contacter', path: '/contact', type: 'Page', keywords: 'téléphone, adresse, email, message, formulaire, où nous trouver' },
  { id: 13, title: 'Les cours d\'arabe', path: '/cours', type: 'Service', keywords: 'école, apprentissage, religion, coran, langue arabe' },
  { id: 14, title: 'Soutien scolaire', path: '/soutien', type: 'Service', keywords: 'école, aide aux devoirs, méthodologie, rattrapage, mathématiques, français' },
  { id: 15, title: 'Contrôle parental et outils informatiques', path: '/conferences', type: 'Atelier', keywords: 'écrans, applications, enfants, technologie, ia' },
  { id: 16, title: "L'impact de l'IA sur notre quotidien", path: '/conferences', type: 'Conférence', keywords: 'technologie, intelligence artificielle, éthique' },
  { id: 17, title: "L'Astronomie et l'Univers", path: '/conferences', type: 'Conférence', keywords: 'stars, science, univers, étoiles, espace' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Activités', path: '/activites' },
    { name: 'Événements', path: '/evenements' },
    { name: 'Conférences', path: '/conferences' },
  ];

  const searchResults = searchIndex.filter(item => {
    const term = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) || 
      item.type.toLowerCase().includes(term) ||
      (item.keywords && item.keywords.toLowerCase().includes(term))
    );
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleResultClick = (path: string) => {
    setSearchTerm('');
    setIsSearchOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-emerald-100 shadow-sm shrink-0">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Logo area */}
        <Link to="/" className="flex items-center gap-2">
          {/* Faking the logo as an SVG/text for now */}
              <div className="flex flex-col items-center justify-center gap-1 flex-row">
                <img src="/logoccib38.jpg" alt="Logo CCIB38" className="w-10 h-10 object-contain rounded-lg" />
                <div className="flex flex-col justify-center leading-tight">
                  <span className="font-bold text-xl tracking-tight text-emerald-900">CCIB38</span>
                  <p className="text-[10px] tracking-widest text-emerald-600 uppercase font-semibold">
                    Centre Culturel Ibn Badis
                  </p>
                </div>
              </div>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = link.path === '/'
              ? location.pathname === '/'
              : location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);
            
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "transition-colors hover:text-emerald-700",
                  isActive ? "text-emerald-700 font-semibold" : ""
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        {/* Search / Action */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center" ref={searchRef}>
            <input 
              type="text" 
              placeholder="Rechercher..." 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="pl-5 pr-10 py-2.5 bg-gray-50/50 border border-gray-100 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 w-80 lg:w-96 transition-all"
            />
            <Search className="absolute right-4 text-gray-400 w-4 h-4 cursor-pointer hover:text-emerald-600 transition-colors" />
            
            {/* Search Results Dropdown */}
            {isSearchOpen && searchTerm.length > 0 && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden z-50 max-h-80 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <ul className="py-2">
                    {searchResults.map((result) => (
                      <li key={result.id}>
                        <button
                          onClick={() => handleResultClick(result.path)}
                          className="w-full text-left px-4 py-2 hover:bg-emerald-50 focus:bg-emerald-50 transition-colors focus:outline-none flex flex-col"
                        >
                          <span className="text-sm font-medium text-slate-800">{result.title}</span>
                          <span className="text-xs text-slate-500">{result.type}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-slate-500">
                    Aucun résultat trouvé pour "{searchTerm}"
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Mobile Menu Button could go here */}
        </div>
      </div>
    </header>
  );
}

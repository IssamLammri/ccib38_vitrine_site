import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-100 shrink-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex flex-col items-start justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <img src="/logoccib38.jpg" alt="Logo CCIB38" className="w-12 h-12 object-contain rounded-lg" />
                  <div>
                    <span className="font-bold text-xl tracking-tight text-emerald-900 block">CCIB38</span>
                    <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-semibold leading-tight">Centre Culturel<br/>Ibn Badis</p>
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Espace de vie, d'apprentissage et de partage à Grenoble. Cours, événements et soutien scolaire pour tous.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-800">Le Centre</h4>
            <ul className="space-y-3">
              <li><Link to="/#a-propos" className="text-slate-500 hover:text-emerald-700 transition-colors text-sm">À propos de nous</Link></li>
              <li><Link to="/#vision" className="text-slate-500 hover:text-emerald-700 transition-colors text-sm">Notre vision</Link></li>
              <li><Link to="/#equipe" className="text-slate-500 hover:text-emerald-700 transition-colors text-sm">Notre équipe</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-emerald-700 transition-colors text-sm">Nous contacter</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-800">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/cours" className="text-slate-500 hover:text-emerald-700 transition-colors text-sm">Les cours d'arabe</Link></li>
              <li><Link to="/soutien" className="text-slate-500 hover:text-emerald-700 transition-colors text-sm">Soutien scolaire</Link></li>
              <li><Link to="/conferences" className="text-slate-500 hover:text-emerald-700 transition-colors text-sm">Conférences</Link></li>
              <li><Link to="/evenements" className="text-slate-500 hover:text-emerald-700 transition-colors text-sm">Événements</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-slate-800">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-slate-500 text-sm">18 Rue des Trembles, 38100 Grenoble</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="text-slate-500 text-sm">04 58 00 89 73</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="text-slate-500 text-sm">contact@ccib38.fr</span>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-slate-500 text-sm leading-relaxed">
                  <p className="font-semibold text-slate-700 mb-1">Horaires d'ouverture</p>
                  Mercredi : 14h - 18h<br/>
                  Samedi / Dimanche : 9h - 12h15 | 14h - 17h15<br/>
                  <span className="text-[10px] italic">Semaine : selon soutien scolaire</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CCIB38 - Association loi 1901. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link to="/mentions-legales" className="hover:text-gray-600 transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-gray-600 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Mic, Sparkles, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { conferencesData } from '../data/conferences';

export default function ConferenceDetail() {
  const { id } = useParams();
  const conference = conferencesData.find(c => c.id === id);

  if (!conference) {
    return (
      <div className="min-h-screen bg-[#F9FBF9] flex flex-col items-center justify-center p-4">
        <Helmet>
          <title>Conférence introuvable - CCIB38</title>
        </Helmet>
        <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Conférence introuvable</h2>
        <p className="text-slate-600 mb-8">La conférence que vous recherchez n'existe pas ou a été supprimée.</p>
        <Link to="/conferences">
          <Button className="rounded-full shadow-sm bg-emerald-600 text-white hover:bg-emerald-500">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux conférences
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{conference.title} - CCIB38</title>
        <meta name="description" content={conference.summary} />
      </Helmet>

      {/* Hero Image Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px] w-full bg-slate-900 border-b-4 border-emerald-600 shadow-sm">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={conference.image} 
            alt={conference.title} 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 container mx-auto">
          <Link to="/conferences" className="inline-flex items-center text-emerald-300 hover:text-emerald-100 transition-colors text-sm font-medium mb-6 bg-slate-900/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-emerald-500/30">
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Retour à l'agenda
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
             {conference.status === 'à venir' ? (
               <span className="bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded shadow-sm">
                 Prochainement
               </span>
             ) : (
               <span className="bg-slate-700/80 backdrop-blur text-slate-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                 Événement Passé
               </span>
             )}
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight max-w-4xl shadow-sm drop-shadow-lg">
            {conference.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
             
             {/* Left Column: Metadata */}
             <div className="w-full md:w-1/3 shrink-0 order-2 md:order-1">
                <div className="bg-[#F9FBF9] p-6 rounded-2xl border border-emerald-100 shadow-sm sticky top-28">
                   <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-emerald-100 pb-4">Détails de l'événement</h3>
                   
                   <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                           <Mic className="w-5 h-5 text-emerald-700" />
                        </div>
                        <div>
                           <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Intervenant</p>
                           <p className="font-semibold text-slate-800">{conference.speaker}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                           <Calendar className="w-5 h-5 text-emerald-700" />
                        </div>
                        <div>
                           <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">Date</p>
                           <p className="font-medium text-slate-800">{conference.date}</p>
                        </div>
                      </div>
                   </div>

                   {conference.status === 'à venir' && (
                     <div className="mt-8 pt-6 border-t border-emerald-100">
                        <Button className="w-full rounded-xl shadow-lg shadow-emerald-700/20 bg-emerald-600 text-white hover:bg-emerald-500 py-6">
                          S'inscrire (gratuit)
                        </Button>
                     </div>
                   )}
                </div>
             </div>

             {/* Right Column: Article */}
             <div className="w-full md:w-2/3 order-1 md:order-2">
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 pb-10 border-b border-slate-100 italic">
                  "{conference.summary}"
                </p>

                <div className="prose prose-lg prose-emerald font-sans text-slate-600 max-w-none">
                  {/* Using custom rendering for markdown-like text to keep it simple */}
                  {conference.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**')) {
                       // Handle bold paragraphs
                       return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
                    }
                    if (paragraph.startsWith('* ')) {
                      // Handle quick list mapping
                      const items = paragraph.split('\n').filter(i => i.trim().startsWith('* '));
                      return (
                        <ul key={index} className="space-y-3 my-6">
                          {items.map((item, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="text-emerald-500 font-bold mt-1 shrink-0">•</span>
                              <span dangerouslySetInnerHTML={{ __html: item.replace('* ', '').replace(/\*\*(.*?)\*\*/g, '<strong className="text-slate-800">$1</strong>') }} />
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={index} className="mb-4">{paragraph}</p>;
                  })}
                </div>
             </div>

          </div>
        </div>
      </section>

    </div>
  );
}

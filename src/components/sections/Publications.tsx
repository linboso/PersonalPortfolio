
import { BookOpen } from 'lucide-react';

interface Publication {
  title: string;
  journal: string;
  description: string;
  location: string;
}

interface PublicationsProps {
  publications: Publication[];
}

export default function Publications({ publications }: PublicationsProps) {
  return (
    <section>
      <div className="flex items-center gap-2 text-purple-400 mb-8 border-b border-purple-900/50 pb-2">
        <BookOpen size={16} />
        <span className="text-sm tracking-widest uppercase font-bold">Research</span>
      </div>
      
      <ul className="space-y-6 border-l border-purple-900/50 ml-3">
        {publications.map((pub, idx) => (
          <li key={idx} className="relative group">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-neutral-900 border border-purple-500 rounded-full group-hover:bg-green-500 group-hover:border-green-400 transition-colors"></div>
            <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">{pub.title}</h4>
            <p className="text-sm text-neutral-400 mt-1 italic">"{pub.journal}"</p>
            <p className="text-xs text-neutral-500 mt-1">{pub.description} • {pub.location}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}


import { BookOpen } from 'lucide-react';
import type { Publication } from '../../types';

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
      <ul className="space-y-6 border-l border-purple-900/50 pl-6">
        {publications.map((pub, idx) => (
          <li key={idx} className="relative group">
            <div className="absolute -left-[29px] top-1 w-3 h-3 bg-neutral-900 rounded-full border border-purple-600 group-hover:bg-green-500 group-hover:border-green-400 transition-colors"></div>
            <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">{pub.title}</h4>
            <p className="text-sm text-neutral-400 mt-1 italic">"{pub.journal}"</p>
            <p className="text-xs text-neutral-500 mt-1">{pub.description} • {pub.location}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

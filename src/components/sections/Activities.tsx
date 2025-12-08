
import { Calendar } from 'lucide-react';
import { Badge } from '../ui/badge';
import type { Activity } from '../../types';

interface ActivitiesProps {
  activities: Activity[];
}

export default function Activities({ activities }: ActivitiesProps) {
  return (
    <section>
      <div className="flex items-center gap-2 text-purple-400 mb-8 border-b border-purple-900/50 pb-2">
        <Calendar size={16} />
        <span className="text-sm tracking-widest uppercase font-bold">Activities</span>
      </div>
      <div className="space-y-6 relative border-l border-purple-900/30 ml-3">
        {activities.map((act, idx) => (
          <div key={idx} className="relative pl-8 group">
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-neutral-900 border border-purple-500 rounded-full group-hover:bg-green-500 group-hover:border-green-400 transition-colors"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
              <h4 className="text-white font-bold group-hover:text-green-300 transition-colors">{act.title}</h4>
              <span className="text-xs text-orange-500 font-mono">{act.date}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-purple-300 mb-2">
              <Badge variant="secondary" className="px-1.5 py-0.5 rounded border-purple-900/50">
                {act.role}
              </Badge>
              <span>•</span>
              <span>{act.location}</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">{act.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

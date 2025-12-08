
import { Code } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import type { Experiment } from '../../types';

interface ExperimentsProps {
  experiments: Experiment[];
}

export default function Experiments({ experiments }: ExperimentsProps) {
  return (
    <section>
      <div className="flex items-center gap-2 text-purple-400 mb-8 border-b border-purple-900/50 pb-2">
        <Code size={16} />
        <span className="text-sm tracking-widest uppercase font-bold">The Playground</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiments.map((exp, idx) => (
          <Card
            key={idx}
            className="bg-neutral-900/60 hover:bg-purple-900/20 hover:border-green-500/30 transition-all cursor-pointer backdrop-blur-sm group"
          >
            <CardContent className="flex items-start gap-4 p-4">
              <div className="p-2 bg-neutral-950 text-purple-500 group-hover:text-green-400 transition-colors rounded border border-purple-900/50">
                {exp.icon}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm group-hover:text-green-300 transition-colors">
                  {exp.title}
                </h4>
                <p className="text-neutral-500 text-xs mt-1">{exp.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card className="border-dashed border-neutral-800 bg-transparent hover:border-green-500/50 hover:bg-green-900/5 transition-all cursor-pointer flex items-center justify-center">
          <CardContent className="p-4 text-neutral-600 text.sm font-mono hover:text-green-400">
            + View Github Archive
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

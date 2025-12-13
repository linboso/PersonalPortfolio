
import { Terminal } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export default function Statement() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 text-purple-400 mb-4 border-b border-purple-900/50 pb-2">
        <Terminal size={16} />
        <span className="text-sm tracking-widest uppercase font-bold">About Me</span>
      </div>
      <Card className="bg-transparent border-0 shadow-none backdrop-blur-none">
        <CardContent className="p-0">
          <p className="text-xl md:text-md leading-relaxed text-neutral-300 font-light backdrop-blur-sm">
            I am from Taiwan with a background in Information and Finance Management. Over the past two years, 
            I have focused on data-driven approaches to understanding and shaping cities, 
            combining <span className="text-white font-medium border-b-2 border-green-500">spatial analysis, quantitative modelling, and AI.</span>
          </p>
                  
          <p className="text-neutral-400 mt-4">
            My interdisciplinary work connects computational infrastructure with complex urban dynamics to 
            support government and industry decision-making and innovation.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

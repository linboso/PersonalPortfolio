
import { Terminal } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export default function Statement() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 text-purple-400 mb-4 border-b border-purple-900/50 pb-2">
        <Terminal size={16} />
        <span className="text-sm tracking-widest uppercase font-bold">Statement</span>
      </div>
      <Card className="bg-transparent border-0 shadow-none backdrop-blur-none">
        <CardContent className="p-0">
          <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 font-light backdrop-blur-sm">
            I view the world through layers of <span className="text-white font-medium border-b-2 border-green-500">spatial data</span>.
            My work explores how Geographic Information Systems (GIS) can transcend pure analysis to become a medium for
            storytelling and urban empathy.
          </p>
          <p className="text-neutral-400 mt-4">
            Currently focusing on Urban Informatics and Interactive Cartography. Seeking to join the [Specific Group
            Name] group at MIT Media Lab.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

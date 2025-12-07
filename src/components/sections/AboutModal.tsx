
import { FileText, User, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

interface AboutModalProps {
  showAbout: boolean;
  onClose: () => void;
}

export default function AboutModal({ showAbout, onClose }: AboutModalProps) {
  if (!showAbout) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <Card className="w-full max-w-2xl border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.2)] overflow-hidden flex flex-col md:flex-row bg-neutral-900">
        <div className="w-full md:w-1/3 bg-purple-900/10 border-r border-purple-500/30 p-6 flex flex-col items-center justify-center relative">
          <div className="absolute top-2 left-2 text-[10px] text-orange-500 font-mono tracking-widest">
            PERSONNEL_FILE: 01
          </div>
          <div className="w-32 h-32 bg-neutral-800 border-2 border-green-400 rounded-sm mb-4 flex items-center justify-center overflow-hidden grayscale contrast-125">
            <User size={48} className="text-neutral-600" />
          </div>
          <h3 className="text-white font-bold text-lg text-center">YOUR NAME</h3>
          <Badge variant="secondary" className="mt-2 font-mono">
            ACCESS GRANTED
          </Badge>
        </div>

        <div className="w-full md:w-2/3 p-8 relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-2 right-2 hover:bg-red-900/20 hover:text-red-400"
          >
            <X size={20} />
          </Button>

          <div className="space-y-6">
            <div>
              <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 pb-1">
                Biographical Data
              </h4>
              <Separator className="mb-2 bg-purple-900/50" />
              <p className="text-neutral-300 text-sm leading-relaxed">
                I am a [Background, e.g., Geographer turned Developer] obsessed with the hidden layers of our cities. My
                journey began with [Origin Story], leading me to explore how code can reveal the invisible narratives of
                urban life. I am specifically interested in [Specific Interest] and aim to contribute to the [Target Lab
                Group] at MIT.
              </p>
            </div>

            <div>
              <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 pb-1">
                Core Competencies
              </h4>
              <Separator className="mb-2 bg-purple-900/50" />
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {['Spatial Analysis', 'React/Three.js', 'Python', 'Rapid Prototyping', 'Urban Sensing'].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button variant="eva" className="w-full md:w-auto gap-2">
                <FileText size={16} /> DOWNLOAD C.V.
              </Button>
              <p className="text-[10px] text-neutral-500 mt-2 text-center md:text-left">
                * PDF Format. Last Updated: DEC 2025
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-green-500 to-orange-500"></div>
      </Card>
    </div>
  );
}

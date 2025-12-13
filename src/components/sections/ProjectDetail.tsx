
import { ArrowLeft, ArrowUpRight, Code, Terminal } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface ProjectDetailProps {
    project: any;
    onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
      <Button
        variant="ghost"
        className="group gap-2 text-green-400 mb-8 pl-0 hover:bg-transparent hover:text-white"
        onClick={onBack}
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        BACK TO OVERVIEW
      </Button>

      <Card className="border-green-500/30 shadow-2xl shadow-green-900/20 overflow-hidden">
        <CardHeader>
          <div className="mb-4">
            <Badge variant="outline" className="text-orange-500 border-orange-500/50 rounded-sm">
              PROJECT FILE: {project.id.toUpperCase()}
            </Badge>
          </div>
          <CardTitle className="text-4xl md:text-5xl mb-2">{project.title}</CardTitle>
          <p className="text-xl text-purple-200 font-light border-l-4 border-green-500 pl-4 italic">
            "{project.details.tagline}"
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {project.media && (
            <div className="border border-purple-900/50 bg-black overflow-hidden relative shadow-lg rounded-md">
              {project.media.type === 'youtube' ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={project.media.src}
                    title="Project Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              ) : null}
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 border-y border-purple-900/30 py-6">
            <div>
              <span className="text-neutral-500 uppercase text-xs block mb-1">Role</span>
              <span className="text-white">Lead Researcher</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase text-xs block mb-1">Timeline</span>
              <span className="text-white">Jan 2024 - Present</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase text-xs block mb-1">Tech Stack</span>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t: any) => (
                  <span key={t} className="text-green-400 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 text-neutral-300 leading-relaxed p-4">
            <section>
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <Terminal size={18} className="text-purple-500" /> The Challenge
              </h3>
              <p>{project.details.problem}</p>
            </section>

            <section>
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <Code size={18} className="text-purple-500" /> Methodology
              </h3>
              <div className="grid gap-4">
                {project.details.approach.map((step: any, i: number) => (
                  <Card
                    key={i}
                    className="bg-black/40 border-l-2 border-l-purple-600 border-t-0 border-r-0 border-b-0 rounded-none hover:border-l-green-500 transition-colors"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-white font-medium mb-1">
                        {step.icon} {step.title}
                      </div>
                      <p className="text-sm text-neutral-400">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <ArrowUpRight size={18} className="text-purple-500" /> Key Outcomes
              </h3>
              <p>{project.details.outcome}</p>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

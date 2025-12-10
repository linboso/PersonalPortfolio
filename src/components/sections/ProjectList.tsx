
import { ArrowUpRight, ImageIcon, Layers, PlayCircle } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

interface ProjectListProps {
  projects: any[];
  onProjectClick: (project: any) => void;
}

export default function ProjectList({ projects, onProjectClick }: ProjectListProps) {
  return (
    <section>
      <div className="flex items-center gap-2 text-purple-400 mb-8 border-b border-purple-900/50 pb-2">
        <Layers size={16} />
        <span className="text-sm tracking-widest uppercase font-bold">Selected Works</span>
      </div>

      <div className="grid gap-8">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            className="group relative border-purple-900/30 hover:border-green-500/50 transition-all duration-300 overflow-hidden p-8"
          >
            <div className="absolute top-0 right-0 w-8 h-8 bg-purple-900/10 group-hover:bg-green-500/20 transition-colors -skew-x-12 translate-x-4 -translate-y-4"></div>

            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="font-bold tracking-wider">
                  {project.category}
                </Badge>
                <span className="font-mono text-xs text-purple-300">
                  {project.year} // <span className="text-orange-400">{project.status}</span>
                </span>
              </div>
              <CardTitle
                className="text-2xl mt-2 group-hover:text-purple-400 transition-colors cursor-pointer"
                onClick={() => onProjectClick(project)}
              >
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              {project.media && (
                <div
                  className="mb-4 border border-purple-900/50 bg-black/50 overflow-hidden relative group-hover:border-green-500/30 transition-colors cursor-pointer rounded-md"
                  onClick={() => onProjectClick(project)}
                >
                  {project.media.type === 'youtube' ? (
                    <div className="aspect-video w-full bg-black flex items-center justify-center group/play">
                      <div className="absolute inset-0 z-10 bg-transparent"></div>
                      <iframe
                        src={project.media.src}
                        title="YouTube video player"
                        className="w-full h-full border-0 pointer-events-none opacity-80"
                      ></iframe>
                      <PlayCircle
                        size={48}
                        className="absolute text-white/80 group-hover/play:text-green-400 z-20 transition-colors"
                      />
                    </div>
                  ) : project.media.type === 'gif' ? (
                    <div className="w-full relative">
                      <img
                        src={project.media.src}
                        alt={project.title}
                        className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute bottom-2 right-2 text-xs text-white bg-black/70 px-2 py-1 flex items-center gap-1 rounded">
                        <ImageIcon size={10} /> GIF PREVIEW
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
              <CardDescription className="text-neutral-400 leading-relaxed text-base">
                {project.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="flex-col items-start gap-2 mt-10">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <Badge key={i} variant="outline" className="font-mono text-xs border-purple-500/30">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="pt-0 w-full">
                {project.details ? (
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn pl-0 hover:bg-transparent hover:text-green-400"
                    onClick={() => onProjectClick(project)}
                  >
                    <span className="flex items-center gap-2">
                      <PlayCircle size={14} /> View Case Study
                    </span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn pl-0 hover:bg-transparent hover:text-green-400"
                  >
                    <span className="flex items-center gap-2">View Visualization</span>
                    <ArrowUpRight size={14} />
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

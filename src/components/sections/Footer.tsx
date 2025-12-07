
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="pt-20 pb-12 border-t border-purple-900/30">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Let's Map the Future.</h2>
          <p className="text-neutral-500">Open for collaborations and coffee.</p>
        </div>
        <Button variant="eva" className="gap-2 shadow-lg shadow-purple-900/20">
          Contact Me
        </Button>
      </div>
    </footer>
  );
}

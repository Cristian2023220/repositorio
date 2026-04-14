import { Flame } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-amber-500/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            <span className="text-gray-400">
              © 2025 Dev Arena. Que os códigos estejam sempre a seu favor.
            </span>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#sobre" className="hover:text-amber-500 transition-colors">Sobre</a>
            <a href="#formacao" className="hover:text-amber-500 transition-colors">Formação</a>
            <a href="#projetos" className="hover:text-amber-500 transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-amber-500/10 text-center">
          <p className="text-gray-500 text-sm italic">
            "Esperança é a única coisa mais forte que o medo."
          </p>
        </div>
      </div>
    </footer>
  );
}

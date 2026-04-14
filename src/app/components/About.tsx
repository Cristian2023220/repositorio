import { Flame, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Sparkles className="w-8 h-8 text-amber-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 text-center">
            Sobre Mim
          </h2>
          <Sparkles className="w-8 h-8 text-amber-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1656055449419-9db540f8f1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWV0YWxsaWMlMjB0ZXh0dXJlfGVufDF8fHx8MTc2Njk3MTI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="relative rounded-lg shadow-2xl shadow-amber-500/20 border-2 border-amber-500/30"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Como um tributo na arena do desenvolvimento, cada projeto é uma batalha onde a criatividade e a lógica precisam trabalhar juntas para sobreviver. Não é apenas sobre escrever código - é sobre criar soluções que resistem ao teste do tempo.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Com anos de experiência navegando pelos distritos da tecnologia, especializei-me em transformar ideias em realidade digital. Cada linha de código é uma flecha lançada com precisão, cada função é uma estratégia cuidadosamente planejada.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-amber-900/30 border border-amber-500/50 text-amber-400 rounded-full">
                <Flame className="w-4 h-4 inline mr-2" />
                Apaixonado por código
              </span>
              <span className="px-4 py-2 bg-amber-900/30 border border-amber-500/50 text-amber-400 rounded-full">
                <Flame className="w-4 h-4 inline mr-2" />
                Solucionador de problemas
              </span>
              <span className="px-4 py-2 bg-amber-900/30 border border-amber-500/50 text-amber-400 rounded-full">
                <Flame className="w-4 h-4 inline mr-2" />
                Inovador constante
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

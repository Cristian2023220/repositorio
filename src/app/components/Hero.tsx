import { Flame } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1598523757226-28df3fd7900b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZmxhbWVzJTIwZGFya3xlbnwxfHx8fDE3NjY5MTE4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Fire background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Flame className="w-12 h-12 text-amber-500 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-amber-500 tracking-wider">
            DEV ARENA
          </h1>
          <Flame className="w-12 h-12 text-amber-500 animate-pulse" />
        </div>
        
        <p className="text-xl md:text-2xl text-amber-100 mb-4 tracking-wide">
          Que os códigos estejam sempre a seu favor
        </p>
        
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Desenvolvedor Full Stack • Sobrevivente do mundo digital • Especialista em criar soluções que deixam legado
        </p>

        <div className="flex gap-4 justify-center">
          <a 
            href="#projetos"
            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-black font-semibold rounded-lg transition-all duration-300 border-2 border-amber-500 shadow-lg shadow-amber-500/50"
          >
            Ver Projetos
          </a>
          <a 
            href="#contato"
            className="px-8 py-3 bg-transparent hover:bg-amber-900/30 text-amber-500 font-semibold rounded-lg transition-all duration-300 border-2 border-amber-500"
          >
            Entrar em Contato
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-red-500 rounded-full animate-pulse delay-100"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-200"></div>
    </section>
  );
}

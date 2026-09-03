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
              src="https://private-user-images.githubusercontent.com/141922949/645979125-06ed6b01-6ed6-4998-b406-c75fd91f580f.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODg0NjkxMzksIm5iZiI6MTc4ODQ2ODgzOSwicGF0aCI6Ii8xNDE5MjI5NDkvNjQ1OTc5MTI1LTA2ZWQ2YjAxLTZlZDYtNDk5OC1iNDA2LWM3NWZkOTFmNTgwZi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwOTAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDkwM1QyMDUzNTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NDc0OWQzMTA0YjExOTFjOGNmY2UxYmZhMjBjYmJjYWI4MjZiNGRmOWZjNzc0OGRhM2IwNGJjZWU0M2NlZGVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnIn0.lWUT349T6sNB4VmH4LcSljOwBD1bw_LyTrZwdrrDqaY"
              alt="Profile"
              className="relative rounded-lg shadow-2xl shadow-amber-500/20 border-2 border-amber-500/30"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Olá, me chamo Cristian. Sou um desenvolvedor apaixonado por tecnologia e inovação., sempre em busca de desafios que me permitam crescer e aprender. Minha jornada começou com uma simples curiosidade sobre como os aplicativos funcionam, e desde então, mergulhei profundamente no mundo do desenvolvimento web e mobile.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Gosto da área de desenvolvimento backend, além de grande interesse em Inteligência Artificial e Machine Learning. Acredito que a tecnologia tem o poder de transformar vidas, e estou comprometido em criar soluções que façam a diferença. 
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

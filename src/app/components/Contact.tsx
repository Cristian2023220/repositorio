import { Mail, Github, Linkedin, Flame } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <Flame className="w-8 h-8 text-amber-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 text-center">
            Contato
          </h2>
          <Flame className="w-8 h-8 text-amber-500" />
        </div>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Pronto para iniciar sua próxima jornada? Entre em contato comigo.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-zinc-900 border-2 border-amber-500/20 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-amber-400 mb-6">Envie uma mensagem</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Nome</label>
                <input 
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-black border border-amber-500/30 rounded-lg text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-3 bg-black border border-amber-500/30 rounded-lg text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Mensagem</label>
                <textarea 
                  rows={5}
                  placeholder="Conte-me sobre seu projeto..."
                  className="w-full px-4 py-3 bg-black border border-amber-500/30 rounded-lg text-gray-300 placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-black font-semibold rounded-lg transition-all duration-300 border-2 border-amber-500 shadow-lg shadow-amber-500/30"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            {/* Direct contact */}
            <div className="bg-zinc-900 border-2 border-amber-500/20 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">Contato Direto</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:contato@devarena.com"
                  className="flex items-center gap-4 p-4 bg-black border border-amber-500/30 rounded-lg hover:border-amber-500 transition-colors group"
                >
                  <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/50 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-amber-100">cristiansouto2019@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-zinc-900 border-2 border-amber-500/20 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-amber-400 mb-6">Redes Sociais</h3>
              
              <div className="space-y-3">
                <a 
                  href="https://github.com/Cristian2023220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black border border-amber-500/30 rounded-lg hover:border-amber-500 transition-colors group"
                >
                  <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/50 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-amber-100">GitHub</p>
                    <p className="text-sm text-gray-400">@Cristian2023220</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/cristiansouto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black border border-amber-500/30 rounded-lg hover:border-amber-500 transition-colors group"
                >
                  <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/50 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-amber-100">LinkedIn</p>
                    <p className="text-sm text-gray-400">@cristiansouto</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-amber-900/20 to-transparent border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-amber-100 italic mb-2">
                "Lembre-se de quem você é. Você não pode mudar as cartas que recebeu, mas pode decidir como jogar."
              </p>
              <p className="text-sm text-gray-400">— Adaptado de Jogos Vorazes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

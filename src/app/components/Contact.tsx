import React, { useState } from 'react';
import { Mail, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "50d919f2-00ef-4408-b9a6-868082850d3c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || "Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch {
      setErrorMessage("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Formulário */}
        <div className="bg-zinc-950 border border-amber-500/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-amber-500 mb-6">Envie uma mensagem</h3>

          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <h4 className="text-xl font-semibold text-white">Mensagem enviada com sucesso!</h4>
              <p className="text-gray-400 mt-2">
                Obrigado pelo contato, responderei o mais rápido possível no seu e-mail.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-6 px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700 text-amber-400 rounded-lg transition-colors"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                  Nome
                </label>
                <input
                  id="name"
                  type="text" 
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email" 
                  name="email"
                  required
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Conte-me sobre seu projeto..."
                  className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          )}
        </div>

        {/* Lado Direito: Informações e Redes */}
        <div className="space-y-6">
          <div className="bg-zinc-950 border border-amber-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-amber-500 mb-6">Contato Direto</h3>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <Mail className="w-6 h-6 text-amber-500" />
              <div>
                <span className="text-xs text-gray-400 block">Email</span>
                <a href="mailto:cristiansouto2019@gmail.com" className="text-white hover:text-amber-400 transition-colors text-sm">
                  cristiansouto2019@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 border border-amber-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-amber-500 mb-6">Redes Sociais</h3>
            <div className="space-y-3">
              <a 
                href="https://github.com/Cristian2023220" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/50 transition-colors"
              >
                <Github className="w-6 h-6 text-amber-500" />
                <div>
                  <span className="text-white font-medium block text-sm">GitHub</span>
                  <span className="text-xs text-gray-400">@Cristian2023220</span>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/cristiansouto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/50 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-amber-500" />
                <div>
                  <span className="text-white font-medium block text-sm">LinkedIn</span>
                  <span className="text-xs text-gray-400">@cristiansouto</span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
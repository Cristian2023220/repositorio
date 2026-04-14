import { Flame, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Arena Commerce',
    description: 'Plataforma de e-commerce completa com sistema de pagamentos integrado, gestão de estoque e painel administrativo.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1629278353770-38492d1640c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBzdXJ2aXZhbHxlbnwxfHx8fDE3NjY5NzEyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'Concluído',
    featured: true
  },
  {
    title: 'Tribute Tracker',
    description: 'Sistema de gestão de projetos e tarefas com colaboração em tempo real, notificações push e relatórios avançados.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1598523757226-28df3fd7900b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwZmxhbWVzJTIwZGFya3xlbnwxfHx8fDE3NjY5MTE4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'Concluído',
    featured: true
  },
  {
    title: 'District Dashboard',
    description: 'Dashboard analítico com visualizações de dados interativas, gráficos em tempo real e exportação de relatórios.',
    tech: ['React', 'D3.js', 'Python', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1656055449419-9db540f8f1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWV0YWxsaWMlMjB0ZXh0dXJlfGVufDF8fHx8MTc2Njk3MTI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'Em desenvolvimento',
    featured: false
  },
  {
    title: 'Mockingjay API',
    description: 'API RESTful escalável com autenticação JWT, rate limiting, documentação Swagger e testes automatizados.',
    tech: ['Node.js', 'Express', 'Redis', 'Docker'],
    image: 'https://images.unsplash.com/photo-1629278353770-38492d1640c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBzdXJ2aXZhbHxlbnwxfHx8fDE3NjY5NzEyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'Concluído',
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <Flame className="w-8 h-8 text-amber-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 text-center">
            Projetos
          </h2>
          <Flame className="w-8 h-8 text-amber-500" />
        </div>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Vitórias conquistadas na arena do desenvolvimento
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-black border-2 border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20"
            >
              <div className={`grid ${project.featured ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-0`}>
                {/* Image */}
                <div className="relative overflow-hidden h-64 md:h-auto">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-amber-500 text-black rounded-full">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-semibold">Destaque</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`p-6 ${project.featured ? '' : 'md:col-span-2'} flex flex-col justify-between`}>
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-semibold text-amber-100 group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        project.status === 'Concluído' 
                          ? 'bg-green-900/30 text-green-400 border border-green-500/50' 
                          : 'bg-amber-900/30 text-amber-400 border border-amber-500/50'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-sm px-3 py-1 bg-amber-900/20 text-amber-400 rounded border border-amber-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-black rounded-lg transition-colors">
                        <span>Ver Projeto</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-gray-300 rounded-lg transition-colors border border-zinc-700">
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

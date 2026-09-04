import { Flame, Github, Sparkles, ExternalLink } from 'lucide-react';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  status: string;
  featured: boolean;
  deployUrl?: string;
  links?: ProjectLink[];
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Refeitório Check',
    description: 'Sistema de gestão do refeitório do IFBaiano — Campus Itapetinga. Alunos confirmam presença pelo app, a equipe acompanha pelo painel web, e a liberação no refeitório acontece por leitura de cartão RFID no totem.',
    tech: ['TypeScript', 'CSS', 'JavaScript', 'HTML'],
    image: '/public/projects/galeria.png',
    status: 'Concluído',
    featured: true,
    links: [
      { label: 'Painel Web', url: 'https://painelweb-eight.vercel.app/' },
      { label: 'App Aluno', url: 'https://appdoaluno.vercel.app/' },
      { label: 'Totem RFID', url: 'https://totem-ivory.vercel.app/' }
    ],
    githubUrl: 'https://github.com/Cristian2023220/refeitorio-check'
  },
  {
    title: 'Rockit Vision — AI Hand Gesture Recognition',
    description: 'Um sistema web de visão computacional em tempo real para reconhecimento, classificação e tradução de gestos manuais, desenvolvido como Trabalho de Conclusão de Curso (TCC) em Sistemas de Informação. O projeto utiliza a webcam do usuário diretamente no navegador para capturar frames, processar a malha esquelética das mãos e classificar o gesto exibido em tempo real através de uma arquitetura baseada em WebSockets..',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Flask', 'JavaScript', 'Docker'],
    image: '/public/projects/vision.jpg',
    status: 'Concluído',
    featured: true,
    deployUrl: 'https://vision-app-vbkv.onrender.com/',
    githubUrl: 'https://github.com/Cristian2023220/nlw-operator'
  },
  {
    title: '🎵 Spotify Clone',
    description: 'Este projeto é uma réplica da interface do Spotify, desenvolvida durante a Jornada Full Stack. A aplicação permite navegar por artistas e músicas, consumindo dados de uma API integrada com um banco de dados NoSQL.',
    tech: ['JavaScript', 'React', 'CSS', 'Node.js', 'MongoDB'],
    image: '/public/projects/spotify.png',
    status: 'Concluído',
    featured: false,
    deployUrl: 'https://projeto-spotify-jornada-full-stack-seven.vercel.app/',
    githubUrl: 'https://github.com/Cristian2023220/Projeto-Spotify-Jornada-FullStack-'
  },
  {
    title: 'SaúdeMap',
    description: 'O SaúdeMap é uma aplicação web interativa desenvolvida para facilitar o acesso à saúde em Itapetinga/BA. O sistema permite que cidadãos localizem hospitais, farmácias e postos de saúde em tempo real, verifiquem a disponibilidade de médicos e medicamentos, e tracem rotas diretas da sua posição até o destino.',
    tech: ['Python', 'Django', 'JavaScript', 'Leaflet.js', 'PostgreSQL'],
    image: '/public/projects/map.png',
    status: 'Concluído',
    featured: false,
    deployUrl: 'https://saude-map.onrender.com/',
    githubUrl: 'https://github.com/Cristian2023220/saude-map'
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

                    <div className="flex flex-wrap items-center gap-3">
                      {/* Caso tenha links múltiplos (como os 3 módulos do Refeitório Check) */}
                      {project.links && project.links.length > 0 && (
                        project.links.map((linkItem, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={linkItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3.5 py-2 bg-amber-600 hover:bg-amber-700 text-black font-medium text-sm rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{linkItem.label}</span>
                          </a>
                        ))
                      )}

                      {/* Caso tenha um único link direto */}
                      {project.deployUrl && (
                        <a
                          href={project.deployUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-black font-medium rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Ver Projeto</span>
                        </a>
                      )}

                      {/* Link do GitHub */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-gray-300 hover:text-white rounded-lg transition-colors border border-zinc-700"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}
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
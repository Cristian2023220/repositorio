import { Flame, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Refeitório Check',
    description: 'Sistema de gestão do refeitório do IFBaiano — Campus Itapetinga. Alunos confirmam presença pelo app, a equipe acompanha pelo painel web, e a liberação no refeitório acontece por leitura de cartão RFID no totem.',
    tech: ['TypeScript', 'CSS', 'JavaScript', 'HTML'],
    image: 'https://private-user-images.githubusercontent.com/141922949/645958742-5afa8952-0b56-4391-bec7-8baaafcbb31e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODg0NjY3ODksIm5iZiI6MTc4ODQ2NjQ4OSwicGF0aCI6Ii8xNDE5MjI5NDkvNjQ1OTU4NzQyLTVhZmE4OTUyLTBiNTYtNDM5MS1iZWM3LThiYWFhZmNiYjMxZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwOTAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDkwM1QyMDE0NDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZTEyMjI4NTRiNDhmN2E5MzhiZWQ5YmI1MmJmZTA0MWQ2Njg4MjkxMTFlYTg1ZGE2MzBlMjFkOTIyOTAyN2E3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.axNnUE0RDIGiOvWak_VmyaABFdcp3YYB15zqUwixgfo',
    status: 'Concluído',
    featured: true
  },
  {
    title: 'Rockit Vision — AI Hand Gesture Recognition',
    description: 'Um sistema web de visão computacional em tempo real para reconhecimento, classificação e tradução de gestos manuais, desenvolvido como Trabalho de Conclusão de Curso (TCC) em Sistemas de Informação. O projeto utiliza a webcam do usuário diretamente no navegador para capturar frames, processar a malha esquelética das mãos e classificar o gesto exibido em tempo real através de uma arquitetura baseada em WebSockets..',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Flask', 'JavaScript', 'Docker'],
    image: 'https://private-user-images.githubusercontent.com/141922949/645972162-79f2b322-2eec-4a6d-bb28-a7e6b45d9d91.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODg0NjgxNTEsIm5iZiI6MTc4ODQ2Nzg1MSwicGF0aCI6Ii8xNDE5MjI5NDkvNjQ1OTcyMTYyLTc5ZjJiMzIyLTJlZWMtNGE2ZC1iYjI4LWE3ZTZiNDVkOWQ5MS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwOTAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDkwM1QyMDM3MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NGRlN2RiZGNmODUxYzliYTg2M2I0MWM4M2IwMWIzZGNlNTZjNjRmODM5NGE5Yjk3ODBjYWIzODE0Yjk3MTkzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnIn0.DHu88DYP-A473kIS4k7uybUO2Nq875cQFY4dHpl1egU',
    status: 'Concluído',
    featured: true
  },
  {
    title: '🎵 Spotify Clone',
    description: 'Este projeto é uma réplica da interface do Spotify, desenvolvida durante a Jornada Full Stack. A aplicação permite navegar por artistas e músicas, consumindo dados de uma API integrada com um banco de dados NoSQL.',
    tech: ['JavaScript', 'React', 'CSS', 'Node.js', 'MongoDB'],
    image: 'https://6a997f4ed601bb7bf57be1a0.imgix.net/sandbox/Captura%20de%20tela%202026-09-03%20112531.png?w=1600&h=600&fit=crop&crop=faces&auto=format,compress',
    status: 'Concluído',
    featured: false
  },
  {
    title: 'SaúdeMap',
    description: 'O SaúdeMap é uma aplicação web interativa desenvolvida para facilitar o acesso à saúde em Itapetinga/BA. O sistema permite que cidadãos localizem hospitais, farmácias e postos de saúde em tempo real, verifiquem a disponibilidade de médicos e medicamentos, e tracem rotas diretas da sua posição até o destino.',
    tech: ['Python', 'Django', 'JavaScript', 'Leaflet.js', 'PostgreSQL'],
    image: 'https://private-user-images.githubusercontent.com/141922949/645970356-51293279-0b44-44cd-9a76-cf41a643a53b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODg0Njc5NTUsIm5iZiI6MTc4ODQ2NzY1NSwicGF0aCI6Ii8xNDE5MjI5NDkvNjQ1OTcwMzU2LTUxMjkzMjc5LTBiNDQtNDRjZC05YTc2LWNmNDFhNjQzYTUzYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwOTAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDkwM1QyMDM0MTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yOTY5NGM2MmVkZjBmNTI0OTYwNTVhMmY5NDJjMWIyYWM5YmJhODUyZWQ1NWNiMGVkYjQzN2JkOWJlZWIzOTkyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.ZlMmoFS2QB5wFzQMCBzay1BprlQXE-aL_IsXMVbxk8w',
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

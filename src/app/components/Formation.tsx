import { GraduationCap, Code, Award, Flame } from 'lucide-react';

const specialties = [
  {
    icon: Code,
    title: 'Desenvolvimento Front-end',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    level: 'Intermediário'
  },
  {
    icon: Award,
    title: 'Desenvolvimento Back-end',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'API REST'],
    level: 'Avançado'
  },
  {
    icon: Flame,
    title: 'DevOps & Cloud',
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'],
    level: 'Intermediário'
  },
  {
    icon: GraduationCap,
    title: 'Design & UX',
    skills: ['Figma', 'UI Design', 'Prototipagem', 'Design System'],
    level: 'Intermediário'
  },
  {
    icon: Code,
    title: 'IA Development',
    skills: ['Python', 'TensorFlow', 'Computer Vision'],
    level: 'Intermediário'
  }
];

export function Formation() {
  return (
    <section id="formacao" className="py-20 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <GraduationCap className="w-8 h-8 text-amber-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 text-center">
            Formação & Especialidades
          </h2>
        </div>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Arsenal de habilidades forjadas na arena do desenvolvimento
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <div 
                key={index}
                className="group relative bg-black border-2 border-amber-500/20 rounded-lg p-6 hover:border-amber-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-500/30 rounded-tr-lg"></div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-500/50 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-amber-100">
                        {specialty.title}
                      </h3>
                      <span className="text-xs px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/30">
                        {specialty.level}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {specialty.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-sm px-3 py-1 bg-zinc-800 text-gray-300 rounded border border-zinc-700 hover:border-amber-500/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                    style={{ 
                      width: specialty.level === 'Especialista' ? '95%' : 
                             specialty.level === 'Avançado' ? '80%' : '65%' 
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education section */}
        <div className="mt-12 bg-gradient-to-r from-amber-900/20 to-transparent border-l-4 border-amber-500 p-6 rounded-r-lg">
          <h3 className="text-2xl font-semibold text-amber-400 mb-4">Educação</h3>
          <div className="space-y-3 text-gray-300">
            <p>📚 <strong>Bacharelado em Sistemas de Informação</strong> - IFBA-ITAPETINGA (2023-atual)</p>
            <p>🏆 <strong>Certificações:</strong> Criando SaaS com Next.js e RBAC, Minicurso de Java, Full Stack Development</p>
            <p>🔥 <strong>Aprendizado Contínuo:</strong> Sempre explorando novas tecnologias e metodologias</p>
          </div>
        </div>
      </div>
    </section>
  );
}

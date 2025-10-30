"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Scroll,
} from "lucide-react";


const featuredProjects = [
  {
    image: '/project-1-sismato.jpg',
    title: 'Sisma-TO',
    subtitle: 'Sistema de monitoramento da água e saneamento do Tocantins',
  },
  {
    image: '/project-1-sismato-2.jpg',
  },
  {
    image: '/project-2-registra-sistemas.jpg',
    title: 'Registra Sistemas - TRE-TO',
    subtitle: 'Sistema de centralização de sistemas publicados (em produção/homologação)',
  },
  {
    image: '/project-2-registra-sistemas-2.jpg'
  }
];

//Scroll Reveal
const ScrollReveal = ({ children, className = "", delay = 1 }: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10-4"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "sobre", "skills", "projetos", "contato"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    {
      name: "Java",
      level: 95,
      icon: "☕",
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Spring Boot",
      level: 92,
      icon: "🍃",
      color: "from-green-400 to-emerald-600",
    },
    {
      name: "PHP",
      level: 85,
      icon: "🐘",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Laravel",
      level: 85,
      icon: "⚡",
      color: "from-red-400 to-red-600",
    },
    {
      name: "MySQL",
      level: 92,
      icon: "🗄️",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "PostgreSQL",
      level: 87,
      icon: "🐘",
      color: "from-blue-300 to-blue-500",
    },
    {
      name: "REST APIs",
      level: 93,
      icon: "🔌",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      name: "Git",
      level: 90,
      icon: "📦",
      color: "from-orange-400 to-orange-600",
    },
  ];

  const projects = [
    {
      title: "Biblioteca Simples em Java",
      description:
        "Exemplo básico de CRUD em java usando separação em camadas, com SpringBoot e persistência em H2",
      tech: ["Java", "Spring Boot", "H2"],
      github: "https://github.com/filipeFerreira7/biblioteca-simples-java",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "API de Gestão Residencial - InviteUs (Convites) ",
      description:
        "API para gerenciamento de convites residenciais, como acesso a condomínios e apartamentos..",
      tech: ["Java", "SpringBoot", "Docker"],
      github: "https://github.com/filipeFerreira7/inviteUs-api",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            {/* Logo */}
            <div
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection("home")}
            ></div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Sobre", "Skills", "Projetos", "Contato"].map(
                (label) => {
                  const section = label.toLowerCase();
                  return (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`relative px-3 py-2 text-sm font-medium transition-colors ${activeSection === section
                          ? "text-cyan-400"
                          : "text-gray-300 hover:text-cyan-400"
                        }`}
                    >
                      {label}
                      {activeSection === section && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse"></span>
                      )}
                    </button>
                  );
                }
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              {["Home", "Sobre", "Skills", "Projetos", "Contato"].map(
                (label) => {
                  const section = label.toLowerCase();
                  return (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${activeSection === section
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400"
                          : "text-gray-300 hover:bg-gray-800"
                        }`}
                    >
                      {label}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(6, 182, 212, 0.15) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mb-60 mt-10">
         <ScrollReveal delay={200}>
            <div className="inline-block mb-6 px-4 py-2 border border-cyan-500/30 rounded-full text-cyan-400 text-sm animate-pulse">
              Disponível para projetos
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight mt-5">
              <span className="text-gray-300">Olá, me chamo Filipe!</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Sou Desenvolvedor de Sistemas
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Principais stacks: <b>Java, SpringBoot, PHP, Typescript, Laravel.</b><br />
              <b>Criando novas experiências com a tecnologia!</b>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={() => scrollToSection("projetos")} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
                Ver Projetos
              </button>
              <button onClick={() => scrollToSection("contato")} className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                Entrar em Contato
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <button onClick={() => scrollToSection("sobre")} className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-cyan-400" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Sobre Section */}
      <section
        id="sobre"
        className="py-24 md:py-52 px-4 bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-40 text-center -mt-30">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center -mt-10">
            <ScrollReveal delay={200}>
            <div className="relative flex justify-center">
             <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
              <img
                src="/photo.jpg"
                alt="Filipe"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
              </div>
              <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10"
            aria-hidden="true"/>
        </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
            <div className="space-y-6 -mt-10">
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou desenvolvedor Back-End com{" "}
                <b>
                  foco em Java, Spring Boot, PHP, APIs REST e práticas DevOps.
                </b> Tenho experiências práticas em projetos organizacionais e
                acadêmicos, sempre com ambição por criar soluções escaláveis e
                eficientes. Atualmente, estudo <b>Java há mais de 3 anos</b>,
                período em que aprimorei minhas habilidades em design de
                sistemas, integração de serviços e boas práticas de arquitetura.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Durante meu estágio no{" "}
                <b>Tribunal Regional Eleitoral do Tocantins (TRE-TO)</b>, atuei
                na área de
                <b> infraestrutura e desenvolvimento de Sistemas Internos</b>.
                Participei da criação e manutenção de
                <b> aplicações publicadas</b> que facilitaram o trabalho diário
                dos servidores públicos, otimizando fluxos administrativos e
                garantindo maior eficiência nos processos internos. Essa
                experiência me deu uma visão sólida sobre o impacto da
                tecnologia dentro de ambientes corporativos e governamentais.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ao longo da minha trajetória, desenvolvi e colaborei em diversos
                projetos desafiadores, desde sistemas de e-commerce até
                microserviços complexos. Meu foco está em escrever{" "}
                <b>código limpo, testável e mantível</b>, sempre buscando
                alinhar performance com qualidade técnica. Acredito que
                tecnologia é sobre resolver problemas reais — e é isso que me
                motiva todos os dias como desenvolvedor.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Server className="w-5 h-5" />
                  <span>1+ ano de experiência</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Database className="w-5 h-5" />
                  <span>2+ projetos publicados</span>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <ScrollReveal key={index} delay={index * 250}>
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-xl font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-cyan-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section
        id="projetos"
        className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          </ScrollReveal>

        { /* Carrossel */ }
        <ScrollReveal delay={200}>
          <div className="mb-16">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="rounded-2xl overflow-hidden"
            >
              {featuredProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-cyan-300 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
          <div className="text-center p-5 mb-20 text-lg text-gray-300 leading-relaxed">
            <p>
              Os projetos destacados são:{' '}
              <b className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
                Registra Sistemas
              </b>{' '}
              e{' '}
              <b className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
                Sisma-TO
              </b>
            </p>

            {/* Descrições breves abaixo */}
            <div className="mt-10 space-y-4 text-sm md:text-base">
              <p className="text-center p-5 mb-10 text-lg text-gray-300 leading-relaxed">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">Registra Sistemas</span><br></br><br/>
                Registra Sistemas foi desenvolvido para uso interno de TRE-TO. As principais tecnologias usadas foram PHP e Laravel, e a ideia do sistema é centralizar o controle de aplicações em produção, homologação e desenvolvimento, facilitando a gestão e monitoramento de sistemas institucionais.
              </p>
              <p className="text-center p-5 mb-20 text-lg text-gray-300 leading-relaxed">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">Sisma-TO</span><br></br><br/>
                <b>Vencedor do 2º lugar no Hackathon da UNITINS (2025)</b>, O Sisma-TO (Sistema de Monitoramento e Governança da Água do Tocantins), é uma plataforma para uso governamental sobre a qualidade da água e saneamento no Tocantins.
                O sistema foi baseado em dados reais com cooperação dos dados do SISAGUA e SNIS visando uma maior monitoria com foco em dados, transparência e apoio à políticas públicas.
              </p>
            </div>
          </div>
          </ScrollReveal>

          {/* Grid de Cards de Projetos */}
          <div className="grid md:grid-cols-2 gap-8 mb-13">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 150}>
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-cyan-400 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Ver no GitHub</span>
                  </a>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-[10rem] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-20 -mt-20">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
          <p className="text-xl text-gray-300 mb-25">
            Tem um projeto em mente?<br /><b>Vamos conversar e transformar suas ideias em realidade!</b>
          </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <a className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>gestaofilipeferreira@gmail.com</span>
              </a>

              <a
                href="https://github.com/filipeFerreira7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Github className="w-6 h-6 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ffilipe7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <Linkedin className="w-6 h-6 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
          <p className="text-gray-400">
            © 2025{" "}
            <span className="text-cyan-400 font-semibold"></span> -
            Todos os direitos reservados
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com React e Tailwind CSS
          </p>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
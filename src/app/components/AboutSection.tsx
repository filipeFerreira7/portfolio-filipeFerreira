// components/AboutSection.tsx
import React from "react";
import { Server, Database } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-[12rem] px-4 bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-40 text-center -mt-30">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Sobre Mim
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center -mt-10">
          <div className="relative -mt-115 -ml-64">
            <div className="w-82 h-82 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden ">
                <img
                  src="/photo.jpg"
                  alt="imagem filipe"
                  width={350}
                  height={209}
                  className="rounded-full bg-gray-900 overflow-hidden"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl -z-10"></div>
          </div>

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
        </div>
      </div>
    </section>
  );
};
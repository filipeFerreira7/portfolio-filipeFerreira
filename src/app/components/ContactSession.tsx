import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Server,
  Database,
} from "lucide-react";

<section id="contato" className="py-[10rem] px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-20 -mt-20">
      <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Entre em Contato
      </span>
    </h2>

    <p className="text-xl text-gray-300 mb-25">
      Tem um projeto em mente?<br /><b>Vamos conversar e transformar suas ideias em realidade!</b>
    </p>

    <div className="grid md:grid-cols-2 gap-12 items-start text-left">
      {/* Coluna de contatos */}
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

      {/* Coluna de formulário */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Seu Nome"
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
        />
        <input
          type="email"
          placeholder="Seu Email"
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
        />
        <textarea
          placeholder="Sua Mensagem"
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
        ></textarea>
      </div>
    </div>
         <button
          onClick={() => alert("Erro não especificado. Tente novamente mais tarde")}
         className="w-full flex mt-15 justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
          Enviar Mensagem
        </button>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025{" "}
            <span className="text-cyan-400 font-semibold"></span> -
            Todos os direitos reservados
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desenvolvido com React e Tailwind CSS
          </p>
        </div>
      </footer>
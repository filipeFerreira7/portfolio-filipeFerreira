"use client";

import { useEffect, useRef, useState } from "react";
import i18n from "@/i18n/i18n";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Database,
  Linkedin,
  Mail,
  Server,
} from "lucide-react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const ScrollReveal = ({
  children,
  className = "",
  delay = 1,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init();
    }

    setIsClient(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "sobre", "skills", "projetos", "contato"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: "Java", level: 95, icon: "Java", color: "from-orange-500 to-red-600" },
    { name: "Spring Boot", level: 92, icon: "Spring", color: "from-green-400 to-emerald-600" },
    { name: "PHP", level: 85, icon: "PHP", color: "from-violet-400 to-violet-600" },
    { name: "Laravel", level: 85, icon: "Laravel", color: "from-red-400 to-rose-600" },
    { name: "MySQL", level: 92, icon: "SQL", color: "from-blue-400 to-blue-600" },
    { name: "PostgreSQL", level: 87, icon: "PG", color: "from-sky-300 to-blue-500" },
    { name: "REST APIs", level: 93, icon: "API", color: "from-cyan-400 to-cyan-600" },
    { name: "Git", level: 90, icon: "Git", color: "from-orange-400 to-orange-600" },
  ];

  const projects = [
    {
      key: "bettercash",
      tech: ["Next.js", "TypeScript", "IA"],
      liveUrl: "https://bettercash.vercel.app",
    },
    {
      key: "employr",
      tech: ["Web App", "Gestão", "Produtividade"],
      liveUrl: "https://employr.vercel.app",
    },
    {
      key: "ffsystems",
      tech: ["Landing Pages", "Negócios Locais", "Web"],
      liveUrl: "https://filipeferreirasystems.com.br",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-950 text-gray-100">
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-3">
            <button
              onClick={() => scrollToSection("home")}
              className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-lg font-bold text-transparent sm:text-xl md:text-2xl"
            >
              FF
            </button>

            <div className="hidden md:flex md:space-x-6 lg:space-x-8">
              {["home", "sobre", "skills", "projetos", "contato"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === section
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {t(`nav.${section}`)}
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full animate-pulse bg-gradient-to-r from-cyan-400 to-purple-500" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => i18n.changeLanguage("pt")}
                className={`rounded px-2 py-1 text-sm sm:px-3 ${
                  i18n.language === "pt"
                    ? "bg-cyan-500/30 text-cyan-400"
                    : "text-gray-400"
                }`}
              >
                PT
              </button>
              <span className="text-gray-500">|</span>
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`rounded px-2 py-1 text-sm sm:px-3 ${
                  i18n.language === "en"
                    ? "bg-cyan-500/30 text-cyan-400"
                    : "text-gray-400"
                }`}
              >
                EN
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-lg p-2 transition-colors hover:bg-gray-800 md:hidden"
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5">
                  <span
                    className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${
                      isMenuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${
                      isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="border-t border-gray-800 bg-gray-900/98 backdrop-blur-md">
            <div className="space-y-3 px-4 py-4">
              {["home", "sobre", "skills", "projetos", "contato"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full rounded-lg px-4 py-2 text-left transition-colors ${
                    activeSection === section
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {t(`nav.${section}`)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(6 182 212 / 0.15) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:py-24 md:py-28">
          <ScrollReveal delay={200}>
            <div className="mb-6 inline-block rounded-full border border-cyan-500/30 px-4 py-2 text-sm text-cyan-400 animate-pulse">
              {t("hero.available")}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h1 className="mt-5 mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
              <span className="text-gray-300">{t("hero.greeting")}</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p
              className="mx-auto mb-8 max-w-3xl text-lg text-gray-400 sm:text-xl md:text-2xl"
              dangerouslySetInnerHTML={{ __html: t("hero.stacks") }}
            />
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection("projetos")}
                className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/50 sm:w-auto"
              >
                {t("hero.view_projects")}
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="w-full rounded-lg border-2 border-cyan-500 px-8 py-4 font-semibold transition-all hover:bg-cyan-500/10 sm:w-auto"
              >
                {t("hero.get_in_touch")}
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <button
              onClick={() => scrollToSection("sobre")}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-0 md:bottom-[-56px]"
            >
              <ChevronDown className="h-8 w-8 text-cyan-400" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="sobre"
        className="bg-gradient-to-b from-gray-950 to-gray-900 px-4 py-24 md:py-40"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="mb-16 text-center text-4xl font-bold md:mb-24 md:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t("about.title")}
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <ScrollReveal delay={200}>
              <div className="relative flex justify-center">
                <div className="h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-1 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gray-900">
                    <Image
                      src="/profile-photo.jpeg"
                      alt="Filipe Ferreira"
                      width={768}
                      height={768}
                      className="h-full w-full rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div
                  className="absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl sm:h-80 sm:w-80 md:h-96 md:w-96"
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="space-y-6">
                <p
                  className="text-lg leading-relaxed text-gray-300"
                  dangerouslySetInnerHTML={{ __html: t("about.description_1") }}
                />
                <p
                  className="text-lg leading-relaxed text-gray-300"
                  dangerouslySetInnerHTML={{ __html: t("about.description_2") }}
                />
                <p
                  className="text-lg leading-relaxed text-gray-300"
                  dangerouslySetInnerHTML={{ __html: t("about.description_3") }}
                />
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Server className="h-5 w-5" />
                    <span>{t("about.experience")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Database className="h-5 w-5" />
                    <span>{t("about.published_projects")}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {t("skills.title")}
            </span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 250}>
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-gray-700 px-3 py-1 text-sm uppercase tracking-[0.2em] text-gray-300">
                        {skill.icon}
                      </span>
                      <span className="text-xl font-semibold">{skill.name}</span>
                    </div>
                    <span className="font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-gray-800">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="bg-gradient-to-b from-gray-950 to-gray-900 px-4 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="mb-6 text-center text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t("projects.title")}
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mx-auto mb-14 max-w-3xl text-center text-lg leading-relaxed text-gray-400">
              {t("projects.intro")}
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <ScrollReveal key={project.key} delay={index * 180}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-300">
                      {t(`projects.${project.key}.label`)}
                    </span>
                    <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400/80" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {t(`projects.${project.key}.title`)}
                  </h3>

                  <p className="mb-6 flex-1 leading-relaxed text-gray-300">
                    {t(`projects.${project.key}.description`)}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={`${project.key}-${tech}`}
                        className="rounded-full border border-gray-700 bg-gray-900/70 px-3 py-1 text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
                  >
                    {t("projects.live_button")}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="mb-12 text-4xl font-bold md:mb-20 md:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {t("contact.title")}
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p
              className="mb-12 text-lg text-gray-300 md:mb-20 md:text-xl"
              dangerouslySetInnerHTML={{ __html: t("contact.description") }}
            />
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mx-auto max-w-md">
              <div className="space-y-4">
                <a
                  href="mailto:gestaofilipeferreira@gmail.com"
                  className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4 text-left transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <Mail className="h-6 w-6 shrink-0 text-cyan-400" />
                  <span className="break-all">{t("contact.email")}</span>
                </a>
                <a
                  href="https://github.com/filipeFerreira7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-cyan-400">
                    GH
                  </span>
                  <span>{t("contact.github")}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ffilipe7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <Linkedin className="h-6 w-6 shrink-0 text-cyan-400" />
                  <span>{t("contact.linkedin")}</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t border-gray-800 px-4 py-8">
        <div className="mx-auto max-w-6xl text-center">
          <ScrollReveal>
            <p className="text-gray-400">
              © 2025 - {t("footer.copyright")}
            </p>
            <p className="mt-2 text-sm text-gray-500">{t("footer.built_with")}</p>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

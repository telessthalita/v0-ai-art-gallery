"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, ArrowUp, Lock, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in py-10">
      <section className="space-y-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">About AI Art Gallery</h1>
        <div className="h-1 w-40 mx-auto bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600"></div>
      </section>

      {/* Main About Section */}
      <div>
        <Card
          className="overflow-hidden border-0 rounded-lg"
          style={{
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.15)",
          }}
        >
          <CardContent className="p-8">
            <div className="space-y-6 text-lg leading-relaxed text-purple-100">
              <p>
                Bem-vindo à AI Art Gallery, onde o futuro da arte encontra a criatividade sem limites! Aqui, a
                Inteligência Artificial não é só uma ferramenta — é nossa parceira criativa, capaz de transformar ideias
                em imagens que desafiam a realidade. Esta galeria virtual foi feita para quem vê o mundo de maneira
                diferente, assim como nós. É uma experiência interativa, com um design visual que é tão dinâmico quanto
                a própria IA.
              </p>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>

              <p>
                A interface foi feita usando Vercel v0, uma plataforma de desenvolvimento que é quase como ter um
                superpoder. Com ela, conseguimos criar uma aplicação web de forma ágil e sem complicação, deixando tudo
                rodando com alto desempenho e um visual impecável. Focamos em um design clean, mas com aquele toque
                futurista, com animações e transições suaves que tornam a navegação uma experiência fluida e envolvente,
                seja no desktop ou no celular.
              </p>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>

              <p>
                Agora, o mais legal: as imagens que você vê aqui não são só arte — são criações de IA. Usamos engenharia
                de prompt para transformar descrições textuais em imagens que ultrapassam os limites da imaginação. Se
                você acha que a IA não pode ser criativa, prepare-se para se surpreender! Usamos ferramentas como Stable
                Diffusion, DALL·E e MidJourney para criar cenas que são totalmente únicas. Cada prompt foi pensado com
                um mix de técnica e inspiração, resultando em arte que não só impressiona, mas também emociona.
              </p>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>

              <p>
                E o melhor de tudo? Essas imagens estão armazenadas de forma segura e eficiente no Supabase, com acesso
                rápido e sem complicação. Navegar por essa galeria virtual é como passear em um museu digital de
                vanguarda, com a conveniência de ver tudo no seu próprio ritmo, com a experiência interativa que criamos
                para você.
              </p>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>

              <p>
                Este não é só um projeto de arte. É uma janela para o futuro. Vamos juntos explorar como a IA pode
                reimaginar a arte e, quem sabe, inspirar a próxima grande revolução criativa.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Engenharia de Prompts"
          icon={<Mic className="text-purple-400" />}
          content="Transformamos descrições textuais em imagens surpreendentes usando técnicas avançadas de engenharia de prompts com IA."
        />

        <FeatureCard
          title="Design Futurista"
          icon={<ArrowUp className="text-purple-400" />}
          content="Interface imersiva com animações fluidas e efeitos visuais que complementam a natureza inovadora da arte gerada por IA."
        />

        <FeatureCard
          title="Segurança Avançada"
          icon={<Lock className="text-purple-400" />}
          content="Armazenamento seguro com Supabase e implementação de práticas recomendadas de segurança em toda a aplicação."
        />
      </div>

      {/* Technology Showcase */}
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-fuchsia-500/10 rounded-full blur-xl"></div>

        <Card
          className="overflow-hidden border-0 rounded-lg relative z-10"
          style={{
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.15)",
          }}
        >
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Shield className="text-purple-400" />
              Tecnologias Utilizadas
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <TechBadge name="Vercel v0" />
              <TechBadge name="Next.js" />
              <TechBadge name="Supabase" />
              <TechBadge name="Tailwind CSS" />
              <TechBadge name="Framer Motion" />
              <TechBadge name="Stable Diffusion" />
              <TechBadge name="DALL·E" />
              <TechBadge name="MidJourney" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <p className="text-xl text-purple-300 mb-6">Explore a galeria e descubra o futuro da arte gerada por IA</p>
        <div className="inline-block">
          <a
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
          >
            Voltar à Galeria
          </a>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  icon,
  content,
}: {
  title: string
  icon: React.ReactNode
  content: string
}) {
  return (
    <div>
      <Card
        className="h-full overflow-hidden border-0 rounded-lg relative"
        style={{
          background: "rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent className="p-6 space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            {icon}
            <h2 className="text-xl font-bold text-white">{title}</h2>
          </div>
          <p className="text-purple-200">{content}</p>
        </CardContent>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-20 h-1 bg-purple-500"></div>
          <div className="absolute top-0 left-0 w-1 h-20 bg-purple-500"></div>
          <div className="absolute bottom-0 right-0 w-20 h-1 bg-fuchsia-500"></div>
          <div className="absolute bottom-0 right-0 w-1 h-20 bg-fuchsia-500"></div>
        </div>
      </Card>
    </div>
  )
}

function TechBadge({ name }: { name: string }) {
  return (
    <div className="bg-purple-900/30 border border-purple-500/20 rounded-full px-4 py-2 text-center text-purple-200">
      {name}
    </div>
  )
}

import React from "react";
import Section from "../../Components/ui/Section";
import Pill from "../../Components/ui/Pill";
import FeatureCard from "../../Components/cards/FeatureCard";
import { Heart, MessageCircle, Stethoscope, Trophy, TrendingUp, Wrench, Globe, Smartphone } from "lucide-react";

export default function Entrepreneurs() {
  return (
    <Section
      id="para-emprendedores"
      fullBleed
      // Fondo con degradado pastel (mint -> azul cielo)
      className="py-16 bg-gradient-to-b from-[#DFF5EC] to-[#E8F3FC]"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Pill pastel */}
        <Pill className="inline-flex items-center gap-2 rounded-full border border-[#E8ECF1] bg-[#FDFCF9] px-3 py-1 text-sm text-[#34495E]">
          <Heart className="h-4 w-4 text-[#34495E]" />
          Programa para emprendedores
        </Pill>

        {/* Título y subtítulo con alto contraste */}
        <h2 className="mt-3 text-2xl font-bold text-[#34495E]">Crecemos contigo</h2>
        <p className="mt-2 text-[#4A4A4A]">
          Impulsa tu taller con respaldo profesional, presencia digital y acceso a familias en todo el país.
        </p>
      </div>

      {/* Cards (usa FeatureCard con estilos pastel internos) */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard icon={<Stethoscope />} title="Colaboración con médicos" desc="Adaptar calzado con respaldo profesional." />
        <FeatureCard icon={<Globe />} title="Acceso a nuevos mercados" desc="Clientes en todo Perú mediante la plataforma." />
        <FeatureCard icon={<Smartphone />} title="Digitalización" desc="Perfil online con catálogo, pedidos y entregas." />
        <FeatureCard icon={<Wrench />} title="Capacitación" desc="Talleres en ergonomía y herramientas digitales." />
        <FeatureCard icon={<Trophy />} title="Reconocimiento" desc="Certificados, concursos y difusión de historias." />
        <FeatureCard icon={<TrendingUp />} title="Posicionamiento" desc="Reputación como microempresarios innovadores." />
        <FeatureCard icon={<MessageCircle />} title="Retroalimentación" desc="Opiniones de familias para mejorar." />
      </div>

      {/* Testimonio + imagen en pastel */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-[#E8ECF1] bg-[#F5FAFF] p-6">
          <blockquote className="text-[#34495E]">
            <p className="text-base leading-relaxed">
              “Ahora mis zapatos llegan a Lima y tienen respaldo médico. Me siento más valorado como artesano.”
            </p>
            <footer className="mt-2 text-sm text-[#6B7280]">— José, zapatero participante</footer>
          </blockquote>
        </div>

        <img
          src="/images/niño.png"
          alt="Zapatero trabajando"
          className="h-48 w-full rounded-2xl border border-[#E8ECF1] object-cover"
        />
      </div>
    </Section>
  );
}

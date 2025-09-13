import React from "react";
import Section from "../../Components/ui/Section";
import Pill from "../../Components/ui/Pill";
import Bullet from "../../Components/ui/Bullet";
import StoriesCarousel from "../../Components/media/StoriesCarousel";
import { Heart, Palette, Sparkles, Stethoscope, Zap } from "lucide-react";

export default function Users() {
  return (
    <div className="bg-gradient-to-b from-[#FDFCF9] via-[#E8F3FC] to-[#FDFCF9]">
      <Section id="para-usuarios" className="py-16 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <Pill className="inline-flex items-center gap-2 rounded-full border border-[#E8ECF1] bg-[#FFF5A5]/60 px-3 py-1 text-sm text-[#34495E]">
            <Heart className="h-4 w-4 text-[#34495E]" />
            Para niños y familias
          </Pill>
          <h2 className="mt-3 text-2xl font-bold text-[#34495E]">Beneficios pensados en ellos</h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Lista de beneficios */}
          <div>
            <ul className="space-y-3">
              <Bullet>
                <span className="inline-flex items-center gap-2 text-[#4A4A4A]">
                  <Zap className="h-4 w-4 text-[#A8E6CF]" />
                  Funcionalidad y ergonomía.
                </span>
              </Bullet>
              <Bullet>
                <span className="inline-flex items-center gap-2 text-[#4A4A4A]">
                  <Palette className="h-4 w-4 text-[#A0D8F1]" />
                  Diseño personalizado (colores/personajes).
                </span>
              </Bullet>
              <Bullet>
                <span className="inline-flex items-center gap-2 text-[#4A4A4A]">
                  <Stethoscope className="h-4 w-4 text-[#76C7B7]" />
                  Respaldo médico en cada par.
                </span>
              </Bullet>
              <Bullet>
                <span className="inline-flex items-center gap-2 text-[#4A4A4A]">
                  <Sparkles className="h-4 w-4 text-[#FFD6A5]" />
                  Confianza y autoestima con zapatos únicos.
                </span>
              </Bullet>
            </ul>

            <div className="mt-8">
              <StoriesCarousel
                items={[
                  { image: "/images/niño.png", quote: "Mi hijo ahora corre y juega con confianza gracias a sus zapatos Varayoc.", author: "Madre de Matías" },
                  { image: "/images/niño.png", quote: "Los colores y personajes que eligió lo motivan a usarlos todos los días.", author: "Papá de Sofía" },
                  { image: "/images/niño.png", quote: "La adaptación a su prótesis fue perfecta, sin rozaduras." },
                ]}
              />
            </div>
          </div>

          {/* Antes vs Después */}
          <div className="rounded-2xl border border-[#E8ECF1] bg-[#FDFCF9] p-6 shadow-[0_2px_6px_rgba(52,73,94,0.08)]">
            <h3 className="text-lg font-semibold text-[#34495E]">Antes vs Después</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E8ECF1] bg-white p-4">
                <p className="text-sm font-medium text-[#34495E]">Zapato normal</p>
                <img src="/images/niño.png" alt="Zapato normal" className="mt-2 h-40 w-full rounded-lg object-cover" />
                <ul className="mt-3 space-y-1 text-xs text-[#4A4A4A] list-disc list-inside">
                  <li>No considera la prótesis</li>
                  <li>Riesgo de fricción</li>
                  <li>Menor estabilidad</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[#E8ECF1] bg-white p-4">
                <p className="text-sm font-medium text-[#34495E]">Zapato adaptado Varayoc</p>
                <img src="/images/niño.png" alt="Zapato adaptado" className="mt-2 h-40 w-full rounded-lg object-cover" />
                <ul className="mt-3 space-y-1 text-xs text-[#4A4A4A] list-disc list-inside">
                  <li>Ajuste ergonómico</li>
                  <li>Mayor comodidad y apoyo</li>
                  <li>Diseño personalizado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}


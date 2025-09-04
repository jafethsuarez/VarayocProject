import React from "react";
import Section from "../../Components/ui/Section";
import Pill from "../../Components/ui/Pill";
import Bullet from "../../Components/ui/Bullet";
import StoriesCarousel from "../../Components/media/StoriesCarousel";
import { Heart, Palette, Sparkles, Stethoscope, Zap } from "lucide-react";

export default function Users() {
  return (
    <div className="bg-gradient-to-t from-white to-violet-50/40">
      <Section id="para-usuarios" className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Pill><Heart className="h-4 w-4" /> Para niños y familias</Pill>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">Beneficios pensados en ellos</h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <ul className="space-y-3">
              <Bullet><span className="inline-flex items-center gap-2"><Zap className="h-4 w-4" />Funcionalidad y ergonomía.</span></Bullet>
              <Bullet><span className="inline-flex items-center gap-2"><Palette className="h-4 w-4" />Diseño personalizado (colores/personajes).</span></Bullet>
              <Bullet><span className="inline-flex items-center gap-2"><Stethoscope className="h-4 w-4" />Respaldo médico en cada par.</span></Bullet>
              <Bullet><span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" />Confianza y autoestima con zapatos únicos.</span></Bullet>
            </ul>

            <div className="mt-8">
              <StoriesCarousel
                items={[
                  { image: "/images/story-1.jpg", quote: "Mi hijo ahora corre y juega con confianza gracias a sus zapatos Varayoc.", author: "Madre de Matías" },
                  { image: "/images/story-2.jpg", quote: "Los colores y personajes que eligió lo motivan a usarlos todos los días.", author: "Papá de Sofía" },
                  { image: "/images/story-3.jpg", quote: "La adaptación a su prótesis fue perfecta, sin rozaduras." },
                ]}
              />
            </div>
          </div>

          {/* Antes vs Después */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Antes vs Después</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-700">Zapato normal</p>
                <img src="/images/before.jpg" alt="Zapato normal" className="mt-2 h-40 w-full rounded-lg object-cover" />
                <ul className="mt-3 space-y-1 text-xs text-gray-600 list-disc list-inside">
                  <li>No considera la prótesis</li>
                  <li>Riesgo de fricción</li>
                  <li>Menor estabilidad</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-700">Zapato adaptado Varayoc</p>
                <img src="/images/after.jpg" alt="Zapato adaptado" className="mt-2 h-40 w-full rounded-lg object-cover" />
                <ul className="mt-3 space-y-1 text-xs text-gray-600 list-disc list-inside">
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

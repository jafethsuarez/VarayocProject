import React from "react";
import Section from "../../Components/ui/Section";
import FeatureCard from "../../Components/cards/FeatureCard";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";

export default function About() {
  return (
    <Section id="quienes-somos" className="py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-3">
            <FeatureCard icon={<FiTarget />} title="Misión 🎯" desc="Mejorar la calidad de vida de los niños con prótesis brindando calzado inclusivo, funcional y atractivo." />
            <FeatureCard icon={<FiEye />} title="Visión 👀" desc="Ser líderes en innovación de calzado ortopédico infantil en Perú." />
            <FeatureCard icon={<FiHeart />} title="Valores 🌈" desc="Inclusión, creatividad, calidad e innovación social." />
          </div>
          <p className="text-sm text-gray-700 italic">“Unimos manos, corazones y talento para transformar pasos.”</p>
        </div>
        <div>
          {/* Reemplaza por tu imagen */}
          <img
            src="/images/niño.png"
            alt="Zapatero, médico y familia colaborando"
            className="h-80 w-full rounded-3xl border border-gray-200 object-cover shadow-sm"
          />
        </div>
      </div>
    </Section>
  );
}

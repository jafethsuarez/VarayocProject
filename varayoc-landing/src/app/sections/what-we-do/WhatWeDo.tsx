import React from "react";
import Section from "../../Components/ui/Section";
import AnchorButton from "../../Components/ui/AnchorButton";
import Bullet from "../../Components/ui/Bullet";

export default function WhatWeDo() {
  return (
    <div className="bg-gradient-to-b from-white to-violet-50/40">
      <Section id="que-hacemos" className="py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">¿Qué hacemos?</h2>
            <p className="mt-2 text-gray-600">Diseñamos calzado adaptado para:</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>1. Prótesis transtibial (debajo de la rodilla).</li>
              <li>2. Prótesis parcial de pie (dedos o parte del pie).</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-gray-900">Beneficios del calzado Varayoc</h3>
            <ul className="mt-3 space-y-3">
              <Bullet>Adaptación ergonómica a la prótesis.</Bullet>
              <Bullet>Comodidad al caminar y jugar.</Bullet>
              <Bullet>Diseños únicos con colores y personajes.</Bullet>
              <Bullet>Materiales resistentes, cómodos y seguros.</Bullet>
            </ul>

            <AnchorButton href="#modelos" className="mt-6">Descubre nuestros modelos</AnchorButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Reemplaza por tus mockups */}
            <img src="/images/model-1.jpg" alt="Zapatos adaptados 1" className="h-56 w-full rounded-2xl border border-gray-200 object-cover" />
            <img src="/images/model-2.jpg" alt="Zapatos adaptados 2" className="h-56 w-full rounded-2xl border border-gray-200 object-cover" />
            <img src="/images/model-3.jpg" alt="Zapatos adaptados 3" className="h-56 w-full rounded-2xl border border-gray-200 object-cover" />
            <img src="/images/model-4.jpg" alt="Zapatos adaptados 4" className="h-56 w-full rounded-2xl border border-gray-200 object-cover" />
          </div>
        </div>
      </Section>
    </div>
  );
}

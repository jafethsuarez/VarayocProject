import React from "react";
import Section from "../Components/ui/Section";
import AnchorButton from "../Components/ui/AnchorButton";

export default function Models() {
  return (
    <Section id="modelos" className="py-12">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Próximamente</h3>
        <p className="mt-2 text-sm text-gray-600">Catálogo de modelos personalizados. ¿Te interesa participar? Contáctanos.</p>
        <AnchorButton href="#para-usuarios" className="mt-4">Ver beneficios</AnchorButton>
      </div>
    </Section>
  );
}

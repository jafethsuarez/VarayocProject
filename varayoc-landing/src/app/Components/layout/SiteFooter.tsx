import React from "react";
import Section from "../ui/Section";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#34495E] bg-[#34495E]">
      <Section className="py-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#A0D8F1] gap-4">
        <p>© {new Date().getFullYear()} Varayoc. Todos los derechos reservados.</p>
        <nav className="flex gap-4">
          <a className="hover:text-[#FFD6A5]" href="#quienes-somos">¿Quiénes somos?</a>
          <a className="hover:text-[#FFD6A5]" href="#que-hacemos">¿Qué hacemos?</a>
          <a className="hover:text-[#FFD6A5]" href="#para-emprendedores">Emprendedores</a>
          <a className="hover:text-[#FFD6A5]" href="#para-usuarios">Usuarios</a>
        </nav>
      </Section>
    </footer>
  );
}
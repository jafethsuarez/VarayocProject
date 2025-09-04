import React from "react";
import Section from "../ui/Section";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200">
      <Section className="py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-4">
        <p>© {new Date().getFullYear()} Varayoc. Todos los derechos reservados.</p>
        <nav className="flex gap-4">
          <a className="hover:text-gray-900" href="#quienes-somos">¿Quiénes somos?</a>
          <a className="hover:text-gray-900" href="#que-hacemos">¿Qué hacemos?</a>
          <a className="hover:text-gray-900" href="#para-emprendedores">Emprendedores</a>
          <a className="hover:text-gray-900" href="#para-usuarios">Usuarios</a>
        </nav>
      </Section>
    </footer>
  );
}
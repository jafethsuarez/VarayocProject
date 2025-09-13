"use client";
import React from "react";
import Section from "../../Components/ui/Section";
import AnchorButton from "../../Components/ui/AnchorButton";

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-[#A0D8F1] backdrop-blur">
      <Section className="flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2 font-semibold text-[#34495E]">
          PettitWalk
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="text-[#34495E] hover:text-[#3b3b7a]" href="#quienes-somos">¿Quiénes somos?</a>
          <a className="text-[#34495E] hover:text-[#3b3b7a]" href="#que-hacemos">¿Qué hacemos?</a>
          <a className="text-[#34495E] hover:text-[#3b3b7a]" href="#para-emprendedores">Emprendedores</a>
          <a className="text-[#34495E] hover:text-[#3b3b7a]" href="#para-usuarios">Usuarios</a>
        </nav>

        <div className="hidden md:flex">
          <AnchorButton href="#modelos">Modelos</AnchorButton>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-gray-700 hover:bg-gray-100"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </Section>

      {open ? (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 grid gap-3 text-sm">
            <a className="text-gray-700" href="#quienes-somos" onClick={() => setOpen(false)}>¿Quiénes somos?</a>
            <a className="text-gray-700" href="#que-hacemos" onClick={() => setOpen(false)}>¿Qué hacemos?</a>
            <a className="text-gray-700" href="#para-emprendedores" onClick={() => setOpen(false)}>Emprendedores</a>
            <a className="text-gray-700" href="#para-usuarios" onClick={() => setOpen(false)}>Usuarios</a>
            <AnchorButton href="#modelos" className="mt-1" onClick={() => setOpen(false)}>Modelos</AnchorButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
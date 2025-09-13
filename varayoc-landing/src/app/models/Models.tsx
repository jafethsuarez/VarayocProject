import React from "react";
import Section from "../Components/ui/Section";
import AnchorButton from "../Components/ui/AnchorButton";
import Image from "next/image";

const FIGMA_URL = process.env.NEXT_PUBLIC_FIGMA_URL ?? "#";


const models = [
  {
    id: 1,
    name: "Modelo Andino",
    desc: "Estilo tradicional con acabados artesanales.",
    img: "/images/imagenAbout.jpg",
  },
  {
    id: 2,
    name: "Modelo Urbano",
    desc: "Diseño moderno para uso diario.",
    img: "/images/niño.png",
  },
  {
    id: 3,
    name: "Modelo Clásico",
    desc: "Elegante y atemporal para toda ocasión.",
    img: "/images/imagenAbout.jpg",
  },
  {
    id: 4,
    name: "Modelo Eco",
    desc: "Materiales sostenibles y responsables.",
    img: "/images/niño.png",
  },
  {
    id: 5,
    name: "Modelo Premium",
    desc: "Acabados de alta calidad y durabilidad.",
    img: "/images/imagenAbout.jpg",
  },
  {
    id: 6,
    name: "Modelo Deportivo",
    desc: "Comodidad y rendimiento para el día a día.",
    img: "/images/niño.png",
  },
  {
    id: 7,
    name: "Modelo Casual",
    desc: "Versátil y cómodo para cualquier momento.",
    img: "/images/imagenAbout.jpg",
  },
  {
    id: 8,
    name: "Edición Limitada",
    desc: "Piezas exclusivas con producción limitada.",
    img: "/images/niño.png",
  },
];



export default function Models() {
  return (
    <Section id="modelos" className="py-12">
      <h2 className="mb-6 text-2xl font-semibold text-[#34495E]">Modelos disponibles</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {models.map((m) => (
          <div
            key={m.id}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8ECF1] bg-white shadow-[0_2px_6px_rgba(52,73,94,0.08)]"
          >
            <div className="relative h-48 sm:h-52 lg:h-56">
              <Image
                src={m.img}
                alt={m.name}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                priority={m.id <= 4}
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-lg font-semibold text-[#34495E]">{m.name}</h3>
              <p className="mt-1 text-sm text-[#4A4A4A] leading-5 min-h-[40px]">
                {m.desc}
              </p>
              <AnchorButton
                href={FIGMA_URL}
                className="mt-auto w-full justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir en Figma
              </AnchorButton>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
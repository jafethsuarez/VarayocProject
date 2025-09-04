"use client";
import React from "react";
import Section from "../../Components/ui/Section";
import AnchorButton from "../../Components/ui/AnchorButton";
import Pill from "../../Components/ui/Pill";
import { motion } from "framer-motion";
import { FiArrowRight, FiStar, FiActivity } from "react-icons/fi";

export default function Hero({ video }: { video: { src: string; poster?: string } }) {
  return (
    <div className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-50 via-white to-indigo-50" />
      <Section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Pill>
              <FiStar className="h-4 w-4" /> Varayoc — Calzado inclusivo
            </Pill>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Zapatos que acompañan los sueños de los niños. <span className="text-violet-700">Innovación, comodidad y estilo</span> para quienes usan prótesis.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-gray-600">
              Conectamos zapateros, médicos y familias para crear calzado funcional y lleno de identidad.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <AnchorButton href="#para-emprendedores">Soy emprendedor 👞 <FiArrowRight className="h-4 w-4" /></AnchorButton>
              <AnchorButton variant="ghost" href="#para-usuarios">Soy usuario 👨‍👩‍👦</AnchorButton>
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs text-gray-500">
              <FiActivity className="h-4 w-4" /> Respaldo médico + ergonomía infantil
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
              <video
                className="h-72 w-full object-cover sm:h-[22rem]"
                src={video.src}
                loop
                autoPlay
                muted
                playsInline
                poster={video.poster}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-4 text-sm text-white">
                Mini loop (5s) — niño corriendo con sus zapatos
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

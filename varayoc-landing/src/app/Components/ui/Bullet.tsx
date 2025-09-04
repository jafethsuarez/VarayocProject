import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
      <span className="text-sm text-gray-700">{children}</span>
    </li>
  );
}

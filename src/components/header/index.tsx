'use client';

import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: "Calculadora de IMC", url: "/imc" },
        { name: "Calculadora de Pace", url: "/pace" },
        { name: "Calculadora de TMB", url: "/basal" },
    ];

    return (
        <header className="w-full h-[10dvh] z-50 fixed top-0">
            <div className="w-full max-w-[1440px] h-full mx-auto flex items-center justify-between px-5">
                <div>
                    <Link href="/" className="text-3xl text-black font-serif font-bold">
                        Calc&Click
                    </Link>
                </div>

                {/* Botão do menu hamburguer */}
                <button
                    className="md:hidden text-2xl focus:outline-none z-10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? "✖" : "☰"}
                </button>

                {/* Menu para telas maiores */}
                <nav className="hidden md:flex">
                    <ul className="flex items-center gap-5 font-bold">
                        {links.map((link) => (
                            <li key={link.url}>
                                <Link
                                    href={link.url}
                                    className="hover:text-blue-500 transition-colors text-black"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Menu responsivo */}
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center transition-transform duration-500 ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <ul className="text-white text-2xl font-bold space-y-8">
                        {links.map((link) => (
                            <li key={link.url}>
                                <Link
                                    href={link.url}
                                    className="hover:text-gray-300 transition-colors"
                                    onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

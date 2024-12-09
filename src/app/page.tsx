'use client';

import { Calculo } from "@/components/calculo";

export default function Home(){





    return (
        <main className="min-h-[92dvh]">
            <div  className="w-full text-center py-10">
              <h1 className="text-2xl font-black sm:text-3xl ">Calculadora Para Corredores</h1>
              <p className="text-[0.8rem] sm:text-sm">Calcule o tempo todal e velocidade média baseado em seu Pace e velocidade média baseada no tempo.</p>
            </div>

            <Calculo />
        </main>
    )
}
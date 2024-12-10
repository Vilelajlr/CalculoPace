'use client';

import { Input } from "@/components/input";
import { useState } from "react";

export default function Imc() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState<string | null>(null);

    function handleCalculo() {
        const pesoNumber = parseFloat(peso.replace(',', '.'));
        const alturaNumber = parseFloat(altura.replace(',', '.'));

        if (isNaN(pesoNumber) || isNaN(alturaNumber) || alturaNumber <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        const imc = pesoNumber / (alturaNumber * alturaNumber);

        let classificacao = '';
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = 'Obesidade Grau I';
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = 'Obesidade Grau II';
        } else {
            classificacao = 'Obesidade Grau III';
        }

        setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
    }

    return (
        <main className="min-h-[100dvh]">
            <section className="h-[100dvh] relative pt-32">
                <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center">
                    <div>
                        <h1 className="text-2xl font-bold pb-10 text-center text-black">Calcular IMC</h1>

                        <form
                            className=" text-black font-bold flex flex-col max-w-[365px] border border-gray-500 p-10 rounded-md items-center justify-center bg-gray-100 gap-5 sm:max-w-[400px]"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleCalculo();
                            }}
                        >
                            <div className="flex flex-col items-center gap-4">
                                <p>Peso (kg) / Altura (m)</p>
                                <div className="flex gap-3">
                                    <Input
                                        type="text"
                                        name="peso"
                                        placeholder="Peso (ex.: 70)"
                                        onChange={(e) => setPeso(e.target.value)}
                                        value={peso}
                                    />
                                    <Input
                                        type="text"
                                        name="altura"
                                        placeholder="Altura (ex.: 1,75)"
                                        onChange={(e) => setAltura(e.target.value)}
                                        value={altura}
                                    />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                    Calcular
                                </button>
                            </div>
                        </form>

                        {resultado && (
                            <div className="mt-5 border border-green-400 bg-green-300 p-10 rounded-md text-black">
                                <p><strong>Peso: </strong>{peso} kg</p>
                                <p><strong>Altura: </strong>{altura} cm</p>
                                <p><strong>{resultado}</strong></p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

'use client';

import { Input } from "@/components/input";
import { useState } from "react";

export default function Tmb() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('masculino');
    const [resultado, setResultado] = useState<string | null>(null);

    function handleCalculo() {
        const pesoNumber = parseFloat(peso.replace(',', '.'));
        const alturaNumber = parseFloat(altura.replace(',', '.')); // Altura em cm
        const idadeNumber = parseInt(idade, 10);

        if (isNaN(pesoNumber) || isNaN(alturaNumber) || isNaN(idadeNumber) || alturaNumber <= 0 || pesoNumber <= 0 || idadeNumber <= 0) {
            alert('Por favor, insira valores válidos para peso, altura e idade.');
            return;
        }

        let tmb: number;

        if (sexo === 'masculino') {
            tmb = 88.36 + (13.4 * pesoNumber) + (4.8 * alturaNumber) - (5.7 * idadeNumber);
        } else {
            tmb = 447.6 + (9.2 * pesoNumber) + (3.1 * alturaNumber) - (4.3 * idadeNumber);
        }

        setResultado(`Sua Taxa Metabólica Basal é ${tmb.toFixed(2)} calorias por dia.`);
    }

    return (
        <main className="min-h-[100dvh]">
            <section className="h-[100dvh] relative pt-32">
                <div className="w-full max-w-[1440px] mx-auto flex items-center justify-center">
                    <div>
                        <h1 className="text-2xl font-bold pb-10 text-center">Calcular TMB</h1>

                        <form
                            className="flex flex-col max-w-[365px] border border-gray-500 p-10 rounded-md items-center justify-center bg-gray-100 gap-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleCalculo();
                            }}
                        >
                            <div className="flex flex-col items-center gap-4">
                                <p>Preencha os dados:</p>
                                <div className="flex gap-3">
                                    <Input
                                        type="text"
                                        name="peso"
                                        placeholder="Peso (kg)"
                                        onChange={(e) => setPeso(e.target.value)}
                                        value={peso}
                                    />
                                    <Input
                                        type="text"
                                        name="altura"
                                        placeholder="Altura (cm)"
                                        onChange={(e) => setAltura(e.target.value)}
                                        value={altura}
                                    />
                                </div>
                                <Input
                                    type="text"
                                    name="idade"
                                    placeholder="Idade"
                                    onChange={(e) => setIdade(e.target.value)}
                                    value={idade}
                                />
                                <div className="flex gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="sexo"
                                            value="masculino"
                                            checked={sexo === 'masculino'}
                                            onChange={(e) => setSexo(e.target.value)}
                                        />
                                        Masculino
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sexo"
                                            value="feminino"
                                            checked={sexo === 'feminino'}
                                            onChange={(e) => setSexo(e.target.value)}
                                        />
                                        Feminino
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                    Calcular
                                </button>
                            </div>
                        </form>

                        {resultado && (
                            <div className=" max-w-[400px] mt-5 border border-green-400 bg-green-300 p-10 rounded-md">
                                <p><strong>Peso: </strong>{peso} kg</p>
                                <p><strong>Altura: </strong>{altura} cm</p>
                                <p><strong>Idade: </strong>{idade} anos</p>
                                <p><strong>Sexo: </strong>{sexo === 'masculino' ? 'Masculino' : 'Feminino'}</p>
                                <p><strong>{resultado}</strong></p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

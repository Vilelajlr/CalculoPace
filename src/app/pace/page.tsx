'use client';

import { Input } from "@/components/input";
import { useState } from "react";

export default function Pace() {
    const [km, setKm] = useState('');
    const [paceMin, setPaceMin] = useState('');
    const [paceSeg, setPaceSeg] = useState('');
    const [tempoTotal, setTempoTotal] = useState<string | null>(null);
    const [velocidadeMedia, setVelocidadeMedia] = useState<string | null>(null);

    function calcular() {
        // Converter strings de entrada para números
        const distancia = parseFloat(km);
        const paceMinutos = parseInt(paceMin);
        const paceSegundos = parseInt(paceSeg);

        if (isNaN(distancia) || isNaN(paceMinutos) || isNaN(paceSegundos)) {
            alert("Por favor, insira valores válidos.");
            return;
        }

        const paceTotalMin = paceMinutos + paceSegundos / 60;

        const tempoTotalMin = distancia * paceTotalMin;


        const horas = Math.floor(tempoTotalMin / 60);
        const minutos = Math.floor(tempoTotalMin % 60);
        const segundos = Math.round((tempoTotalMin % 1) * 60);
        const tempoFormatado = `${horas}h ${minutos}m ${segundos}s`;

        // Calcular velocidade média (km/h)
        const velocidade = 60 / paceTotalMin;

        // Atualizar estados com os resultados
        setTempoTotal(tempoFormatado);
        setVelocidadeMedia(velocidade.toFixed(2));
    }

    return (
        <section className="w-full h-[100dvh] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-10">
                <h1 className="text-2xl font-bold pb-10 text-center text-black">Calcular tempo total e velocidade Média (km/h)</h1>

                <form
                    className="flex flex-col max-w-[300px] border border-gray-500 p-10 rounded-md items-center justify-center bg-gray-100 gap-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        calcular();
                    }}
                >
                    <div className="flex flex-col text-black">
                        <p>Distancia (km)</p>
                        <Input type="text" name="km" placeholder="Km" onChange={(e) => setKm(e.target.value)} value={km} />
                    </div>

                    <div className="flex flex-col text-black">
                        <p>Pace</p>
                        <div className="flex gap-2 w-full">
                            <Input type="text" name="paceMin" placeholder="MIN" onChange={(e) => setPaceMin(e.target.value)} value={paceMin} />
                            <Input type="text" name="paceSeg" placeholder="SEG" onChange={(e) => setPaceSeg(e.target.value)} value={paceSeg} />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Calcular</button>
                    </div>
                </form>

                {/* Resultados */}
                {tempoTotal && (
                    <div className="mt-5 border border-green-400 bg-green-300 p-10 rounded-md text-black">
                        <p><strong>Pace:</strong> {paceMin}'{paceSeg}</p>
                        <p><strong>Km feito:</strong> {km} km</p>
                        <p><strong>Tempo Total:</strong> {tempoTotal}</p>
                        <p><strong>Velocidade Média:</strong> {velocidadeMedia} km/h</p>
                    </div>
                )}
            </div>
        </section>
    );
}

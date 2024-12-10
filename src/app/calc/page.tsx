import { CardsCalcProps, CardsCalc } from "@/components/cardsCalc";

import imc from '../../../public/imc.png';
import pace from '../../../public/pace.png';
import tmb from '../../../public/tmb.png';



export default function Calc(){

    const cards: CardsCalcProps[] = [
        {
            name: 'IMC',
            description: 'Calculadora de IMC',
            img: imc,
            url: '/imc'
        },
        {
            name: 'Pace',
            description: 'Calculadora de Pace',
            img: pace,
            url: '/pace'
        },
        {
            name: 'TMB',
            description: 'Calculadora de TMB',
            img: tmb,
            url: '/basal'
        },
        
    ]

    return(

        <main className="min-h-[100dvh] pt-32 sm:pt-0">
            <section className="h-[100dvh]">
                <div className="w-full max-w-[1440px] mx-auto h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4  place-items-center justify-items-center">
                    {cards.map((card, index) => (
                        <CardsCalc key={index} name={card.name} img={card.img} url={card.url} description={card.description} />
                    ))}
                </div>
            </section>
        </main>

    )

}
'use client';

import Link from 'next/link';
import wave from '../../public/wave.svg';

export default function Home(){





    return (
        <main className="min-h-[100dvh] ">
            <section className='h-[100dvh] relative'>

                    <div className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-full'>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold font-serif sm:text-5xl'>Calc&Click</h1>
                            <p className='text-2xl sm:text-3xl'>Resultados na ponta dos dedos!</p>
                        </div>



                        <div className='text-center mt-32'>
                            <Link href="/calc" className='py-3 px-2 bg-[#273036] rounded-md text-white font-bold'>Explore as calculadoras disponiveis</Link>
                        </div>
                    </div>



                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute  bottom-0 max-h-[1080px]'>
                        <path fill="#273036"  d="M0,64L60,96C120,128,240,192,360,229.3C480,267,600,277,720,261.3C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                
            </section>
        </main>
    )
}
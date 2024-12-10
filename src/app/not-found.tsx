import Link from "next/link";



export default function NotFound() {
    return(
        <div className="w-full h-[80dvh] flex flex-col gap-5 items-center justify-center">
            <h1 className="text-5xl font-sans font-bold">404 - Página não encontrada</h1>
            <Link href="/" className='py-3 px-2 bg-[#273036] rounded-md text-white font-bold'>Voltar para home</Link>
        </div>
    )
}
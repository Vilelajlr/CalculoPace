import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";



export interface CardsCalcProps {
    name: string;
    img: string | StaticImageData;
    url: string;
}



export function CardsCalc({name, img, url}: CardsCalcProps){
    return(
      
            
        <Link href={url} >

            <div className="w-[200px] h-[190px] border border-solid border-black p-10 sm:w-[380px] sm:h-[290px]">
                <div>
                    <Image src={img} alt={name} objectFit="cover"/>
                </div>
                <div className="text-center text-3xl font-bold mt-5">
                    <h3>{name}</h3>
                </div>
            </div>
            
        </Link>
           
    )
}
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";



export interface CardsCalcProps {
    name: string;
    img: string | StaticImageData;
    description: string;
    url: string;
}



export function CardsCalc({name, img, url, description}: CardsCalcProps){
    return(
      
            
        <div className="card bg-base-100 image-full w-96 shadow-xl">
        <figure>
            <Image
            src={img}
            alt={name} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}"</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <Link href={url} className="btn btn-primary">Acesse</Link>
            </div>
        </div>
        </div>
           
    )
}
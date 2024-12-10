import Link from "next/link";

export interface LinkProps {
    name: string;
    url: string;
}

export function LinksNav({name, url}: LinkProps){
    return(
        <li>
            <Link 
                href={url}
                className="hover:text-gray-700 transition-colors delay-75"
            >
                {name}
            </Link>
        </li>
    )
}
   
import Link from "next/link";
import { comic } from "../math/page";

export default function Comic_Cloum({comic}:{comic:comic}){
    return(
        <div className="pb-5">
            <p><Link href = {comic.href} className="text-2xl hover:underline">{comic.title}</Link></p>
            <p className="text-gray-400 indent-4">{comic.description}</p>
        </div>
    );
}
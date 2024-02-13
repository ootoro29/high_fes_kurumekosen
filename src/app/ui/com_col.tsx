import Link from "next/link";
import { comic } from "../math/page";

export default function Comic_Cloum({comic}:{comic:comic}){
    return(
        <div className="pb-5">
            <p className="text-2xl">{comic.title} <Link href = {comic.href} className="text-base underline indent-4">漫画はこちら</Link></p>
            <p className="text-gray-400 indent-4">{comic.description}</p>
        </div>
    );
}
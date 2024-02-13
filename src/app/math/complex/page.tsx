import Comic from "@/app/ui/comic";
import Back from "../ui/back";
import { Suspense } from "react";

export default function Complex(){
    return(
        <>
            <Back />
            <Suspense fallback = {<p>Loading...</p>} >
                <Comic name = "複素関数" size = {10} />
            </Suspense>
            <Back />
        </>
    );
}
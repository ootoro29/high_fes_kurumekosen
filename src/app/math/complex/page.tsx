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
            <iframe className="aspect-video w-full max-w-[640px]" width = "560" height = "315" src="https://www.youtube.com/embed/qAhHTzWMQ-0?si=WDARwqzdOHBl3jss" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <Back />
        </>
    );
}
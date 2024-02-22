import Comic from "@/app/ui/comic";
import Back from "../ui/back";

export default function fractal(){
    return(
        <>
            <Back />
            <Comic name = "深層強化学習" size = {6} />
            <iframe className="aspect-video w-full max-w-[640px]" width="560" height="315" src="https://www.youtube.com/embed/x4wiHiDI8_A?si=IegyeFOhxb3tLR-J" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <Back />
            
        </>
    );
}
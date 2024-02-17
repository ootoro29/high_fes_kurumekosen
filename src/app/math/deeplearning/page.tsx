import Comic from "@/app/ui/comic";
import Back from "../ui/back";

export default function fractal(){
    return(
        <>
            <Back />
            <Comic name = "AI" size = {6} />
            <iframe className="aspect-video w-full max-w-[640px]" width="560" height="315" src="https://www.youtube.com/embed/D5GpGNmAKrw?si=5BBhgiy7nABHf4y-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <Back />
            
        </>
    );
}
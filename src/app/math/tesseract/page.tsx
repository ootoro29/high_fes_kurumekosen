import Comic from "@/app/ui/comic";
import Back from "../ui/back";

export default function fractal(){
    return(
        <>
            <Back />
            <Comic name = "超立方体" size = {6} />
            <iframe className="aspect-video w-full max-w-[640px]" width="560" height="315" src="https://www.youtube.com/embed/RsIqWO0WoPQ?si=Wk77dLayuePQ0INh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <Back />
        </>
    );
}
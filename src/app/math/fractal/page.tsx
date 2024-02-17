import Comic from "@/app/ui/comic";
import Back from "../ui/back";

export default function fractal(){
    return(
        <>
            <Back />
            <Comic name = "フラクタル" size = {5} />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/M9yXS9M3-i4?si=Pk4793iPI_J5ngxx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <Back />
        </>
    );
}
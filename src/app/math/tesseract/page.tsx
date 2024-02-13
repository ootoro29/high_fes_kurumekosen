import Comic from "@/app/ui/comic";
import Back from "../ui/back";

export default function fractal(){
    return(
        <>
            <Back />
            <Comic name = "超立方体" size = {6} />
            <Back />
        </>
    );
}
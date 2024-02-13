import Comic from "@/app/ui/comic";
import Back from "../ui/back";

export default function fractal(){
    return(
        <>
            <Back />
            <Comic name = "二重振り子_反応拡散方程式" size = {7} />
            <Back />
        </>
    );
}
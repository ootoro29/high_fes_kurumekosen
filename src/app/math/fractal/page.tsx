import Comic from "@/app/ui/comic";
import Back from "../ui/back";

export default function fractal(){
    return(
        <>
            <Back />
            <Comic name = "フラクタル" size = {5} />
            <Back />
        </>
    );
}
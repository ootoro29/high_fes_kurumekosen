import Comic from "@/app/ui/comic";
import Back from "../ui/back";

export default function Complex(){
    return(
        <>
            <Back />
            <Comic name = "複素関数" size = {10} />
            <Back />
        </>
    );
}
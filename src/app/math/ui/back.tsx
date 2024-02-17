import Link from "next/link";

export default function Back(){
    return(
        <>
        <Link href="/math">
            <div className="bg-slate-200 m-2 rounded-sm text-center max-w-[640px] hover:bg-slate-300">
                戻る
            </div>
        </Link>
        </>
    );
}
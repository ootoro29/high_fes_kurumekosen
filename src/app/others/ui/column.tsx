import Link from "next/link";
import { blog } from "../page";

export default function Column({blog}:{blog:blog}){
    return (
        <div className="pb-5">
            <p><Link href = {blog.href} className="text-2xl hover:underline">{blog.title}</Link></p>
        </div>
    );
}
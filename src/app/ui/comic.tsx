"use client"
import Image from "next/image";
import localImage from "../../../public/manga/introduction/P1.png";
import { link } from "fs";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";


export default function Comic({name, size}:{name:string, size:number}){
    return (
        <div className="">
                {(() => {
                    const items = [];
                    for (let i = 1; i <= size; i++) {
                        items.push(<Suspense fallback = {<Loading />} ><Image key = {i} className=" py-2 w-auto" width = {640} height={360} src = {`/manga/${name}/P${i}.png`} alt = "" priority={true} /></Suspense>)
                    }
                    return <ul>{items}</ul>;
                })()}
        </div>
    );
}
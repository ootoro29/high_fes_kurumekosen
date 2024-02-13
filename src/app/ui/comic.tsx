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
            <Suspense fallback = {<Loading />} >
                {(() => {
                    const items = [];
                    for (let i = 1; i <= size; i++) {
                        items.push(<Image key = {i} className=" py-2 w-auto" width = {640} height={360} src = {`/manga/${name}/P${i}.png`} alt = "" priority={true} />)
                    }
                    return <ul>{items}</ul>;
                })()}
            </Suspense>
        </div>
    );
}
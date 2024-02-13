"use client"
import Image from "next/image";
import localImage from "../../../public/manga/introduction/P1.png";
import { link } from "fs";
import Link from "next/link";


export default function Comic({name, size}:{name:string, size:number}){
    return (
        <div className="">
            {(() => {
                const items = [];
                for (let i = 1; i <= size; i++) {
                    items.push(<Image key = {i} className=" py-2 " width = {640} height={360} src = {`/manga/${name}/P${i}.png`} alt = "" />)
                }
                return <ul>{items}</ul>;
            })()}
        </div>
    );
}
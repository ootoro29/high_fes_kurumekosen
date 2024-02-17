import { Children } from "react";
import Comic_Cloum from "../ui/com_col";

export type comic = {
    id:number;
    title: string;
    description: string;
    href: string;
};

const comics:comic[] = [
    {
        id: 1,
        title: '複素関数色描画',
        description: "複素関数を色を使って描画します。",
        href: "/math/complex"
    },
    {
        id: 2,
        title: 'フラクタル',
        description: "自己相似性を持つ図形のお話",
        href: "/math/fractal"
    },
    {
        id: 3,
        title: '超立方体',
        description: "高次元の立方体を描画します。",
        href: "/math/tesseract"
    },
    {
        id: 4,
        title: '二重振り子＆反応拡散方程式',
        description: "微分方程式を数値計算で解いてシミュレーションします。",
        href: "/math/simulation"
    },
    {
        id: 5,
        title: 'AI',
        description: "人工知能(深層学習)で関数近似をします。",
        href: "/math/deeplearning"
    },
];



export default function Math(){
    return(
        <>
            <h1 className="text-3xl font-bold">数理アート解説漫画</h1>
            <p>数理アートという名の数学を使ったデジタルアートを紹介していきます。</p>
            {comics.map((comic) =>{
                return(
                    <div className="indent-4" key = {comic.id}>
                        <Comic_Cloum comic = {comic}/>
                    </div>
                );
            })}
            <h1 className="text-3xl font-bold">数学解説漫画</h1>
            <p>数理アートを理解するための数学の諸概念を解説する漫画です。</p>
        </>
    );
}
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
    {
        id: 6,
        title: '強化学習＆深層強化学習',
        description: "試行錯誤するAIについてです",
        href: "/math/reinforcementlearning"
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
            <p>イベント当日、ホワイトボードが使えることが確定したため、<b>数学の質問があれば何でも聞いてください。</b>上の内容に関係ないことでも大丈夫です。</p>
        </>
    );
}
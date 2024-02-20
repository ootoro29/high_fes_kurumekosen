import Image from "next/image"

export default function STG(){
    return(
        <>
           <div className="py-2">
                <h1 className="w-full text-4xl font-bold p-1 -indent-1">フリーランチ</h1>
                <p className="indent-5">ジャンル:3Dシューティングゲーム</p>
                <p className="indent-5">左右から流れてくるマトを、撃って撃って撃ちまくりましょう！壊した数に応じてスコアが変動します。目標スコアは1万6000点！</p>
            </div>

            <div>
                <p className="font-bold">↓プレイ中の画面↓</p>
                <Image className=" py-2 w-auto" width = {640} height={360} src = {`/game2-op.jpg`} alt = "" priority={true} />
            </div>

            <div className="py-2">
                <h1 className="w-full text-2xl font-bold indent-3">猫ミーム</h1>
                <iframe className="aspect-video w-full max-w-[640px]" width="560" height="315" src="https://www.youtube.com/embed/G4_Ck977UBk?si=aJ9Vi0U9eEMXUuNK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </>
    );
}
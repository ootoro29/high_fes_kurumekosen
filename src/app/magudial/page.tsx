import Image from "next/image";
export default function STG(){
    return(
        <>
            <div className="py-2">
                <h1 className="w-full text-4xl font-bold p-1 -indent-1">MAGUDIAL</h1>
                <p className="indent-5">ジャンル:2D全方位シューティングゲーム</p>
                <p className="indent-5">敵の弾幕をうまく掻い潜りこちらの攻撃を当てていく、スピード感のあるゲームになっています。</p>
            </div>
            <div>
                <p className="font-bold">↓タイトル画面↓</p>
                <Image className=" py-2 w-auto" width = {640} height={360} src = {`/game1.png`} alt = "" priority={true} />
            </div>
            <div>
                <p className="font-bold">↓プレイ中の画面↓</p>
                <Image className=" py-2 w-auto" width = {640} height={360} src = {`/game1-op.png`} alt = "" priority={true} />
            </div>
            <div className="py-2">
                <h1 className="w-full text-2xl font-bold indent-3">操作方法</h1>
                <p className="indent-5">Wキーで上方向に移動</p>
                <p className="indent-5">Aキーで左方向に移動</p>
                <p className="indent-5">Sキーで下方向に移動</p>
                <p className="indent-5">Dキーで右方向に移動</p>
                <p className="indent-5">スペースキーでダッシュ回避</p>
                <p className="indent-8 text-gray-500">水色のリングは回避のクールタイムを表す。</p>
                <p className="indent-8 text-gray-500">自機周りの黄色い円は無敵時間を表す。</p>
                <p className="indent-5">マウスの左部分を長押しして攻撃</p>
                <p className="indent-8 text-gray-500">攻撃の方向は自機からマウスポインタへの方向</p>
                <p className="indent-5">マウスの右部分を長押しで低速移動</p>
            </div>
            <div className="py-2">
                <h1 className="w-full text-2xl font-bold indent-3">クリア動画</h1>
                <iframe className="aspect-video w-full max-w-[640px]" width="560" height="315" src="https://www.youtube.com/embed/OMKHXi2cDds?si=bL1jFOxGU1nWIXt1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </>
    );
}
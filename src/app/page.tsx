import Image from "next/image";
import Comic from "./ui/comic";

export default function Home() {
  return (
    <>
    <div className="max-w-[640px]">
      <p className="text-left">Author:久留米高専生の誰か</p>
      <h1 className="text-5xl font-bold text-center">ハイスク祭用ウェブサイト</h1>
      <p className="text-center"> 未完成の代物</p>
      <br />
      <p className="text-center"> これは2024年2月24日(土)開催の「ハイスク祭のじかん」にブースで参加する久留米高専で展示する作品についての紹介とその他色々の情報を発信する目的で作られたウェブサイト(笑)です。</p>
    </div>
    <Comic name = "イントロダクション" size = {6} />
    </>
  );
}

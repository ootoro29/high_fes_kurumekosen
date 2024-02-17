import Image from "next/image";
import Comic from "./ui/comic";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="max-w-[640px]">
      <p className="text-left">Author:久留米高専生の誰か</p>
      <h1 className="text-5xl xl:text-xl  font-bold text-center">ハイスク祭用ウェブサイト</h1>
      <p className="text-center"> 未完成の代物</p>
      <br />
      <p className="text-left"> これは2024年2月24日(土)開催の「<Link href ="https://kbc.co.jp/high-fes/" className="text-sky-400 hover:underline" >ハイスク祭のじかん</Link>」にブースで参加する久留米高専で展示する作品についての紹介とその他色々の情報を発信する目的で作られたウェブサイト(笑)です。最近ReactやNext.jsを勉強しているので何か作ってみたいと思いました。するとどうやらVercelを使えば簡単にデプロイ(公開すること)できるらしい………だったらやるしかねぇ！────ってことで勢いで作ってます。拙いところしかありませんがどうぞお楽しみください。</p>
    </div>
    <Comic name = "イントロダクション" size = {6} />
    </>
  );
}

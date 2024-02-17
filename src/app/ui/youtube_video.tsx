import { YouTubeEmbed } from "@next/third-parties/google";
import { FC } from "react";

export default async function YoutubeVideo({id}:{id:string}){
  return <YouTubeEmbed videoid= {id} />;
};
import { AuthorMeta } from "./AutorMeta.interface";
import { MusicMeta } from "./MusicMeta.interface";
import { Covers } from "./Covers.interface";
import { VideoMeta } from "./VideoMeta.interface";
import { Hashtag } from "./Hashtag.interface";

export interface FeedItem {
  id: string;
  secretID: string;
  text: string;
  createTime: number;
  authorMeta: AuthorMeta;
  musicMeta: MusicMeta;
  covers: Covers;
  webVideoUrl: string;
  videoUrl: string;
  videoUrlNoWaterMark: string;
  videoApiUrlNoWaterMark: string;
  videoMeta: VideoMeta;
  diggCount: number;
  shareCount: number;
  playCount: number;
  commentCount: number;
  downloaded: boolean;
  mentions: any[];
  hashtags: Hashtag[];
  effectStickers: any[];
}

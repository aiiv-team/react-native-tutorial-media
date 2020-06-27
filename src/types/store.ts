import { VideoPlayState } from "./video";
import { Video } from "expo-av";

export type VideoState = {
  videoRef: Video | null;
  isControlPanelVisible: boolean;
  isSeekingForward: boolean;
  isSeekingBackward: boolean;
  playState: VideoPlayState;
  duration: number;
  position: number;
};

export type RootState = {
  video: VideoState;
};

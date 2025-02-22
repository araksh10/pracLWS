import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/VideosSlice";
import videoReducer from "../features/video/VideoSlice";
import tagsReducer from '../features/tags/TagsSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
  },
});

export interface Channel {
  picture: Picture;
  name: string;
  introduce: string;
  genres: Genre[];
}

interface Genre {
  genreID: number;
  genterType: number;
  genreName: string;
}
interface Picture {
  channelBlackWhites: string[];
  backgrounds: string[];
  channelPics: string[];
}
export interface ChannelResponse {
  total: number;
  channelDetails: Channel[];
}

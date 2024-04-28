export interface Media {
  type: 'image' | 'video';
  url: string;
}

export interface IFeed {
  id: number;
  seller: {
    username: string;
    profile: string;
  };
  medias: Media[];
  title: string;
  content: string;
  price: number;
  counts: {
    stock: number;
    like: number;
    comment: number;
    views: number;
  };
  liked: boolean;
  createdAt: string;
}

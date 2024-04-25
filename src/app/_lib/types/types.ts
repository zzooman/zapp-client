export interface Media {
  type: 'image' | 'video';
  url: string;
}

export interface Feed {
  seller: {
    username: string;
    profile: string;
  };
  media: Media[];
  title: string;
  content: string;
  price: number;
  counts: {
    stock: number;
    like: number;
    comment: number;
  };
}

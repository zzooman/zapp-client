export interface Media {
  type: 'image' | 'video';
  url: string;
  file: File;
}

export interface Post {
  title: string;
  content: string;
  price: string;
  stock: number;
  medias: Media[];
}

export interface CreatePostParams {
  title: string;
  content: string;
  price: string;
  stock: number;
  medias: string[];
}

export interface S3UploadResponse {
  Key: string;
  Location: string;
  Bucket: string;
  ETag: string;
}

'use client';
import Container from '@/components/common/Container';
import { FlexBox } from '@/components/common/ui/FlexBox';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateFeedPage() {
  const router = useRouter();
  const [image, setImage] = useState<string>();
  const [video, setVideo] = useState<string>();

  const onImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.onload = () => {
        setImage(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const onVideoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const fileReader = new FileReader();
    if (file) {
      fileReader.onload = () => {
        const videoUrl = URL.createObjectURL(file);
        setVideo(videoUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <header className="fixed top-0 left-0 flex justify-between items-center w-full h-16 p-4">
        <span onClick={router.back} className="text-sm">
          Cancel
        </span>
        <button className="bg-point-500 px-3 py-1 rounded-full text-sm">Post</button>
      </header>
      <section className="pt-16">
        {image && <img src={image} alt="image" className="w-full h-96 object-cover" />}
        {video && <video src={video} controls className="w-full h-96 object-cover" />}
        <textarea placeholder="What's happening?" className="w-full h-[40vh] p-4 text-lg outline-none"></textarea>
      </section>
      <FlexBox justify="around" align="center" classNames="fixed bottom-0 left-0 w-full h-16">
        <div>
          <label htmlFor="image">image</label>
          <input id="image" type="file" accept="image/*" className="hidden" onInput={onImageInput} />
        </div>
        <div>
          <label htmlFor="video">video</label>
          <input id="video" type="file" accept="video/*" className="hidden" onInput={onVideoInput} />
        </div>
      </FlexBox>
    </Container>
  );
}

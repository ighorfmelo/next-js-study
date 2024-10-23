import { Video } from "../models";
 
export async function getVideos():Promise<Video[]> {
  const response = await fetch('http://localhost:8000/videos');
  return response.json();
}

export default async function Videos() {
  const videos = await getVideos();
  console.log(videos);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Pagina 1</h1>
    </div>
  );
}

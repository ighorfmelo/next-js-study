import { Video } from "../models";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
 
export async function getVideos():Promise<Video[]> {
  await sleep(5000);
  const response = await fetch('http://localhost:8000/videos');
  return response.json();
}

export default async function VideoList() {
	const videos = await getVideos();
  console.log(videos);
  return (
    <div>
      <h1 className="text-primary">Listagem de Vídeos</h1>
      <ul>
        {
          videos.map((video) => (
            <li key={video.id}>
              <h2 className="text-primary">{video.title}</h2>
              <img src={video.thumbnail} alt={video.title} />
              <p className="text-primary">{video.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
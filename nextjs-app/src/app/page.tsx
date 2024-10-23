import VideoList from "./components/VideoList";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <VideoList />
    </main>
  );
}

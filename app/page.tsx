import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1>Zaopiekuj się mną</h1>
      <Image src='/images/baner.jpg' width={1024} height={453} alt="Profile" />
    </main>
  );
}

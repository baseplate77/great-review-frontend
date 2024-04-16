import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <div className="flex gap-4 items-center justify-center h-full">
        <Image
          src={"/applogo.png"}
          width={90}
          height={95}
          alt="Great Review Logo"
        />
        <div className="font-bold text-3xl ">
          Great Review AI Review Summary
        </div>
      </div>
      <div> Work in progress..</div>
    </main>
  );
}

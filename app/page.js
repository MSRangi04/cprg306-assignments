import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col space-y-2 mt-4">
        <Link href="/week-2" className="text-2xl text-cyan-600 hover:text-cyan-400">Week 2</Link>
        <Link href="/week-3" className="text-2xl text-cyan-600 hover:text-cyan-400">Week 3</Link>
      </div>
    </>
  );
}

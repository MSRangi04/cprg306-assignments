import Link from "next/link";

export default function Student_info() {
  return (
    <main>
      <h1 className="text-3xl">Name - Manraj Singh Rangi</h1>
      <h1 className="text-3xl">Student ID - 000948452</h1>
      <h3 className="text-2xl">GitHub Link - <Link href="https://github.com/SAIT-SP2025/sp2025-cprg306c-classexamples.git" className="text-cyan-600 hover:text-cyan-400">Click Here</Link></h3>
   </main>
);
}
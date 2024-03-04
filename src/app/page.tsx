import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="grid place-content-center min-h-screen">
      <h1>{JSON.stringify(session?.user)}</h1>
      <Link href='/blog'>blog</Link>
    </main>
  );
}

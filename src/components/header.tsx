import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-50 h-12 flex items-center justify-center px-2 lg:px-0">
      <div className="max-w-5xl w-full">
        <div className="flex justify-between items-center">
          <Link className="text-zinc-800 font-bold text-2xl" href='/'>Blog.</Link>
          <div className="text-sm flex gap-3 items-center">
            <Link href='/login'>Login</Link>
            <Link href='/register' className="px-3 py-2 rounded-full bg-zinc-900 text-zinc-50 font-bold">Cadastre-se</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
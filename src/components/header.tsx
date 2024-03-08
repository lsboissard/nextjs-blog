'use client'
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import { signOut, useSession } from 'next-auth/react'

export default function Header() {
  const { data: session, status } = useSession()

  async function handleLogout() {
    await signOut({ redirect: false });
  }

  return (
    <header className="bg-zinc-50 dark:bg-zinc-900 h-12 flex items-center justify-center px-2 lg:px-0">
      <div className="max-w-5xl w-full">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Link className="text-zinc-900 font-bold text-2xl dark:text-zinc-50" href='/'>Blog.</Link>
          </div>
          <div className="text-sm flex gap-3 items-center">
            {/* <span>{status}</span> */}
            {status === 'authenticated' && session?.user?.name &&
              <>
                <span>{session.user.name}</span>
                <button onClick={handleLogout}>Logout</button>
              </>
            }

            {status === 'unauthenticated' &&
              <>
                <Link href='/login'>Login</Link>
                <Link href='/register' className="px-3 py-2 rounded-full bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 text-zinc-50 font-bold">Cadastre-se</Link>
              </>
            }
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
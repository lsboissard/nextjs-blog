'use client'

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  function togglePasswordVisibility(event: any) {
    event.preventDefault()
    setIsPasswordVisible(!isPasswordVisible)
  }
  return (
    <div className="max-w-5xl mx-auto h-screen flex items-center justify-center -translate-y-12 pointer-events-none" >
      <div className="flex flex-col gap-3 md:w-[440px] p-5 pointer-events-auto">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold">Login</h1>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg> */}
        </div>

        <h3>Acesse sua conta do Blog.</h3>
        <form className="flex flex-col gap-3" action="">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-zinc-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <input placeholder="digite seu e-mail" type="email" name="email" className="ps-10 w-full rounded-md border border-zinc-300 p-2 placeholder-zinc-300 focus:border-zinc-400 focus:outline-none focus:ring focus:ring-zinc-100" />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-zinc-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="16" r="1" />
                <rect x="3" y="10" width="18" height="12" rx="2" />
                <path d="M7 10V7a5 5 0 0 1 10 0v3" />
              </svg>
            </div>
            <input
              placeholder="digite sua senha"
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              className="ps-10 pe-10 w-full rounded-md border border-zinc-300 p-2 placeholder-zinc-300 focus:border-zinc-400 focus:outline-none focus:ring focus:ring-zinc-100"
            />
            <div className="select-none cursor-pointer absolute inset-y-0 end-0 flex items-center pe-3" onClick={togglePasswordVisibility}>
              {!isPasswordVisible && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-zinc-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
              {isPasswordVisible && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-zinc-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              )}
            </div>
          </div>
          <button type="submit" className="rounded-md px-3 py-2 bg-zinc-900 text-zinc-50">Continuar com E-mail</button>
          <div className=" text-center border-b border-zinc-200 my-3" style={{ lineHeight: 0 }}>
            <span className="px-2 text-xs font-semibold tracking-wide text-zinc-600 uppercase bg-white" style={{ lineHeight: 0 }}>Ou</span>
          </div>
          <button type="submit" className="rounded-md px-3 py-2 bg-[#3b5998] hover:bg-[#3b5998]/85 text-zinc-50">
            <div className="flex items-center justify-center gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span>Continuar com Facebook</span>
            </div>
          </button>
          <button type="submit" className="rounded-md px-3 py-2 bg-[#1a73e8] hover:bg-[#1a73e8]/85 text-zinc-50">
            <div className="flex items-center justify-center gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" x2="12" y1="8" y2="8" />
                <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
              </svg>
              <span>Continuar com Google</span>
            </div>
          </button>
          <p className="px-8 text-center text-xs mt-3">
            Ao continuar, você aceita os{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:no-underline">
              Termos de Uso
            </Link>
            {" "}e a{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:no-underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
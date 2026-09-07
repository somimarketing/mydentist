import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[720px] flex-col justify-center px-6 py-24">
      <Logo tone="black" className="text-[21px]" />
      <h1 className="mt-16 font-display text-display-l">404</h1>
      <p className="mt-4 text-body text-slate">Esta página no existe. This page does not exist.</p>
      <div className="mt-10 flex gap-6 text-ui font-bold underline underline-offset-[6px]">
        <Link href="/es">Español</Link>
        <Link href="/en">English</Link>
      </div>
    </main>
  );
}

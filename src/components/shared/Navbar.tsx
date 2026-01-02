import Link from "next/link"

import { NAV_LINKS } from "@/constants/navigation"

const Navbar = () => {
    return (
        <header className="relative sticky top-0 z-50 w-full border-b border-white/60 bg-white/70 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_top,_rgba(59,130,246,0.12),_transparent_55%)]" />
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="group inline-flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-teal-400 text-white shadow-[0_18px_30px_-18px_rgba(15,23,42,0.6)]">
                        <span className="text-sm font-extrabold tracking-tight">KN</span>
                    </span>
                    <span className="flex flex-col leading-tight">
                        <span className="text-lg font-extrabold tracking-tight text-slate-900">
                            KNW
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">
                            Life Skills
                        </span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="group relative text-sm font-semibold tracking-wide text-slate-600 transition hover:text-slate-900"
                        >
                            {link.label}
                            <span className="absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 bg-slate-900 transition group-hover:scale-x-100" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="#contact-us"
                        className="hidden items-center justify-center rounded-full border border-slate-200 bg-white/90 px-5 py-2 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_-22px_rgba(15,23,42,0.6)] transition hover:border-slate-300 hover:bg-white sm:inline-flex"
                    >
                        Get Started
                    </Link>

                    <details className="relative lg:hidden">
                        <summary className="list-none rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.5)] transition hover:border-slate-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
                            Menu
                        </summary>
                        <div className="absolute right-0 mt-3 w-60 rounded-2xl border border-white/60 bg-white/95 p-3 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.7)] backdrop-blur-xl">
                            <nav className="flex flex-col gap-1" aria-label="Mobile">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={`${link.label}-mobile`}
                                        href={link.href}
                                        className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                            <Link
                                href="#contact-us"
                                className="mt-3 flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(15,23,42,0.6)] transition hover:bg-slate-800"
                            >
                                Get Started
                            </Link>
                        </div>
                    </details>
                </div>
            </div>
        </header>
    )
}

export default Navbar

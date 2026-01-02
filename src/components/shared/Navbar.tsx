import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top rail */}
            <div className="relative border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
                {/* Ambient */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_top_left,rgba(99,102,241,0.10),transparent_60%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_top_right,rgba(14,165,233,0.10),transparent_60%)]" />
                    <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/75 to-white/65" />
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="flex h-16 items-center justify-between gap-3 sm:h-18">
                        {/* Brand (new look) */}
                        <Link href="/" className="group inline-flex items-center gap-3">
                            <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white shadow-[0_18px_50px_-34px_rgba(15,23,42,0.85)] sm:h-11 sm:w-11">
                                <span className="text-[12px] font-black tracking-tight sm:text-[13px]">
                                    KN
                                </span>
                                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                                {/* subtle corner glint */}
                                <span className="pointer-events-none absolute -right-2 -top-2 h-8 w-8 rounded-full bg-white/10 blur-xl opacity-0 transition group-hover:opacity-100" />
                            </span>

                            <span className="flex flex-col leading-tight">
                                <span className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                                    KNW
                                </span>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                                    Life Skills Platform
                                </span>
                            </span>
                        </Link>

                        {/* Desktop navigation (centered pill) */}
                        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                            <nav
                                aria-label="Primary"
                                className="relative inline-flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.55)] backdrop-blur"
                            >
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="group relative rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        <span className="pointer-events-none absolute inset-0 rounded-full bg-slate-900/3 opacity-0 transition group-hover:opacity-100" />
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Right side: just menu/search placeholders (no CTAs) */}
                        <div className="flex items-center gap-2">
                            {/* Small icon-ish button (pure Tailwind, no deps) */}
                            <Link
                                href="/"
                                className="hidden items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-800 shadow-[0_14px_34px_-30px_rgba(15,23,42,0.5)] transition hover:bg-white lg:inline-flex"
                                aria-label="Home shortcut"
                            >
                                <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-900/4 ring-1 ring-slate-200/70">
                                    <span className="block h-2 w-2 rounded-full bg-slate-900/70" />
                                </span>
                                <span className="hidden xl:block">Home</span>
                            </Link>

                            {/* Mobile menu */}
                            <details className="group relative lg:hidden">
                                <summary className="list-none">
                                    <span className="inline-flex items-center justify-center rounded-full border border-slate-200/70 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-900 shadow-[0_14px_34px_-30px_rgba(15,23,42,0.5)] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200">
                                        <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-900/4 ring-1 ring-slate-200/70">
                                            {/* hamburger -> X */}
                                            <span className="relative block h-3.5 w-4">
                                                <span className="absolute left-0 top-0 block h-0.5 w-4 rounded bg-slate-900 transition group-open:top-1.5 group-open:rotate-45" />
                                                <span className="absolute left-0 top-1.5 block h-0.5 w-4 rounded bg-slate-900 transition group-open:opacity-0" />
                                                <span className="absolute left-0 top-3 block h-0.5 w-4 rounded bg-slate-900 transition group-open:top-1.5 group-open:-rotate-45" />
                                            </span>
                                        </span>
                                        <span className="ml-2 hidden sm:inline">Menu</span>
                                    </span>
                                </summary>

                                <div className="absolute right-0 mt-3 w-[min(94vw,24rem)] overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.85)] backdrop-blur-xl">
                                    <div className="p-3">
                                        {/* Quick header */}
                                        <div className="rounded-2xl border border-slate-200/60 bg-slate-50 px-4 py-3">
                                            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-slate-700">
                                                Menu
                                            </p>
                                            <p className="mt-1 text-xs text-slate-600">
                                                Browse pages and sections.
                                            </p>
                                        </div>

                                        {/* Links */}
                                        <nav className="mt-2 flex flex-col gap-1" aria-label="Mobile">
                                            {NAV_LINKS.map((link) => (
                                                <Link
                                                    key={`${link.label}-m2`}
                                                    href={link.href}
                                                    className="group relative rounded-2xl px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200"
                                                >
                                                    <span className="relative z-10">{link.label}</span>
                                                    <span className="pointer-events-none absolute inset-y-0 left-2 my-2 w-1 rounded-full bg-indigo-500 opacity-0 transition group-hover:opacity-100" />
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>

                                    <div className="h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent" />
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

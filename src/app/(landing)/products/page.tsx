import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ProductsPage() {
    return (
        <main className="px-6 py-16">
            <div className="mx-auto w-full max-w-6xl">
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-[0_30px_60px_-42px_rgba(15,23,42,0.55)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
                        Products
                    </p>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        Routine tools that feel calm, premium, and built for families.
                    </h1>
                    <p className="mt-4 max-w-3xl text-base text-slate-600">
                        From visual schedules to reward cues, KNW keeps structure consistent while
                        still feeling warm and flexible for kids.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button asChild className="rounded-full px-6">
                            <Link href="/contact-us">Book a walkthrough</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full px-6">
                            <Link href="/what-we-do">See how it works</Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "Visual Schedules",
                            copy: "Build routines with clear steps, icons, and calming prompts.",
                        },
                        {
                            title: "Reward Moments",
                            copy: "Gentle reinforcement that celebrates progress without pressure.",
                        },
                        {
                            title: "Parent Controls",
                            copy: "Adjust routines, set reminders, and guide with confidence.",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_40px_-30px_rgba(15,23,42,0.45)]"
                        >
                            <h2 className="text-lg font-semibold text-slate-900">
                                {item.title}
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function WhoWeArePage() {
    return (
        <main className="px-6 py-16">
            <div className="mx-auto w-full max-w-6xl">
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-[0_30px_60px_-42px_rgba(15,23,42,0.55)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
                        Who We Are
                    </p>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        A small team obsessed with helping kids feel capable every day.
                    </h1>
                    <p className="mt-4 max-w-3xl text-base text-slate-600">
                        We blend education, design, and family-centered research to build routines
                        that feel supportive, not rigid.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "Family-first research",
                            copy: "Built alongside caregivers who want calm, predictable days.",
                        },
                        {
                            title: "Educational insight",
                            copy: "Rooted in practices from teachers, therapists, and coaches.",
                        },
                        {
                            title: "Crafted design",
                            copy: "Every touchpoint is intentional, warm, and easy to follow.",
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

                <div className="mt-12 flex flex-wrap items-center gap-3">
                    <Button asChild className="rounded-full px-6">
                        <Link href="/contact-us">Meet the team</Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full px-6">
                        <Link href="/products">View the products</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
    return (
        <main className="px-6 py-16">
            <div className="mx-auto w-full max-w-6xl">
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-[0_30px_60px_-42px_rgba(15,23,42,0.55)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
                        Contact Us
                    </p>
                    <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        Let&apos;s build calm routines together.
                    </h1>
                    <p className="mt-4 max-w-3xl text-base text-slate-600">
                        Share a little about your family, classroom, or program and we will help
                        you get started with KNW.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button asChild className="rounded-full px-6">
                            <Link href="mailto:hello@knw.app">Email us</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full px-6">
                            <Link href="/products">See products</Link>
                        </Button>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_40px_-30px_rgba(15,23,42,0.45)]">
                        <h2 className="text-lg font-semibold text-slate-900">Talk with us</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Schedule a walkthrough and see how KNW fits into your day.
                        </p>
                        <p className="mt-4 text-sm font-semibold text-slate-800">
                            hello@knw.app
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_22px_40px_-30px_rgba(15,23,42,0.45)]">
                        <h2 className="text-lg font-semibold text-slate-900">Support hours</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Monday - Friday, 9:00am - 6:00pm
                        </p>
                        <p className="mt-4 text-sm font-semibold text-slate-800">
                            Remote, global support
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

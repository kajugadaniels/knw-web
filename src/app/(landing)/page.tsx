import { Button } from "@/components/ui/button"
import React from "react"

const Home = () => {
    return (
        <div>
            <section className="px-6 py-16">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Welcome to KNW
                    </span>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        Build calm, confident routines for kids.
                    </h1>
                    <p className="max-w-2xl text-base text-slate-600">
                        Visual schedules, positive reinforcement, and gentle guidance that help
                        families build independence without overwhelm.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button className="rounded-full px-6">Start a Routine</Button>
                        <Button variant="outline" className="rounded-full px-6">
                            See how it works
                        </Button>
                    </div>
                </div>
            </section>

            <section id="products" className="px-6 py-16">
                <div className="mx-auto w-full max-w-6xl">
                    <h2 className="text-2xl font-bold text-slate-900">Products</h2>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        Routine builders, visual checklists, and reward trackers that meet kids
                        where they are.
                    </p>
                </div>
            </section>

            <section id="who-we-are" className="px-6 py-16">
                <div className="mx-auto w-full max-w-6xl">
                    <h2 className="text-2xl font-bold text-slate-900">Who We Are</h2>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        Educators, caregivers, and product builders focused on calm, practical
                        routines.
                    </p>
                </div>
            </section>

            <section id="what-we-do" className="px-6 py-16">
                <div className="mx-auto w-full max-w-6xl">
                    <h2 className="text-2xl font-bold text-slate-900">What We Do</h2>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        We craft tools that turn daily tasks into playful, achievable moments.
                    </p>
                </div>
            </section>

            <section id="contact-us" className="px-6 py-20">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.6)]">
                    <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
                    <p className="max-w-2xl text-slate-600">
                        Ready to bring KNW to your family or school? Let&apos;s talk.
                    </p>
                    <Button className="w-fit rounded-full px-6">Get in touch</Button>
                </div>
            </section>
        </div>
    )
}

export default Home

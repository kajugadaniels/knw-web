import type { ReactNode } from "react";

import Navbar from "@/components/shared/Navbar";

export default function HomeLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

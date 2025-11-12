"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "home" },
        { href: "/notes", label: "notes" },
    ];

    return (
        <header className="max-w-xl w-full mx-auto">
            <nav className="flex gap-5 pt-12">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`border-b-2 border-dotted hover:border-solid
                            ${pathname === href ? `border-solid` : `border-dotted`}
                            `}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

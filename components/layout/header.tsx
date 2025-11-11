import Link from "next/link";

export default function Header() {
    return (
        <header className="max-w-xl w-full mx-auto">
            <nav className="flex gap-5 pt-12">
                <Link href="/">home</Link>
                <Link href="/notes">notes</Link>
            </nav>
        </header>
    );
}

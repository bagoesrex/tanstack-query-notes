import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotesDetailLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative">
            <div className="sticky top-0 z-50 flex justify-end p-2">
                <Link
                    href="/"
                    className="flex flex-row items-center gap-2 px-2 py-0.5 text-md rounded border border-dashed hover:border-solid bg-white dark:bg-black"
                >
                    <ArrowLeft size={17} />
                    Back to notes
                </Link>
            </div>
            <div className="-mt-9">
                {children}
            </div>
        </div>
    )
}
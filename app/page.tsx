export const dynamic = "force-static";

import NoteCard from "@/components/notes/note-card"
import { getAllMdxMetadata } from "@/lib/mdx-utils"
import Link from "next/link"

export default async function Home() {
    const notes = await getAllMdxMetadata()

    return (
        <main className="min-h-screen max-w-xl w-full mx-auto mt-12">
            <section id="hero">
                <h1 className="font-semibold text-xl tracking-tighter mb-5">My TanStack Query Journey | Bagoes Rex</h1>
                <p className="mb-5">These are my personal notes from exploring TanStack Query. Hopefully, they’ll help others who are on the same learning journey.</p>
            </section>
            <section id="notes">
                <Link href="/notes" className="block mb-3 w-fit border-b-2 border-dashed hover:border-solid">
                    Notes
                </Link>
                <div className="flex flex-col gap-1.5">
                    {notes
                        .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                        .slice(0, 3)
                        .map((note) => (
                            <NoteCard key={note.slug} note={note} />
                        ))}
                </div>
            </section>
        </main>
    )
}

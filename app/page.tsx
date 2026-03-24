export const dynamic = "force-static";

import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import NoteCard from "@/components/notes/note-card"
import { getAllMdxMetadata } from "@/lib/mdx-utils"

export default async function Home() {
    const notes = await getAllMdxMetadata()

    return (
        <main className="min-h-screen bg-gray-100/80">
            <MaxWidthWrapper className="space-y-7 pt-25 pb-10">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">Notes</h1>
                    <p className="text-gray-700 text-sm">Catatan belajar TanStack Query</p>
                </div>
                <div className="flex flex-col gap-3">
                    {notes
                        .sort((a, b) => a.order - b.order)
                        .map((note) => (
                            <NoteCard key={note.slug} note={note} />
                        ))}
                </div>
            </MaxWidthWrapper>
        </main>
    )
}

export const dynamic = "force-static";

import NoteCard from "@/components/notes/note-card"
import { getAllMdxMetadata } from "@/lib/mdx-utils"

export default async function NotesPage() {
    const notes = await getAllMdxMetadata()

    return (
        <>
            <h1 className="font-semibold text-xl tracking-tighter mb-5">Notes</h1>
            <div className="flex flex-col gap-1.5">
                {notes
                    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                    .map((note) => (
                        <NoteCard key={note.slug} note={note} />
                    ))}
            </div>
        </>
    )
}
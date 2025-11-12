import { getAllMdxMetadata } from "@/lib/mdx-utils"

export default function NotesPage() {
    const notes = getAllMdxMetadata()

    return (
        <section className="min-h-screen max-w-xl w-full mx-auto">
            <h1 className="font-semibold text-xl mt-12 tracking-tighter">Notes</h1>
            {notes.map((note) => (
                <div key={note.slug}>
                    <p>{note.title}</p>
                    <p>{note.slug}</p>
                    <p>{note.createdAt}</p>
                </div>
            ))}
        </section>
    )
}
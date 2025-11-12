import { getAllMdxMetadata } from "@/lib/mdx-utils"

export default function NotesPage() {
    const notes = getAllMdxMetadata()

    return (
        <>
            <h1 className="font-semibold text-xl tracking-tighter">Notes</h1>
            {
                notes.map((note) => (
                    <div key={note.slug}>
                        <p>{note.title}</p>
                        <p>{note.slug}</p>
                        <p>{note.createdAt}</p>
                    </div>
                ))
            }
        </>
    )
}
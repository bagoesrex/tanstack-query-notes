import { Note } from "@/types/note"
import Link from "next/link"

interface NoteCardProps {
    note: Note
}

export default function NoteCard({ note }: NoteCardProps) {
    return (
        <Link
            key={note.title}
            href={`/notes/${note.slug}`}
            className="group"
        >
            <div className="flex items-center gap-5">
                <p className="text-sm text-zinc-500 min-w-[140px]">
                    {new Date(note.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
                <h2 className="text-md capitalize border-b border-dashed group-hover:border-solid">
                    {note.title}
                </h2>
            </div>
        </Link>
    )
}
import { Note } from "@/types/note"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface NoteCardProps {
    note: Note
}

export default function NoteCard({ note }: NoteCardProps) {
    return (
        <Link
            key={note.title}
            href={`/notes/${note.slug}`}
            className="group "
        >
            <div className="flex gap-5 justify-between items-center bg-white px-4 py-3 rounded-md group-hover:ring ring-amber-400 group-hover:-translate-y-0.5 group-hover:shadow-md duration-200">
                <div className="space-y-1">
                    <p className="text-xs text-zinc-500 min-w-[140px]">
                        {new Date(note.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <h2 className="text-sm font-medium capitalize">
                        {note.title}
                    </h2>
                </div>
                <div>
                    <div className="p-2 bg-gray-200/60 group-hover:bg-amber-400 duration-200 group-hover:text-white rounded-full">
                        <ArrowRight className="size-3" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
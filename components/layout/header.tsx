import { getTotalNotes } from "@/lib/mdx-utils";
import { Notebook } from "lucide-react";

export default function Header() {
    const totalNotes = getTotalNotes()

    return (
        <header className="fixed w-full z-50 border-b border-gray-500/50 bg-white/80 px-0 backdrop-blur-lg">
            <div className="mx-auto flex w-full max-w-xl items-center justify-between rounded-xs px-4 py-2.75">
                <div className="flex gap-2 items-center">
                    <div className="bg-amber-400 size-fit p-1.5 rounded-md text-white">
                        <Notebook className="size-4" />
                    </div>
                    <span className="font-bold">Tanstack Query</span>
                </div>
                <div className="flex text-gray-600 gap-1 items-center">
                    <span className="text-xs">{totalNotes}</span>
                    <span className="text-xs">catatan</span>
                </div>
            </div>
        </header>
    );
}

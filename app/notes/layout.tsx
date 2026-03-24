import "./style.css";

export default function NotesLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen max-w-xl w-full mx-auto pt-25 pb-10 px-3 font-inter">
            {children}
        </main>
    )
}
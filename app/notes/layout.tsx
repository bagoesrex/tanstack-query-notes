import "./style.css";

export default function NotesLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="min-h-screen max-w-xl w-full mx-auto mt-12">
            {children}
        </section>
    )
}
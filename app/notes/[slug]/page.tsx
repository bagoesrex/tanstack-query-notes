import { getAllMdxSlugs, getMdxComponent } from "@/lib/mdx-utils";

export async function generateStaticParams() {
    const slugs = getAllMdxSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function NotesDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const MdxComponent = await getMdxComponent(slug);

    if (!MdxComponent) {
        return (
            <h1 className="font-semibold text-xl tracking-tighter capitalize">
                Notes not found
            </h1>
        );
    }

    return (
        <>
            <h1 className="font-semibold text-xl tracking-tighter capitalize">
                {slug}
            </h1>
            <MdxComponent />
        </>
    );
}

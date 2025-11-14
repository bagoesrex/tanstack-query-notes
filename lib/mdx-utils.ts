import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "content");

export async function getAllMdxMetadata() {
    const files = fs.readdirSync(contentDir);

    const results = await Promise.all(
        files
            .filter((file) => file.endsWith(".mdx"))
            .map(async (file) => {
                const filePath = path.join(contentDir, file);
                const stats = fs.statSync(filePath);

                const name = path.parse(file).name;
                const slug = name.trim().toLowerCase().replace(/\s+/g, "-");

                const module = await import(`@/content/${file}`);
                const mdxMeta = module.metadata ?? {};

                return {
                    title: mdxMeta.title ?? name,
                    slug: slug,
                    createdAt:
                        mdxMeta.createdAt ??
                        stats.birthtime.toISOString(),
                    order: mdxMeta.order ?? 0
                };
            })
    );

    return results;
}

export function getAllMdxSlugs() {
    const files = fs.readdirSync(contentDir);

    return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => path.parse(file).name);
}

export async function getMdxComponent(slug: string) {
    try {
        const filename = slug
            .toLowerCase()
            .replace(/-/g, " ");
        const module = await import(`@/content/${filename}.mdx`);
        return module.default;
    } catch {
        return null;
    }
}

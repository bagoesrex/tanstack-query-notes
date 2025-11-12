import fs from "node:fs";
import path from "node:path";

const contentDir = path.join(process.cwd(), "content");

export function getAllMdxMetadata() {
    const files = fs.readdirSync(contentDir);

    return files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const filePath = path.join(contentDir, file);
            const stats = fs.statSync(filePath);

            const name = path.parse(file).name;
            const slug = name
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-");

            return {
                title: name,
                slug: slug,
                createdAt: stats.birthtime.toISOString(),
            }
        })
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

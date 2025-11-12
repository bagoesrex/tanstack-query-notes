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

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

            return {
                slug: path.parse(file).name,
                createdAt: stats.birthtime.toISOString(),
            }
        })
}

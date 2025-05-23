import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

const contentDir = path.join(process.cwd(), "app/writings/_mdx-content")

export async function getBlogBySlug(slug: string) {
    const fileName = slug + ".mdx"
    const filePath = path.join(contentDir, fileName)
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { frontmatter, content } = await compileMDX<{
        thumbnail: string
        title: string
        slug: string
        category: string
        date: string
    }>({
        source: fileContent,
        options: { parseFrontmatter: true },
    })
    return {
        frontmatter,
        content,
        slug: path.parse(fileName).name,
    }
}

export async function getBlogs() {
    const files = fs.readdirSync(contentDir)
    const blogs = await Promise.all(
        files.map(async (file) => await getBlogBySlug(path.parse(file).name))
    )
    return blogs
}

export function getAllBlogSlug() {
    const files = fs.readdirSync(contentDir)
    const slugs = files.map((file) => ({ slug: path.parse(file).name }))
    return slugs
}
import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ILink from "@/components/ilink";

// Update the type to match our MDX frontmatter
type Post = {
  title: string;
  author?: string;
  createdAt: string;
  updatedAt?: string;
  content: string;
};

async function getPost(slug: string[]): Promise<Post | null> {
  // Handle only essays/[name] route
  if (slug[0] !== 'essays' || slug.length !== 2) {
    return null;
  }

  const postName = slug[1];
  const postsDirectory = path.join(process.cwd(), 'content/essays');

  try {
    const fullPath = path.join(postsDirectory, `${postName}.mdx`);
    const fileContents = await fs.readFile(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    return {
      title: data.title,
      author: data.author,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      content: content,
    };
  } catch (error) {
    return null;
  }
}

const Page = async ({ params }: { params: { dir: string[] } }) => {
  const post = await getPost(params.dir);

  if (!post) {
    return notFound();
  }

  return (
    <article className="prose prose-lg w-full max-w-screen-lg px-4 py-8">
      <ILink href="/" className="mb-4">← Home</ILink>
      <h1 className="text-4xl font-bold mb-1">{post.title}</h1>
      <div className="text-sm text-gray-500">
        <time>Created: {new Date(post.createdAt).toISOString().split('T')[0]}</time>
        {post.updatedAt && (
          <time className="ml-4">
            Updated: {new Date(post.updatedAt).toISOString().split('T')[0]}
          </time>
        )}
        {post.author && (
          <span className="ml-4">
            Author: {post.author}
          </span>
        )}
        <Separator className="mt-4 mb-8" />
      </div>
      <MDXRemote
        source={post.content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          }
        }}
      />
    </article>
  );
};

export default Page;

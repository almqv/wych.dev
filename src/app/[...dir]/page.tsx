import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Update the type to match our MDX frontmatter
type Post = {
  title: string;
  createdAt: string;
  updatedAt: string;
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
    <article className="prose prose-lg max-w-prose mx-auto py-8">
      <h1>{post.title}</h1>
      <div className="text-sm text-gray-500">
        <time>Created: {new Date(post.createdAt).toLocaleDateString()}</time>
        {post.updatedAt && (
          <time className="ml-4">
            Updated: {new Date(post.updatedAt).toLocaleDateString()}
          </time>
        )}
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

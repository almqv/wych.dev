import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type PostMeta = {
  title: string;
  createdAt: string;
  slug: string;
};

async function getPosts(): Promise<PostMeta[]> {
  const postsDirectory = path.join(process.cwd(), 'content/essays');
  const files = await fs.readdir(postsDirectory);
  
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async (file) => {
        const fullPath = path.join(postsDirectory, file);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        return {
          title: data.title,
          createdAt: data.createdAt,
          slug: file.replace(/\.mdx$/, ''),
        };
      })
  );

  return posts.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-prose mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Essays</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link 
              href={`/essays/${post.slug}`}
              className="block hover:bg-gray-50 p-4 rounded-lg transition"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <time className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString()}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 
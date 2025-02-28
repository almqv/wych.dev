import ExternalNav from "@/components/externalnav";
import ILink from "@/components/ilink";
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type PostMeta = {
  title: string;
  createdAt: string;
  slug: string;
};

async function getRecentPosts(): Promise<PostMeta[]> {
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

  return posts
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 2); // Get only the 2 most recent posts
}

export default async function Home() {
  const recentPosts = await getRecentPosts();

  return (
    <main className="w-full flex justify-center px-4">
      <div className="w-full max-w-prose py-8 space-y-8">
        {/* Intro */}
        <section>
          <h1 className="text-2xl font-bold mb-4">Elias Almqvist</h1>
          <p className="text-gray-600 dark:text-gray-300">
            CEO of{" "}
            <ILink href="https://exalaboratories.com" target="_blank">
              Exa Laboratories (YC S24)
            </ILink>
            . Building energy-efficient chips for AI training & inference.
          </p>
        </section>

        {/* Recent Essays */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Essays</h2>
            <Link href="/essays" className="text-sm text-gray-500 hover:text-gray-700">
              View all →
            </Link>
          </div>
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link 
                  href={`/essays/${post.slug}`}
                  className="block hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition"
                >
                  <h3 className="font-medium">{post.title}</h3>
                  <time className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* External Links */}
        <ExternalNav className="flex gap-4" />
      </div>
    </main>
  );
}

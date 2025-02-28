import ExternalNav from "@/components/externalnav";
import ILink from "@/components/ilink";
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";

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
    .slice(0, 4); // Get only the 4 most recent posts
}

export default async function Home() {
  const recentPosts = await getRecentPosts();

  return (
    <main className="w-full flex justify-center px-4 mt-14">
      <div className="w-full max-w-screen-lg md:px-4 py-8 space-y-8">
        {/* Intro */}
        <section>
          <div className="flex space-x-8 items-center mb-4">
            <h1 className="text-xl font-bold">Elias Almqvist</h1>
            <ExternalNav className="flex gap-4" />
          </div>
          <Separator className="-mt-3 mb-4 max-w-[20rem]" />
          <div className="space-y-4">
            <p className="">
              CEO of{" "}
              <ILink href="https://exalaboratories.com" target="_blank" className="font-bold text-md">
                Exa Laboratories (YC S24)
              </ILink>
              . Building energy-efficient chips for AI training & inference.
            </p>
            <p>
              I'm a dropout, autodidactic polymath, and this is my digital notebook. Everything here is written by me, and everything here is my own opinion or philosophical beliefs. They are not intended to be taken at face value, but rather as a medium for me to personally reflect on my own thoughts as a therapeutic exercise, or just for fun.
            </p>
            <p>
              Based in the <ILink href="https://en.wikipedia.org/wiki/Silicon_Valley" target="_blank" className="font-bold text-md">Silicon Valley</ILink> (<ILink href="https://en.wikipedia.org/wiki/Bay_Area" target="_blank" className="font-bold text-md">San Francisco Bay Area</ILink>), <ILink href="https://en.wikipedia.org/wiki/United_States" target="_blank" className="font-bold text-md">United States</ILink>. Originally from <ILink href="https://en.wikipedia.org/wiki/M%C3%B6lndal" target="_blank" className="font-bold text-md">Mölndal</ILink>/<ILink href="https://en.wikipedia.org/wiki/Gothenburg" target="_blank" className="font-bold text-md">Gothenburg</ILink>, <ILink href="https://en.wikipedia.org/wiki/Sweden" target="_blank" className="font-bold text-md">Sweden</ILink>.
            </p>
          </div>
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
                  <h3 className="text-base font-medium">{post.title}</h3>
                  <time className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

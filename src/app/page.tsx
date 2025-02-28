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

async function getAllPosts(): Promise<PostMeta[]> {
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

  return posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="w-full flex justify-center px-4 mt-14">
      <div className="w-full max-w-screen-lg lg:px-4 py-8 space-y-8">
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
              I'm a dropout, autodidactic polymath, and this is my digital notebook. Everything here is written by me, and everything here is my own opinion, philosophical beliefs, or just random thoughts that have no real-world application. <span className="italic font-semibold">They are not intended to be taken at face value, as they are nothing but a medium for me to personally reflect on my own thoughts as a therapeutic exercise, or just for fun.</span>
            </p>
            <p>
              Based in <ILink href="https://en.wikipedia.org/wiki/Silicon_Valley" target="_blank" className="font-bold text-md">Silicon Valley</ILink> <ILink href="https://en.wikipedia.org/wiki/Bay_Area" target="_blank" className="font-bold text-xs">(San Francisco Bay Area)</ILink>, <ILink href="https://en.wikipedia.org/wiki/United_States" target="_blank" className="font-bold text-md">United States</ILink>. Originally from <ILink href="https://en.wikipedia.org/wiki/M%C3%B6lndal" target="_blank" className="font-bold text-md">Mölndal</ILink>/<ILink href="https://en.wikipedia.org/wiki/Gothenburg" target="_blank" className="font-bold text-md">Gothenburg</ILink>, <ILink href="https://en.wikipedia.org/wiki/Sweden" target="_blank" className="font-bold text-md">Sweden</ILink>.
            </p>
            <p>
              This entire website is open source. You can find the source code here: <ILink href="https://github.com/almqv/wych.dev" target="_blank" className="font-bold text-md">github.com/almqv/wych.dev</ILink>.
            </p>
          </div>
        </section>

        {/* Essays */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Essays</h2>
          <ul className="space-y-4">
            {posts.map((post) => (
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

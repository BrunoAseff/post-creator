import Post from "./components/Post";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function GetPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}

export default async function Home() {
  const posts = await GetPosts();

  return (
    <main className={styles.main}>
      <h1>Feed</h1>
      <Link className={styles.link} href="/add-post">
        Adicionar post
      </Link>

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        );
      })}
    </main>
  );
}

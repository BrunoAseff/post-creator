"use client";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setTitle("");
    setContent("");
  };

  return (
    <main className={styles.main}>
      <h1>Adicionar post</h1>
      <Link href={"/"} className={styles.link}>
        Voltar para o feed
      </Link>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label htmlFor="title">Titulo:</label>
          <input
            className={styles.input}
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="content">Conteudo:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className={styles.input}
          />
        </div>
        <button className={styles.button} type="submit">
          Enviar
        </button>
      </form>
    </main>
  );
}

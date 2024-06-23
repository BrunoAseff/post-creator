"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function DeletePostButton({ postId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button className={styles.deletebutton} onClick={handleClick}>
      Deletar post
    </button>
  );
}

import DeletePostButton from "./DeletePostButton";
import "./Post.css";

export default function Post({ id, title, content, authorName }) {
  return (
    <div className="card">
      <h3>{authorName}</h3>
      <h2>{title}</h2>
      <p>{content}</p>
      <DeletePostButton postId={id} />
    </div>
  );
}

import { ChangeEvent, FormEvent, useState } from "react";
import styled from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import {ptBR} from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

interface Author {
  name: string,
  role: string,
  avatarUrl: string
}

interface Content{
  type: "paragraph" | "link"
  content: string
}

export interface TypePost {
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}

interface PostProps {
  post: TypePost
}


export function Post({ post }: PostProps) {
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const [comments, setComments] = useState(["Post Foda"]);
  const [newCommentText, setCommentText] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText]);
    setCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setCommentText(event.target.value);
    console.log(newCommentText);
  }

  /* Cria uma função que filtra os comentários existentes e filtra */
  function DeleteComment(commentToDelete: string) {
    const commentWithoutDeletedOne = comments.filter((commentExistents) => {
      return commentExistents !== commentToDelete;
    });
    setComments(commentWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styled.post}>
      <header>
        <div className={styled.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styled.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styled.content}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          }
          if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styled.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe seu comentário"
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styled.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              deleteComment={DeleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}

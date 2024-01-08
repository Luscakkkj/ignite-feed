import { useState } from "react";
import { Avatar } from "./Avatar";
import styled from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

interface CommentProps {
  content: string,
  deleteComment: (comment: string) => void
}

export function Comment({ content, deleteComment }: CommentProps) {
  /* Função de clique para excluir o comentário */
  function handleDeleteComment() {
    deleteComment(content);
  }

  /* Estado de contagem de likes */
  const [likeCount, setLikeCount] = useState(0);

  /* Pega o estado mais recente do like e soma a mais 1 a cada clique */
  function handleNewLike() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styled.comment}>
      <Avatar hasBorder={false} src="https://github.com/Luscakkkj.png" alt='' />
      <div className={styled.commentBox}>
        <div className={styled.commentContent}>
          <header>
            <div className={styled.authorAndTime}>
              <strong>Lucas Gomes</strong>
              <time
                title="05 de Janeiro às 15:35"
                dateTime="2024-01-05 15:34:57"
              >
                Cerca de 1hr atrás
              </time>
            </div>

            <button
              type="button"
              onClick={handleDeleteComment}
              title="Deletar Comentário"
            >
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleNewLike}>
            <ThumbsUp size={20} />
            <span> Aplaudir {likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

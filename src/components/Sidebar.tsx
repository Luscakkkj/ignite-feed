import { Avatar } from "./Avatar.js";
import styled from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styled.sidebar}>
      <img
        className={styled.cover}
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styled.profile}>
        <Avatar hasBorder src="https://github.com/Luscakkkj.png" />
        <strong>Lucas</strong>
        <span> Técnico em DS</span>
      </div>
      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

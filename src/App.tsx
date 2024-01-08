import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, TypePost } from "./components/Post";
import styled from "./App.module.css";


const posts: TypePost[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Luscakkkj.png",
      name: "Lucas Gomes",
      role: "Técnico em DS",
    },
    content: [
      {
        type: "paragraph",
        content: "Eae 👌",
      },
      {
        type: "paragraph",
        content: "FUNCIONOU KKKKKKKKKKKKKKKKK",
      },
      {
        type: "link",
        content: "https://github.com/Luscakkkj",
      },
    ],
    publishedAt: new Date("2024-01-05 23:20:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Thaely.png",
      name: "Thaely Linhares",
      role: "Técnico em DS",
    },
    content: [
      {
        type: "paragraph",
        content: "Ai gostei não",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "link",
        content: "https://github.com/Thaely",
      },
    ],
    publishedAt: new Date("2024-01-01 23:20:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/RaphaelLima01.png",
      name: "Rafael",
      role: "Técnico em DS",
    },
    content: [
      {
        type: "paragraph",
        content: "Tá",
      },
      {
        type: "paragraph",
        content: "?",
      },
      {
        type: "link",
        content: "https://github.com/RaphaelLima01",
      },
    ],
    publishedAt: new Date("2023-12-25 23:20:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styled.wrapper}>
        <Sidebar />
        <div className="main">
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

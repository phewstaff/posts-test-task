import { FC } from "react";
import Posts from "../components/business/Posts";
import Header from "../components/ui/Header";

const PostsPage: FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Posts />
      </main>
    </>
  );
};

export default PostsPage;

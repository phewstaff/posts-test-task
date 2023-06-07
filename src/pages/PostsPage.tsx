import { FC } from "react";
import Layout from "../components/layout/Layout";
import Posts from "../components/business/Posts";

const PostsPage: FC = () => {
  return (
    <>
      <Layout>
        <Posts />
      </Layout>
    </>
  );
};

export default PostsPage;

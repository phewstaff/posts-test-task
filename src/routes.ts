import AboutMePage from "./pages/AboutMePage";
import PostsPage from "./pages/PostsPage";
import SelectedPostPage from "./pages/SelectedPostPage";
import { paths } from "./utils/const";

export const routes = [
  {
    path: paths.POSTS_ROUTE,
    Component: PostsPage,
  },
  {
    path: paths.SELECTED_POST_ROUTE,
    Component: SelectedPostPage,
  },
  {
    path: paths.ABOUT_ME_ROUTE,
    Component: AboutMePage,
  },
];

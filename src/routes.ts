import AboutMePage from "./pages/AboutMePage";
import PostsPage from "./pages/PostsPage";
import SelectedUserPage from "./pages/SelectedUserPage";
import { paths } from "./utils/const";

export const routes = [
  {
    path: paths.POSTS_ROUTE,
    Component: PostsPage,
  },

  {
    path: paths.SELECTED_USER_ROUTE,
    Component: SelectedUserPage,
  },

  {
    path: paths.ABOUT_ME_ROUTE,
    Component: AboutMePage,
  },
];

import { Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Issue } from "../components/pages/Issue";
import { PullRequest } from "../components/pages/PullRequest";
import { ErrorPage } from "../components/pages/ErrorPage";
import { Profile } from "../components/pages/Profile";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Top />} />
      <Route path="/issue" element={<Issue />} />
      <Route path="/pullRequest" element={<PullRequest />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

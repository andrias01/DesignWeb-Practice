import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react";
const ShowIfTrue = lazy(() => import("./ShowIfTrue"));
const Blog = lazy(() => import("../pages/Blog"));
const PostDetails = lazy(() => import("../pages/PostDetails"));
const Settings = lazy(() => import("./Settings"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
import Home from "../pages/Home";

function PagesRouter() {
  return (
    <div>
      <Suspense fallback={<h1>LOADING..</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showIfTrue" element={<ShowIfTrue />} />
          <Route path="/form" element={<Blog />} />
          <Route path="/form/:id" element={<PostDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

      </Suspense>
    </div>
  )
}

export default PagesRouter

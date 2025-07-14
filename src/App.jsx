// src/App.jsx  (or App.js)
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";

// ── Layout that appears on every page ──────────────────────────────────────────
function Layout() {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <div className="self-end px-6 py-2">
        <ThemeToggle />
      </div>
      <Outlet /> {/* routed pages render here */}
    </div>
  );
}

// ── Router definition ─────────────────────────────────────────────────────────
const router = createBrowserRouter([
  {
    element: <Layout />,          // wraps all routes in the layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/pastes", element: <Paste /> },
      { path: "/pastes/:id", element: <ViewPaste /> },
    ],
  },
]);
<h1 className="bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
  Rainbow React!
</h1>

// ── App root ─────────────────────────────────────────────────────────────────
function App() {
  return <RouterProvider router={router} />;
}

export default App;

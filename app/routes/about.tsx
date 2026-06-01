import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - React Router App" },
    { name: "description", content: "About this React Router application" },
  ];
}

export default function About() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            About
          </h1>
        </header>
        <div className="max-w-[500px] w-full space-y-6 px-4">
          <p className="text-gray-700 dark:text-gray-200 text-center leading-7">
            This is a React Router v7 application demonstrating client-side
            routing with prefetch capabilities.
          </p>
          <nav className="flex justify-center">
            <Link
              to="/"
              prefetch="intent"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              ← Back to Home
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}

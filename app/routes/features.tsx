import { Link } from "react-router";
import type { Route } from "./+types/features";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Features - React Router App" },
    { name: "description", content: "Explore our features" },
  ];
}

export default function Features() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Features
          </h1>
        </header>
        <div className="max-w-[500px] w-full space-y-6 px-4">
          <ul className="text-gray-700 dark:text-gray-200 space-y-3">
            <li>Client-side routing with prefetch</li>
            <li>Nested routes and layouts</li>
            <li>Data loading and actions</li>
            <li>Error boundaries</li>
          </ul>
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

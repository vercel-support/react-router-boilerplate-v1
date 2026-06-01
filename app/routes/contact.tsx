import { Link } from "react-router";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - React Router App" },
    { name: "description", content: "Get in touch with us" },
  ];
}

export default function Contact() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Contact
          </h1>
        </header>
        <div className="max-w-[500px] w-full space-y-6 px-4">
          <p className="text-gray-700 dark:text-gray-200 text-center leading-7">
            Have questions? Reach out to us anytime.
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

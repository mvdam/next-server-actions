import Link from "next/link";

const PAGES = [
  ["Home", "/"],
  ["Dashboard", "/dashboard"],
  ["Contact", "/contact"],
];

export const Header = () => (
  <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    {PAGES.map(([title, url]) => (
      <Link
        href={url}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        key={title}
      >
        {title}
      </Link>
    ))}
  </div>
);

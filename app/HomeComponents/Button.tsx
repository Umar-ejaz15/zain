import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="/projects"
      className="group w-fit mb-20 flex mx-auto items-center gap-3 bg-[#E6B17E] hover:bg-[#D9A16D] text-[#1C1C1E] px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
    >
      View All Case Studies
      <svg
        className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  );
}

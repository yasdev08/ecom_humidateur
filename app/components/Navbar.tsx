"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isArabic = !pathname.startsWith("/fr");

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm fixed top-0 w-full z-50">
      {/* <Link href="/" className="flex items-center gap-2 font-bold text-blue-700 text-lg">
        <img src="/logo.svg" alt="logo" className="w-8 h-8" />
        AirGlow
      </Link> */}
      <div className="flex gap-4">
        <Link href={isArabic ? "/fr" : "/"} className="text-sm text-gray-700 hover:text-blue-700">
          {isArabic ? "Français" : "العربية"}
        </Link>
      </div>
    </nav>
  );
}

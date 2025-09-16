"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-black/20 backdrop-blur-md supports-[backdrop-filter]:bg-black/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg sm:text-xl font-semibold tracking-tight hover:text-white/90">
          PT Sarana Akses Pratama
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          <a href="#about" className="hover:text-white">Tentang</a>
          <a href="#layanan" className="hover:text-white">Layanan</a>
          <a href="#datacenter" className="hover:text-white">Data Center</a>
          <a href="#kontak" className="hover:text-white">Kontak</a>
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 px-3 py-2 text-sm text-white/80 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/30 backdrop-blur-md">
          <nav className="mx-auto w-full max-w-6xl px-6 py-3 flex flex-col gap-3 text-sm text-white/80">
            <a href="#about" className="hover:text-white" onClick={() => setOpen(false)}>Tentang</a>
            <a href="#layanan" className="hover:text-white" onClick={() => setOpen(false)}>Layanan</a>
            <a href="#datacenter" className="hover:text-white" onClick={() => setOpen(false)}>Data Center</a>
            <a href="#kontak" className="hover:text-white" onClick={() => setOpen(false)}>Kontak</a>
          </nav>
        </div>
      )}
    </header>
  );
}


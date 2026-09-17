"use client";

import { useState } from "react";
import Link from "next/link";
import { LogIn, Menu, Phone, Search, UserPlus, X } from "lucide-react";
import { HEADER_LINKS } from "./consts";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a
        className="fixed wrapper-2xl z-100 top-3 left-3 bg-lime-400 p-3 translate-y-[-200%] focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <header className="fixed padding-x top-0 inset-x-0 z-10 bg-[#f7f7f5cc] backdrop-blur-md">
        <div className="wrapper-2xl h-19.5 lg:h-22.5 flex items-center justify-between border-b border-[#aaa] gap-5">
          <Link
            href="/"
            className="font-display text-[30px] font-extrabold tracking-[-1.5px]"
            aria-label="Zestora home"
          >
            Zestora
            <span className="text-[10px] align-super tracking-normal ml-0.5">
              ®
            </span>
          </Link>
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex gap-[clamp(24px,3.1vw,56px)]">
              {HEADER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="py-5 font-display text-[15px] font-semibold hover:text-[#779537]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-1 lg:gap-1.75">
            <Link
              className="inline-flex icon-btn border-border lg:h-9 lg:w-9 lg:basis-9"
              href="/#products"
              aria-label="Explore our products"
            >
              <Search size={16} />
            </Link>
            <button
              type="button"
              className="hidden lg:inline-flex btn btn-outline lg:px-4.25 lg:gap-1.75 lg:min-h-9.5"
            >
              <LogIn size={14} aria-hidden="true" />
              Login
            </button>
            <button
              type="button"
              className="hidden lg:inline-flex btn btn-dark lg:px-4.25 lg:gap-1.75 lg:min-h-9.5"
            >
              <UserPlus size={14} aria-hidden="true" />
              Register
            </button>
            <a
              href="#contact"
              className="hidden lg:inline-flex icon-btn lg:h-9 lg:w-9 lg:basis-9"
              aria-label="Contact Zestora"
            >
              <Phone size={16} />
            </a>
            <button
              className="inline-flex icon-btn lg:hidden"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          className="absolute top-full w-full pt-5 px-gutter pb-7 bg-[#f7f7f5] border-b border-border shadow-[0_20px_25px_#30312e15] lg:hidden"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          <ul>
            {HEADER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3.25 font-display text-[21px] border-b border-[#e7e7e1]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-5">
            <button
              className="inline-flex flex-1 btn btn-outline"
              type="button"
            >
              <LogIn size={16} aria-hidden="true" />
              Login
            </button>
            <button className="inline-flex flex-1 btn btn-dark" type="button">
              <UserPlus size={16} aria-hidden="true" />
              Register
            </button>
          </div>
        </nav>
      </header>
      <div className="h-19.5 lg:h-22.5" aria-hidden="true" />
    </>
  );
};

"use client";

import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import MyNavLinks from "./MyNavLinks";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const links = (
    <>
      <MyNavLinks href={"/"}>Home</MyNavLinks>
      <MyNavLinks href={"/all-doctors"}>All Doctors</MyNavLinks>
      <MyNavLinks href={"/dashboard"}>Dashboard</MyNavLinks>
    </>
  );

  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b bg-[#d5effb]/70 backdrop-blur-lg">
        <header className="flex py-3 max-w-330 mx-auto items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div>
              <Link href={"/"}>
                <h2 className="text-[22px] md:text-2xl font-semibold">
                  Doctor Tracker
                </h2>
              </Link>
            </div>
          </div>

          <ul className="hidden items-center gap-4 md:flex">{links}</ul>

          <div>
            {user ? (
              <div className="flex items-center gap-3">
                {/* avatar */}
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no"
                    alt={user.name}
                    src={user.image || "https://i.ibb.co.com/MxfRjbYY/user.png"}
                    className="object-cover"
                  />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <Button
                  size="sm"
                  onClick={async () => await authClient.signOut()}
                  className={"bg-[#005eb8] rounded-md"}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href={"/signin"}>
                  <Button size="sm" className={"bg-[##005eb8] rounded-md"}>
                    Sign In
                  </Button>
                </Link>

                <Link href={"/signup"}>
                  <Button size="sm" className={"bg-[##005eb8] rounded-md"}>
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">{links}</ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

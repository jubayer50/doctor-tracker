"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserDoctor } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoMdHome, IoMdPersonAdd } from "react-icons/io";
import { MdLogout, MdOutlineMenu } from "react-icons/md";

const DashboardSideBar = () => {
  const pathName = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const navContents = [
    { icon: IoMdHome, href: "/dashboard", label: "Home" },
    { icon: IoMdPersonAdd, href: "/dashboard/add-doctor", label: "Add Doctor" },
    {
      icon: FaUserDoctor,
      href: "/dashboard/doctors-management",
      label: "Doctors Management",
    },
    {
      icon: ImUsers,
      href: "/dashboard/patients-management",
      label: "Patients Management",
    },
  ];

  const navLinks = (
    <>
      {navContents.map((navContent) => (
        <Link
          key={navContent.label}
          href={navContent.href}
          className={`flex items-center gap-4 hover:text-[#005eb8] font-medium ${pathName === navContent.href ? "text-[#005eb8]" : ""}`}
        >
          <navContent.icon className="size-5"></navContent.icon>
          {navContent.label}
        </Link>
      ))}
    </>
  );

  return (
    <div className="">
      <aside className="w-64 h-screen bg-[#d5effb] hidden md:flex flex-col justify-between">
        <div>
          <div className="py-5 text-center border-b border-[#005eb8]">
            <Link href={"/"}>
              <h2 className="text-[22px] md:text-2xl font-bold text-[#005eb8]">
                Doctor Tracker
              </h2>
            </Link>
          </div>

          <div className="px-5 py-3.5 flex items-center gap-4 border-b border-[#005eb8]">
            <div className="w-12 h-12 rounded-full">
              <Image
                src={user?.image || "https://i.ibb.co.com/MxfRjbYY/user.png"}
                alt={user?.name}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-full"
              ></Image>
            </div>

            <h2 className="text-xl font-bold text-[#005eb8]">
              {user?.name.toUpperCase()}
            </h2>
          </div>

          <div className="mt-7 space-y-4 px-5">{navLinks}</div>
        </div>

        <div className="px-5 py-4">
          <Button
            onClick={async () => await authClient.signOut()}
            className="flex items-center gap-3 text-red-600 py-4 w-full justify-start bg-transparent"
          >
            <MdLogout />
            <p>Logout</p>
          </Button>
        </div>
      </aside>

      <Drawer>
        <Button
          variant="secondary"
          className={"rounded-none md:hidden w-full bg-[#d5effb] justify-start"}
        >
          <MdOutlineMenu />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header></Drawer.Header>
              <Drawer.Body>
                <nav className="flex flex-col gap-4 ">{navLinks}</nav>

                <div className="mt-5 px-1">
                  <div
                    onClick={async () => await authClient.signOut()}
                    className="text-red-600 flex items-center gap-3"
                  >
                    <MdLogout />
                    <p>Logout</p>
                  </div>
                </div>
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default DashboardSideBar;

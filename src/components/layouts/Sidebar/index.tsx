"use client";
import React, { FC } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBuilding, FaRegMessage } from "react-icons/fa6";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineUsers,
} from "react-icons/hi2";
import { CiCalendarDate, CiLogout } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3 ">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push("/")}
            >
              <IoHomeOutline className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <FaRegMessage className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <FaRegBuilding className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineUsers className="mr-2 text-lg" />
              All Aplicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push("job-listing")}
            >
              <HiOutlineClipboardDocumentCheck className="mr-2 text-lg" />
              Job Listing
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <CiCalendarDate className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <Button
            variant={"ghost"}
            className="w-full justify-start rounded-none hover:text-primary"
            onClick={() => router.push("/settings")}
          >
            <GoGear className="mr-2 text-lg" />
            Settings
          </Button>
          <Button
            variant={"ghost"}
            className="w-full justify-start rounded-none hover:text-red-500 hover:bg-red-200 text-red-500"
            onClick={() => signOut()}
          >
            <CiLogout className="mr-2 text-lg " />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

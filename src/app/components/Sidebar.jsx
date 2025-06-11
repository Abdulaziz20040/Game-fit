"use client";

import {
  MdDashboard,
  MdDateRange,
  MdEditCalendar,
  MdSportsEsports,
  MdAccountBalance,
  MdBarChart,
  MdPriceChange,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Modal } from "antd";

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard size={20} />, href: "/" },
    { label: "Schedules", icon: <MdDateRange size={20} />, href: "/schedules" },
    { label: "Booking", icon: <MdEditCalendar size={20} />, href: "/booking" },
    {
      label: "Game Clubs",
      icon: <MdSportsEsports size={20} />,
      href: "/game-clubs",
    },
    {
      label: "Club Account",
      icon: <MdAccountBalance size={20} />,
      href: "/club-account",
    },
    { label: "Statistic", icon: <MdBarChart size={20} />, href: "/statistic" },
    { label: "Tariffs", icon: <MdPriceChange size={20} />, href: "/tariffs" },
    { label: "Settings", icon: <MdSettings size={20} />, href: "/settings" },
  ];

  return (
    <div className="w-60 h-screen bg-white flex flex-col justify-between ">
      {/* Logo */}
      <div>
        <div className="px-6 py-6">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Menu List */}
        <ul className="pl-4 flex flex-col gap-2 mt-6">
          {menuItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li
                key={item.label}
                onClick={() => router.push(item.href)}
                style={{ borderRadius: "10px 0px 0px 10px" }}
                className={`flex items-center gap-3 text-sm px-4 py-3 cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-[#f1f6fa] text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Logout Button */}
      <div className="px-4 py-4">
        <button
          onClick={showModal}
          className="w-full flex items-center cursor-pointer justify-center gap-2 text-red-500 text-sm py-2 px-4 border border-red-200 rounded-lg hover:bg-red-50 transition-all"
        >
          <MdLogout size={18} />
          Log out
        </button>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        width={353}
        style={{ height: 156 }}
        closable={false}
      >
        <div className="flex flex-col justify-between h-full">
          <p className="text-center text-lg font-medium text-black mb-4">
            Do you want to leave?
          </p>

          <div className="flex justify-end gap-3">
            <Button
              style={{
                backgroundColor: "#F1F6FA",
                color: "#4A4C56",
                borderRadius: "7px",
                border: "none",
                fontWeight: "500",
              }}
              className=" w-[154.5px] h-[45px] "
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              className=" w-[154.5px] h-[45px]"
              type="primary"
              danger
              onClick={handleOk}
            >
              Exit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

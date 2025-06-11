"use client";

import { IoSearch } from "react-icons/io5";
import { MdOutlineQrCode } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [
  {
    key: "profile",
    label: "Profile",
  },
  {
    key: "settings",
    label: "Settings",
  },
  {
    key: "logout",
    label: "Log out",
  },
];

export default function Navbar() {
  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      // logout logikasi shu yerda yoziladi
      console.log("Logging out...");
    } else {
      console.log(`You clicked on ${e.key}`);
    }
  };

  return (
    <div className="w-full h-16 flex items-center justify-between px-6 overflow-y-auto ">
      <div className="flex gap-20 items-center justify-between bg-white relative w-[360px] h-[45px] py-3 rounded-[10px]">
        <IoSearch className="absolute top-[11px] left-4 text-[#4A4C56] size-[20px]" />

        <input
          style={{
            color: "#808080",
          }}
          type="text"
          placeholder="Search"
          className="bg-transparent absolute left-10  text-[16px] rounded-md px-4 py-2 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          style={{
            color: "black",
          }}
          className="p-2 bg-white rounded-[10px] cursor-pointer w-[50px] h-[50px] text-[20px] flex items-center justify-center"
        >
          <MdOutlineQrCode />
        </button>
        <button
          style={{
            color: "black",
          }}
          className="p-2 bg-white rounded-[10px] cursor-pointer w-[50px] h-[50px] text-[23px] flex items-center justify-center"
        >
          <IoMdNotificationsOutline />
        </button>
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          trigger={["click"]}
        >
          <div className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-white hover:bg-gray-100 rounded-[10px] transition-all">
            <Avatar
              src="https://i.pinimg.com/736x/a4/63/46/a463462744d1b20920903ef2180c90c0.jpg"
              size={32}
              style={{
                width: "35px",
                height: "34px",
                borderRadius: "8px",
              }}
            />
            <span className="text-sm font-medium text-black">
              Abbos Ibragimov
            </span>
            <DownOutlined style={{ color: "#4A4C56", fontSize: "12px" }} />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

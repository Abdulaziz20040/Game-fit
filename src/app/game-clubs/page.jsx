"use client";

import React, { useState } from "react";
import {
  Table,
  Pagination,
  Select,
  Typography,
  ConfigProvider,
  Modal,
} from "antd";
import "antd/dist/reset.css";
import { IoMdAdd } from "react-icons/io";
import { useRouter } from "next/navigation"; // Next.js router
import CreateGameClubModal from "../components/modals/CreateGameClubsModal";

export default function GameClub() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      club: "Trillon",
      branch: "Sergeli",
      location: "Toshkent sh. Sergeli t. Sergeli 6, 8, 4a",
    },
    {
      key: "2",
      club: "Trillon",
      branch: "Chilonzor",
      location: "Toshkent sh. Chilonzor t. Katta qozirobot, 14",
    },
    {
      key: "3",
      club: "Trillon",
      branch: "Yunusobod",
      location: "Toshkent sh. Yunusobod t. Amir Temur 12",
    },
  ]);

  const router = useRouter(); // Router qo‘shildi

  const handleSaveClub = (newClub) => {
    const newData = {
      key: Date.now(),
      ...newClub,
    };
    setDataSource((prev) => [...prev, newData]);
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: <span style={{ color: "#E4E6EB" }}>Игроклуб</span>,
      dataIndex: "club",
      key: "club",
      width: "20%",
      render: (text) => <span style={{ color: "#E4E6EB" }}>{text}</span>,
    },
    {
      title: <span style={{ color: "#E4E6EB" }}>Филиал</span>,
      dataIndex: "branch",
      key: "branch",
      width: "20%",
      render: (text) => <span style={{ color: "#E4E6EB" }}>{text}</span>,
    },
    {
      title: <span style={{ color: "#E4E6EB" }}>Адрес</span>,
      dataIndex: "location",
      key: "location",
      width: "60%",
      render: (text) => <span style={{ color: "#B0B3B8" }}>{text}</span>,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#1C1C28",
          colorText: "#E4E6EB",
          colorTextSecondary: "#B0B3B8",
          colorPrimary: "#3F8CFF",
          borderRadius: 8,
          colorBorder: "transparent",
        },
        components: {
          Table: {
            headerBg: "#101018",
            headerColor: "#E4E6EB",
            rowHoverBg: "#2A2A38",
            borderColor: "transparent",
          },
          Modal: {
            headerBg: "#0F0F1A",
            titleColor: "#E4E6EB",
            contentBg: "#0C0C1F",
          },
        },
      }}
    >
      <div
        style={{
          padding: 24,
          minHeight: "80vh",
          color: "#E4E6EB",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 style={{ fontWeight: 600, fontSize: 24 }}>Игроклубы</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-3 bg-[#3F8CFF] w-[120px] h-[40px] rounded-lg"
          >
            <IoMdAdd style={{ color: "white", fontSize: 19 }} />
            <span className="text-white text-[13px] font-semibold">
              Добавить
            </span>
          </button>
        </div>

        {/* Table */}
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          style={{ background: "transparent" }}
          onRow={(record) => ({
            onClick: () => {
              // Settings sahifasiga yo‘naltirish (club id bilan)
              router.push(`/game-clubs/settings`);
            },
          })}
        />

        {/* Bottom controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Select defaultValue="12" style={{ width: 80 }}>
              <Select.Option value="12">12</Select.Option>
              <Select.Option value="24">24</Select.Option>
              <Select.Option value="48">48</Select.Option>
            </Select>
            <Typography.Text style={{ color: "#3F8CFF", fontWeight: 500 }}>
              Сatrlar soni
            </Typography.Text>
          </div>

          <Pagination defaultCurrent={1} total={50} showSizeChanger={false} />
        </div>

        {/* Modal */}
        <CreateGameClubModal
          isModalOpen={isModalOpen}
          handleOk={handleSaveClub}
          handleCancel={() => setIsModalOpen(false)}
        />
      </div>
    </ConfigProvider>
  );
}

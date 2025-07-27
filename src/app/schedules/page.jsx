"use client";

import React, { useState } from "react";
import { Table, Pagination, Select, Typography, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "../styles/globals.css";
import { useRouter } from "next/navigation";

const { Option } = Select;

const allData = {
  success: [
    {
      key: "1",
      token: "CP000001",
      club: "Trillion",
      branch: "Sergeli",
      date: "25.05.2025",
      name: "Islom Abdullayev",
      room: "V-2",
      rate: "VIP",
      price: "320 000",
      status: "red",
      avatar: "https://i.pinimg.com/736x/59/92/db/5992db2c560e19ec9a2ec15c932a5114.jpg",
    },
    {
      key: "2",
      token: "CP000002",
      club: "Trillion",
      branch: "Sergeli",
      date: "25.05.2025",
      name: "Abdullaziz Salomov",
      room: "S-3",
      rate: "Standart",
      price: "220 000",
      status: "yellow",
      avatar: "https://i.pinimg.com/736x/66/08/99/660899099be9b8c6b643bda474e1207c.jpg",
    },
  ],
  expired: [
    {
      key: "3",
      token: "CP000003",
      club: "Trillion",
      branch: "Sergeli",
      date: "24.05.2025",
      name: "Rustam Qasimov",
      room: "P-4",
      rate: "Premium",
      price: "270 000",
      status: "green",
      avatar: "https://i.pinimg.com/736x/01/07/8c/01078c4a824ea92e1bb3e742ccd6f216.jpg",
    },
  ],
  blocked: [
    {
      key: "4",
      token: "CP000004",
      club: "Trillion",
      branch: "Chilonzor",
      date: "23.05.2025",
      name: "Bekzod Abdusalomov",
      room: "S-1",
      rate: "Premium",
      price: "250 000",
      status: "red",
      avatar: "https://i.pinimg.com/736x/59/92/db/5992db2c560e19ec9a2ec15c932a5114.jpg",
    },
  ],
};

const getStatusColor = (status) => {
  switch (status) {
    case "red":
      return "#FF3B3B";
    case "yellow":
      return "#FFD93B";
    case "green":
      return "#00D26A";
    default:
      return "#888";
  }
};

export default function Page() {
  const [activeTab, setActiveTab] = useState("success");
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const filteredData = allData[activeTab].filter((item) =>
    (item.token + item.name)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: "",
      dataIndex: "status",
      key: "status",
      width: 10,
      render: (status) => (
        <div
          style={{
            width: 6,
            height: 38,
            backgroundColor: getStatusColor(status),
            borderRadius: 4,
          }}
        />
      ),
    },
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <img
          src={avatar}
          alt="avatar"
          style={{ width: 32, height: 32, borderRadius: "50%" }}
        />
      ),
    },
    { title: "Токен", dataIndex: "token", key: "token" },
    { title: "Игроклуб", dataIndex: "club", key: "club" },
    { title: "Филиал", dataIndex: "branch", key: "branch" },
    { title: "Дата", dataIndex: "date", key: "date" },
    { title: "Имя", dataIndex: "name", key: "name" },
    { title: "Комната", dataIndex: "room", key: "room" },
    { title: "Тариф", dataIndex: "rate", key: "rate" },
    { title: "Стоимость (сум)", dataIndex: "price", key: "price" },
  ];

  return (
    <div
      style={{
        padding: 24,
        minHeight: "86vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ fontWeight: 600, fontSize: 22, color: "white", marginBottom: 10 }}>
        График
      </h2>

      {/* Tabs + Search */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        {/* Tabs */}
        <div style={{ display: "flex", gap: 12 }}>
          {[
            { key: "success", label: "Успешно" },
            { key: "expired", label: "Истек срок" },
            { key: "blocked", label: "Заблокировано" },
          ].map((tab) => (
            <div
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setSearchTerm("");
              }}
              style={{
                background: activeTab === tab.key ? "#3D7BFF" : "transparent",
                color: activeTab === tab.key ? "#fff" : "#ccc",
                padding: "6px 18px",
                borderRadius: 8,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Search */}
        <Input
          placeholder="Поиск токен или имя"
          prefix={<SearchOutlined style={{ color: "#999" }} />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: 280,
            background: "#0F0F1A",
            color: "white",
            border: "none",
            borderRadius: 8,
            height: 36,
          }}
        />
      </div>

      {/* Table */}
      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={false}
        bordered={false}
        style={{
          marginTop: 10,
          borderRadius: 10,
          overflow: "hidden",
          background: "transparent",
        }}
        rowClassName={() => "custom-table-row"}
        className="custom-table pt-5"
        onRow={(record) => {
          return {
            onClick: () => router.push(`/schedules/${record.key}`), // tanlangan userga o'tish
          };
        }}
      />

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 16,
        }}
      >
        {/* Left side (Select) */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Select
            defaultValue="12"
            style={{
              width: 80,
              background: "#0F0F1A",
              color: "#fff",
              borderRadius: 6,
              height: 36,
              border: "none",
            }}
            dropdownStyle={{
              background: "#0F0F1A",
              color: "#fff",
            }}
            popupClassName="dark-select"
          >
            <Option value="12">12</Option>
            <Option value="24">24</Option>
            <Option value="48">48</Option>
          </Select>
          <Typography.Text style={{ color: "#3D7BFF", fontWeight: 500 }}>
            Количество строк
          </Typography.Text>
        </div>

        {/* Pagination */}
        <Pagination
          defaultCurrent={1}
          total={filteredData.length}
          pageSize={12}
          showSizeChanger={false}
          className="dark-pagination"
          itemRender={(page, type, originalElement) => {
            if (type === "prev") return <span style={{ color: "#3D7BFF" }}>{"<"}</span>;
            if (type === "next") return <span style={{ color: "#3D7BFF" }}>{"Далее"}</span>;
            return <span style={{ color: "#fff" }}>{page}</span>;
          }}
        />
      </div>
      {/* CSS */}
      <style>{`
       /* Select dropdown dark mode */
  .dark-select .ant-select-item {
    color: #fff !important;
  }
  .dark-select .ant-select-item-option-active {
    background: #151528 !important;
  }

  /* Pagination dark mode */
  .dark-pagination .ant-pagination-item {
    background: #0F0F1A !important;
    border: none !important;
    color: #fff !important;
  }
  .dark-pagination .ant-pagination-item-active {
    background: #3D7BFF !important;
    color: #fff !important;
    border-radius: 6px !important;
  }
  .dark-pagination .ant-pagination-item:hover {
    background: #151528 !important;
  }
  .custom-table .ant-table {
    background: transparent !important;
    border: none !important;
  }
  /* Header ustunlarining chiziqlarini olib tashlash */
  .custom-table .ant-table-thead > tr > th {
    background-color: #0F0F1A !important;
    color: #fff !important;
    font-weight: 500;
    text-align: left;
    border: none !important;        /* barcha borderlarni olib tashlaydi */
    height: 48px;
    font-size: 14px;
  }
  /* Body (qatorlar) */
  .custom-table .ant-table-tbody > tr > td {
    background-color: #0C0C1F !important;
    color: #ddd !important;
    border: none !important;        /* bodydagi borderlarni ham olib tashlaydi */
    font-size: 14px;
    height: 48px;
  }
  /* Hover */
  .custom-table .ant-table-tbody > tr:hover > td {
    background-color: #151528 !important;
  }
`}</style>

    </div>
  );
}

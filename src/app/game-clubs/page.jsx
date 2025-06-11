"use client";

import React, { useState } from "react";
import { Table, Tag, Pagination, Select, Typography, Modal } from "antd";
import "antd/dist/reset.css";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import CreateGameClubsModal from "../components/modals/CreateGameClubsModal";

const dataSource = [
  {
    key: "1",
    id: "000123",
    club: "Trillon",
    branch: "Sergeli",
    location: "Toshkent sh. Sergeli t. Sergeli 6, 8, 4a",
    admin: "Abdusalomov Bekzod",
    phone: "+998 90 123 45 67",
  },
  {
    key: "2",
    id: "000250",
    club: "Trillon",
    branch: "Chilonzor",
    location: "Toshkent sh. Chilonzor t. Katta qozirobot, 14",
    admin: "Qosimov Rustam",
    phone: "+998 90 987 65 43",
  },
  {
    key: "3",
    id: "000311",
    club: "Trillon",
    branch: "Yunusobod",
    location: "Toshkent sh. Yunusobod t. Amir Temur 12",
    admin: "Karimov Anvar",
    phone: "+998 91 111 22 33",
  },
  {
    key: "4",
    id: "000412",
    club: "Trillon",
    branch: "Mirzo Ulug‘bek",
    location: "Toshkent sh. Mirzo Ulug‘bek t. Buyuk Ipak Yo‘li 7",
    admin: "Usmonova Dilnoza",
    phone: "+998 93 444 55 66",
  },
  {
    key: "5",
    id: "000589",
    club: "Trillon",
    branch: "Olmazor",
    location: "Toshkent sh. Olmazor t. Shifokorlar 23",
    admin: "Toshpulatov Sirojiddin",
    phone: "+998 94 777 88 99",
  },
];

export default function GapeClub() {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Game Club Title", dataIndex: "club", key: "club" },
    { title: "Branch", dataIndex: "branch", key: "branch" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "Admin", dataIndex: "admin", key: "admin" },
    { title: "Telephone", dataIndex: "phone", key: "phone" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <FaRegEdit
          onClick={showModal}
          style={{
            color: "#6984FF",
          }}
          className=" size-[18px] cursor-pointer"
        />
      ),
    },
  ];

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

  return (
    <div style={{ padding: 24, minHeight: "80vh" }}>
      <div className="flex items-center justify-between p-[5px] ">
        <h2 style={{ fontWeight: 600, fontSize: 24 }}>Game Clubs</h2>
        <button
          onClick={showModal}
          style={{
            color: "white",
            fontWeight: 300,
            fontSize: 16,
            borderRadius: 10,
          }}
          className=" flex items-center cursor-pointer   justify-center gap-3 bg-[#3F8CFF] w-[181px] h-[45px]"
        >
          <IoMdAdd
            style={{
              color: "white",
              fontSize: 19,
            }}
          />
          Add Game Clubs
        </button>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        rowClassName={() => "ant-table-row-level"}
        bordered
        style={{ marginTop: 20, backgroundColor: "white", borderRadius: 10 }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 0",
        }}
      >
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
            <Typography.Text style={{ color: "#3D7BFF", fontWeight: 500 }}>
              Satrlar soni
            </Typography.Text>
          </div>
        </div>

        <Pagination defaultCurrent={1} total={50} showSizeChanger={false} />
      </div>
      <CreateGameClubsModal
        isModalOpen={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
}

"use client";

import React from "react";
import { Table, Tag, Pagination, Select, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const dataSource = [
  {
    key: "1",
    id: "000123",
    club: "Trillon",
    branch: "Sergeli",
    name: "Abdusalomov Bekzod",
    date: "25.05.2025",
    start: "16:00",
    end: "19:30",
    computers: 9,
    rates: "Premium",
    price: "270$",
    status: "gray",
  },
  {
    key: "2",
    id: "000250",
    club: "Trillon",
    branch: "Chilonzor",
    name: "Qosimov Rustam",
    date: "25.05.2025",
    start: "16:30",
    end: "20:30",
    computers: 4,
    rates: "Standart",
    price: "56$",
    status: "red",
  },
  // Qo‘shimcha qatorlar shu tarzda qo‘shiladi...
];

const getStatusColor = (status) => {
  switch (status) {
    case "gray":
      return "#999";
    case "red":
      return "#F44";
    case "green":
      return "#0A0";
    case "yellow":
      return "#FF0";
    default:
      return "#ccc";
  }
};

const columns = [
  {
    title: "",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <div
        style={{
          width: 6,
          height: 30,
          backgroundColor: getStatusColor(status),
        }}
      />
    ),
  },
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Game Club", dataIndex: "club", key: "club" },
  { title: "Branch", dataIndex: "branch", key: "branch" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Start", dataIndex: "start", key: "start" },
  { title: "End", dataIndex: "end", key: "end" },
  { title: "Compyuters", dataIndex: "computers", key: "computers" },
  { title: "Rates", dataIndex: "rates", key: "rates" },
  { title: "Total Price", dataIndex: "price", key: "price" },
  {
    title: "Action",
    key: "action",
    render: () => (
      <img
        className=" cursor-pointer"
        style={{ color: "#3D7BFF", fontSize: 18 }}
        src="/dowland.png"
      ></img>
    ),
  },
];

export default function Page() {
  return (
    <div style={{ padding: 24, background: "#F6FAFF", minHeight: "100vh" }}>
      <h2 style={{ fontWeight: 600, fontSize: 24 }}>Schedules</h2>

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
    </div>
  );
}

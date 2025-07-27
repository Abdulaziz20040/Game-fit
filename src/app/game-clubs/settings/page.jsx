"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import {
    UserOutlined,
    EnvironmentOutlined,
    CreditCardOutlined,
    FileTextOutlined,
    DollarOutlined,
    AppstoreOutlined,
} from "@ant-design/icons";
import { FaRegEdit } from "react-icons/fa";
import PaymentsTable from "./PaymentsTable"; import { FaChartBar, FaStar, FaTrophy } from "react-icons/fa";
import RoomTable from "./RoomTable";


export default function Page() {
    const [activeTab, setActiveTab] = useState("account");
    const [status, setStatus] = useState(true);
    const [date, setDate] = useState(dayjs("2025-07-14"));
    const [activeTariffs, setActiveTariffs] = useState([]);

    const tabs = [
        { key: "account", label: "Аккаунт", icon: <UserOutlined /> },
        { key: "address", label: "Адрес", icon: <EnvironmentOutlined /> },
        { key: "payment", label: "Платёж", icon: <CreditCardOutlined /> },
        { key: "requisites", label: "Реквизиты", icon: <FileTextOutlined /> },
        { key: "tariffs", label: "Тарифы", icon: <DollarOutlined /> },
        { key: "layout", label: "Рассадка", icon: <AppstoreOutlined /> },
    ];

    const inputStyle = {
        width: "100%",
        height: "42px",
        background: "#141421",
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "0 12px",
        color: "#f0f0f0",
        fontSize: "14px",
        outline: "none",
    };

    const textareaStyle = {
        width: "100%",
        background: "#141421",
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "10px 12px",
        color: "#f0f0f0",
        fontSize: "14px",
        outline: "none",
    };
    const paginationBtnStyle = {
        background: "transparent",
        color: "#ccc",
        border: "none",
        cursor: "pointer",
        fontSize: "14px",
    };


    /** Ong paneldagi kontentlarni alohida ko‘rsatish */
    const renderContent = () => {
        switch (activeTab) {
            case "account":
                return (
                    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                        <div
                            style={{
                                width: "110px",
                                height: "110px",
                                borderRadius: "50%",
                                background: "#0F0F1A",
                                border: "1px solid #555",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                alignSelf: "center",
                                color: "#aaa",
                                fontSize: "38px",
                            }}
                        >
                            +
                        </div>
                        <input type="text" placeholder="Пользователь" style={inputStyle} />
                        <input type="text" placeholder="Имя" style={inputStyle} />
                        <input type="password" placeholder="Пароль" style={inputStyle} />
                        <input
                            type="date"
                            value={date.format("YYYY-MM-DD")}
                            onChange={(e) => setDate(dayjs(e.target.value))}
                            style={inputStyle}
                        />

                        {/* Status */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: "10px",
                            }}
                        >
                            <span style={{ fontSize: "14px", color: "#ccc" }}>Статус</span>

                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <span
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        color: status ? "#4caf50" : "#f44336",
                                    }}
                                >
                                    {status ? "Актив" : "Неактив"}
                                </span>

                                <div
                                    onClick={() => setStatus(!status)}
                                    style={{
                                        width: "38px",
                                        height: "20px",
                                        borderRadius: "20px",
                                        background: status ? "#4caf50" : "#555",
                                        position: "relative",
                                        cursor: "pointer",
                                        transition: "background 0.3s",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "16px",
                                            height: "16px",
                                            borderRadius: "50%",
                                            background: "#fff",
                                            position: "absolute",
                                            top: "2px",
                                            left: status ? "20px" : "2px",
                                            transition: "left 0.3s",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "address":
                return (
                    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                        <h2 style={{ color: "#f0f0f0", fontSize: "16px" }}>Адрес ma'lumotlari</h2>
                        <input type="text" placeholder="Страна" style={inputStyle} />
                        <input type="text" placeholder="Город / Район" style={inputStyle} />
                        <input type="text" placeholder="Название улицы" style={inputStyle} />
                        <input type="text" placeholder="Широта" style={inputStyle} />
                        <input type="text" placeholder="Долгота" style={inputStyle} />
                    </div>

                );

            case "payment":
                return (
                    <PaymentsTable />

                );

            case "requisites":
                return (
                    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                        <h2 style={{ color: "#f0f0f0", fontSize: "16px" }}>Реквизиты</h2>
                        <input type="text" placeholder="Идентификатор игрового клуба" style={inputStyle} />
                        <input type="text" placeholder="Идентификатор филиала" style={inputStyle} />
                        <input type="text" placeholder="МФО для платежей" style={inputStyle} />
                        <input type="text" placeholder="Транзитный МФО" style={inputStyle} />
                        <input type="text" placeholder="Click Cntrg ID" style={inputStyle} />
                        <input type="text" placeholder="Транзитный счёт" style={inputStyle} />
                        <input type="text" placeholder="Номер договора" style={inputStyle} />
                        <input type="text" placeholder="Платёжный счёт" style={inputStyle} />
                        <input type="date" placeholder="Дата добавления" style={inputStyle} />
                        <input type="number" placeholder="Процент комиссии (%)" style={inputStyle} />
                    </div>

                );

            case "tariffs":
                return (
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <h2 style={{ color: "#f0f0f0", fontSize: "16px", marginBottom: "8px" }}>Тарифы</h2>

                        {["Standart", "Premium", "VIP"].map((tariff) => {
                            const isActive = activeTariffs.includes(tariff);

                            // Iconni moslashtirish
                            const getIcon = () => {
                                if (tariff === "Standart") return <FaChartBar />;
                                if (tariff === "Premium") return <FaStar />;
                                if (tariff === "VIP") return <FaTrophy />;
                            };

                            return (
                                <div
                                    key={tariff}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isActive ? "1fr auto auto" : "1fr auto",
                                        alignItems: "center",
                                        background: "#14151b",
                                        padding: "12px 16px",
                                        borderRadius: "10px",
                                        border: "1px solid transparent",
                                        opacity: isActive ? 1 : 0.6,
                                    }}
                                >
                                    {/* Chap tomon: icon + label */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <span style={{ fontSize: "18px", color: isActive ? "#00BFFF" : "#777" }}>
                                            {getIcon()}
                                        </span>
                                        <span style={{ color: isActive ? "#00BFFF" : "#777", fontSize: "15px" }}>
                                            {tariff}
                                        </span>
                                    </div>

                                    <div className=" flex items-center gap-3">
                                        {/* Edit icon faqat yoqilganda chiqadi */}
                                        {isActive && (
                                            <FaRegEdit
                                                style={{
                                                    fontSize: "18px",
                                                    color: "#00BFFF",
                                                    cursor: "pointer",
                                                    transition: "color 0.3s",
                                                }}
                                                onClick={() => alert(`${tariff}ni tahrirlash`)}
                                            />
                                        )}

                                        {/* Switch toggle */}
                                        <div
                                            onClick={() =>
                                                setActiveTariffs((prev) =>
                                                    prev.includes(tariff)
                                                        ? prev.filter((t) => t !== tariff)
                                                        : [...prev, tariff]
                                                )
                                            }
                                            style={{
                                                width: "40px",
                                                height: "20px",
                                                background: isActive ? "#00BFFF" : "#333",
                                                borderRadius: "20px",
                                                position: "relative",
                                                cursor: "pointer",
                                                transition: "background 0.3s",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "2px",
                                                    left: isActive ? "20px" : "2px",
                                                    width: "16px",
                                                    height: "16px",
                                                    background: isActive ? "#14151b" : "#777",
                                                    borderRadius: "50%",
                                                    transition: "left 0.3s",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                );

            case "layout":
                return (
                    <RoomTable />
                );

            default:
                return (
                    <div style={{ textAlign: "center", color: "#888" }}>
                        Tanlangan tab bo‘yicha kontent yo‘q
                    </div>
                );
        }
    };

    return (
        <div
            style={{
                minHeight: "87vh",
                color: "#f0f0f0",
                padding: "24px 32px",
                fontFamily: "sans-serif",
            }}
        >
            {/* bu yerga ichki content */}

            <h1 style={{ fontSize: "20px", marginBottom: "24px" }}>
                Игроклубы / Настройки
            </h1>


            <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr 7fr", gap: "18px" }}>
                {/* Chap panel */}
                <div
                    style={{
                        background: "#0F0F1A",
                        borderRadius: "12px",
                        border: "1px solid #333",
                        padding: "18px",
                    }}
                >
                    {/* Актив + edit icon */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <span style={{ color: "#4caf50", fontSize: "14px" }}>Актив</span>
                        <FaRegEdit
                            style={{
                                fontSize: "16px",
                                color: "#4aa8ff",
                                cursor: "pointer",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => (e.target.style.color = "#66c2ff")}
                            onMouseLeave={(e) => (e.target.style.color = "#4aa8ff")}
                            onClick={() => alert("Chap panel statusini tahrirlash")}
                        />
                    </div>

                    <div
                        style={{
                            width: "100%",
                            height: "150px",
                            background: "#141421",
                            borderRadius: "10px",
                            marginTop: "12px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "14px",
                            color: "#aaa",
                        }}
                    >
                        Club Image
                    </div>
                    <input
                        type="text"
                        defaultValue="Trillion"
                        placeholder="Игроклуб"
                        style={{ ...inputStyle, marginTop: "14px" }}
                    />
                    <textarea
                        defaultValue="Trillion"
                        placeholder="Описание"
                        rows="3"
                        style={{ ...textareaStyle, marginTop: "14px" }}
                    />
                    <input
                        type="text"
                        defaultValue="Sergeli"
                        placeholder="Филиал"
                        style={{ ...inputStyle, marginTop: "14px" }}
                    />
                    <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
                        <input type="time" defaultValue="02:00" style={inputStyle} />
                        <input type="time" defaultValue="02:00" style={inputStyle} />
                    </div>
                    <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
                        {["Standart", "Premium", "VIP"].map((tariff) => (
                            <button
                                key={tariff}
                                onClick={() =>
                                    setActiveTariffs((prev) =>
                                        prev.includes(tariff)
                                            ? prev.filter((t) => t !== tariff)
                                            : [...prev, tariff]
                                    )
                                }
                                style={{
                                    flex: 1,
                                    height: "42px",
                                    borderRadius: "8px",
                                    border: activeTariffs.includes(tariff)
                                        ? "1px solid #4aa8ff"
                                        : "1px solid #444",
                                    background: activeTariffs.includes(tariff) ? "#2b2c32" : "transparent",
                                    color: activeTariffs.includes(tariff) ? "#4aa8ff" : "#ddd",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    transition: "all 0.3s",
                                }}
                            >
                                {tariff}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tabs panel */}
                <div
                    style={{
                        background: "#0F0F1A",
                        borderRadius: "12px",
                        border: "1px solid #333",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                background: activeTab === tab.key ? "#2b2c32" : "transparent",
                                border: activeTab === tab.key ? "1px solid #4aa8ff" : "none",
                                borderRadius: "8px",
                                color: activeTab === tab.key ? "#4aa8ff" : "#ddd",
                                padding: "10px 12px",
                                textAlign: "left",
                                fontSize: "14px",
                                cursor: "pointer",
                                transition: "all 0.3s",
                            }}
                        >
                            <span style={{ fontSize: "16px" }}>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Ong content panel */}
                <div className="no-scrollbar"
                    style={{
                        background: "#0F0F1A",
                        borderRadius: "12px",
                        border: "1px solid #333",
                        padding: "22px",
                        overflow: "auto", height: "570px",
                    }}
                >
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

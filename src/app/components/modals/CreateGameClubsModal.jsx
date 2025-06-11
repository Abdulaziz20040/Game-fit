import React, { useState } from "react";
import { Modal, Input, TimePicker, Switch, Button, Upload } from "antd";
import {
  EnvironmentOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { FaUser, FaCrown, FaGem, FaWifi, FaSnowflake } from "react-icons/fa";

import dayjs from "dayjs";

const CreateGameClubModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [rates, setRates] = useState({
    standard: false,
    premium: false,
    vip: false,
  });

  const [conveniences, setConveniences] = useState({
    wifi: false,
    ac: false,
  });

  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Faqatgina rasm yuklash mumkin!");
    }
    return isImage || Upload.LIST_IGNORE;
  };

  return (
    <Modal
      title={
        <div className="text-lg font-bold text-gray-800">Create Game Club</div>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closable={true}
      modalRender={(modal) => (
        <div className="bg-[#E6EDF5] rounded-xl">{modal}</div>
      )}
    >
      <div className="space-y-4 px-1 pb-2 pt-4 ">
        {/* overflow-y-auto h-[600px] scroll-hidden  */}
        <div>
          <label className="block text-sm mb-1">Game Club Title</label>
          <Input placeholder="Enter title" />
        </div>
        <div>
          <label className="block text-sm mb-1">Branch</label>
          <Input placeholder="Enter branch" />
        </div>
        <div>
          <label className="block text-sm mb-1">Location</label>
          <Input
            placeholder="Enter location"
            prefix={<EnvironmentOutlined />}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Admin</label>
          <Input placeholder="Enter admin name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Mobile Number</label>
          <Input placeholder="Enter mobile number" />
        </div>

        {/* Working Hours */}
        <div>
          <label className="block text-sm mb-1">Working Hours</label>
          <div className="flex justify-between gap-2">
            <TimePicker
              use12Hours
              format="hh:mm a"
              className="w-1/2"
              placeholder="Start time"
            />
            <TimePicker
              use12Hours
              format="hh:mm a"
              className="w-1/2"
              placeholder="End time"
            />
          </div>
        </div>

        <div className="bg-[#f4f7fb] p-3 rounded-xl space-y-3">
          <div className="text-sm font-medium mb-1">Rates</div>

          <div className="bg-white rounded-xl p-3 flex justify-between items-start">
            <div className="flex items-start gap-2 text-sm">
              <FaUser size={18} className="mt-1" />
              <div>
                <b>Standart</b>
                <br />
                Oddiy o‘yin uchun yetarli
              </div>
            </div>
            <Switch
              checked={rates.standard}
              onChange={(val) => setRates({ ...rates, standard: val })}
            />
          </div>

          <div className="bg-white rounded-xl p-3 flex justify-between items-start">
            <div className="flex items-start gap-2 text-sm">
              <FaGem size={18} className="mt-1" />
              <div>
                <b>Premium</b>
                <br />
                Tezroq, yorqinroq, ko‘proq vaqt
              </div>
            </div>
            <Switch
              checked={rates.premium}
              onChange={(val) => setRates({ ...rates, premium: val })}
            />
          </div>

          <div className="bg-white rounded-xl p-3 flex justify-between items-start opacity-50">
            <div className="flex items-start gap-2 text-sm">
              <FaCrown size={18} className="mt-1" />
              <div>
                <b>VIP</b>
                <br />
                Chiroyli va shaxsiy o‘yin
              </div>
            </div>
            <Switch checked={false} disabled />
          </div>
        </div>

        {/* Conveniences */}
        <div className="bg-[#f4f7fb] p-3 rounded-xl space-y-3 mt-4">
          <div className="text-sm font-medium mb-1">Conveniences</div>

          <div className="bg-white rounded-xl p-3 flex justify-between items-start">
            <div className="flex items-start gap-2 text-sm">
              <FaWifi size={18} className="mt-1" />
              <div>
                <b>Free WiFi zona</b>
                <br />
                O‘yinlar davomida ham doimo onlayn
              </div>
            </div>
            <Switch
              checked={conveniences.wifi}
              onChange={(val) =>
                setConveniences({ ...conveniences, wifi: val })
              }
            />
          </div>

          <div className="bg-white rounded-xl p-3 flex justify-between items-start">
            <div className="flex items-start gap-2 text-sm">
              <FaSnowflake size={18} className="mt-1" />
              <div>
                <b>Air Conditioner</b>
                <br />
                Har bir nafasda salqinlik
              </div>
            </div>
            <Switch
              checked={conveniences.ac}
              onChange={(val) => setConveniences({ ...conveniences, ac: val })}
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div className="bg-[#f4f7fb] p-3 rounded-xl mt-4">
          <div className="text-sm font-medium mb-1">Download Photo</div>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={beforeUpload}
            multiple
          >
            {fileList.length >= 8 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Rasm qo'shish</div>
              </div>
            )}
          </Upload>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t pt-4">
        <Button
          style={{
            width: "147px",
            height: "40px",
          }}
        >
          Block
        </Button>
        <Button
          style={{
            width: "147px",
            height: "40px",
          }}
          danger
        >
          Delete
        </Button>
        <Button
          style={{
            width: "147px",
            height: "40px",
          }}
          type="primary"
          onClick={handleOk}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default CreateGameClubModal;

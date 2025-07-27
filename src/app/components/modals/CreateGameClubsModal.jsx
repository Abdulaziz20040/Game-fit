import React, { useState } from "react";
import { Modal, Input, TimePicker, Button, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../../styles/globals.css"; // CSS shu yerda bo‘lishi kerak

const CreateGameClubModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [fileList, setFileList] = useState([]);
  const [club, setClub] = useState("");
  const [description, setDescription] = useState("");
  const [branch, setBranch] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

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

  const handleSave = () => {
    if (!club || !branch || !startTime || !endTime) {
      message.error("Barcha maydonlarni to‘ldiring!");
      return;
    }

    handleOk({
      club,
      description,
      branch,
      startTime,
      endTime,
      fileList,
    });

    // Reset
    setClub("");
    setDescription("");
    setBranch("");
    setStartTime(null);
    setEndTime(null);
    setFileList([]);
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      closable
      centered
      width={480}
      title={<div className="text-white text-lg font-semibold">Создать игроклуб</div>}
      className="custom-dark-modal"
    >
      <div className="space-y-4">
        {/* Upload Photo */}
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          beforeUpload={beforeUpload}
          multiple
        >
          {/* Rasm qo‘shish har doim ko‘rinadigan bo‘lsin */}
          <div>
            <PlusOutlined />
            <div>Загрузить фото</div>
          </div>
        </Upload>

        {/* Game Club Name */}
        <div>
          <label className="block text-sm text-white mb-1">Игроклуб</label>
          <Input value={club} onChange={(e) => setClub(e.target.value)} placeholder="Trillon" />
        </div>

        {/* Description */}
        <div>
          <Input.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="Trillon"
          />
        </div>

        {/* Branch */}
        <div>
          <label className="block text-sm text-white mb-1">Филиал</label>
          <Input value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="Sergeli" />
        </div>

        {/* Working Hours */}
        <div>
          <label className="block text-sm text-white mb-1">График работы</label>
          <div className="flex gap-2">
            <TimePicker
              use12Hours
              format="hh:mm a"
              className="w-1/2"
              value={startTime}
              onChange={(val) => setStartTime(val)}
              placeholder="Start"
            />
            <TimePicker
              use12Hours
              format="hh:mm a"
              className="w-1/2"
              value={endTime}
              onChange={(val) => setEndTime(val)}
              placeholder="End"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-6">
          <Button style={{ width: "48%" }} onClick={handleCancel}>
            Отмена
          </Button>
          <Button type="primary" style={{ width: "48%" }} onClick={handleSave}>
            Сохранить
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateGameClubModal;

import React, { useState, useEffect } from "react";
import "./Dream.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

export interface IDream {
  _id: string;
  date: string;
  summary: string;
  fetchDreams?: any;
  setDream?: any;
  setIsModalOpen?: any;
}

const Dream: React.FC<IDream> = ({
  _id,
  date,
  summary,
  fetchDreams,
  setDream,
  setIsModalOpen,
}) => {
  const removeDream = async (id: string) => {
    console.log(id);
    await fetch(`/api/dream/${id}`, {
      method: "DELETE",
    });
    if (fetchDreams) await fetchDreams();
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="Dream_card">
      <Card
        key={_id}
        actions={[
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" onClick={() => removeDream(_id)} />,
        ]}
      >
          <Meta
            title={new Date(date).toLocaleDateString()}
            description={summary}
          />
      </Card>
    </div>
  );
};

export default Dream;

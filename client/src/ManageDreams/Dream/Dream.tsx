import React, { useState, useEffect } from "react";
import "./Dream.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

export interface IDream {
  dream: any;
  setSelectedDream?: any;
  fetchDreams?: any;
  setIsModalOpen?: any;
}

const Dream: React.FC<IDream> = ({
  dream,
  setSelectedDream,
  fetchDreams,
  setIsModalOpen,
}) => {
  const removeDream = async (id: string) => {
    await fetch(`/api/dream/${id}`, {
      method: "DELETE",
    });
    if (fetchDreams) await fetchDreams();
  };

  const handleEdit = () => {
    console.log('handle edit', dream);
    setIsModalOpen(true);
    setSelectedDream(dream);
  };

  return (
    <div className="Dream_card">
      <Card
        key={dream._id}
        actions={[
          <EditOutlined key="edit" onClick={handleEdit}/>,
          <DeleteOutlined key="delete" onClick={() => removeDream(dream._id)} />,
        ]}
      >
          <Meta
            title={new Date(dream.date).toLocaleDateString()}
            description={dream.summary}
          />
      </Card>
    </div>
  );
};

export default Dream;

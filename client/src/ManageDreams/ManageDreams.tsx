import React, { useState, useEffect } from "react";
import "./ManageDreams.css";
import Dream, { IDream } from "./Dream/Dream";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Spin } from "antd";
import DreamModal from "./DreamModal/DreamModal";

const ManageDreams: React.FC = () => {
  const [backendData, setBackendData] = useState<IDream[]>();
  const [dream, setDream] = useState<IDream>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchDreams();
  }, []);

  const fetchDreams = () => {
    fetch("/api/dream")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBackendData(data.dreams);
      });
  };

  return (
    <>
      <DreamModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} dream={null} fetchDreams={fetchDreams} />
      {!backendData ? 
      (<div className="ManageDreams_spinner"><Spin size="large"/></div>) :
      (<div className="ManageDreams_container">
          <div className="ManageDreams_container-add-button">
            <Button onClick={() => setIsModalOpen(true)} type="primary">
              <PlusCircleOutlined />
            </Button>
          </div>
          <div className="ManageDreams_container-dream-cards">
            {backendData.map(({ _id, date, summary }) => {
              return (
                <Dream
                  _id={_id}
                  date={date}
                  summary={summary}
                  fetchDreams={fetchDreams}
                  setDream={setDream}
                  setIsModalOpen={setIsModalOpen}
                />
              );
            })}
          </div>
        </div>)}
    </>
  );
};

export default ManageDreams;

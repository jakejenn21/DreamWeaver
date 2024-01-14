import React, { useState, useEffect } from "react";
import "./ManageDreams.css";
import { Button } from "antd";

interface Dream {
  _id: string,
  title: string;
  description: string;
}

const ManageDreams: React.FC = () => {
  const [backendData, setBackendData] = useState<Dream[]>();

  useEffect(() => {
    fetch('/api/dream')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.dreams);
      });
  }, []);

  const removeDream = async (id: string) => {
    console.log(id);
    await fetch(`/api/dream/${id}`, {
      method: 'DELETE',
    });

    fetch('/api/dream')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.dreams);
      });
  }

  return (
    <>
      {!backendData && <div>Loading...</div>}
      {backendData && (
        <div className="ManageDreams_container">
          {backendData.map(({ _id, title, description }) => {
            return (
              <div>
                <Button onClick={() => removeDream(_id)}>Delete</Button>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ManageDreams;

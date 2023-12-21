import React, { useState, useEffect } from "react";
import "./ManageDreams.css";

interface Dream {
  title: string;
  description: string;
}

const ManageDreams: React.FC = () => {
  const [backendData, setBackendData] = useState<Dream[]>();

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data.dreams);
      });
  }, []);

  return (
    <>
      {!backendData && <div>Loading...</div>}
      {backendData && (
        <div className="ManageDreams_container">
          {backendData.map(({ title, description }) => {
            return (
              <div>
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

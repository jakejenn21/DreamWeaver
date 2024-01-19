import React, { useEffect, useState } from "react";
import "./WeaveDreams.css";


const WeaveDreams: React.FC = () => {
  const [weaveData, setWeaveData] = useState<string>();

  useEffect(() => {
    fetchDreamWeaves();
  }, []);

  const fetchDreamWeaves = () => {
    fetch("/api/dream/weave")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeaveData(data.message);
      });
  };

  return (
    <>{weaveData}</>
  );
};

export default WeaveDreams;
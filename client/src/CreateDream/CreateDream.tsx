import React from "react";
import "./CreateDream.css";
import { Input, Button } from 'antd';

const { TextArea } = Input;

const CreateDream: React.FC = () => {
  return (
    <div>
      <h1>Create Dream</h1>
      <div>Title: <Input/> </div>
      <div>Description: <TextArea/> </div>
      <div><Button style={{'marginTop': 8 }}type="primary">Submit</Button></div>
    </div>
  );
};

export default CreateDream;

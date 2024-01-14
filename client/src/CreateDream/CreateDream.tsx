import React from "react";
import "./CreateDream.css";
import { Input, Form, Button, message } from "antd";
const { TextArea } = Input;

// interface Dream {
//   title: string,
//   description: string,
// }

const CreateDream: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const initialValues = { title: null, description: null };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onReset = () => {
    form.resetFields();
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully added Dream!',
    });
  };

  const onFinish = async (dream: any) => {
    console.log(dream);
    await fetch('/api/dream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dream)
    });
    success();
    form.resetFields();
  };

  return (
    <div>
      {contextHolder}
      <h1>Create Dream</h1>
      <Form
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
        autoComplete="off"
        layout="horizontal"
        size="large"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateDream;

import React from "react";
import { Input, Form, message, DatePicker, Modal } from "antd";
import type { DatePickerProps } from "antd";
import dayjs from 'dayjs'
const { TextArea } = Input;

interface IDreamModal {
  isModalOpen: boolean;
  setIsModalOpen: any;
  dream?: any;
  fetchDreams?: any;
}

const DreamModal: React.FC<IDreamModal> = ({
  isModalOpen,
  setIsModalOpen,
  dream,
  fetchDreams,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const isEdit = !!dream;
  let initialValues = { date: null, summary: null };
  if (isEdit) initialValues = { ...dream, date: dayjs(new Date(dream.date))};

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Successfully added Dream!",
    });
  };

  console.log('initial modal vals', initialValues)

  // Manage Date picker
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  // Button actions
  const onSubmit = async () => {
    form
      .validateFields()
      .then(async (values: { date: Date; summary: string }) => {
        const { date, summary } = values;
        await fetch("/api/dream", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date, summary}),
        });
        success();
        setIsModalOpen(false);
        form.resetFields();
        await fetchDreams();
      }).catch();
  };

  const onCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
      <Modal
        title={isEdit ? "Edit Dream" : "Create Dream"}
        open={isModalOpen}
        okText="Submit"
        onOk={onSubmit}
        onCancel={onCancel}
      >
        <Form
          form={form}
          initialValues={initialValues}
          autoComplete="off"
          layout="vertical"
          className="CreateDream_form"
          size="large"
        >
          <Form.Item
            name="date"
            className="CreateDream_form-item--date"
            rules={[{ required: true, message: "Please input the date!" }]}
          >
            <DatePicker onChange={onChange} allowClear/>
          </Form.Item>
          <Form.Item
            name="summary"
            className="CreateDream_form-item--summary"
            rules={[{ required: true, message: "Please input the summary!" }]}
          >
            <TextArea placeholder="Write a summary here..." allowClear/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default DreamModal;

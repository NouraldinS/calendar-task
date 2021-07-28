import { React, useState } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Calendar, Badge, Input } from 'antd';
import { Modal, Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const CalendarDesign = () => {
  const [title, setTitle] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleOk = () => {
    setIsModalVisible(false);
    alert(title)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  const handlSubmit = (e) => {
    e.preventDefault();
    alert(`tittle of task is ${title}`)

  }
  return (
    <>
      <Calendar
        onChange={showModal}
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender} />

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
        footer={[
          <Button type="submit" onClick={handleOk}>
            Add Event
          </Button>,
          <Button onClick={handleCancel}>
            Cancel
          </Button>

        ]}>
        <form onSubmit={handlSubmit}>


          <Input onChange={e => setTitle(e.target.value)} type="text" name="title" value={title} />
          <RangePicker

          />



        </form>

      </Modal>
    </>


  )
}
export default CalendarDesign


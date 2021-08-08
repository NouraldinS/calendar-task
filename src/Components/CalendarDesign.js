import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Button, Calendar, Input } from 'antd';
import { Modal } from 'antd';
import DayCell from './DayCell';
const CalendarDesign = (props) => {
  const [title, setTitle] = useState('');
  const [date, SetDate] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editmode, setEditmode] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function changeCellDate(id, newDate) {
    const newEventList = props.eventlist.slice();
    const eventId = newEventList.findIndex((event) => event.props.id === id);
    newEventList[eventId].date = newDate;
    console.log({ eventId })
    props.oneventChange(newEventList);
  }
  function dateCellRender(value) {
    const listData = props.eventlist;
    return (
      <DayCell changeCellDate={changeCellDate} value={value} setTitle={setTitle} setEditmode={setEditmode} showModal={showModal} onidChange={props.onidChange} listData={listData} />
    )
  }
  const addEvent = (event) => {
    props.oneventChange([...props.eventlist, { event, date, title, id: Math.random() }])
  }
  const updateEvent = () => {
    const index = props.eventlist.findIndex(item => item.id === props.id);
    const eventsUpdate = [...props.eventlist];
    props.eventlist[index].title = title;
  }
  const handleSubmit = (event) => {
    if (editmode) {
      updateEvent();
    } else {
      addEvent(event)
    }
    setIsModalVisible(false);
  }
  const deleteEvent = id => {
    const index = props.eventlist.findIndex(item => item.id === id);
    props.eventlist.splice(index, 1);
    setIsModalVisible(false);
  }
  const handleSelect = (date) => {
    SetDate(date)
    setEditmode(false);
    setTitle("");
    showModal()
  }
  return (
    <>
      <Calendar
        dateCellRender={dateCellRender}
        onSelect={handleSelect}
      />
      <Modal
        footer={editmode ? [
          <Button onClick={handleSubmit} key="1">Update Event</Button>,
          <Button onClick={() => deleteEvent(props.id)} key="4"> Delete </Button>,
          <Button onClick={handleCancel} key="2"> Cancel</Button>,
        ] : [
          <Button onClick={handleSubmit} key="1">Add Event</Button>,
          <Button onClick={handleCancel} key="2"> Cancel</Button>
        ]}
        title="Basic Modal"
        visible={isModalVisible}
        okType="primary">
        <Input onChange={e => setTitle(e.target.value)} type="text" name="title" value={title} />
      </Modal>
    </>
  )
}
export default CalendarDesign
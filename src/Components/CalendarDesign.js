import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Button, Calendar, Input } from 'antd';
import { Modal } from 'antd';
import DayCell from './DayCell';
import CalendarModal from './CalendarModal';
const CalendarDesign = (props) => {
  const [title, setTitle] = useState('');
  const [date, SetDate] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editmode, setEditmode] = useState(false);
  const [eventlist, SetEventlist] = useState([])
  const [id, setId] = useState(1)
  const showModal = () => {
    setIsModalVisible(true);
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function changeCellDate(id, newDate) {
    console.log(id,eventlist)
    const index = eventlist.findIndex(item => item.id === id);
      const newEventList = [...eventlist ]
      newEventList[index].date = newDate;
      SetEventlist(newEventList);
}
console.log(.05878787,eventlist)

  function dateCellRender(value) {
    const listData = eventlist;
    return (
      <DayCell changeCellDate={changeCellDate} value={value} setTitle={setTitle} setEditmode={setEditmode} showModal={showModal} onidChange={setId} listData={listData} />
    )
  }
  const addEvent = (event) => {
    SetEventlist([...eventlist, { event, date, title, id: Math.random() }])
  }
  const updateEvent = () => {
    const index = eventlist.findIndex(item => item.id === id);
    console.log(index)
    const eventsUpdate = [...eventlist];
    eventlist[index].title = title;
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
    const index = eventlist.findIndex(item => item.id === id);
    eventlist.splice(index, 1);
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
      <CalendarModal
      editmode = {editmode}
      setEditmode = {setEditmode}
      handleSubmit = {handleSubmit}
      id = {id}
      deleteEvent = {deleteEvent}
      handleCancel = {handleCancel}
      setTitle = {setTitle}
      title = {title}
      setIsModalVisible = {setIsModalVisible}
      isModalVisible = {isModalVisible}
      />    
    </>
  )
}
export default CalendarDesign
import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Button, Calendar, Input } from 'antd';
import { Modal, } from 'antd';
import CalendarEvent from './CalendarEvent';
import { EventContext } from './Context';
import moment from 'moment';
const CalendarDesign = (props) => {
  const [title, setTitle] = useState('');
  const [eventlist, SetEventlist] = useState([])
  const [edit, SetEdit] = useState(true)
  const [date, SetDate] = useState('')
  const [id, setId] = useState(1)
  const [value, SetValue] = useState(moment('2017-01-25'))
  const [selectValue, SetselectValue] = useState(moment('2017-01-25'))
  const name = useContext(EventContext)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function dateCellRender(value) {
    const listData = eventlist;
    return (
      <ul className="event">
        {listData.map(item => {
          if (item.date.format('l') == value.format('l')) {
            return <p key={item.title.toString()}>
              {item.title}
            </p>
          }
        }
        )}
      </ul>
    )
  }
  const addevent = (event) => {
    SetEventlist([...eventlist, { event, date, title, id }])
    // console.log(eventlist)
    // console.log({event})
  }

  const Handlesubmit = (event) => {
    addevent(event)
    setIsModalVisible(false);
    console.log(eventlist)
  }
  // const style={
  //   display: edit === true ? 'none': 'block'
  // }
  const HandleSelect = (date) => {
    SetDate(date)
    showModal()
  }
  const onSelect = value => {
    const newList = eventlist.filter((item) => (item.date) == (value)
    );
    SetEventlist(newList);
    setIsModalVisible(false);

  };
  return (
    <>
      <Calendar
        onPanelChange={onSelect}
        dateCellRender={dateCellRender}
        onSelect={HandleSelect}
      />
      <Modal
        footer={[
          <Button onClick={Handlesubmit} key="">Add Event</Button>,
          <Button onClick={handleCancel} key=""> Cancel</Button>,
          <Button onClick={onSelect} key=""> Delete</Button>,
          <Button onClick key=""> Update Event</Button>,
        ]}
        title="Basic Modal"
        visible={isModalVisible}
        okType="primary">
        <Input onChange={e => setTitle(e.target.value)} type="text" name="title" value={title} />
      </Modal>
      {/* <h1>My name is {name}</h1> */}
    </>

  )
}
export default CalendarDesign


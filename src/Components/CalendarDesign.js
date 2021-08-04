import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button, Calendar, Input } from 'antd';
import { Modal} from 'antd';
import { EventContext } from './Context';
const CalendarDesign = (props) => {
  var matchDrag = useDrag({
    type: "FILE"
  });
  var matchDrop = useDrop({
    accept: "FILE",
    drop: function (item, monitor) {
      console.log("dropped");
    }
  });
  const [title, setTitle] = useState('');
  const [eventlist, SetEventlist] = useState([])
  const [date, SetDate] = useState('')
  const [id, setId] = useState(1)
  const name = useContext(EventContext)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editmode, setEditmode] = useState(false);
  const showModal = () => {
      setIsModalVisible(true);     
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function dateCellRender(value) {
    const listData = eventlist;
    return (
      <ul className="event">
        {listData.map(item => {
          if (item.date.format('l') === value.format('l')) {
            return <div onClick = {(e)=>{e.stopPropagation();
              setTitle(item.title);
              setEditmode(true);
              setId(item.id);
              showModal()
            }
            }
              className="task" >
              <p  ref={matchDrag[1]}
              key={item.id}>{item.title}  </p>
            </div>
          }
        })}</ul>
    )
  }
  const addevent = (event) => {
    SetEventlist([...eventlist, { event, date, title, id: Math.random() }])
  }
  const updateEvent = () => {
    const index = eventlist.findIndex(item => item.id === id);
    const eventsUpdate = [...eventlist];
    eventlist[index].title = title;
  }
  const Handlesubmit = (event) => {
    if (editmode) {
      updateEvent();
    } else {
      addevent(event)
    }
    setIsModalVisible(false);
    // console.log({ eventlist });
  }
  const DeleteEvent = id => {
    const index = eventlist.findIndex(item => item.id === id);
    eventlist.splice(index, 1);
    setIsModalVisible(false);
  }
  const HandleSelect = (date) => {
    // console.log({ date });
    SetDate(date)
    setEditmode(false);
    setTitle("");
    showModal()
  }
  return (
    <>
      <Calendar
        dateCellRender={dateCellRender}
        onSelect={HandleSelect}
      />
      <Modal
        footer={editmode?[
          <Button onClick={Handlesubmit} key="1">Update Event</Button>,
          <Button onClick={() => DeleteEvent(id)} key="4"> Delete </Button>,
          <Button onClick={handleCancel} key="2"> Cancel</Button>,
        ]:[
          <Button onClick={Handlesubmit} key="1">Add Event</Button>,
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


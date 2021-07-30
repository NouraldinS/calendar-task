import { React, useState } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Calendar, Input } from 'antd';
import { Modal, } from 'antd';

const CalendarDesign = () => {
  const [title, setTitle] = useState('');
  const [eventlist, SetEventlist] = useState([])
  const [date, SetDate] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false);

  // console.log({eventlist})
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
      {listData.map(item =>
      {
        if(item.date.format('l')==value.format('l')){
          return <p key={item.id}>
          {item.title}        
        </p>         
        }
      }       
      )}        
        </ul>
    )
  }
  const addevent = (event) => {
    SetEventlist([...eventlist, { event, date, title }])
    console.log(eventlist)
    // console.log({event})
  }
  const Handlesubmit = (event) => {
    addevent(event)
    setIsModalVisible(false);
    // console.log(title)
  }
  const HandleChange = (date) => {
    SetDate(date)
    showModal()
    // console.log(date)
  }
  return (
      <>
        <Calendar
          onChange={HandleChange}
          dateCellRender={dateCellRender}
        />
        <Modal title="Basic Modal" visible={isModalVisible} onOk={Handlesubmit} onCancel={handleCancel}>
          <Input onChange={e => setTitle(e.target.value)} type="text" name="title" value={title} />
        </Modal>
      </>
  )

}
export default CalendarDesign


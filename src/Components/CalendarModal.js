import React from 'react'
import { Modal,Button,Input } from 'antd';
import 'antd/dist/antd.css';
function CalendarModal(props) {
    return (
        <div>
        <Modal
        footer={props.editmode ? [
          <Button onClick={props.handleSubmit} key="1">Update Event</Button>,
          <Button onClick={() => props.deleteEvent(props.id)} key="4"> Delete</Button>,
          <Button onClick={props.handleCancel} key="2"> Cancel</Button>,
        ] : [
          <Button onClick={props.handleSubmit} key="1">Add Event</Button>,
          <Button onClick={props.handleCancel} key="2"> Cancel</Button>
        ]}
        title="Basic Modal"
        visible={props.isModalVisible}
        okType="primary">
        <Input onChange={e => props.setTitle(e.target.value)} type="text" name="title" value={props.title} />
      </Modal>
        </div>
    )
}
export default CalendarModal

import React, { useState } from 'react'
import CalendarDesign from './CalendarDesign'
const CalendarEvent = () => {
  const [id, setId] = useState(1)
  const [eventlist, SetEventlist] = useState([])
  return (
    <div>
      <CalendarDesign
        eventlist={eventlist}
        oneventChange={SetEventlist}
        username="mohammed"
        id={id} onidChange={setId}
      />
    </div>
  )
}
export default CalendarEvent

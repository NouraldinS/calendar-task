import CalendarDesign from './Components/CalendarDesign';
import React from 'react';
import { EventContext } from './Components/Context'
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import CalendarEvent from './Components/CalendarEvent';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        {/* <EventContext.Provider value={'mohammed Hassan'}> */}
          <CalendarEvent />
        {/* </EventContext.Provider> */}
      </DndProvider>
    </div>

  );
}
export default App;

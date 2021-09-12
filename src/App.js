import CalendarDesign from './Components/CalendarDesign';
import React from 'react';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
          <CalendarDesign />
      </DndProvider>
    </div>
  );
}
export default App;

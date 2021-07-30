import CalendarDesign from './Components/CalendarDesign';
import React from 'react';
import { EventContext } from './Components/Context'

function App() {
  
  
  return (
    <div className="App">
      <EventContext.Provider value = {'mohammed Hassan'}>
      <CalendarDesign/>

      </EventContext.Provider>
    </div>
  );
}

export default App;

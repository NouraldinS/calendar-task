import { useDrop } from 'react-dnd';
import EventItem from './EventItem'
function DayCell({ changeCellDate, listData, setEditmode, showModal, setTitle, onidChange, value }) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: "event", canDrop: () => true, drop: (item) => {
            changeCellDate(item.id, value);
        }
    }));
    return (<div className="event" ref={drop} style={{ height: "100%" }}  >
        {listData.map(item => {
            if (item.date.format('l') === value.format('l')) {
                return <EventItem id={item.id} item={item} setEditmode={setEditmode} showModal={showModal} setTitle={setTitle} onidChange={onidChange} />
            }
        })}</div>
    )
}
export default DayCell;
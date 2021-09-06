import { useDrop } from 'react-dnd';
import EventItem from './EventItem'
function DayCell(props) {
    const [collectedProps, drop] = useDrop(() => ({
        accept: "event", canDrop: () => true, drop: (item) => {
            props.changeCellDate(item.id, props.value);
        }
    }),[props.listData]);
    return (<div className="event" ref={drop} style={{ height: "100%" }}  >
        {props.listData.map(item => {
            if (item.date.format('l') === props.value.format('l')) {
                return <EventItem id={item.id} item={item} setEditmode={props.setEditmode} showModal={props.showModal} setTitle={props.setTitle} onidChange={props.onidChange} />
            }
        })}</div>
    )
}
export default DayCell;
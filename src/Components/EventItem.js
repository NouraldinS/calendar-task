import { useDrag } from 'react-dnd'
function EventItem({ id, item, setEditmode, showModal, setTitle, onidChange }) {
    const [collected, drag, dragPreview] = useDrag(() => ({
        type: "event",
        item: { id }
    }))
    return collected.isDragging ? (
        <div ref={dragPreview} >
            <p key={item.id}>{item.title}  </p>
        </div>
    ) : (
        <div ref={drag} {...collected}
            onClick={(e) => {
                e.stopPropagation();
                setTitle(item.title);
                setEditmode(true);
                onidChange(item.id);
                showModal()
            }
            }
            className="task" >
            <p key={item.id}>{item.title}  </p>
        </div>
    )
}
export default EventItem;
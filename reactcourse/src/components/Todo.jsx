import {useState} from "react";
import Popup from "./Popup.jsx";

function Todo({text, description}) {
     const [popupOpen, setPopupOpen] = useState(false)

     function togglePopup() {
         setPopupOpen(!popupOpen)
     }

    function confirm() {
         setPopupOpen(false)
    }

    function cancel() {
         setPopupOpen(false)
    }
    return (
        <div className="todo-item">
            <h2>{text}</h2>
            <p>{description}</p>
            <button onClick={togglePopup}>Delete</button>
            {popupOpen &&
                (<Popup
                    notice={"Are you sure?"}
                    confirmFunc={confirm}
                    cancelFunc={cancel}
                />)
            }
        </div>
    )
 }

 export default Todo;
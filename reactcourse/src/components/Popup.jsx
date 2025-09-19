function Popup({notice, confirmFunc, cancelFunc}) {
    return (
        <>
            <div className="popup">
                <span>{notice}</span>
                <div className="popup_btns">
                    <button className="popup_btn" onClick={confirmFunc}>Confirm</button>
                    <button className="popup_btn" onClick={cancelFunc}>Cancel</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    )
}

export default Popup;
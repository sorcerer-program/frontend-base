function Add({confirmFunc, cancelFunc}) {
     return (
        <>
          <div className="add">
                <span>{"ADD"}</span>
                <form className="add-form">
                    <div>
                        <label>Title：</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input type="text" />
                    </div>

                </form>
                <div className="popup_btns">
                    <button className="popup_btn" onClick={confirmFunc}>Confirm</button>
                    <button className="popup_btn" onClick={cancelFunc}>Cancel</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    )
}
export default Add;
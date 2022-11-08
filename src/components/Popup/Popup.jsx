import { useEffect, useState } from "react";
import "../../css/popup.css";
import "../../css/popup_mobile.css";
import "../../css/style.css";

import Login from "./Login";

const Popup = (props) => {
    const [show, setShow, ] = useState(false);

    const closeHandler = () => {
        setShow(false);
        props.onClose(false);
    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <div

            style={{
                visibility: show ? "visible" : "hidden",
                opacity: show ? "1" : "0"
            }}
            className="popupContent_overlay"
        >
            <div className="popupContent_popup">

                <div className="popupContent_title">

                    <h2  className="popupContent_h2">{props.title}</h2>

                   <button className='popupContent_close' onClick={closeHandler}> &times; </button>            
                          
                </div>

                <  Login/>

            </div>
        </div>
    );
};

export default Popup;

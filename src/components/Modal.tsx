import React from "react";
import './modal.css'
import {Form} from "./Form";

export const Modal = ({active, setActive}: any) => {
    return (
        <>
            {active && (<div className="modal" onClick={() => setActive(false)}>
                <div className="modal_content" onClick={event => event.stopPropagation()}>
                    <Form/>
                </div>
            </div>)
            }
        </>
    )
}

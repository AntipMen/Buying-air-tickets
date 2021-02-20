//@ts-ignore
import swal from '@sweetalert/with-react'
import React from "react";


export default () => swal({
    text: "Buy a ticket",
    buttons: {
        text: "Success",
        closeModal: false,
    },
    content: (
        <form className="form-control" name="formControl">
            <div className="swal-content input-control">
                <label>First Name</label>
                <input className="swal-content__input" type="text" name="firstname"/>
            </div>

            <div className="swal-content input-control">
                <label>Second Name</label>
                <input className="swal-content__input" type="text" name="secondname"/>
            </div>

            <div className="swal-content input-control">
                <label>Phone</label>
                <input className="swal-content__input" type="text" name="phone"/>
            </div>

            <div className="swal-content input-control">
                <label>Email</label>
                <input className="swal-content__input" type="email" name="email"/>
            </div>

            <div className="swal-content input-control">
                <label>Passport Number</label>
                <input className="swal-content__input" type="text" name="passport"/>
            </div>

        </form>
    )
}).then(() => {
    console.log(swal.getState())
})


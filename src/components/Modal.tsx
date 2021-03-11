import React, {useState} from "react";
import './modal.css'

export const Modal = ({active, setActive}: any) => {
    console.log(active, setActive)
    const [form, setForm] = useState({
        first_name: '',
        second_name: '',
        email: '',
        telephone: ''
    });

    const submitForm = (event: any) => {
        event.preventDefault();
        console.log(form)
    }

    return (
        <>
            {active && (<div className="modal" onClick={() => setActive(false)}>
                <div className="modal_content" onClick={event => event.stopPropagation()}>
                    <form onSubmit={event => submitForm(event)}>
                        <h1>Buy a ticket</h1>
                        <div className="form-group">
                            <label className="label-form" htmlFor="first_name">First Name</label>
                            <div className="size-5">
                                <input type="text"
                                       id="first_name"
                                       placeholder="First Name..."
                                       value={form.first_name}
                                       className="form-control"
                                       onChange={(event) => setForm({...form, first_name: event.target.value})}/>
                                <span className={form.first_name.length < 2 ? 'error' : 'message'}>The field is filled in incorrectly</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label-form" htmlFor="second_name">Second Name</label>
                            <div className="size-5">
                                <input type="text"
                                       id="second_name"
                                       placeholder="Second Name..."
                                       value={form.second_name}
                                       className="form-control"
                                       onChange={(event) => setForm({...form, second_name: event.target.value})}/>
                                <span className={form.second_name.length < 2 ? 'error' : 'message'}>The field is filled in incorrectly</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label-form" htmlFor="email">Email</label>
                            <div className="size-5">
                                <input type="text"
                                       id="email"
                                       placeholder="Email..."
                                       value={form.email}
                                       className="form-control"
                                       onChange={(event) => setForm({...form, email: event.target.value})}/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label-form" htmlFor="telephone">Telephone</label>
                            <div className="size-5">
                                <input type="text"
                                       id="telephone"
                                       placeholder="Telephone..."
                                       value={form.telephone}
                                       className="form-control"
                                       onChange={(event) => setForm({...form, telephone: event.target.value})}/>
                            </div>
                        </div>
                        <div className="footer">
                            <button type="submit" className="btn btn-primary mb-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>)
            }
        </>
    )

}



import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import './form.css';
import done from '../assets/icon-done.png'

export const Form = () => {
    const [form, setForm] = useState({
        first_name: '',
        second_name: '',
        email: '',
        telephone: ''
    });

    const [dirty, setDirty] = useState({
        first_name: false,
        second_name: false,
        email: false,
        telephone: false
    })

    const [error, setError] = useState({
        first_name: 'First Name cannot be empty',
        second_name: 'Second Name cannot be empty',
        email: 'Email cannot be empty',
        telephone: 'Telephone cannot be empty'
    })

    const [formValid, setFormValid] = useState(false);
    const [formSend, setFormSend] = useState(false);

    useEffect(() => {
        if (error.first_name || error.second_name || error.email || error.telephone) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [error.first_name || error.second_name || error.email || error.telephone])

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'first_name':
                setForm({...form, first_name: e.target.value});
                if (e.target.value.length < 3) {
                    setError({...error, first_name: 'First Name cannot be shorter than 3 characters'});
                    if (!e.target.value) {
                        setError({...error, first_name: 'First Name cannot be empty'});
                    }
                } else {
                    setError({...error, first_name: ''});
                }
                break;
            case 'second_name':
                setForm({...form, second_name: e.target.value});
                if (e.target.value.length < 3) {
                    setError({...error, second_name: 'First Name cannot be shorter than 3 characters'});
                    if (!e.target.value) {
                        setError({...error, second_name: 'Second Name cannot be empty'});
                    }
                } else {
                    setError({...error, second_name: ''});
                }
                break;
            case 'email':
                setForm({...form, email: e.target.value})
                const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!validEmail.test(String(e.target.value).toLowerCase())) {
                    setError({...error, email: 'Incorrect email'})
                } else {
                    setError({...error, email: ''})
                }
                break;
            case 'telephone':
                setForm({...form, telephone: e.target.value})
                const validPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
                if (!validPhone.test(e.target.value)) {
                    setError({...error, telephone: 'Incorrect telephone'})
                } else {
                    setError({...error, telephone: ''})
                }
                break;
        }
    }

    const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'first_name':
                setDirty({...dirty, first_name: true});
                break;
            case 'second_name':
                setDirty({...dirty, second_name: true});
                break;
            case 'email':
                setDirty({...dirty, email: true});
                break;
            case 'telephone':
                setDirty({...dirty, telephone: true});
                break;

        }
    }

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        console.log(form)
        setFormSend(true);
    }

    return (
        <>
            {!formSend ? (
                    <form onSubmit={e => submitForm(e)}>
                        <h1>Buy a ticket</h1>
                        <div className="form-group">
                            <label className="label-form" htmlFor="first_name">First Name</label>
                            <div className="size-5">
                                <input type="text"
                                       id="first_name"
                                       name="first_name"
                                       placeholder="First Name..."
                                       value={form.first_name}
                                       className="form-control"
                                       onBlur={e => blurHandler(e)}
                                       onChange={e => changeHandler(e)}/>
                                {(dirty.first_name && error.first_name) && <div className="error">{error.first_name}</div>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label-form" htmlFor="second_name">Second Name</label>
                            <div className="size-5">
                                <input type="text"
                                       id="second_name"
                                       name="second_name"
                                       placeholder="Second Name..."
                                       value={form.second_name}
                                       className="form-control"
                                       onBlur={e => blurHandler(e)}
                                       onChange={(e) => changeHandler(e)}/>
                                {(dirty.second_name && error.second_name) && <div className="error">{error.second_name}</div>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label-form" htmlFor="email">Email</label>
                            <div className="size-5">
                                <input type="text"
                                       id="email"
                                       name="email"
                                       placeholder="Email..."
                                       value={form.email}
                                       className="form-control"
                                       onBlur={e => blurHandler(e)}
                                       onChange={(e) => changeHandler(e)}/>
                                {(dirty.email && error.email) && <div className="error">{error.email}</div>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label-form" htmlFor="telephone">Telephone</label>
                            <div className="size-5">
                                <input type="text"
                                       id="telephone"
                                       name="telephone"
                                       placeholder="Telephone..."
                                       value={form.telephone}
                                       className="form-control"
                                       onBlur={e => blurHandler(e)}
                                       onChange={(e) => changeHandler(e)}/>
                                {(dirty.telephone && error.telephone) && <div className="error">{error.telephone}</div>}
                            </div>
                        </div>
                        <div className="footer">
                            <button disabled={!formValid} type="submit"
                                    className={formValid ? 'btn btn-primary mb-2' : 'btn btn-primary mb-2 btn-disabled'}>Submit
                            </button>
                        </div>
                    </form>) :
                (<div>
                    <div>
                        <img className="done" src={done} alt="done"/>
                    </div>
                    <div className="text-done">Data saved!</div>
                </div>)
            }
        </>
    )
}

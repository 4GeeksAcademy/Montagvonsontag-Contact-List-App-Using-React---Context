import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import contactServices from "../services/contactServices";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const EditContact = () => {
    //Extraction of id from URL
    const params = useParams()
    
    const { store, dispatch } = useGlobalReducer()

    const navigate = useNavigate()
    //Initiation of state with contact from agenda with same id than received from 
    const [formData, setFormData] = useState(store.agenda.find(el => el.id == params.id));

    const handleChange = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    const handleCancel = () => {
        navigate('/')
    } 


    const handleReset = (e) => {
        e.preventDefault();
        setFormData(store.agenda.find(el => el.id == params.id))
    }

    const handleSubmit = e => {
        e.preventDefault();
        contactServices.updateContact('Mazinger', params.id, formData)
        navigate('/')
    }

  return (
        <div className="container">
            <h2>Edit contact</h2>
            
            <form onSubmit={handleSubmit}>
                <div classname="mb-3">
                    <label forName="name" className="form-label">Name</label>
                    <input className="form-control" onChange={handleChange} value={formData.name} Placeholder="Name" name="name" type="text" />
                </div>
                <div classname="mb-3">
                    <label forPhone="phone" className="form-label">Phone</label>
                    <input className="form-control" onChange={handleChange} value={formData.phone} Placeholder="Phone" name="phone" type="text" />
                </div>
                <div classname="mb-3">
                    <label forAddress="address" className="form-label">Address</label>
                    <input className="form-control" onChange={handleChange} value={formData.address} Placeholder="Address" name="address" type="text" />
                </div>
                <div classname="mb-3">
                    <label forEmail="email" className="form-label">email</label>
                    <input className="form-control" onChange={handleChange} value={formData.email} Placeholder="email@domain.xxx" name="email" type="email" />
                </div>
                <input className="btn btn-primary" type="submit" />
                <input className="btn btn-secondary" type="reset" onClick={handleReset} />
                <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
            </form>

        </div>
    )
}
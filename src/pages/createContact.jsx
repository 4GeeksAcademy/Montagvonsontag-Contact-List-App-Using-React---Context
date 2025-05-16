import { useState } from "react"
import { useNavigate } from "react-router-dom";
import contactServices from "../services/contactServices";



export const CreateContact =()=>{
    const navigate = useNavigate()
    const [formData, setFromData] = useState({
        name: '',
        phone: '',
        address: '',
        email:''
    })
    
    const handleChange = e => {
        setFromData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleCancel = () => {
        navigate('/')
    }
    

    const handleReset = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            phone: '',
            address: '',
            email: ''
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        contactServices.createContact('Mazinger', formData)
        navigate('/')
    }
    return (
        <div className="container my-5">
            <h2>New Contact</h2>
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
                <input className="btn btn-secondary" type="reset" onClick={handleReset}  />
                <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    )
}
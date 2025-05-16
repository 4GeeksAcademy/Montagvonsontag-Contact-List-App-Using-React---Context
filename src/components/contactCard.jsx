import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import contactServices from "../services/contactServices"


export const ContactCard=props=>{

    const {store, dispatch} = useGlobalReducer()
    const navigate = useNavigate();    
    
    const handleDelete = async () => {
        try {
            const resp = await contactServices.deleteContact('Mazinger', props.cid)
            dispatch({ type: 'get_agenda_by_slug', payload: resp.contacts })
        } catch (error) {              
            }
        }


    const handleEdit = () => {
        navigate('/edit/'+props.cid)

    }
    return(
        <div className="card shadow-sm mx-3 my-2">
            <div className="row g-0 align-items-center">
                <div className="col-md-2 text-center">
                     <img className="img-fluid" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png" alt={props.name}/>                
                </div>
                
                 <div className="col-md-8">
                    <div className="card-body text-start">
                        <h5 className="card-title mb-1">{props.name}</h5>
                        <p className="mb-1">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            {props.address}
                        </p>
                        <p className="mb-1">
                            <i className="fas fa-phone-alt me-2"></i>
                            {props.phone}                            
                        </p>
                        <p className="mb-0">
                            <i className="fas fa-envelope me-2"></i>
                            {props.email}
                        </p>                    
                     </div>
                </div>      
                <div className="col-md-2 d-flex flex-column align-items-end justify-content-start pe-3">        
                    <button className="btn text-danger mb-2" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </button>    
                    <button className="btn text-dark" onClick={handleEdit}>
                        <i className="fas fa-edit"></i>
                        
                   </button> 
                </div>
                
            </div>
            </div>
       
    )
}
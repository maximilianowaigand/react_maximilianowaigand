
import { useState, createContext } from "react";

import Swal from 'sweetalert2'



export const FormData = createContext({
    name:"",
    surname:"",
    address:"",
    phone:"",
    email:""
})


const Form = ({toCompleteData}) => {
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [checkEmail, setCheckEmail] = useState("");
    const [phone, setPhone] = useState("");

 


const submit = (e) => {
    e.preventDefault ();
    if (!name || !email || !phone || !address)
        {
            Swal.fire({
                title: "Completa tus datos",
                icon: "warning",
                buttons: true,
                dangerMode: true,
        
            })
          
        }
    else if (email !== checkEmail) {
        Swal.fire({
            title: "Los emails no coinciden",
            html: "Por favor, intente nuevamente",
            buttons: true,
            dangerMode: true,
        })
      
    }

    else {
    toCompleteData(
        name,
        surname,
        address,
        phone,
        email
    )
    }
    }



    return (
        <form>

            <div >
                <input  value={name} onChange={(e) => setName(e.target.value)} type="text"      placeholder="Nombre" required />
                <input  value={surname} onChange={(e) => setSurname(e.target.value)} type="text"     placeholder="Apellido" required/>
                <input value={address}onChange={(e) => setAddress(e.target.value)}type="text"    placeholder="Dirección"required />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"    placeholder="Email" required/>
                <input value={checkEmail} onChange={(e) => setCheckEmail(e.target.value)} type="Confirme Email"   placeholder="Email" required/>
                <input value={phone}onChange={(e) => setPhone(e.target.value)} type="number"   placeholder="Teléfono"required />
            </div>
            <button onClick = {submit}> Submit Data</button>
            
            </form>
)
}

            
export default Form
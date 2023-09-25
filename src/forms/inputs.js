import React , {useState} from 'react';
function Form(){
    const [value , updated] = useState('')
    const name  =(e) =>{
        updated(e.target.value)

    }
    return(
        <>
             <form>
            <input type="test" onChange={name}/>
            </form>
            <div>{value}</div>
        </>
       
    )
}
export default Form;
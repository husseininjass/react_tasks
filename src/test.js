import Test3 from './test3.js';
import React , {useState} from 'react';

function Test(){
    let a = 'hello';
    const [value , updated] = useState(a);
    const name = ['itachi', 'madara']
    
    function click(){
        updated('good job');
        console.log(value);
    }
    return(
        
        <section>
            <Test3 name={name}></Test3>
            <h1 style={{ color: 'blue', textAlign: 'center', fontSize:'50px' }}  className='test'>{value}</h1>    
            <button onClick={click}>button</button>
        </section>
    )
}

export default Test;
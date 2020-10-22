import React from 'react'
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const Buttond= (props)=> {
    
    const history = useHistory();
    function showDetails (id){
        history.push('/users/'+id);
    }
    console.log(props.id);
        
    
    return (
        <div>
            <Button onClick={()=>showDetails(props.id)} variant="primary">More Details</Button>{' '}
        </div>
    )
}

export default Buttond

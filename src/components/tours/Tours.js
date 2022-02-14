import './Tours.css'
import Tour from './tour/Tour';
import { Link } from 'react-router-dom';
export default function Tours(props) {
    return (
        
             <>
            {
                props.data2.map(value => {
                    return(
                        <Link to = {`/city/${value.id}`}> 
                        <Tour key={value.id} data3={value}/>
                        </Link>
                       
                    )
                 
                   
                })
            }
        </>
       
   

    )
}
 
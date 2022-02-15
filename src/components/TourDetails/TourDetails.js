import './TourDetails.css'
import Header from "../header/Header"
import Footer from "../Footer/Footer"
import { useParams } from 'react-router-dom';
import { useState } from 'react';
export default function TourDetails(props) {
    const [isAppear,setinfo] = useState(false);
    function clickhandle(){
        setinfo(!isAppear)
    }

    console.log(props.data);
    let { id } = useParams();
    let dataFiltered = props.data.filter(element=> element.id == id)
    console.log(dataFiltered);
    
    return (
        <>

            <Header />
            <div className='mainTourDetails'>

            <p id='idofid'>{dataFiltered[0].id}</p>
            <p id='name'> {dataFiltered[0].name} </p> 
             <p id='infoid'>
             {isAppear ? dataFiltered[0].info : `${dataFiltered[0].info.substring(0, 250)}`}
             {isAppear? <button onClick={clickhandle}>see less</button>:<button onClick={clickhandle}>see more</button> } 
       
             </p>
           
            

           
              
               
            <p> {dataFiltered[0].price}</p>
            <img  src={dataFiltered[0].image} />
            </div>

            <Footer/>
        </>
    )
}

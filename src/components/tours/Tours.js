import './Tours.css'
export default function Tour(props) {
    console.log(props.data2[0].name);
    return (

        <>
            {
                props.data2.map(value => {
                    console.log(value.name);
                    return(
                
                    <div key={value.id}>
                     <p id='name'>{value.name}</p>
                      <img src={value.image}/>
                      <hr>
                      </hr>
                    </div>
                   
                    
                    
                    )
                    
                   
                })
            }
        </>

    )
}
 

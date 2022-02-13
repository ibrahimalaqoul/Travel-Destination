import Header from '../header/Header.js'
import Tour from '../tours/Tours.js'
import Footer from '../Footer/Footer.js'
export default function Home(props){
    console.log("in home",props);
    return(
        <>
    <Header/>
    <Tour key ={props.data} data2={props.data} />
    <Footer/>
        </>
    )
}
 
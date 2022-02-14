import Header from '../header/Header.js'
import Tours from '../tours/Tours.js'
import Footer from '../Footer/Footer.js'
export default function Home(props){
    console.log("in home",props);
    return(
        <>
    <Header/>
    <Tours data2={props.data} />
    <Footer/>
        </>
    )
}
 
import NavBar from "../components/NavBar"
import HeaderTop from "../components/HeaderTop"
import FilterGridSection from "../components/FilterGridSection"
import "../App.css"
import Footer from "../components/Footer"


const Nutri=()=>{
    return(
        <>
            <HeaderTop></HeaderTop>
            <NavBar></NavBar>
            <FilterGridSection></FilterGridSection>
            <Footer/>
        </>
    )
}

export default Nutri
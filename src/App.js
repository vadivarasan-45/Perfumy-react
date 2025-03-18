
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Content from "./components/Content"
import About from "./components/About"
import Footer from "./components/Footer"


export default App

function App()
{
    return(
        <div>
        <Navbar></Navbar>
        <Search></Search>
        <Content></Content>
        <About></About>
        <Footer></Footer>
        </div>
    )
}
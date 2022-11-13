import {Route,Routes} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Womens from "./Womens"
import Checkout from "./Checkout"
import Thankyou from "./Thankyou"
function AllRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/women" element={<Womens />}></Route>
            <Route path="/thankyou" element={<Thankyou />}></Route>
        </Routes>
    )
}

export default AllRoutes;
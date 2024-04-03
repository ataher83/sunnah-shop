import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
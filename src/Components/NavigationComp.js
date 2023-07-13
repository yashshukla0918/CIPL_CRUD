import { Link } from "react-router-dom";
const NavigationComp = () => {
    return (
        <nav className="navbar navbar-dark bg-dark ">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">CIPL Crud App</span>
            </div>
            <div className='container-fluid justify-content-end'>
                <Link to='/CIPL_CRUD/'><button className='btn btn-outline-warning mx-1'>HOME</button></Link>
                <Link to='/CIPL_CRUD/user'><button className='btn btn-outline-warning mx-1'> User Data</button></Link>
            </div>
        </nav>
    )
}

export default NavigationComp

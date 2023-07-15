import { Link } from "react-router-dom"

function NavBar(){
    return(
        <header>
            <div className="con">
                <Link to="/">
                    <h1>My App</h1>
                </Link>
            </div>
        </header>
    )
}

export default NavBar
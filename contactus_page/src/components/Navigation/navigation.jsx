
import styles from "./navigation.module.css"
const Navigation = () => {
    return (
        <>
            <nav className="container" >
                <div className="logo ">
                    <img src="\images\icon-contact-us-22.jpg" alt="contact logo" style={{ width: '50px' }} />
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation

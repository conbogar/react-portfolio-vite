import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <h1>My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/education">Education</Link> | 
                <Link to="/projects">Projects</Link> | 
                <Link to="/contact">Contacts</Link> | 
                <Link to="/services">Services</Link>
            </nav>
                <br/>
            <hr />
        </>
    );
}
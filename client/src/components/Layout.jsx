import { NavLink } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <header>
                <span className="brand">My Portfolio</span>
                <nav>
                    <NavLink to="/" end className={({isActive}) => isActive ? "active" : undefined}>Home</NavLink> | 
                    <NavLink to="/about" className={({isActive}) => isActive ? "active" : undefined}>About</NavLink> | 
                    <NavLink to="/education" className={({isActive}) => isActive ? "active" : undefined}>Education</NavLink> | 
                    <NavLink to="/projects" className={({isActive}) => isActive ? "active" : undefined}>Projects</NavLink> | 
                    <NavLink to="/contact" className={({isActive}) => isActive ? "active" : undefined}>Contacts</NavLink> | 
                    <NavLink to="/services" className={({isActive}) => isActive ? "active" : undefined}>Services</NavLink>
                </nav>
                    <br/>
                <hr />
            </header>
        </>
    );
}
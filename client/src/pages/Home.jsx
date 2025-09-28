import { useTitle } from "../hooks/useTitle.js";
import { Link } from "react-router-dom";
import headshot from '../assets/headshot.jpeg';
import closetag from '../assets/close-tag.png';

export default function Home() {
    useTitle("Home");
    return (
        <>
            <h1>Welcome</h1>
            <ul className="highlights">
                <li className="badge">React</li>
                <li className="badge">C# / WPF</li>
                <li className="badge">SQL</li>
            </ul>
            

        <section className="hero">
        <div className="intro">
            <section className="home">
            <p>Hi, I’m Connor. I build simple, reliable apps.</p>
            <p>I’m a software engineering student focused on React, Java, C#, and SQL. I’m open to internships and collaborations.</p>
            <p>Feel free to explore my site to learn more about me, my skills, and my projects.</p>

            <div className="home-ctas">
                <Link className="btn" to="/about">About me</Link>
            </div>
            </section>
        </div>

        <div className="art">
            <img src={closetag} className="close-tag-img" alt="Connor Gardiner headshot" />
        </div>
        </section>
        <section>
        <h2>Featured projects</h2>
        <ul className="cards">
            <li><strong>React Portfolio</strong> — SPA with routing.</li>
            <li><strong>WPF Calculator</strong> — desktop calculator with keyboard.</li>
        </ul>
        <div className="home-ctas">
            <Link className="btn" to="/projects">My projects</Link>
        </div>
        </section>
        </>
    );
}
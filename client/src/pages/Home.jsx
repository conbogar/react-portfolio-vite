import { useTitle } from "../hooks/useTitle.js";
import { Link } from "react-router-dom";
import headshot from '../assets/headshot.jpg';

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
            <img src={headshot} className="home-headshot" alt="Connor Gardiner headshot" />

            <section className="home">
                <p>I’m Connor, a software engineering student building simple, reliable apps.</p>
                <p>I'm a software engineering student focused on building simple, reliable apps with React, Java, C#, and SQL. I'm open to internships and collaborations.</p>
                <p>Feel free to explore my site to learn more about me, my skills, and my projects.</p>
            </section>
                <Link className="cta-btn" to="/about">About me</Link>
            <section>
                <h2>Featured projects</h2>
                <ul className="cards">
                    <li><strong>React Portfolio</strong> — SPA with routing.</li>
                    <li><strong>WPF Calculator</strong> — desktop calculator with keyboard.</li>
                </ul>
            </section>
                <Link className="cta-btn" to="/projects">My projects</Link>
        </>
    );
}
import { useTitle } from "../hooks/useTitle.js";

export default function Projects() {
    useTitle("Projects");
    return (
        <>
            <h1>Projects</h1>
            <section>
                <article>
                    <h2>Project 1: React Portfolio Website</h2>
                    <p>
                        A fast single-page site with client routing, custom header, and per-page titles. Built for course submission and as a personal showcase.
                    </p>
                    <ul>
                        <li>Tech: Vite, React, React Router</li>
                        <li>
                            Links:{" "}
                            <a href="">Live</a> 
                            {" "}
                            <a 
                                href="https://github.com/conbogar/react-portfolio-vite" 
                                target="_blank"
                            >
                                Source
                            </a>
                        </li>
                    </ul>
                </article>
                <article>
                    <h2>Project 2: WPF Calculator (.NET)</h2>
                    <p>
                        Desktop calculator supporting + − × ÷, clear, and keyboard input. Logic is separated from the UI for easier testing and changes.
                    </p>
                    <ul>
                        <li>Tech: C#, .NET, WPF</li>
                        <li>
                            Links:{" "}
                            <a 
                                href="https://github.com/conbogar/wpf-calculator" 
                                target="_blank"
                            >
                                Source
                            </a>
                        </li>
                        
                    </ul>
                </article>
                <article>
                    <h2>Project 3: </h2>
                    <p>
                        
                    </p>
                    <ul>
                        <li>Tech: </li>
                        <li>Links: <a href="">Live</a> <a href="">Source</a></li>
                    </ul>
                </article>
            </section>
        </>
    );
}
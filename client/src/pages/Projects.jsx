import { useTitle } from "../hooks/useTitle.js";
import wpfCalculator from '../assets/wpf-calculator.png';
import reactPortfolio from '../assets/react-portfolio.png';

export default function Projects() {
    useTitle("Projects");
    return (
        <>
            <h1>Projects</h1>
            <section className="projects">
                <article className="project">
                    <div className="content">
                    <h2>Project 1: React Portfolio Website</h2>

                        <p>
                            A fast single-page site with client routing, custom header, and per-page titles. Built for course submission and as a personal showcase.
                        </p>
                        <ul>
                            <li><strong>Tech: </strong>Vite, React, React Router</li>
                            <li>
                                <strong>Links:</strong>{" "}
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
                    </div>
                    <div className="media">
                        <img className="project-image" src={reactPortfolio} alt="Project 1 screenshot" />
                    </div>
                </article>

                <article className="project">
                    <div className="content">
                    <h2>Project 2: WPF Calculator (.NET)</h2>
                        <p>
                            Desktop calculator supporting + − × ÷, clear, and keyboard input. Logic is separated from the UI for easier testing and changes.
                        </p>
                        <ul>
                            <li><strong>Tech: </strong>C#, .NET, WPF</li>
                            <li>
                                <strong>Links:</strong>{" "}
                                <a 
                                    href="https://github.com/conbogar/wpf-calculator" 
                                    target="_blank"
                                >
                                    Source
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="media">
                        <img className="project-image" src={wpfCalculator} alt="WPF Calculator main window" />
                    </div>
                </article>

                <article className="project">
                    <div className="content">
                    <h2>Project 3: </h2>
                        <p>
                            
                        </p>
                        <ul>
                            <li><strong>Tech:</strong></li>
                            <li>
                                <strong>Links:</strong>{" "}
                                <a 
                                    href=""
                                >
                                    Live
                                </a> 
                                <a 
                                    href=""
                                >
                                    Source
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="media">
                        <img className="project-image" src="https://via.placeholder.com/400x200.png?text=Project+1+Image" alt="Project 1 screenshot" />
                    </div>
                </article>
            </section>
        </>
    );
}
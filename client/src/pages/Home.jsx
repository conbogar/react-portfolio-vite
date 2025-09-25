import { useTitle } from "../hooks/useTitle.js";

export default function Home() {
    useTitle("Home");
    return (
        <>
            <h1>Welcome</h1>
            <p>Hi, I'm Connor. This is my portfolio.</p>
            <p>I'm a software engineering student focused on building simple, reliable apps with React, Java, C#, and SQL. I'm open to internships and collaborations</p>
            <p><a className="cta" href="/about">About me</a></p>
        </>
    );
}
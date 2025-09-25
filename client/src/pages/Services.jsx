import { useTitle } from "../hooks/useTitle.js";

export default function Services() {
    useTitle("Services"); 
    return (
        <>
            <h1>Services</h1>
            <article className="service">
                <h2>Frontend (React)</h2>
                <p>Single-page sites, routing, basic state and forms.</p>
            </article>

            <article className="service">
                <h2>Frontend (React)</h2>
                <p>Single-page sites, routing, basic state and forms.</p>
            </article>

            <article className="service">
                <h2>Frontend (React)</h2>
                <p>Single-page sites, routing, basic state and forms.</p>
            </article>
            <p><a className="cta" href="/contact">Get in touch</a></p>
        </>
    );
}
import { useTitle } from "../hooks/useTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    useTitle("Contact");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email.includes("@") || !message) return;
     console.log({ name, email, message });
    navigate("/");
    };

    return (
        <>
            <h1>Contact</h1>
            <section className="contact-info">
                <h2>My contact info:</h2>
                <ul>
                    <li>Email: <a href="mailto:connorrgardiner@gmail.com">connorrgardiner@gmail.com</a></li>
                    <li>GitHub: <a href="https://github.com/conbogar" target="_blank" rel="noreferrer">conbogar</a></li>
                    <li>Location: Surrey, BC</li>
                </ul>
            </section>

            <section className="contact-form">
                <h2>Send a message</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input id="name" value={name} onChange={(e)=>setName(e.target.value)} required autoComplete="name" />

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required autoComplete="email" />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" value={message} onChange={(e)=>setMessage(e.target.value)} required />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}
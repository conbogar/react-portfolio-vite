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
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" value={name} onChange={(e)=>setName(e.target.value)} required autoComplete="name" />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required autoComplete="email" />

                <label htmlFor="message">Message</label>
                <textarea id="message" value={message} onChange={(e)=>setMessage(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
import { useTitle } from "../hooks/useTitle";

export default function NotFound() {
    useTitle("Not Found");
    return (
        <>
            <section className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <p>
                    <a href="/">Go to Home</a>
                </p>
            </section>
        </>
    );
}
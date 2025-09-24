import { useTitle } from "../hooks/useTitle.js";

export default function Home() {
    useTitle("Home");
    return (
            <h1>Home</h1>
    );
}
import { useTitle } from '../hooks/useTitle.js';

export default function About() {
    useTitle("About");
    return (
        <h1>About</h1>
    );
}
import { useTitle } from '../hooks/useTitle.js';
import headshot from '../assets/headshot.jpg';
import resume from '../assets/resume.pdf';
export default function About() {
    useTitle("About");
    return (
        <>
            <h1>About</h1>
            <img src={headshot} className='headshot' alt='Connor Gardiner headshot' />
            <a href={resume} target='_blank' rel='noreferrer' className='resume-link'>Download my resume (PDF)</a>
            <p>
                Hello! My name is Connor Gardiner, and I am a dedicated and passionate web developer with a strong foundation in both front-end and back-end technologies. I recently graduated from Centennial College with a diploma in Web Development, where I honed my skills in HTML, CSS, JavaScript, React, Node.js, and various other web technologies.
            </p>
            <p>
                Throughout my academic journey, I have worked on numerous projects that have allowed me to apply my knowledge and creativity to real-world scenarios. I enjoy problem-solving and am always eager to learn new technologies and methodologies to enhance my skill set.
            </p>
            <p>
                In addition to my technical skills, I am a strong communicator and team player. I believe that collaboration is key to successful project outcomes, and I thrive in environments where I can work alongside others to achieve common goals.
            </p>
            <p>
                When I'm not coding, I enjoy hiking, photography, and exploring new places. These hobbies help me stay creative and inspired
            </p>
        </>
    );
}
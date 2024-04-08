import React, { useState } from 'react';
import '../Styles/project.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ProjectSection() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const projects = [
        {
            image: require('../Images/growtika-9WnjxT1NCoY-unsplash.jpg'),
            description: 'Developed a chat application using the MERN (MongoDB, Express.js, React.js, Node.js) tech stack, incorporating a wide range of features to enhance user engagement and experience. Implemented group creation functionality, allowing users to form and manage groups for seamless communication and collaboration.Implemented robust authorization and authentication mechanisms, ensuring secure access to the chat application',
            tech: 'MongoDB, Express.js, React.js, Node.js',
            preview: 'Project 1 preview'
        },
        {
            image: require('../Images/growtika-9WnjxT1NCoY-unsplash.jpg'),
            description: 'Travel Planner',
            tech: 'Project 2 tech',
            preview: 'Project 2 preview'
        },
        {
            image: require('../Images/01Contact_page.jpg'),
            description: 'Portfolio',
            tech: 'Project 3 tech',
            preview: 'Project 3 preview'
        }
    ];

    // Function to handle clicking on the left button
    const goToPreviousProject = () => {
        setCurrentProjectIndex(prevIndex =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    // Function to handle clicking on the right button
    const goToNextProject = () => {
        setCurrentProjectIndex(prevIndex =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div>
            <h3>This is project section!!</h3>
            <div className='projectSection'>
                <div className='projectIntro'>
                    <img src={require('../Images/growtika-9WnjxT1NCoY-unsplash.jpg')} alt='Project' className='projectExampleImage' />
                    <div className='projectIntroDetails'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className='project'>
                    <button onClick={goToPreviousProject} className='projectButton'><ArrowBackIosIcon /></button>
                    <div className='projectDescription'>{projects[currentProjectIndex].description}</div>
                    <div className='projectTech'>{projects[currentProjectIndex].tech}</div>
                    <div className='projectPreview'>{projects[currentProjectIndex].image}</div>
                    <button onClick={goToNextProject} className='projectButton'><ArrowForwardIosIcon /></button>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;

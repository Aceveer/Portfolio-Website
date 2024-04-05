import React, { useState, useEffect } from 'react';
import './navbar.css';

function ProgressBar() {
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;

            const totalScroll = documentHeight - windowHeight;
            const scrollPercentage = (scrollPosition / totalScroll) * 100;
            setProgressWidth(scrollPercentage + '%');
        };

        // Add event listener to window scroll event
        window.addEventListener('scroll', updateProgress);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    return (
        <div id='progress-container' style={{ height: '4px', width: '100%', position: 'fixed' }}>
            <div className='progress-fill' style={{ height: '100%', backgroundColor: 'yellow', width: progressWidth }}></div>
        </div>
    );
}

export default ProgressBar;

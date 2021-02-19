import React from 'react';

const BackgroundVideo = () => {
    const videoSourceMp4 = '../assets/programming.mp4';
    const videoSourceWebM = '../assets/programming.webm';
    return (
        <div>
            <video autoPlay = "autoplay" loop = "loop" muted>
                <source src = { videoSourceMp4 } type = "video/mp4" />
                <source src = { videoSourceWebM } type = "video/webm" />
            </video>
        </div>
    );
}

export default BackgroundVideo;
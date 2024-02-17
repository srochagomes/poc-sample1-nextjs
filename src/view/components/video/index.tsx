import { FieldVideoPath } from '@/types/enums/FieldVideoPath';
import dynamic from 'next/dynamic';
import React, { useRef, useEffect, useState } from 'react';

interface Props {
    url: string;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    light?: boolean;
    pip?: boolean;
}

const VideoPlayer = (props: Props) => {
    const { controls = true, loop = true, muted = true, light = false, pip = true, url } = props;
    const [isVisible, setIsVisible] = useState(false);
    const playerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8 // Define a porcentagem de visibilidade necessária para que o vídeo seja iniciado
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (playerRef.current) {
            observer.observe(playerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

    return (
        <div ref={playerRef}>
            {isVisible && (
                <ReactPlayer
                    url={FieldVideoPath.Apresentation}
                    width='100%'
                    height='100%'
                    controls={controls}
                    playing={true}
                    loop={loop}
                    muted={muted}
                    light={light}
                    playsinline
                    pip={pip}
                />
            )}
        </div>
    );
};

export default VideoPlayer;

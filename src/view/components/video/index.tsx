
import { FieldVideoPath } from '@/types/enums/FieldVideoPath';
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface Props{
    url:string
    controls?:boolean
    loop?:boolean
    muted?:boolean
    light?:boolean                  
    pip?:boolean
    
}

const VideoPlayer = (props:Props) => {
    const { controls=true, loop=true, muted=true, light=false, pip=true, url} = props;
    return (
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
    );
  };
  
export default VideoPlayer;
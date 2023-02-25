import React from 'react'
import { IKImage, IKVideo, IKContext, IKUpload } from "imagekitio-react";


const Video = () => {
  return (
    <section id="section-1" className="video">
      {/*   <video
        autoPlay
        playsInline
        muted
        loop
        id="myVideo"
        poster="/Gite Kawan/1.jpg"
        src={"/Mon film.mp4"}
        
      >
       
      </video> */}
      <IKContext urlEndpoint="https://ik.imagekit.io/montresor/">
        // Video element with basic transformation, reduced quality by 50% using
        q:50
        <IKVideo
          path={"/default-video.mp4"}
          transformation={[{ height: 200, width: 200, q: 50 }]}
          controls={true}
        />
      </IKContext>
    </section>
  );
}

export default Video
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setvideoSrc(smallHeroVideo);
    } else {
      setvideoSrc(heroVideo);
    }
  };

  useEffect(() => {
  }
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.75 });
  }, []);
  return (
    <section className="w-full nav-height  bg-black relative ">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Lenovo Legion
        </p>
        <div className="md:w-10/12 w-9/12"></div>
        <video
          className="pointer-events-none"
          autoPlay
          muted
          playsInline={true}
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;

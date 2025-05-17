import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <>
      <div className="flex item-center">
      {hightlightsSlides.map((list, i) => (
        <div key = {list.id} id = "slider">
          <div className = "video-carousel_container">
            <div className = "w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
              <video>
                <source src={list.video} type="video/mp4" />
              </video>

            </div>
          </div>
        <div/>
      ))}
      </div>
    </>
  );
};

export default VideoCarousel;
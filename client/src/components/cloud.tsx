
import CloudImage from "../assets/cloud.png";

export const Clouds = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="animate-slide">
          <img src={CloudImage} alt="Cloud" className="w-24 h-24" />
        </div>
      </div>
    );
  };
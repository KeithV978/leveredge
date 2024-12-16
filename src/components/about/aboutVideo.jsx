import * as React from "react";

export const AboutVideo = ({
  src,
  poster,
  preload = "metadata",
  threshold = 0.1,
  alt = "Video",
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <video
      ref={videoRef}
      preload={preload}
      poster={poster}
      alt={alt}
      src={isVisible ? src : ""}
      controls
      className="about_vid"
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  );
};

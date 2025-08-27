import React from "react";
import video from '../assets/video/testing.mp4'
export default function SecretVideo() {
  // Ganti URL video di bawah sesuai kebutuhan (YouTube embed atau file MP4 publik)
  const videoSrc = video;

  return (
    <div className="w-full h-full p-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative w-full h-full bg-black" style={{ paddingTop: "60.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg border-2 border-black/40"
            src={videoSrc}
            title="Secret Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}



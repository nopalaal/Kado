import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";
import gambar1 from "../assets/gambar/gambar (1).jpeg";
import gambar2 from "../assets/gambar/gambar (2).jpeg";
import gambar3 from "../assets/gambar/gambar (3).jpeg";
import gambar4 from "../assets/gambar/gambar (4).jpeg";
import gambar5 from "../assets/gambar/gambar (5).jpeg";
import gambar6 from "../assets/gambar/gambar (6).jpeg";
import gambar7 from "../assets/gambar/gambar (7).jpeg";
import gambar8 from "../assets/gambar/gambar (8).jpeg";
import gambar9 from "../assets/gambar/gambar (9).jpeg";
import gambar10 from "../assets/gambar/gambar (10).jpeg";
import gambar11 from "../assets/gambar/gambar (11).jpeg";
import gambar12 from "../assets/gambar/gambar (12).jpeg";
import gambar13 from "../assets/gambar/gambar (13).jpeg";
import gambar14 from "../assets/gambar/gambar (14).jpeg";
import gambar15 from "../assets/gambar/gambar (15).jpeg";
import gambar16 from "../assets/gambar/gambar (16).jpeg";
import gambar17 from "../assets/gambar/gambar (17).jpeg";
import gambar18 from "../assets/gambar/gambar (18).jpeg";
import gambar19 from "../assets/gambar/gambar (19).jpeg";



const IMGS = [
  gambar1,
  gambar2,
  gambar3,
  gambar4,
  gambar16,
  gambar6,
  gambar7,
  gambar8,
  gambar9,
  gambar10,
  gambar11,
  gambar12,
  gambar17,
  gambar18,
  gambar19,
];

const Museum = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="glitch relative h-[500px] bg-pink-300 w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        style={{
          background:
          "linear-gradient(to left, rgba(0,0,0,0) 0%, #060010 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, #060010 100%)",
        }}
      />

              <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 z-20 text-white text-3xl sm:text-5xl font-semibold">Your Hardworks</div>
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={5}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i
                  }deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={url}
                alt="gallery"
                className="pointer-events-none h-[120px] w-[300px] rounded-[15px] border-[3px] border-white object-cover
                           transition-transform duration-300 ease-out group-hover:scale-105
                           sm:h-[100px] sm:w-[220px]"
              />
            </div>
          ))}
        </motion.div>
      </div>
      
    </div>
  );
};

export default Museum;
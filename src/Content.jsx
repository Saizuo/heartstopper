import React, { useState, useEffect } from "react";
import jumpscareImage from "./assets/jumpscareImage.jpg";
import jumpscareSound from "./assets/jumpscareSound.mp3";

function Content() {
  // Preload image
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = jumpscareImage;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  // Initialize audio
  const audio = new Audio(jumpscareSound);

  const [isJumpscareVisible, setIsJumpscareVisible] = useState(false);

  // Handle button click :)
  const handleClick = () => {
    audio.play();
    setTimeout(() => {
      setIsJumpscareVisible(true);
    }, 500);
  };

  return (
    <>
      {isJumpscareVisible && (
        <div className="absolute z-99">
          <img
            src={jumpscareImage}
            alt="Jumpscare"
            className="h-screen object-cover md:object-fill sm:w-screen"
          />
        </div>
      )}

      <div className="h-screen">
        <div className="p-5">
          <h1 className="text-text font-black text-4xl sm:text-5xl text-center uppercase">
            Not A Jump Scare
          </h1>
        </div>

        {isImageLoaded && (
          <div className="flex flex-col justify-center">
<button
  onClick={handleClick}
  className="bg-red-500 text-background font-semibold text-3xl sm:text-5xl p-3 sm:p-5 text-center mx-auto rounded-lg mt-64 sm:mt-44 hover:shadow-2xl hover:shadow-accent/50 hover:text-text active:scale-95 transition-colors duration-200"
>
  <span>Start</span>
</button>



          </div>
        )}

        {!isJumpscareVisible && (
          <div className="fixed w-full bottom-0 gap-4 pb-8 flex flex-row justify-center items-center">
            <a
              href="https://pump.fun/H2v77NEjQhW4xuiWdsgKRnRLJR4ynasMvWgZLPLspump"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-95 transition duration-200"
            >
              <img width={50} height={50} src="/pump-fun.svg" alt="Pump Fun" />
            </a>
            <a
              href="https://t.me/notajumpscare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-95 transition duration-200"
            >
              <img width={50} height={50} src="/telegram.svg" alt="Telegram" />
            </a>
            <a
              href="https://x.com/Notajumpscare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 active:scale-95 transition duration-200"
            >
              <img width={50} height={50} src="/twitter.svg" alt="Twitter" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Content;
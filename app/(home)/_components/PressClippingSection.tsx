"use client";
import React, { useState, useEffect } from "react";
import {
  pressClippingImageLinks,
  secondPressClippingImageLinks,
} from "@/constant";
import Image from "next/image";
import LayoutGridSection from "./LayoutGridSection";

const PressClippingSection = () => {
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const intervalTime = 3000;

    setDisplayedImages(pressClippingImageLinks.slice(0, 8));
    const interval = setInterval(changeImages, intervalTime);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const changeImages = () => {
    const randomIndex = Math.floor(
      Math.random() * secondPressClippingImageLinks.length
    );

    setDisplayedImages((prevImages) => {
      const newDisplayedImages = [...prevImages];

      let randomImage: string;
      do {
        randomImage =
          secondPressClippingImageLinks[
            Math.floor(Math.random() * secondPressClippingImageLinks.length)
          ];
      } while (newDisplayedImages.includes(randomImage));

      newDisplayedImages[randomIndex] = randomImage;

      return newDisplayedImages;
    });
  };

  const openImagePopup = (image: string) => {
    setSelectedImage(image);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section className="section ">
      <div className="container">
        <h1 className="text-center pb-10">Press Clippings</h1>
        <div>
          <LayoutGridSection />
        </div>
        {/* {displayedImages.map((image, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${image}) `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "300px",
              }}
              className={`image-container aim-box ${
                index === 1 || index === 3 ? "top-margin" : ""
              } ${index === 4 || index === 6 ? "bottom-margin" : ""}`}
              onClick={() => openImagePopup(image)}
            ></div>
          ))} */}
      </div>

      {selectedImage && (
        <div className="image-popup">
          <div className="image-popup-content" id="style-2">
            <Image
              src={selectedImage}
              alt="Popup Image"
              width={320}
              height={320}
            />
            <button className="close-button" onClick={closeImagePopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PressClippingSection;

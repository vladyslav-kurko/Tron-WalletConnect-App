import React from 'react';
import './TextImages.css';

interface Image {
  name: string;
  image: string;
}

interface TextImagesProps {
  title: string;
  images: Image[];
}

const TextImages: React.FC<TextImagesProps> = ({title, images}) => {
  return (
    <div className="text-images-container wrapper section">
        <div className="container text-images-section">
          <div className="row align-items-center justify-content-center gy-4">
            <div className="col-lg-4">
              <p className="text-images-title text-xl-end text-lg-start">{title}</p>
            </div>
            <div className="col-lg-7">
              <div className="text-images-logos">
                {images.map((image, index) => (
                <img
                    key={index}
                    src={image.image}
                    alt={image.name}
                    className="text-images-image"
                />
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TextImages;
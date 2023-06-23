import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <input
      type="file"
      onChange={handleImageUpload}
      />
      {selectedImage && (
        <img src={selectedImage} alt="Selected" style={{ width: '300px' }} />
      )}
    </div>
  );
};

export default ImageUploader;

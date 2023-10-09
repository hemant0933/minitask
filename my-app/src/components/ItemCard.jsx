import React, { useState } from 'react';

const ItemCard = ({item}) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
      setImageError(true);
    };
  
  return (
    <div className="item-card">
      {imageError ? (
        <div className="image-error">Image not available</div>
      ) : (
        <>
          <img
            src={item.imageUrl}
            alt={item.description}
            onError={handleImageError}
          />
          <p>{item.description}</p>
        </>
      )}
    </div>

  );
}

export default ItemCard;

import React from 'react';

const ImageCard = (image, key, savedImageIds, handleLike) => {
  const isSaved = savedImageIds.includes(key);
  return (
    <div className="card" style={{width: "20rem"}} key={key}>
      <img src={image.img_src} className="card-img-top" alt={"Image of " + image.rover.name}/>
      <div className="card-body">
        <h3 className="card-text">{image.rover.name}</h3>
        <p className="card-text camera">Captured by {image.camera.full_name}</p>
        <p className="card-text">Date of Capture: {image.earth_date}</p>
        <p className="card-text">Launch Date: {image.rover.launch_date}</p>
        <p className="card-text">Landing Date: {image.rover.landing_date}</p>

        {
        (
          isSaved ?
          <button id={key} onClick={(event) => {handleLike(event)}} type="button" className="btn like-btn liked">Unlike</button>
          :
          <button id={key} onClick={(event) => {handleLike(event)}} type="button" className="btn like-btn">Like</button>
        )
        }
      </div>
    </div>
)
}

export default ImageCard;

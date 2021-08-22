import React, { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

const Star = ({ marked, starId }) => {
  return marked ? (
    <span data-star-id={starId} role="button">
      <FavoriteOutlinedIcon
        className="text-pink-400 pointer-events-none "
        style={{ fontSize: '1.6rem' }}
      />
    </span>
  ) : (
    <span data-star-id={starId} className="star" role="button">
      <FavoriteBorderOutlinedIcon
        className="text-pink-400 pointer-events-none "
        style={{ fontSize: '1.6rem' }}
      />
    </span>
  );
};

const StarRating = ({ ratingVal }) => {
  const [rating, setRating] = useState(parseInt(ratingVal) || 0);
  const [selection, setSelection] = React.useState(0);

  const hoverOver = (event) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('data-star-id'))
      val = event.target.getAttribute('data-star-id');
    setSelection(val);
  };
  return (
    <div className="flex gap-2 items-center">
      Rate Product
      <div
        onMouseOut={() => hoverOver(null)}
        onClick={(e) =>
          setRating(e.target.getAttribute('data-star-id') || rating)
        }
        onMouseOver={hoverOver}
      >
        {Array.from({ length: 5 }, (v, i) => (
          <Star
            starId={i + 1}
            key={`star_${i + 1}`}
            marked={selection ? selection >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;

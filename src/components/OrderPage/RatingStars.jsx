import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
export default function RatingStars() {
  return (
    <div className="flex items-center space-x-2 ">
      <div>Rate Product</div>
      <Rating
        name="customized-empty"
        defaultValue={2}
        precision={0.5}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
      />
    </div>
  );
}

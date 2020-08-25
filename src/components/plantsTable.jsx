import React, { Component } from 'react';
import Like from "./common/like";
import { categories } from '../services/fakeCategoryService';


const PlantsTable = (props) => {
  const {plants, onLike}  = props
  return (
    <div>
      <div className="item-category">
        {plants.map((movie) => (
          <div className="bucket" key={movie._id} style={{backgroundImage: `url(${movie.imageURL}`, backgroundSize:'cover'}}>
            <h4>{movie.title}</h4>
            <h5>{movie.category.name}</h5>
            <div>
              <Like
                liked={movie.liked}
                onLikeToggle={() => onLike(movie)}
              />
            </div>
            
            
            {/* <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-warning btn-sm"
              >
                Delete
              </button>
            </td> */}
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default PlantsTable;
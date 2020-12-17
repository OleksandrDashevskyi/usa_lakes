import React from 'react';

function ReviewCard(props) {
    const {avatar, name, comment} = props.person

  return (
    <div className="media mt-5">
       <img src={avatar} alt={name} style={{width: '40px'}} className="mr-3"/>
       <div className="media-body">
           <h5 className="mt-0">{name}</h5>
           <p>{comment}</p>
       </div>
    </div>
  );
}

export default ReviewCard;
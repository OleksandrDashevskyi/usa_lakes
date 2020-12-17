import React, {useContext} from 'react';
import InfoContext from "../context";
import ReviewCard from "./ReviewCard";

function Reviews() {
    const reviews = useContext(InfoContext);

  return (
    <div>
        {reviews[1].reviews.map(person => {
            return <ReviewCard key={person.id} person={person}/>
        })}
    </div>
  );
}

export default Reviews;
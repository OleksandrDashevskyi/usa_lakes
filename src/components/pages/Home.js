import React, {useState} from 'react';
import Info from "../Info";
import {news, placeInfo, reviews} from "../../data";

function Home() {
    const initialState = {
        placeInfo: placeInfo,
        reviews: reviews,
        news: news
    }
    const [stateValues] = useState(initialState)

    return (
        <div className="container">
           <div className="row mt-5">
               {stateValues.placeInfo.map((item, index) => {
                   return <Info key={index} item={item}/>
               })}
           </div>
        </div>
    );
}

export default Home;
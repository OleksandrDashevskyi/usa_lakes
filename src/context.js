import React from 'react';
import {news, placeInfo, reviews} from "./data";

 const initialState = {
        placeInfo: placeInfo,
        reviews: reviews,
        news: news
    }

const InfoContext = React.createContext(initialState);


export default InfoContext

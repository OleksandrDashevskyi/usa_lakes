import React, {useContext} from 'react';
import InfoContext from "../../context";
import NewsCard from "../NewsCard";

function News() {
    const newsValue = useContext(InfoContext);

  return (
    <div>
        {newsValue[2].news.map(item => {
           return <NewsCard key={item.id} item={item}/>
        })}
    </div>
  );
}

export default News;
import React, {useState, useContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
//React Router Import
import {Route, Switch} from 'react-router-dom';
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import NotFoundPage from "./components/pages/PageNotFound";
import InfoContext from "./context";


function App() {

    const initialValues = useContext(InfoContext);

    const [stateValues, setStateValues] = useState(initialValues)

    const getItem = id => {
        return initialValues.placeInfo.find(item => item.id === id);
    }

    const handleDetail = (id) => {
        const item = getItem(id);
        setStateValues( {...stateValues, placeInfo: [item]})
    };


    return (
        <InfoContext.Provider value={[
            {
                placeInfo: stateValues.placeInfo.map(placeInfo => ({
                    id: placeInfo.id,
                    maps: placeInfo.maps,
                    headerTitle: placeInfo.headerTitle,
                    headerSubTitle: placeInfo.headerSubTitle,
                    headerText: placeInfo.headerText,
                    img: placeInfo.img,
                    description: placeInfo.description,
                    title: placeInfo.title
                }))
            },
            {
                reviews: stateValues.reviews.map(reviewInfo => ({
                    id: reviewInfo.id,
                    name: reviewInfo.name,
                    avatar: reviewInfo.avatar,
                    comment: reviewInfo.comment
                }))
            },
            {
                news: stateValues.news.map(news => ({
                    newsTitle: news.newsTitle,
                    newsText: news.newsText
                }))
            },
            {
                handleDetail: handleDetail
            }
        ]}>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/news" component={News}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/details" component={Details}/>
                    <Route component={NotFoundPage}/>
                </Switch>
                <Footer/>
            </div>
        </InfoContext.Provider>
    );
}

export default App;


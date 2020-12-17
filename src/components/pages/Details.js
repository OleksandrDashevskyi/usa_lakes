import React, {useContext} from 'react';
import InfoContext from "../../context";
import styled from 'styled-components';
import Reviews from "../Reviews";


function Details() {
    const infoValue = useContext(InfoContext);
    const headerTitle = infoValue[0].placeInfo[0].headerTitle;
    const subTitle = infoValue[0].placeInfo[0].headerSubTitle;
    const headerText = infoValue[0].placeInfo[0].headerText;
    const img = infoValue[0].placeInfo[0].img;
    const title = infoValue[0].placeInfo[0].title;
    const maps = infoValue[0].placeInfo[0].maps;
    const description = infoValue[0].placeInfo[0].description;

    return (
        <React.Fragment>
            <HeaderDetails className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h4 className="display-5">{subTitle}</h4>
                <p>{headerText}</p>
                {/*Social Icons*/}
                <div className="container mt-5">
                    <div className="row justify-content-center">
                         <div className="col-2">
                            <i className="fab fa-facebook-f"/>
                        </div>
                        <div className="col-2">
                            <i className="fab fa-twitter"/>
                        </div>
                        <div className="col-2">
                            <i className="fab fa-google-plus-g"/>
                        </div>
                        <div className="col-2">
                            <i className="fab fa-reddit"/>
                        </div>
                        <div className="col-2">
                            <i className="fab fa-whatsapp"/>
                        </div>
                        <div className="col-2">
                            <i className="fab fa-facebook-messenger"/>
                        </div>
                    </div>
                </div>
            </HeaderDetails>
            {/*Nav Link*/}
            <div className="container">
                <ul className="nav nav-tabs " role="tablist">
                    {/*About Place Link*/}
                    <li className="nav-item" role="presentation">
                        <a href="#aboutPlace" id="aboutPlace-tab" className="nav-link active" role="tab"
                           data-bs-toggle="tab" aria-controls="aboutPlace" aria-selected="true">About Place</a>
                    </li>
                    {/*Reviews Link*/}
                    <li className="nav-item" role="presentation">
                        <a href="#reviews" id="reviews-tab" className="nav-link" role="tab" data-bs-toggle="tab"
                           aria-controls="reviews" aria-selected="false">Reviews</a>
                    </li>
                    {/*Map*/}
                    <li className="nav-item" role="presentation">
                        <a href="#map" id="map-tab" className="nav-link" role="tab" data-bs-toggle="tab"
                           aria-controls="map" aria-selected="false">Map</a>
                    </li>
                </ul>
                {/*Tab Pane*/}
                <div className="tab-content mb-5" id="myTabContent">
                    {/*About Place Tab*/}
                    <div id="aboutPlace" className="tab-pane fade show active text-center mt-5" role="tabpanel"
                         aria-labelledby="aboutPlace-tab">
                        <h2 className="mb-3">{title}</h2>
                        <p>{description}</p>
                        <img src={img} alt={title} className="img-thumbnail img-fluid"/>
                    </div>
                    {/*Reviews*/}
                    <div id="reviews" className="tab-pane fade mt-5" role="tabpanel" aria-labelledby="reviews-tab">
                        <Reviews/>
                    </div>
                    {/*Map*/}
                    <div className="tab-pane fade" id="map" role="tabpanel" aria-labelledby="map-tab">
                        <iframe src={maps} title="Map"
                                style={{border: '0', height: '28.125rem', width: '100%', frameborder: '0'}}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Details;

const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100vh;
text-transform: uppercase;
color: var(--mainWhite);
text-align: center;

h1 {
padding-top: 10%;
color: var(--mainDark);
}

h4 {
color: var(--mainDark);
}

p {
padding-left: 10% ;
padding-right: 10%;
margin-bottom: 10%;
color: var(--mainDark);
}

i {
font-size: 1.875rem;
color: var(--mainDark);
}

i:hover {
color: var(--mainBlue);
cursor: pointer;
}

.nav-item {
height: 18.75rem
}

@media(max-width: 760px) {
 h1,h4{
 color: var(--mainWhite);
 }
}

`;
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import InfoContext from "../context";

function Info(props) {
    const {headerTitle, headerSubTitle, img, headerText, id} = props.item
     const value = useContext(InfoContext);
    return (
        <div className=" col-lg-4 mx-auto mb-5 card-group">
            <div className="card card">
                <img src={img} alt={headerTitle} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title text-uppercase">{headerTitle}</h3>
                    <h5 className="card-title">{headerSubTitle}</h5>
                    <p className="card-text">{headerText}</p>
                </div>
                <div>
                    <Link to="/details" onClick={() => value[3].handleDetail(id)} className="btn btn-outline-primary text-uppercase">
                        More Info
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Info;
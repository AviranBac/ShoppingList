import { Navigate, useLocation } from "react-router-dom";
import './ItemExtendedData.css';

const ItemExtendedData = () => {
    const location = useLocation();
    const { state } = location;

    return !state ?
        <Navigate to="/" /> :
        (
            <div className="container">
                <h1>{state.name}</h1>
                <div className="shopping-item">
                    <div className="shopping-item-content">
                        <div className="shopping-item-seller">
                            <div className="header">Seller:</div>
                            <div className="content">{state.seller}</div>
                        </div>
                        <div className="shopping-item-description">
                            <div className="header">Description:</div>
                            <div className="content">{state.description}</div>
                        </div>
                    </div>
                    <div className="shopping-item-images">
                        <img src={state.mainImagePath} alt="item" />
                        <img src={state.secondaryImagePath} alt="item" />
                    </div>
                </div>
            </div>
        );
};

export default ItemExtendedData;
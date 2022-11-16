import './ShoppingItem.css';
import { useNavigate } from "react-router-dom";

const ShoppingItem = (props) => {
    const navigate = useNavigate();
    const navigateToItemExtendedData = () => navigate('/itemExtendedData', { state: props.item });

    return (
        <div className="shopping-item clickable" onClick={navigateToItemExtendedData}>
            <div className="shopping-item-content">
                <div className="shopping-item-name">{props.item.name}</div>
                <div className="shopping-item-price">Price: {props.item.price}</div>
            </div>
            <img src={props.item.mainImagePath} alt="item" />
        </div>
    );
}


export default ShoppingItem;
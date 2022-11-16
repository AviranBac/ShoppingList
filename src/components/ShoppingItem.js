import './ShoppingItem.css';

const ShoppingItem = (props) => (
    <div className="shopping-item">
        <div className="shopping-item-text">
            <div className="shopping-item-name">{props.item.name}</div>
            <div className="shopping-item-price">Price: {props.item.price}</div>
        </div>
        <img src={props.item.imagePath} alt="item" />
    </div>
);

export default ShoppingItem;
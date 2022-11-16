import ShoppingItem from "./ShoppingItem";
import './ShoppingList.css';

const items = [
    {
        imagePath: '/items/galaxy-s21-ultra.png',
        name: 'Samsung Galaxy S21 Ultra',
        price: 3000
    },
    {
        imagePath: '/items/galaxy-buds-pro.png',
        name: 'Samsung Galaxy Buds Pro',
        price: 300
    },
    {
        imagePath: '/items/logitech-g513.png',
        name: 'Logitech G513 Gaming Keyboard',
        price: 500
    },
    {
        imagePath: '/items/logitech-g502.png',
        name: 'Logitech G502 Gaming Mouse',
        price: 350
    },
    {
        imagePath: '/items/asus-monitor.png',
        name: 'Asus VG259QM Monitor',
        price: 1500
    },
    {
        imagePath: '/items/hyperx-cloud-ii.png',
        name: 'HyperX Cloud II Gaming Headset',
        price: 400
    },
    {
        imagePath: '/items/steelseries-qck.png',
        name: 'Steelseries QCK Mousepad',
        price: 60
    },
    {
        imagePath: '/items/computer.jpg',
        name: 'Computer',
        price: 6000
    }
];

const ShoppingList = () => (
    <div>
        <h1>Shopping List</h1>

        <div className="shopping-items-container">
            {items.map(item => (
                <ShoppingItem item={item}></ShoppingItem>
            ))}
        </div>
    </div>
);

export default ShoppingList;
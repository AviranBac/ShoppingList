import ShoppingItem from "./ShoppingItem/ShoppingItem";

const items = [
    {
        mainImagePath: '/items/galaxy-s21-ultra.png',
        name: 'Samsung Galaxy S21 Ultra',
        price: 3000,
        seller: 'Samsung',
        secondaryImagePath: '/items/galaxy-s21-ultra-2.png',
        description: 'The Samsung Galaxy S21 Ultra is the headliner of the S21 series.'
    },
    {
        mainImagePath: '/items/galaxy-buds-pro.png',
        name: 'Samsung Galaxy Buds Pro',
        price: 300,
        seller: 'Samsung',
        secondaryImagePath: '/items/galaxy-buds-pro-2.png',
        description: 'Hear the best of your world on Galaxy Buds Pro - pro-grade wireless earbuds enhanced by intelligent active noise canceling and adjustable Ambient sound.'
    },
    {
        mainImagePath: '/items/logitech-g513.png',
        name: 'Logitech G513 Gaming Keyboard',
        price: 500,
        seller: 'Logitech',
        secondaryImagePath: '/items/logitech-g513-2.png',
        description: 'G513 is a high-performance gaming keyboard featuring your choice of advanced GX mechanical switches. The detachable, memory-foam palmrest and premium aluminum-alloy construction make G513 full-featured and best-in-class.'
    },
    {
        mainImagePath: '/items/logitech-g502.png',
        name: 'Logitech G502 LIGHTSPEED Gaming Mouse',
        price: 350,
        seller: 'Logitech',
        secondaryImagePath: '/items/logitech-g502-2.png',
        description: 'The Logitech G502 LIGHTSPEED is a versatile, feature-rich wireless mouse, while the ASUS ROG Keris Wireless is a lightweight wireless gaming mouse. The Logitech has a thumb rest, adjustable weights, several more programmable buttons, and a scroll wheel that unlocks for free scrolling and has left/right tilt buttons.'
    },
    {
        mainImagePath: '/items/asus-monitor.png',
        name: 'Asus VG259QM Monitor',
        price: 1500,
        seller: 'Asus',
        secondaryImagePath: '/items/asus-monitor-2.png',
        description: 'The ASUS TUF Gaming VG259QM is a great gaming monitor. It has low input lag, and its motion handling is superb thanks to its fast response time, high refresh rate, and backlight strobing feature. It supports FreeSync natively and is compatible with NVIDIA\'s G-SYNC.'
    },
    {
        mainImagePath: '/items/hyperx-cloud-ii.png',
        name: 'HyperX Cloud II Gaming Headset',
        price: 400,
        seller: 'HyperX',
        secondaryImagePath: '/items/hyperx-cloud-ii-2.png',
        description: 'HyperX Cloud II is Hi-Fi capable, with 53mm drivers for superior audio performance and rich sound quality with crystal-clear low, mid and high tones and enhanced bass via the sound card. Pro-gaming optimized, HyperX Cloud II is USB-powered for PCs and Macs and 3.5mm stereo-compatible for PS4 and Xbox One1.'
    },
    {
        mainImagePath: '/items/steelseries-qck.png',
        name: 'SteelSeries QCK Mousepad',
        price: 60,
        seller: 'SteelSeries',
        secondaryImagePath: '/items/steelseries-qck-2.png',
        description: 'SteelSeries QcK series mouse pads are the best in gaming, used by professional gamers everywhere thanks to their washable durability, non-slip base, and micro-woven cloth optimized for low and high CPI mouse tracking, available in a variety of sizes and styles.'
    },
    {
        mainImagePath: '/items/computer.jpg',
        name: 'Computer',
        price: 6000,
        seller: 'Lenovo',
        secondaryImagePath: '/items/computer-2.png',
        description: 'A recommended computer'
    }
];

const ShoppingList = () => (
    <div>
        <h1>Shopping List</h1>

        <div className="container">
            {items.map(item => (
                <ShoppingItem item={item} key={item.name}></ShoppingItem>
            ))}
        </div>
    </div>
);

export default ShoppingList;
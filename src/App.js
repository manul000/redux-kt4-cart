import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './components/CartItem/CartItem';
import { addProduct } from './store/cartReducer';
import './App.css';

function App() {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [error, setError] = useState('');

    function handleAdd() {
        const title = window.prompt('Введите название товара');
        if (title === null) {
            return;
        }
        if (!title.trim()) {
            setError('Название товара не должно быть пустым.');
            return;
        }
        dispatch(addProduct(title));
        setError('');
    }

    return (
        <main className="page">
            <h1>Корзина</h1>
            <button className="add-button" onClick={handleAdd}>
                Добавить товар
            </button>
            {error && <p role="alert">{error}</p>}
            <div className="cart">
                {products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
            </div>
            {products.length === 0 && <p>Корзина пуста.</p>}
        </main>
    );
}

export default App;

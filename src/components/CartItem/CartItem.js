import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/cartReducer';
import styles from './CartItem.module.css';

function CartItem({ product }) {
    const dispatch = useDispatch();

    return (
        <article className={styles.item} aria-label={product.title}>
            <h2>{product.title}</h2>
            <div className={styles.counter}>
                <button
                    aria-label={`Увеличить: ${product.title}`}
                    disabled={product.count >= 25}
                    onClick={() => dispatch(increment(product.id))}
                >
                    +
                </button>
                <output aria-label={`Количество: ${product.title}`}>{product.count}</output>
                <button
                    aria-label={`Уменьшить: ${product.title}`}
                    onClick={() => dispatch(decrement(product.id))}
                >
                    −
                </button>
            </div>
        </article>
    );
}

export default CartItem;
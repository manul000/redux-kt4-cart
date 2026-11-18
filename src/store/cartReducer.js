export const defaultState = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 }
];

export const increment = (id) => ({ type: 'cart/increment', payload: id });
export const decrement = (id) => ({ type: 'cart/decrement', payload: id });
export const addProduct = (title) => ({
    type: 'cart/add',
    payload: { id: crypto.randomUUID(), title: title.trim(), count: 1 }
});

export default function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case 'cart/add':
            return action.payload.title ? [...state, action.payload] : state;
        case 'cart/increment':
            return state.map((product) =>
                product.id === action.payload
                    ? { ...product, count: Math.min(25, product.count + 1) }
                    : product
            );
        case 'cart/decrement':
            // При переходе 1 → 0 товар сразу удаляется из корзины.
            return state
                .map((product) =>
                    product.id === action.payload
                        ? { ...product, count: product.count - 1 }
                        : product
                )
                .filter((product) => product.count > 0);
        default:
            return state;
    }
}

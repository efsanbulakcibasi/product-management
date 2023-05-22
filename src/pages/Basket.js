import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToBasket } from "../store/features/basket/basketSlice";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Basket = () => {
    const dispatch = useDispatch();
    const basket = useSelector((state) => state.basket);

    useEffect(() => {
        const _basket = JSON.parse(localStorage.getItem("basket"));
        if (_basket) {
            dispatch(addItemToBasket(_basket))
        }
    },[])

    return(
        <>
        <div className="section-02">
            {
                basket && [...basket.items].sort((a,b) => b.sortNumber - a.sortNumber).map((product) => (
                    <ul key={product.id} className="basket">
                        <li>{product.name}</li>
                        <li>
                            <button aria-label="Decrement value"
                            onClick={() => {
                                let updateBasketItem = [];

                                if (product.count === 1) {
                                    updateBasketItem = [
                                        ...basket.items.filter(x => x.id !== product.id)
                                    ];
                                }
                                else{
                                    updateBasketItem = [
                                        ...basket.items.filter(x => x.id !== product.id),
                                        {
                                            ...product,
                                            count: product.count -1
                                        }
                                    ];
                                }
                                dispatch(addItemToBasket(updateBasketItem));
                                localStorage.setItem("basket", JSON.stringify(updateBasketItem))
                            }}
                            ><AiOutlineMinusCircle/> </button>
                            <span>{product.count}</span>
                            <button
                            aria-aria-label="Increment value"
                            onClick={() => {
                                var _updateProduct = {...product};
                                _updateProduct.count = _updateProduct.count + 1

                                const updateItemIndex = basket.items.findIndex(x => x.id === product.id);
                                let _items = [...basket.items];
                                _items[updateItemIndex] = _updateProduct;

                                dispatch(addItemToBasket(_items));
                                localStorage.setItem("basket", JSON.stringify(_items)
                                )
                            }}
                            ><AiOutlinePlusCircle/></button>
                            <button
                            aria-label="Delete value"
                            onClick={() => {
                                let updateBasketItem = [
                                    ...basket.items.filter(x => x.id !== product.id)
                                ]
                                dispatch(addItemToBasket(updateBasketItem));
                                localStorage.setItem("basket", JSON.stringify(updateBasketItem))
                            }}
                            >
                                <MdDelete/>
                            </button>
                        </li>
                    </ul>
                ))
            }
            <div className="basket-total">
                Toplam:
                {
                    basket.items.reduce((toplam,product) => {
                        return toplam + product.count * Number(product.price)
                    },0)
                }
            </div>
        </div>
        </>
    )
}

export default Basket;
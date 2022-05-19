import React, { useContext, useState, useEffect } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const Cart = () => {

    const { cart, removeFromCart, totalPrice, getCurrentDate } = useContext(CartContext)
    const [ orderId, setOrderId ] = useState('')
    const [ isBought, setIsBought ] = useState(false)

    const initialValues = { fullname: "", phone: "", email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
};

useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexPhone = /^\d{10,11}$/;
        if (!values.fullname) {
            errors.fullname = "Full Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.phone) {
            errors.phone = "Phone is required!";
        }else if (values.phone.length < 10) {
            errors.phone = "The Minimum is 10 Numbers to Continue";
        } else if (values.phone.length > 12) {
            errors.phone = "More Than 12 Numbers is Invalid";
        } else if (!regexPhone.test(values.phone)){
            errors.phone = "This a Invalid Number Phone"
        }
        return errors;
};



    const FinalizePurchase = () => {

        const order = {
            buyer: {formValues},
            items: [...cart],
            total: `$ ${totalPrice}`,
            date: getCurrentDate(),
        };
        const db = getFirestore();
        const ventasRef = collection(db, 'ventas');
        addDoc(ventasRef, order).then(({id})=> setOrderId(id));
        setIsBought(true)

    }

return (
    <>
        {cart.length === 0 
            ?
/* ------------------------------------------------------------------------------------------------------------------------------- */
            <div className='ContCart'>
                <h1>The Cart Is Empty</h1>
                <Link to='/'><button>Continue Buying</button></Link> 
            </div>
/* ------------------------------------------------------------------------------------------------------------------------------- */
            : 
/* ------------------------------------------------------------------------------------------------------------------------------- */
            <div className='ContCart'>
                <h2>Aggregates Products : {cart.length}</h2>
                {cart.length > 0 &&
                cart.map((detail) => (
                <div className='algo'>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                    <div className='cont-img'>
                        <div className='images'><img src={detail.img} alt={detail.nombre} width='300px' height='300px'/></div>
                    </div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                    <div className='cont-info'>
                        <div><p>Stock: {detail.stock} Products Available</p></div>
                        <div><p>{detail.nombre}</p></div>
                        <div><p>Price: {detail.precio}</p></div>
                        <div><p>{detail.count} Products Added</p></div>
                        <button onClick={()=>{removeFromCart(detail.id)}}>Remove</button>
                    </div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                </div>))}
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                <div className='contanier-form'>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="succesfully">
                        <p>The Purchase Has Successfully!</p> 
                        <button
                        onClick={()=>{FinalizePurchase()
                        }}>
                        Buy
                        </button>
                        {isBought === true ? <p>Here's Your Order Id: <strong>{orderId}</strong></p> : ' '}
                    </div>
                ) : (
                    <div className="veryfying">Verifying The Purchase</div>
                )}
                    <form onSubmit={handleSubmit}>
                        <div className='inputs'>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                            <div className='full-name'>
                                <label><strong>Name</strong></label>
                                <input
                                type={'text'} 
                                name='fullname'
                                placeholder='ej: Dimitri Salvio' 
                                value={formValues.fullname} 
                                onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.fullname}</p>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                            <div className='phone'>
                                <label><strong>Phone</strong></label>
                                <input 
                                type={'text'} 
                                name='phone'
                                placeholder="ej: 1198765432" 
                                value={formValues.phone} 
                                onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.phone}</p>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                            <div className='email'>
                                <label><strong>Email</strong></label>
                                <input 
                                type={'text'} 
                                name='email'
                                placeholder='ej: ejemplo@gmail.com' 
                                value={formValues.email} 
                                onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.email}</p>
                        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                        <div className='order'>
                            <h2>Total Price: $ {totalPrice}</h2>
                            <button>Verify Order</button>
                            <Link to='/'>
                            <button>Continue Buying</button>
                            </Link> 
                        </div>
                        </form>
                        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------ */}
                </div>
/* ----------------------------------------------------------------------------------------------------------------------------- */
}</>)}

export default Cart;
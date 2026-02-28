import 'react';

function Product({name, price, description}) {
    return (
        <>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
        </>
    );
};

export default Product;
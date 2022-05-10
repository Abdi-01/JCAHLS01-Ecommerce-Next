import axios from 'axios';
import React from 'react';
import HeadMeta from '../../components/HeadMeta';
import NavbarComponent from '../../components/Navbar';

// dijalankan ketika pertama kali project kita build
export const getStaticProps = async () => {
    try {
        let res = await axios.get("http://localhost:5000/products")
        return {
            props: {
                products: res.data
            },
            revalidate: 10
        }
    } catch (error) {
        console.log(error);
    }
}

const ProductsPage = (props) => {

    console.log(props.products)

    return <div>
        <NavbarComponent />
        <HeadMeta
            title="Ecommerce | Products List"
            description="Pilih barang yang kamu butuhkan"
            img="https://except.eco/media/images/Ikea_Dashboard.width-1600.jpegquality-95.jpg"
        />
        <h1>Products Page</h1>
    </div>
}

export default ProductsPage;

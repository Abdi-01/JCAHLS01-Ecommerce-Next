import axios from 'axios';
import React from 'react';
import HeadMeta from '../../components/HeadMeta';
import NavbarComponent from '../../components/Navbar';
import { Card, CardBody, CardImg, FormGroup, Input, Label, Button, Collapse } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

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

    const printProducts = () => {
        return props.products.map((value, index) => {
            return <div key={value.id} className="col-12 col-md-6 col-lg-4 p-2">
                <Link href={`/products/detail?id=${value.id}`}>
                    <div className='text-center'>
                        <Image
                            src={value.images[0]}
                            alt="logo"
                            width="170%"
                            height="150%"
                            objectFit='contain'
                        />
                        <div className='card-body'>
                            <h6 className='fw-bold text-center my-0'>{value.nama}</h6>
                            <p className='text-muted text-center my-0'>{value.kategori}</p>
                            <h4 className='fw-bold text-center'>IDR. {value.harga.toLocaleString("id")}</h4>
                        </div>
                    </div>
                </Link>
            </div>
        })
    }

    return <div>
        <NavbarComponent />
        <HeadMeta
            title="Ecommerce | Products List"
            description="Pilih barang yang kamu butuhkan"
            img="https://except.eco/media/images/Ikea_Dashboard.width-1600.jpegquality-95.jpg"
        />
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-3'>
                </div>
                <div className='col-12 col-md-9'>
                    <div className='row'>
                        {printProducts()}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProductsPage;

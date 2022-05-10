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
                <Card className='border-0 bg-transparent'>
                    {/* Cara 1 mengakses gambar dari luar server/api/source lain */}
                    {/* <Image
                        loader={() => value.images[0]}
                        src="img-link"
                        alt="logo"
                        width="100%"
                        height="100%"
                        objectFit='contain'
                    /> */}
                    {/* Cara 2 mengakses gambar dari luar server/api/source lain */}
                    <Image
                        src={value.images[0]}
                        alt="logo"
                        width="100%"
                        height="100%"
                        objectFit='contain'
                    />
                    <CardBody>
                        <h6 className='fw-bold text-center my-0'>{value.nama}</h6>
                        <p className='text-muted text-center my-0'>{value.kategori}</p>
                        <h4 className='fw-bold text-center' style={{ color: "#9E887E" }}>
                            IDR. {value.harga.toLocaleString()}
                        </h4>
                    </CardBody>
                </Card>
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
        <h1>Products Page</h1>
    </div>
}

export default ProductsPage;
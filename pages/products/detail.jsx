import React from 'react';

export const getServerSideProps=async(context)=>{
    try {

        console.log("prameter query", context.query)
        
        return {
            props:{
                detail:{}
            }
        }
    } catch (error) {
        console.log(error)
    }
}
const DetailProduct=(props)=>{

    return <div>
        <h1>Detail Product</h1>
    </div>
}

export default DetailProduct;
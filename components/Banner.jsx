import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const Banner = ({bannerList}) => {

    return (
        <div className='container'>
            <UncontrolledCarousel
                className='shadow-sm'
                items={bannerList}
            />
        </div>
    )
}

export default Banner;
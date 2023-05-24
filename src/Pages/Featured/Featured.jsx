import React from 'react';
import featuredImg from '../../../src/assets/home/featured.jpg'
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import './feature.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'Featured Item'}
            >
            </SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36  bg-slate-400 bg-opacity-30'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 text-white '>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptates necessitatibus architecto tenetur asperiores ab minima omnis magni, tempora cupiditate sint id est earum veritatis fuga cum? Quisquam, iure reiciendis cupiditate quis praesentium aperiam tenetur animi. Excepturi eligendi at, voluptates commodi veritatis sunt, aperiam voluptas, adipisci magni dolorem iste quam.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4 border-white text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
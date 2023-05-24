import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/Navbar/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu , setMenu] = useState([]);
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems )})
    },[]);
    
    return (
        <section className='mb-12 gap-4'>
            <SectionTitle
             subHeading="---Popular Items---"
             heading="from our menu"
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map(item => <MenuItem
                          key={item._id}
                    item = {item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className='text-center mt-8'>
            <button className='btn btn-ghost border-b-4 border-b-gray-700'>VIEW FULL MENU</button>
            </div>
            <div className='bg-black p-10 text-center mt-8'><h2 className='text-white font-bold text-4xl'>Call Us= +880000000</h2></div>
        </section>
    );
};

export default PopularMenu;
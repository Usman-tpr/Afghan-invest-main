import React from 'react'
import { GiMining } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";
import { MdConstruction } from "react-icons/md";
import { MdAgriculture } from "react-icons/md";
import { Link } from 'react-router-dom';
const Service = () => {
    return (
        <>
            <div className='text-center'>
                <h2 className="text-4xl font-bold text-black mb-4">Services</h2>
                <p className="text-xl text-black mb-12">
                    Building Upon Own Expertise
                </p>
            </div>
           <div className='grid lg:grid-cols-4 grid-cols-1'>
           <div className="card mx-10 hover:shadow-2xl" id="card ">
                <div class="content text-black">
                    <GiMining size={50} className='text-usetheme' />
                    <p className='text-black text-center text-md mt-10'><span className='text-2xl font-semibold'>Mining Sector</span> (Exploration, Extraction, Process)</p>
                    <Link to='/about' className='bg-usetheme text-white px-6 py-2 rounded-xl hover:bg-black hover:text-white mt-5 duration-500'>Read More</Link>
                </div>
            </div>

            <div className="card mx-10 hover:shadow-2xl" id="card ">
                <div class="content text-black">
                    <SlEnergy size={50} className='text-usetheme' />
                    <p className='text-black text-center text-md mt-10'> <span className='font-semibold text-2xl'>Energy Sector</span> (Transmission Line & Substations)</p>
                    <Link to='/about' className='bg-usetheme text-white px-6 py-2 rounded-xl hover:bg-black hover:text-white mt-5 duration-500'>Read More</Link>
                </div>
            </div>

            <div className="card mx-10 hover:shadow-2xl" id="card ">
                <div class="content text-black">
                    <MdConstruction size={50} className='text-usetheme' />
                    <p className='text-black text-center text-md mt-10'> <span className='font-semibold text-2xl'>Construction Sector</span> <br />
                    The construction sector builds infrastructure and buildings.</p>
                    <Link to='/about' className='bg-usetheme text-white px-6 py-2 rounded-xl hover:bg-black hover:text-white mt-5 duration-500'>Read More</Link>
                </div>
            </div>

            <div className="card mx-10 hover:shadow-2xl" id="card ">
                <div class="content text-black">
                    <MdAgriculture size={50} className='text-usetheme' />
                    <p className='text-black text-center text-md mt-10'>  <span className='text-2xl font-semibold'>Agriculture</span> <br />We provide agricultural services, including crop cultivation.</p>
                    <Link to='/about' className='bg-usetheme text-white px-6 py-2 rounded-xl hover:bg-black hover:text-white mt-5 duration-500'>Read More</Link>
                </div>
            </div>
           </div>
           

        </>
    )
}

export default Service
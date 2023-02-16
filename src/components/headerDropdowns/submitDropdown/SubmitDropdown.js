import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userImage from '../../../assets/images/User.png'
import './submitDropdown.css'

function submitDropdown() {
    //Owl Carousel Settings
    const options = {
        margin: 10,
        responsiveClass: true,
        nav: true,
        items:3,
        autoplay: false,
        dots:false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            600: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        },
    };
  return (
    <>
        <div className='bg-white rounded shadow p-3'>
            <OwlCarousel className='owl-theme' {...options}>
                <div className='item'>
                    <div className='carousel-content'>
                        <img src={userImage} alt="users" className='img-fluid mb-3' width={40}/>
                        <h5>Sales KPI Data</h5>
                        <p>This is a description text that appear as entered by dashboard creator</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-content'>
                        <img src={userImage} alt="users" className='img-fluid mb-3' width={40}/>
                        <h5>Revenue Date</h5>
                        <p>This is a description text that appear as entered by dashboard creator</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-content'>
                        <img src={userImage} alt="users" className='img-fluid mb-3' width={40}/>
                        <h5>Performance Date</h5>
                        <p>This is a description text that appear as entered by dashboard creator</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-content'>
                        <img src={userImage} alt="users" className='img-fluid mb-3' width={40}/>
                        <h5>Sales KPI Data</h5>
                        <p>This is a description text that appear as entered by dashboard creator</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-content'>
                        <img src={userImage} alt="users" className='img-fluid mb-3' width={40}/>
                        <h5>Revenue Date</h5>
                        <p>This is a description text that appear as entered by dashboard creator</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='carousel-content'>
                        <img src={userImage} alt="users" className='img-fluid mb-3' width={40}/>
                        <h5>Performance Date</h5>
                        <p>This is a description text that appear as entered by dashboard creator</p>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    </>
  )
}

export default submitDropdown
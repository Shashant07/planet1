import React from 'react'
import v1 from '../../assets/web/vendor-1.jpg';
import v2 from '../../assets/web/vendor-2.jpg';
import v3 from '../../assets/web/vendor-3.jpg';
import v4 from '../../assets/web/vendor-4.jpg';
import v5 from '../../assets/web/vendor-5.jpg';
import v6 from '../../assets/web/vendor-6.jpg';
import v7 from '../../assets/web/vendor-7.jpg';
import v8 from '../../assets/web/vendor-8.jpg';
import v9 from '../../assets/web/vendor-9.jpg';


const Vendors = () => {

  return (
    <>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 mb-5">
                <div className="bg-white">
                    <div className="owl-carousel vendor-carousel">
                        <img src={v1} alt="" />
                        <img src={v2} alt="" />
                        <img src={v3} alt="" />
                        <img src={v4} alt="" />
                        <img src={v5} alt="" />
                        <img src={v6} alt="" />
                        <img src={v7} alt="" />
                        <img src={v8} alt="" />
                        <img src={v9} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Vendors;

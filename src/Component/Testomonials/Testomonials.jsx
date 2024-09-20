import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Testimonials.css';  

function Testimonials() {
    return (
        <div className="container-fluid py-5 my-5 border rounded-3" style={{ backgroundColor: "#152934" }}>
            <div className="row py-4 px-5">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className='mb-4 fw-bold fs-2 text-white text-center'>Testimonials</h3>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        slidesPerView={2}
                        spaceBetween={20}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        className='mt-5'
                        breakpoints={{
                            1400: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            380: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        <SwiperSlide className="testimonial-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-body">
                                    <p className="testimonial-text">
                                        "I am absolutely in love with the décor pieces I purchased! They completely transformed my living room into a cozy and stylish space. The quality is outstanding, and the designs are so unique! I especially adore the modern wall art and velvet cushions I got from here."
                                    </p>
                                    <div className="testimonial-author">
                                        <h5 className="author-name">Sarah M.</h5>
                                        <div className="author-rating">★★★★★</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-body">
                                    <p className="testimonial-text">
                                        "From start to finish, my experience with this home decor site was fantastic. The customer service was incredibly helpful, and the products exceeded my expectations. Highly recommended! The handcrafted vases and antique mirrors I ordered are stunning."
                                    </p>
                                    <div className="testimonial-author">
                                        <h5 className="author-name">Michael L.</h5>
                                        <div className="author-rating">★★★★★</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-body">
                                    <p className="testimonial-text">
                                        "I was blown away by how beautifully crafted the items were. The wall art and decorative vases I bought have become conversation pieces in my home. I will definitely be ordering again!"
                                    </p>
                                    <div className="testimonial-author">
                                        <h5 className="author-name">Emily R.</h5>
                                        <div className="author-rating">★★★★☆</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-body">
                                    <p className="testimonial-text">
                                        "My new home looks stunning thanks to the elegant décor I found here. Everything arrived on time, and the quality is top-notch. A great find for anyone looking to elevate their space. The chic table lamps and luxurious throw blankets are my favorites."
                                    </p>
                                    <div className="testimonial-author">
                                        <h5 className="author-name">Jason K.</h5>
                                        <div className="author-rating">★★★★★</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-body">
                                    <p className="testimonial-text">
                                        "This site has a wonderful selection of home accessories! I found the perfect rugs and cushions to match my living room. The delivery was quick, and the products are as described."
                                    </p>
                                    <div className="testimonial-author">
                                        <h5 className="author-name">Amanda P.</h5>
                                        <div className="author-rating">★★★★☆</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-body">
                                    <p className="testimonial-text">
                                        "I never thought home décor shopping could be so easy! The website is well organized, and I quickly found what I was looking for. The elegant curtains and modern furniture I purchased added a luxurious feel to my home."
                                    </p>
                                    <div className="testimonial-author">
                                        <h5 className="author-name">Ravi S.</h5>
                                        <div className="author-rating">★★★★★</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonial-slide">
                            <div className="testimonial-card">
                                <div className="testimonial-body">
                                    <p className="testimonial-text">
                                        "Absolutely beautiful pieces! The table lamps and artwork I purchased brought so much warmth and elegance to my home. Exceptional service and craftsmanship!"
                                    </p>
                                    <div className="testimonial-author">
                                        <h5 className="author-name">Olivia T.</h5>
                                        <div className="author-rating">★★★★★</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;

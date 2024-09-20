import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from "../../assets/slider1.webp"
import img2 from "../../assets/slider2.webp"
import img3 from "../../assets/slider3.webp"

function HomeSlider() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              className="rounded-3 slider-size"
            >
              <SwiperSlide className="abc">
                <Card className="bg-dark text-white">
                  <Card.Img src={img1} alt="Card image" />
                  <Card.ImgOverlay className=' d-flex justify-content-center align-items-start flex-column text-start px-5'>
                    <Card.Title>
                      <h3 className='text-uppercase'>Best Sellers</h3>
                    </Card.Title>
                    <Card.Text >
                      <h1 className="display-5 fw-bold text-uppercase">ArmChairs</h1>
                    </Card.Text>
                    <button className='btn border-none btn-shop fw-semibold  py-2 px-5 rounded-5 text-uppercase'>
                      Shop
                    </button>
                  </Card.ImgOverlay>
                </Card>
              </SwiperSlide>
              <SwiperSlide className="abc">
                <Card className="bg-dark text-white">
                  <Card.Img src={img2} alt="Card image" />
                  <Card.ImgOverlay className=' d-flex justify-content-center align-items-start flex-column text-start px-5'>
                    <Card.Title>
                      <h3 className='text-uppercase'>New Collections</h3>
                    </Card.Title>
                    <Card.Text >
                      <h1 className="display-5 fw-bold text-uppercase">Living Room</h1>
                    </Card.Text>
                    <button className='btn border-none btn-shop fw-semibold  py-2 px-5 rounded-5 text-uppercase'>
                      Shop
                    </button>
                  </Card.ImgOverlay>
                </Card>
              </SwiperSlide>
              <SwiperSlide className="abc">
                <Card className="bg-dark text-white">
                  <Card.Img src={img3} alt="Card image" />
                  <Card.ImgOverlay className=' d-flex justify-content-center pt-5 '>
                    <div className="pt-5 text-center mt-4">
                      <Card.Title>
                        <h3 className='text-uppercase'>New arrivals</h3>
                      </Card.Title>
                      <Card.Text >
                        <h1 className="display-4 fw-bold text-uppercase">Sleeper Sofa</h1>
                      </Card.Text>
                      <button className='btn border-none btn-shop fw-semibold  py-2 px-5 rounded-5 text-uppercase'>
                        Shop
                      </button>
                    </div>
                  </Card.ImgOverlay>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSlider
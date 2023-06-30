import Slider from "react-slick";
export default () => {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // slidesToScroll: 3
        autoplay : true,
        fade : false,
        // className : 'sanchay-is'
    };
    return <>
        <section className="ns-services-section py-5">
            <div className="ns-services-background-section pt-5">
                <div className="ns-service-title d-flex justify-content-center align-items-center ">
                    <img src="./orangeDot.png" alt="" />
                    <p className="ns-title-service ps-2 fs-4">Services</p>
                </div>
                <div className="ns-service-heading text-center py-3 text-uppercase">
                    <h1>MY SERVICES</h1>
                </div>
                <div className="ns-services-list">
                    <Slider {...settings}>
                        <div className="ns-services-item px-3">
                            <div class="card">
                                <div className="ns-service-icons text-center py-4">
                                    <i class="bi bi-browser-edge"></i>
                                </div>
                                <div class="card-body text-center pb-5">
                                    <h3 class="card-title">Web Design</h3>
                                    <p class="card-text">Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.</p>
                                    <a href="#">About More</a>
                                </div>
                            </div>
                        </div>
                        <div className="ns-services-item px-3">
                            <div class="card">
                                <div className="ns-service-icons text-center py-4">
                                    <i class="bi bi-browser-edge"></i>
                                </div>
                                <div class="card-body text-center pb-5">
                                    <h3 class="card-title">Web Design</h3>
                                    <p class="card-text">Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.</p>
                                    <a href="#">About More</a>
                                </div>
                            </div>
                        </div>
                        <div className="ns-services-item px-3">
                            <div class="card">
                                <div className="ns-service-icons text-center py-4">
                                    <i class="bi bi-browser-edge"></i>
                                </div>
                                <div class="card-body text-center pb-5">
                                    <h3 class="card-title">Web Design</h3>
                                    <p class="card-text">Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.</p>
                                    <a href="#">About More</a>
                                </div>
                            </div>
                        </div>
                        <div className="ns-services-item px-3">
                            <div class="card">
                                <div className="ns-service-icons text-center py-4">
                                    <i class="bi bi-browser-edge"></i>
                                </div>
                                <div class="card-body text-center pb-5">
                                    <h3 class="card-title">Web Design</h3>
                                    <p class="card-text">Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.</p>
                                    <a href="#">About More</a>
                                </div>
                            </div>
                        </div>
                        <div className="ns-services-item px-3">
                            <div class="card">
                                <div className="ns-service-icons text-center py-4">
                                    <i class="bi bi-browser-edge"></i>
                                </div>
                                <div class="card-body text-center pb-5">
                                    <h3 class="card-title">Web Design</h3>
                                    <p class="card-text">Sugary sweet lorem ipsum? You got it with Cup cake Ipsum, the only text generator treatment contrary.</p>
                                    <a href="#">About More</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    </>
}
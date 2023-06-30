
import ProgressBar from 'react-bootstrap/ProgressBar';
export default () => {

    return <>
        <section className="ns-about-setion py-5">
            <div className="ns-about-background">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="ns-about-content-section mt-1 px-5">
                            <div className="ns-about-title d-flex align-items-center">
                                <img src="./orangeDot.png" alt="" className='' />
                                <p className="ps-2" >About Me</p>
                            </div>
                            <div className="ns-about-heading-section mt-3 lh-2">
                                <h1>I'm developing mobile and web applications.</h1>
                                <p className='ns-paragraph pt-3' >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                            <div className="ns-progress-result">
                                <label className='py-1'>Backend Development</label>
                                <ProgressBar animated variant="danger" label="Backend Development  85%" now={85} />
                                <label className='py-1'>Relationship Advice</label>
                                <ProgressBar animated variant="warning" label="Relationship Advice  75%" now={75} />
                                <label className='py-1'>Frontend Development</label>
                                <ProgressBar animated variant="danger" label="Frontend Development  90%" now={90} />
                                <label className='py-1'>Transparency Services</label>
                                <ProgressBar animated variant="info" label='Transparency Services  60%' now={60} />
                                <label className='py-1'>Mobile Apllication Development</label>
                                <ProgressBar animated variant="success" label="Mobile Apllication Development  80%" now={80} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 px-lg-5 pt-5 mt-2">
                        <div className="ns-about-image-section">
                            <img src="./aboutTwo.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
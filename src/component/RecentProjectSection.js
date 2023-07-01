import { useState } from "react"
import { project } from "./constant"
export default () => {
    const [allProject, setProjectFilter ] = useState( project );
    const imgFilter = ( filters ) => {
        const filterData = project.filter( lst => lst.category === filters );
        setProjectFilter( filterData );
    }
    return <>
        <section className="ns-services-section py-5">
            <div className="ns-services-background-section pt-5">
                <div className="ns-service-title d-flex justify-content-center align-items-center ">
                    <img src="./orangeDot.png" alt="" />
                    <p className="ns-title-service ps-2 fs-4">PortFolio</p>
                </div>
                <div className="ns-service-heading text-center py-3 text-uppercase">
                    <h1>SOME RECENT WORK</h1>
                </div>
                <div className=" ns-project-list">
                    <div className="d-flex flex-wrap justify-content-center ns-select-list ">
                        <button className="py-2 px-4 ns-select-project" onClick={ () => setProjectFilter( project ) } >All</button>
                        <button className="py-2 px-4 ns-select-project" onClick={ () => imgFilter( 'web-design' ) } >Web Designing</button>
                        <button className="py-2 px-4 ns-select-project" onClick={ () => imgFilter( 'mobile-app' ) } >Mobile App</button>
                        <button className="py-2 px-4 ns-select-project" onClick={ () => imgFilter( 'plugins' ) } >WP Plugins</button>
                        <button className="py-2 px-4 ns-select-project" onClick={ () => imgFilter( 'themes' ) } >WP Themes</button>
                        <button className="py-2 px-4 ns-select-project" onClick={ () => imgFilter( 'Api' ) } >REST APIs</button>
                    </div>
                    <div className="ns-list-all-project py-4">
                        <div className="row">
                            { allProject.map( prj => {
                                return <div className="col-lg-4 ns-start-project" key={prj.id}>
                                    <div className="ns-list-project-data position-relative">
                                        <div className="ns-project-list-img position-relative">
                                            <img src={prj.img} alt="" srcset="" className=" img-fluid" />
                                        </div>
                                        <div className="ns-project-img-hover position-absolute"></div>
                                        <div className="ns-project-details text-center position-absolute">
                                            <p>{prj.title}</p>
                                            <a href={prj.link} >View</a>
                                        </div>
                                    </div>
                                </div>
                            } ) }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
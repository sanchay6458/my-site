import AboutSection from "./component/AboutSection";
import HeadSection from "./component/HeadSection";
import ServicesSection from "./component/ServicesSection";


export default () => {
  return <>
  <div className="row">
    <div className="col-md-2">
      hells
    </div>
    <div className="col-md-10">
      <HeadSection />
      <AboutSection />
      <ServicesSection />
    </div>
  </div>
  </>;
}
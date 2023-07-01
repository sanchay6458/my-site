import AboutSection from "./component/AboutSection";
import HeadSection from "./component/HeadSection";
import RecentProjectSection from "./component/RecentProjectSection";
import ResumeSection from "./component/ResumeSection";
import ServicesSection from "./component/ServicesSection";


export default () => {
  return <>
  <div className="row">
    <div className="col-md-2">
      hells
    </div>
    <div className="col-md-10 col-12">
      <HeadSection />
      <AboutSection />
      <ServicesSection />
      <ResumeSection />
      <RecentProjectSection />
    </div>
  </div>
  </>;
}
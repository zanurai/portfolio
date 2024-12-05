import AboutPage from "@/page/about-page";
import ProjectPage from "@/page/project-page";


interface HomePageProps {
  isOpen: boolean;
  toggleSlider: () => void;
}

const HomePage: React.FC<HomePageProps> = () => {

  return (
    <>
      <section className=" h-[70vh]  flex items-center max-lg:justify-center max-lg:py-60 max-sm:py-0 overflow-hidden relative z-[-1]">
        <div
          className={` relative  transition-all duration-300  font-bold font-fontFamily max-lg:text-[40px] max-md:text-h1  max-sm:text-h3 text-[50px] text-slate-600 z-10 pl-20 animate-slide-in`}
        >
          <p>
            Passionate frontend <span className="text-blue-500">developer</span>
          </p>
          <p className="max-lg:text-[14px] max-sm:text-[11px] text-h4 text-animate">
            Creative frontend developer with a keen eye for design.
          </p>
        </div>

        <div className="absolute lg:top-0 lg:right-0 lg:translate-x-10  flex items-center justify-center gap-4 h-full z-0">
          <img
            src="/images/januka.png"
            alt="Januka"
            className="object-cover w-[600px] max-lg:static max-md:ml-[93px]"
          />
        </div>
      </section>

      <section id="about-section" className="">
        <div>
          <AboutPage />
        </div>
      </section>

      <section id="project-section" className="">
        <div>
          <ProjectPage />
        </div>
      </section>
    </>
  );
};

export default HomePage;

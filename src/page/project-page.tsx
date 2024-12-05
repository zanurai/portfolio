import settings from "@/components/slider/react-slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Projects } from "@/components/projects/projects";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const navigate = useNavigate();

  const handleClickProjectDetails = (projectId: string) => {
    navigate(`/details-page/${projectId}`);
  };

  return (
    <section className=" py-10 cursor-pointer  ">
      <h1 className="font-fontFamily text-h1 text-center font-bold text-textcolor max-lg:text-h3">
        My Projects
      </h1>
      <div className="body sm:px-20 pl-12 py-10 relative   ">
        <Slider {...settings}>
          {Projects.map((project, index) => (
            <div>
              <div
                key={index}
                className="  border border-gray-200 rounded-lg flex flex-col items-center justify-center mx-2 py-2 bg-gradient-to-b from-pink-200 via-pink-200/50 to-pink-50"
                onClick={() => handleClickProjectDetails(project.id)}
              >
                <img
                  src={project.img}
                  alt=""
                  className="w-[100px] h-[50px] object-contain "
                />
                <p className="mt-2 text-textcolorpara font-fontFamily">
                  {project.name.length > 10
                    ? `${project.name.slice(0, 10)}...`
                    : project.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectPage;

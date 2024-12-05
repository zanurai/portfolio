import { Projects } from "@/components/projects/projects";
import { Link, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const project = Projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project nt found!</div>;
  }
  return (
    <section className="pl-20  ">
      <div className="flex items-center space-x-10 ">
        <div className="flex-1 bg-gradient-to-b from-pink-200 via-pink-200/50 to-pink-50 p-14 rounded-lg shadow-xl shadow-pink-200">
          <img
            src={project.screenshot}
            alt=""
            className="w-full max-w-[600px] object-cover"
          />
        </div>
        <div className="flex-1 font-fontFamily space-y-4 ">
          <p className="text-xl font-bold mb-5">{project.name}</p>
          <p>
            <span className="textsemibold">Purpose:</span> {project.purpose}
          </p>
          <p>
            <span className="textsemibold">Technologies:</span>
            {project.technologies}
          </p>
          <p>
            <span className="textsemibold">Key Feature:</span>
            {project.key_feature}
          </p>
          <p>
            <span className="textsemibold">Challenges:</span>{" "}
            {project.challenges}
          </p>
          <button className="border border-pink-200 rounded-md shadow-pink-200 shadow-xl  px-6 py-1 font-bold mt-5 hover:bg-pink-300 hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-500">
            {project.link ? (
              <Link to={project.link}>Link</Link>
            ) : (
              <span>No link available</span>
            )}
          </button>
        </div>
      </div>
      <p className="my-10">{project.paragraph}</p>
    </section>
  );
};

export default DetailsPage;

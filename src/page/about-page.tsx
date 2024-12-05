const AboutPage = () => {
  return (
    <section className="bg-transparent  p-14 ">
      <div className="max-lg:flex-wrap font-fontFamily flex  items-center justify-between">
        <div className="">
          <img src="/images/code2.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex-1">
          <h1 className="text-h1 font-bold mt-10 text-textcolor max-lg:text-h3">
            About Me
          </h1>
          <p className=" text-h4 text-textcolorpara">
            I am a Frontend Developer with over a year of experience creating
            user-friendly and responsive web applications. My expertise includes
            React, JavaScript, TypeScript, and CSS frameworks like Tailwind CSS,
            Bootstrap, and Material-UI. Although I have a Bachelor’s degree in
            Arts, I’ve gained strong technical skills through hands-on
            experience and projects. I am passionate about creating clean,
            responsive designs and working in collaborative teams to deliver
            great user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

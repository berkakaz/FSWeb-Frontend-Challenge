import React from "react";
import { ProjectsData } from "../Data/ProjectsData";

function Projects() {
  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-medium  text-center pt-20 pb-16">
          Projects
        </h1>
        <div className="flex flex-col content-center flex-wrap gap-20 lg:gap-16 lg:flex-row lg:justify-center">
          {ProjectsData.map((project) => {
            return (
              <div
                className={`flex flex-col w-2/3 gap-5 bg-[rgba(221,238,254,1)] rounded-xl pt-10 px-10 lg:w-1/3`}
              >
                <h2 className="text-xl font-playfair font-bold">
                  {project.name}
                </h2>
                <p>{project.explanation}</p>
                <div className="flex flex-wrap w-11/12 gap-[9px]">
                  {project.libraries.map((library) => {
                    console.log(library);
                    return (
                      <h4 className="font-playfair font-bold text-sm leading-none rounded-[76px] bg-white pt-[6px] px-5 pb-[10px]">
                        {library}
                      </h4>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-4 pt-4 font-semibold text-[20px] lg:flex-row lg:justify-between">
                  <a className="">View on GitHub</a>
                  <a>Go to app →</a>
                </div>
                <img
                  src={project.imgsrc}
                  className="w-[130px] h-[96px] pt-4 self-center lg:pt-16 lg:w-[236px] lg:h-[208px] "
                />
                <div className="static h-0 before:bg-pcImg before:bg-contain before:bg-no-repeat before:content:[''] before:block before:relative before:z-auto  before:h-[280px] before:bottom-[132px] lg:before:bottom-[219px] lg:before:left-2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;


import { AboutText } from "../constants/AboutText";
import { Stats } from "../constants/Statistics";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="par-mums" className=" pt-20 pb-10">
      <div className="container">
        <h1 className="text-center text-4xl font-bold text-secondary-blue">
          Par mums
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,300px)] lg:grid-cols-[repeat(3,300px)] justify-center gap-20 p-10">
          {AboutText.map((item, index) => (
            <div key={index} className="flex flex-col gap-5 p-4  text-center">
              <div>
                <h2 className="text-xl font-medium capitalize text-secondary-blue">
                  {item.title}
                </h2>
              </div>
              <p className="text-md ">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[repeat(2,300px)] lg:grid-cols-[repeat(3,300px)] justify-center gap-20 p-10">
          {Stats.map((item, index) => (
            <div
              key={index}
              className="text-2xl flex flex-col justify-center items-center gap-2 text-secondary-blue "
            >
              <div className="flex flex-col items-center gap-2">
                {item.image}
                <h2>{item.title}</h2>
              </div>
              <p>{item.number}+</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;

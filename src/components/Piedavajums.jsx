import SectionWrapper from "./SectionWrapper";
import { PiedavajumsText } from "../constants/PiedavajumsText";

const Piedavajums = () => {
  return (
    <SectionWrapper id="piedavajums" className="pt-20 pb-10">
      <div className="container">
        <h1 className="text-center text-4xl font-bold text-secondary-blue">
          Piedāvājums
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,320px)] lg:grid-cols-[repeat(3,minmax(300px,320px))] gap-20 p-10 justify-center">
          {PiedavajumsText.map((item, index) => (
            <div key={index} className="text-center flex flex-col gap-3">
              <h2 className="text-xl font-medium text-secondary-blue">
                {item.title}
              </h2>
              <div className="relative w-full h-[250px] md:h-[300px]">
                <img
                  className="rounded-lg"
                  src={item.image}
                  fill
                  priority
                  alt={item.alt}
                />
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Piedavajums;

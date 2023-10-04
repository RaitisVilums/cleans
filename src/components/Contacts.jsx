import SectionWrapper from "./SectionWrapper";
import { ContactsInfo } from "../constants/Contacts";
import { useState } from "react";
import { ReactComponent as Copy } from "../assets/svg/copy.svg";
import { ReactComponent as Check } from "../assets/svg/check.svg";

const Contacts = () => {
  const [copyStatus, setCopyStatus] = useState({});

  const copyToClipboard = (text, index) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyStatus({ ...copyStatus, [index]: true });
        setTimeout(() => {
          setCopyStatus({ ...copyStatus, [index]: false });
        }, 1000);
      })
      .catch((err) => {
        console.error("Could not copy text", err);
      });
  };

  return (
    <SectionWrapper id="kontakti" className="pt-20 pb-20 flex">
      <div className="container">
        <h1 className="text-center text-4xl font-bold text-secondary-blue">
          Sazinies ar mums
        </h1>
        <div className="flex  flex-col justify-center items-center">
          <h2 className="text-xl mt-10 underline text-center ">
            Pakalpojumu izmaksas ir atkarīgas no objekta apjoma un sarežģītības
            pakāpes.
          </h2>
          <h2 className="text-xl mt-4 text-center">
            Lai uzzinātu savu cenu sūtiet bildes uz Whatsapp, E-pastu, vai
            Zvaniet.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[repeat(2,320px)] lg:grid-cols-[repeat(4,250px)] gap-2  md:gap-5 lg:gap-10 p-10 justify-center">
            {ContactsInfo.map((contact, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 justify-center items-center text-secondary-blue"
              >
                {contact.image}
                <h2 className="text-xl">{contact.title}</h2>
                <div className="flex gap-2">
                  <p
                    className="text-md cursor-pointer"
                    onClick={() => copyToClipboard(contact.desctiprion, index)}
                  >
                    {contact.desctiprion}
                  </p>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(contact.desctiprion, index)}
                  >
                    {copyStatus[index] ? (
                      <Check width={15} height={15} />
                    ) : (
                      <Copy width={15} height={15} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contacts;

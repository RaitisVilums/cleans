import { ReactComponent as Person } from "../assets/svg/person.svg";
import { ReactComponent as Scruber } from "../assets/svg/scruber.svg";
import { ReactComponent as City } from "../assets/svg/city.svg";

export const Stats = [
  {
    title: "Klientu skaits",
    number: 500,
    image: <Person width={50} height={50} />,
  },
  {
    title: "Objektu skaits",
    number: 100,
    image: <Scruber width={50} height={50} />,
  },
  {
    title: "Pilsētu skaits",
    number: 10,
    image: <City width={50} height={50} />,
  },
];

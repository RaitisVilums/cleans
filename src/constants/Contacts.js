import { ReactComponent as Phone } from "../assets/svg/phone.svg";
import { ReactComponent as Whatsapp } from "../assets/svg/whatsapp.svg";
import { ReactComponent as Email } from "../assets/svg/email.svg";
import { ReactComponent as Location } from "../assets/svg/location.svg";

export const ContactsInfo = [
  {
    title: "Zvanot",
    desctiprion: "+371 27425773",
    image: <Phone width={45} height={45} />,
  },
  {
    title: "Rakstot Whatsapp",
    desctiprion: "+371 27425773",
    image: <Whatsapp width={45} height={45} />,
  },
  {
    title: "E-pasts",
    desctiprion: "cleansolution@inbox.lv",
    image: <Email width={45} height={45} />,
  },
  {
    title: "Adrese",
    desctiprion: "Dārzu iela 58, Rēzekne, LV-4601",
    image: <Location width={45} height={45} />,
  },
];

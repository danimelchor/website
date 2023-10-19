import IntelygenzImg from "./intelygenz.png";
import BUNexusImg from "./bunexus.png";
import StripeImg from "./stripe.png";
import BastionZeroImg from "./bastionzero.jpeg";
import { ExperienceType } from "types";

const getMonthsSince = (date1: Date, date2: Date) => {
  var Difference_In_Time = date1.getTime() - date2.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var Difference_In_Months = Math.ceil(Difference_In_Days / 30);

  if (Difference_In_Months < 0) return `in ${-1 * Difference_In_Months}mos`;
  else if (Difference_In_Months < 12) return `${Difference_In_Months}mos`;
  else {
    var Difference_In_Years = Math.floor(Difference_In_Months / 12) % 12;
    return `${Difference_In_Years}ys ${Difference_In_Months}mos"`;
  }
};

export const EXPERIENCE_LIST : ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Stripe",
    from: "Jul 2023",
    to: "undefined",
    duration: "undefined",
    where: "Boston, Massachusetts, USA",
    website: "https://stripe.com/",
    image: StripeImg,
  },
  {
    role: "Software Engineer Intern",
    company: "Stripe",
    from: "May 2022",
    to: "Aug 2022",
    duration: getMonthsSince(new Date("08/12/2022"), new Date("05/23/2022")),
    where: "South San Francisco, California, USA",
    website: "https://stripe.com/",
    image: StripeImg,
  },
  {
    role: "Software Engineer Intern",
    company: "BastionZero",
    from: "Feb 2022",
    to: "May 2022",
    duration: getMonthsSince(new Date("05/13/2022"), new Date("02/22/2022")),
    where: "Boston, Massachusetts, USA",
    website: "https://bastionzero.com/",
    image: BastionZeroImg,
  },
  {
    role: "ML Software Engineer",
    company: "Intelygenz",
    from: "Jun 2021",
    to: "Aug 2021",
    duration: getMonthsSince(new Date("08/20/2021"), new Date("06/17/2021")),
    where: "Madrid, Community of Madrid, Spain",
    website: "https://intelygenz.com/",
    image: IntelygenzImg,
  },
  {
    role: "Full Stack Developer",
    company: "BU Nexus",
    from: "Mar 2021",
    to: "Oct 2021",
    duration: getMonthsSince(new Date("10/11/2021"), new Date("03/11/2021")),
    where: "Boston, Massachusetts, USA",
    website: "https://bunexus.com/",
    image: BUNexusImg,
  },
];

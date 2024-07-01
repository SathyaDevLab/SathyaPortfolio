import { v4 as uuidv4 } from "uuid";
import {
  About,
  Contact,
  Education,
  Experience,
  Home,
  Projects,
  Skills,
} from "../../assets";

export const generateUniqueId = (prefix: string): string => {
  return `${prefix}-${uuidv4()}`;
};

export interface NavTab {
  id: string;
  icon: string;
  uri: string;
  name: string;
}

export const NAV_TABS: NavTab[] = [
  {
    id: generateUniqueId("home"),
    icon: Home,
    uri: "#home",
    name: "Home",
  },
  {
    id: generateUniqueId("about"),
    icon: About,
    uri: "#about",
    name: "About",
  },
  {
    id: generateUniqueId("skills"),
    icon: Skills,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: generateUniqueId("projects"),
    icon: Projects,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: generateUniqueId("contact"),
    icon: Contact,
    uri: "#contact",
    name: "Contact",
  },
  {
    id: generateUniqueId("education"),
    icon: Education,
    uri: "#education",
    name: "Education",
  },
  {
    id: generateUniqueId("experience"),
    icon: Experience,
    uri: "#experience",
    name: "Experience",
  },
];

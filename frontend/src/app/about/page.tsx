import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a team of passionate engineers and designers dedicated to building software that empowers enterprises.",
};

export default function AboutPage() {
  return <AboutClient />;
}

// src/pages/Home.tsx
import SectionTitle from "../components/ui/SectionTitle";
import AboutCard from "../components/ui/AboutCard";
import TimelineItem from "../components/ui/TimelineItem";
import Button from "../components/ui/Button";
import {
  FaPlane,
  FaGraduationCap,
  FaBriefcase,
  FaMapPin,
} from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="flex flex-col items-center justify-center  px-4 gap-4">
      <SectionTitle>About Me</SectionTitle>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl">
        <AboutCard>
          <div className="flex-1 text-sm">
            <p className="mb-4 text-justify">
              I’m a junior <strong>full-stack developer based in Paris</strong>.
              After years in community & support roles, I switched to tech in
              2023 to build tools that are{" "}
              <strong>useful, joyful, and inclusive</strong>. I love clean UI,
              expressive code, and full-stack frameworks (hello Next.js ✨).
            </p>
            <p className="mb-6 text-justify">
              I’m curious by nature, organized in chaos, and happiest when I’m
              deep in a feature or learning something new.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="primary">LET’S CONNECT !</Button>
          </div>
        </AboutCard>

        <AboutCard>
          <div className="flex-1">
            <ul className="flex flex-col gap-5 mb-6">
              <TimelineItem year="2019" icon={FaPlane}>
                Customer Success Manager — Ulysse
              </TimelineItem>
              <TimelineItem year="2023" icon={FaGraduationCap}>
                Ada Tech School
              </TimelineItem>
              <TimelineItem year="2024" icon={FaBriefcase}>
                Full-Stack Web Developper — Unico France
              </TimelineItem>
              <TimelineItem year="2025" icon={FaMapPin}>
                Looking for a full-time role in Paris!
              </TimelineItem>
            </ul>
          </div>
          <div className="mt-6 flex justify-center">
            <Button variant="primary">more about me</Button>
          </div>
        </AboutCard>
      </div>
    </section>
  );
}

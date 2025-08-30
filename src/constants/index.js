import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I’m an innovative and detail-oriented Full Stack Developer with a strong foundation in modern frontend technologies, backend integration, and a solid grasp of data structures and algorithms. I enjoy building clean, user-centric web applications and tackling challenging problems with creative solutions.`;

export const ABOUT_TEXT = `I’m an innovative and detail-oriented Full Stack Developer with a strong foundation in frontend technologies, backend integration, and a solid grasp of data structures and algorithms. Passionate about building clean, user-centric web applications and solving complex problems with creative solutions.
Currently, I’m pursuing my B.Tech in Information Technology at Dr. Akhilesh Das Gupta Institute of Professional Studies (GGSIPU, Delhi), where I’m in my final year with a CGPA of 8.8. I’m eager to apply my skills in real-world projects, collaborate with forward-thinking teams, and grow into a well-rounded software engineer.`;

export const EXPERIENCES = [
  {
    year: "May 2025",
    role: " Software Engineering",
    company: "Walmart USA Virtual Experience (Forage Job Simulation)",
    description: `Completed the Advanced Software Engineering Job Simulation and solved difficult technical projects for a variety
of teams at Walmart.
 Developed a novel version of a heap data structure in Java for Walmart’s shipping department, showcasing strong
problem-solving and algorithmic skills.
 Designed a UML class diagram for a data processor, considering different operating modes and database
connections.
 Created an entity relationship diagram to design a new database accounting for all requirements provided by
Walmart’s pet department.`,
    technologies: ["Java"],
  },
];

export const PROJECTS = [
  {
    title: "Chikki 2.0 (Advanced Virtual Assistant)",
    image: project1,
    description:
      "Developed a responsive, AI-powered virtual assistant web application with real-time NLP interaction. Integrated Google Gemini API for intelligent and contextual query handling.",
    technologies: ["HTML","CSS","React"],
    link: "https://harshvirtualassitant.netlify.app/",
  },
  {
    title: "Joblio",
    image: project2,
    description:
      "Developed a responsive job listing platform with search and filter by title, location, and company. Integrated Supabase for secure backend, Clerk for authentication, and real-time APIs for dynamic job listings.",
    technologies: ["Tailwind","React","Shadcn","Clerk","Supabase"],
    link: "https://joblio2-vtx1.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind","React","Framer  Motion"],
  },
  
];

export const CONTACT = {
  address: " Najafgarh, New Delhi ",
  phoneNo: "+91 7827698242 ",
  email: "harshsharmaaaa04@gmail.com",
};

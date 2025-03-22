import "../index.css";
import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: "/images/figma.svg",
        label: "Figma",
        desc: "Design tool",
    },
    {
        imgSrc: "/images/css.svg",
        label: "CSS",
        desc: "User Interface",
    },
    {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "User Interface",
    },
    {
        imgSrc: "/images/python.svg",
        label: "Python",
        desc: "Programming Language",
    },
    {
        imgSrc: "/images/django.svg",
        label: "Django",
        desc: "Backend Framework",
    },
    {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Programming Language",
    },
    {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Front-end Framework",
    },
    {
        imgSrc: "/images/docker.svg",
        label: "Docker",
        desc: "Containerization",
    },
];

const Skill = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Essential Tools I use</h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up text-left">
                    Discover the powerful tools and technologies I use to create
                    exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;

import { ProjectCard } from "./ProjectCard";

const works = [
    {
        imgSrc: "/images/project/project-1.png",
        title: "ClientBridge CRM",
        tags: ["API", "MVC", "Development"],
        projectLink: "https://github.com/sikatanju/clientbridge-crm",
    },
    {
        imgSrc: "/images/project/project-2.png",
        title: "Vocalearn (AI Enhanched)",
        tags: ["Web App", "API", "Development"],
        projectLink: "https://github.com/sikatanju/vocalearn-frontend/",
    },
    {
        imgSrc: "/images/project/game-fusion-2.png",
        title: "Game Fusion",
        tags: ["Development", "API"],
        projectLink: "https://game-fusion-sikatanju.vercel.app/",
    },
    {
        imgSrc: "/images/project/project-biztrack-landing-page.png",
        title: "Biztrack",
        tags: ["SaaS", "Web App", "Development"],
        projectLink: "https://github.com/sikatanju/biztrack-frontend",
    },
    {
        imgSrc: "/images/project/project-alien-invasion.png",
        title: "Alien Invasion",
        tags: ["Python", "Pygame"],
        projectLink: "https://github.com/sikatanju/alien-invasion/",
    },
];

const Work = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;

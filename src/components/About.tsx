const About = () => {
    const aboutItems = [
        {
            label: "Project done",
            number: 10,
        },
        {
            label: "Years of experience",
            number: 0.5,
        },
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        I&apos;m Sayad, a full-stack web developer passionate
                        about building impactful and user-centric applications
                        with Django, React, and TypeScript. My key projects
                        include Vocalearn (AI Enhanced) — a language learning
                        platform that uses Azure AI for real-time translation
                        and pronunciation feedback, BizTrack — a CRM solution
                        for managing products, customers, and sales workflows,
                        and Game Fusion — a responsive game discovery hub
                        featuring advanced filtering, search, and platform
                        sorting. I enjoy solving real-world problems through
                        clean, scalable code and continuously learning to stay
                        on the edge of modern web technologies.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">
                                        {number}
                                    </span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">
                                        +
                                    </span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}

                        <img
                            src="images/logo.svg"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
    const downloadCV = () => {
        // Create a link to the CV file
        const link = document.createElement("a");
        link.href = "/assets/Sayad_Resume.pdf"; // Path to your CV in public folder
        link.download = "Sayad_Resume.pdf"; // Name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/images/img_mine.jpg"
                                width={40}
                                height={40}
                                alt="Sika Tanju Potrait"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Modern WebApp for the Future
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            onClicked={() => downloadCV()}
                            label="Download CV"
                            icon="download"
                        />

                        <ButtonOutline
                            onClicked={() => {}}
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-gray-400 via-25% via-gray-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img
                            src="/images/img_mine.png"
                            width={656}
                            height={800}
                            alt="Sika Tanju"
                            className="w-full"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;

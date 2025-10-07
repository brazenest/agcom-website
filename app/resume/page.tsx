export default function ResumePage() {
    return (
        <div className="font-sans">
            <main className="flex flex-col mx-auto max-w-5xl p-10">
                <h1 className="text-6xl text-purple-600 text-semibold text-center mb-3">Welcome to my digital home.</h1>
                <hr className="my-6 site-theme-colors-hr" />
                <p className="text-lg text-justify text-gray-900 my-3"><strong>Hello! I&apos;m Alden Gillespy, a solid software engineer, a world-notable video producer, and a keen photographer</strong> with years of experience in back-end API development, full-stack web development stacks (e.g. React, Node, PHP), and a bevvy of related tools; and intense experience in videography, video editing, and photography, of a variety of subjects and scenes in magnificent settings.</p>
                {/* <p className="text-lg my-4">I am passionate about transforming ideas into impactful digital experiences and visual stories. Whether collaborating on innovative software projects or capturing unforgettable moments, I strive to deliver excellence in every endeavor.</p> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Software Engineer Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4 text-center">Software Engineer</h2>
                        <div className="mb-4 flex justify-center">
                            <img
                                src="/how-to-become-software-engineer.jpg"
                                alt="Software Engineer"
                                width={1280}
                                height={853}
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-gray-700 mb-4">As a dedicated software engineer, I specialize in crafting robust and scalable applications that drive business success. With expertise in a variety of programming languages and frameworks, I excel in both front-end and back-end development. My approach combines technical proficiency with a deep understanding of user needs, ensuring that every project I undertake delivers exceptional performance and user experience. Whether working on complex enterprise solutions or innovative startups, I am committed to delivering high-quality code and collaborating effectively with cross-functional teams to achieve project goals.</p>
                        <div className="text-center">
                            <a
                                href="/Alden_Gillespy_Software_Engineering_Resume.pdf"
                                download
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>

                    {/* Video Producer Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4 text-center">Video Producer</h2>
                        <div className="mb-4 flex justify-center">
                            <img
                                src="/68a3702a58846b61c98d0185_captura-de-pantalla-2025-08-18-a-las-80721-p-m_a48ba7bb9b164e67ada7eff80f9ed2c5_2000.jpeg"
                                alt="Video Producer"
                                width={1280}
                                height={853}
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-gray-700 mb-4">As a professional video producer, I bring stories to life through compelling visuals and engaging narratives. With a keen eye for detail and a passion for creativity, I manage all aspects of video production from concept development to final editing. My expertise spans various genres including corporate videos, commercials, documentaries, and event coverage. I leverage the latest technology and industry best practices to ensure high-quality output that resonates with audiences. Whether working independently or collaborating with a team, I am dedicated to delivering impactful videos that meet client objectives and exceed expectations.</p>
                        <div className="text-center">
                            <a
                                href="/Alden_Gillespy_Video_Production_Portfolio.pdf"
                                download
                                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                            >
                                View Portfolio
                            </a>
                        </div>
                    </div>

                    {/* Photographer Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4 text-center">Photographer</h2>
                        <div className="mb-4 flex justify-center">
                            <img
                                src="/camera-7726802_1280.jpg"
                                alt="Photographer"
                                width={1280}
                                height={853}
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-gray-700 mb-4">As a professional photographer, I specialize in capturing stunning images that tell a story and evoke emotion. With a keen eye for detail and a passion for creativity, I offer a wide range of photography services, including portrait, landscape, event, and commercial photography. My approach combines technical expertise with artistic vision to deliver high-quality images that exceed client expectations. Whether it's a personal portrait session or a large-scale commercial project, I am dedicated to providing exceptional service and results.</p>
                        <div className="text-center">
                            <a
                                href="/Alden_Gillespy_Photography_Portfolio.pdf"
                                download
                                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                            >
                                View Portfolio
                            </a>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
                        <div className="mb-4 flex justify-center">
                            <img
                                src="/WideNet_Software_Engineer_Skills.webp"
                                alt="Contact Me"
                                width={1200}
                                height={628}
                                className="rounded-lg"
                            />
                        </div>
                        <p className="text-gray-700 mb-4">I&apos;m always excited to connect with fellow professionals, potential collaborators, and anyone interested in my work. Whether you have a question about my experience, want to discuss potential opportunities, or just want to say hello, feel free to reach out. Please fill out the contact form below, and I will get back to you as soon as possible. Looking forward to hearing from you!</p>
                        <div className="text-center">
                            <a
                                href="/contact"
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Send me a message!
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// download resume button
const downloadResumeButton = (
    <a
        href="/Alden_Gillespy_Software_Engineering_Resume.pdf"
        download
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
        Download Resume
    </a>
)

// video producer card
const videoProducerCardMedia = (
    <img
        src="/68a3702a58846b61c98d0185_captura-de-pantalla-2025-08-18-a-las-80721-p-m_a48ba7bb9b164e67ada7eff80f9ed2c5_2000.jpeg"
        alt="Video Producer"
        width={2000}
        height={1224}
        className="rounded-lg"
    />
)
const videoProducerCardText = `As a seasoned video producer, I bring stories to life through compelling visuals and engaging narratives. With expertise in all aspects of video production, from concept development to post-production editing, I ensure that each project meets the highest standards of quality. I have experience working on a variety of projects, from corporate videos to personal portraits, and am always looking for new and creative ways to capture the essence of my subjects. I am passionate about creating impactful videos that resonate with audiences and drive results.`
const videoProducerCardButton = (
    <a
        href="/Alden_Gillespy_Video_Production_Portfolio.pdf"
        download
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
    >
        View Portfolio
    </a>
)

// photographer card
const photographerCardMedia = (
    <img
        src="/camera-7726802_1280.jpg"
        alt="Photographer"
        width={1280}
        height={853}
        className="rounded-lg"
    />
)
const photographerCardText = `As a professional photographer, I specialize in capturing stunning images that tell a story and evoke emotion. With a keen eye for detail and a passion for creativity, I offer a wide range of photography services, including portrait, landscape, event, and commercial photography. My approach combines technical expertise with artistic vision to deliver high-quality images that exceed client expectations. Whether it's a personal portrait session or a large-scale commercial project, I am dedicated to providing exceptional service and results.`
const photographerCardButton = (
    <a
        href="/Alden_Gillespy_Photography_Portfolio.pdf"
        download
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
    >
        View Portfolio
    </a>
)

// contact card
const contactCardMedia = (
    <img
        src="/WideNet_Software_Engineer_Skills.webp"
        alt="Contact Me"
        width={1200}
        height={628}
        className="rounded-lg"
    />
)
const contactCardText = `I&apos;m always excited to connect with fellow professionals, potential collaborators, and anyone interested in my work. Whether you have a question about my experience, want to discuss potential opportunities, or just want to say hello, feel free to reach out. Please fill out the contact form below, and I will get back to you as soon as possible. Looking forward to hearing from you!`
const contactCardButton = (
    <a
        href="/contact"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
        Send me a message!
    </a>
)

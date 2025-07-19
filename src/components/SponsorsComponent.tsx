// Ya no necesitamos 'motion', 'staggerContainer' ni 'fadeIn'
import TiltedCard from "./utils/TiltedCard";

export default function SponsorsComponent() {
    const sponsors = [
        // Nivel 1 - Patrocinador principal
        { name: "Ellucian", image: "ellucian_logo.png", url: "https://www.ellucian.com/", level: 1 },
        // Nivel 2 - Patrocinador secundario
        { name: "Syntax", image: "syntaxlogo.png", url: "https://www.syntax.com/", level: 2 },
        // Nivel 3 - Patrocinador terciario
        { name: "Tutum Pay", image: "tutumpay.jpeg", url: "https://www.tutumpay.mx/", level: 3 },
    ];

    // Agrupar patrocinadores por nivel
    const sponsorsByLevel = sponsors.reduce((acc, sponsor) => {
        if (!acc[sponsor.level]) {
            acc[sponsor.level] = [];
        }
        acc[sponsor.level].push(sponsor);
        return acc;
    }, {} as Record<number, typeof sponsors>);

    return (
        // 1. Convertimos 'motion.section' en una 'section' normal y quitamos las props de animación
        <section
            id="sponsors"
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-gray-50"
        >
            {/* 2. Convertimos los elementos de texto a h2 y p normales */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Sponsors
            </h2>
            <p className="text-lg max-w-2xl text-gray-600 mb-8">
                Gracias a nuestros patrocinadores que hacen posible este evento.
            </p>

            {/* Renderizar patrocinadores por nivel */}
            {Object.entries(sponsorsByLevel).map(([level, levelSponsors]) => (
                <div key={level} className="w-full max-w-6xl mb-12">
                    <div className={`grid grid-cols-1 sm:grid-cols-${levelSponsors.length} gap-8 justify-items-center`}>
                        {levelSponsors.map((sponsor, index) => (
                            <a
                                key={index}
                                href={sponsor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white shadow-xl rounded-lg py-12 px-12 flex items-center justify-center w-full max-w-md h-auto transform transition-transform duration-300 hover:scale-105"
                            >
                                <TiltedCard
                                    imageSrc={`/${sponsor.image}`}
                                    altText={`Logo de ${sponsor.name}`}
                                    captionText={sponsor.name}
                                    containerHeight="120px"
                                    containerWidth="100%"
                                    imageHeight="100%"
                                    imageWidth="100%"
                                    rotateAmplitude={8}
                                    scaleOnHover={1.05}
                                    showMobileWarning={false}
                                    showTooltip={true}
                                    displayOverlayContent={false}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
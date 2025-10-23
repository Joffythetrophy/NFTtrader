import { BrainCircuit, ShieldCheck, BarChart, Users } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <BrainCircuit size={28} className="text-primary" />,
            title: "AI-Powered Enhancements",
            description: "Leverage our intelligent algorithms to enhance image quality, generate variations, and assess rarity."
        },
        {
            icon: <ShieldCheck size={28} className="text-primary" />,
            title: "Secure Multi-Chain",
            description: "Trade with confidence across Solana, Ethereum, and Bitcoin with our robust and secure integration."
        },
        {
            icon: <BarChart size={28} className="text-primary" />,
            title: "Automated Trading",
            description: "Set up automated strategies to buy and sell assets based on market trends and your criteria."
        },
        {
            icon: <Users size={28} className="text-primary" />,
            title: "Grant Opportunities",
            description: "Access exclusive grant programs to fund your creative projects and kickstart your journey as an artist."
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-secondary/20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Choose JoffyTrophy?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We provide the tools and technology to give you an edge in the digital asset market.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-lg bg-background/50 border border-border/50 text-center">
                            <div className="inline-block p-4 bg-secondary rounded-full mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

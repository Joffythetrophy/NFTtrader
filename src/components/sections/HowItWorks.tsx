import { Wallet, Image, Gem } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Wallet size={32} className="text-primary" />,
            title: "Connect Your Wallet",
            description: "Easily connect your preferred wallet from Solana, Ethereum, or Bitcoin networks."
        },
        {
            icon: <Image size={32} className="text-primary" />,
            title: "Create or Find NFTs",
            description: "Use our AI tools to generate unique art or browse the marketplace for hidden gems."
        },
        {
            icon: <Gem size={32} className="text-primary" />,
            title: "Trade and Profit",
            description: "Buy, sell, and enhance your digital assets to maximize your portfolio's value."
        }
    ];

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How It Works</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">A simple, three-step process to get you started in the world of AI-powered NFT trading.</p>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/50 hidden md:block" style={{transform: 'translateY(-50%)'}}></div>
                     {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center">
                            <div className="absolute -top-8 md:top-1/2 md:-translate-y-1/2 h-16 w-16 bg-secondary rounded-full border border-border flex items-center justify-center z-10">
                                {step.icon}
                            </div>
                             <div className="mt-12 md:mt-0 md:pt-20">
                                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                                <p className="mt-2 text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

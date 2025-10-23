import { Zap, Twitter, Disc, GitBranch } from 'lucide-react';

const Footer = () => {
    const sections = {
        Marketplace: ["Explore", "Create", "Featured"],
        Company: ["About", "Careers", "Grants"],
        Resources: ["Help Center", "Docs", "Blog"],
    };

    const socialLinks = [
        { icon: <Twitter size={20} />, href: "#" },
        { icon: <Disc size={20} />, href: "#" },
        { icon: <GitBranch size={20} />, href: "#" },
    ];

    return (
        <footer className="bg-secondary/20 border-t border-border/40">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <a href="#" className="flex items-center gap-2">
                            <Zap className="h-7 w-7 text-primary" />
                            <span className="font-bold text-xl">JoffyTrophy</span>
                        </a>
                        <p className="text-muted-foreground text-sm">The future of digital asset trading, powered by AI.</p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {Object.entries(sections).map(([title, links]) => (
                            <div key={title}>
                                <h3 className="font-semibold text-foreground mb-4">{title}</h3>
                                <ul className="space-y-2">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} JoffyTrophy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { motion } from 'framer-motion';
import { useMockData, NFT } from '../../hooks/use-mock-data';
import { ArrowUpRight, Heart } from 'lucide-react';

const NFTCard = ({ nft, index }: { nft: NFT, index: number }) => {
    return (
        <motion.div 
            className="group rounded-lg overflow-hidden border border-border bg-secondary/30 hover:border-primary/50 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="relative">
                <img src={nft.image} alt={nft.collection} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm p-2 rounded-full">
                    <Heart size={16} className="text-muted-foreground group-hover:text-red-500 group-hover:fill-current" />
                </div>
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-primary">{nft.collection}</p>
                    <a href="#" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={18} className="text-muted-foreground" />
                    </a>
                </div>
                <div className="flex items-center mt-2 gap-2">
                    <img src={nft.creator.avatar} alt={nft.creator.name} className="w-6 h-6 rounded-full" />
                    <p className="text-xs text-muted-foreground">by {nft.creator.name}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50 flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">Price</p>
                    <p className="font-semibold text-foreground">{nft.price} ETH</p>
                </div>
            </div>
        </motion.div>
    );
};

const FeaturedCollections = () => {
    const { nfts } = useMockData();

    return (
        <section className="py-20 md:py-28 bg-secondary/20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Collections</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Explore curated collections from top artists and creators.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {nfts.map((nft, i) => (
                        <NFTCard key={nft.id} nft={nft} index={i} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="px-6 py-3 text-base font-semibold rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        View All Collections
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollections;

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-center py-20 md:py-32">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
        <div className="absolute h-[300px] w-[300px] bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
            The Future of Digital Asset Trading is Here
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            JoffyTrophy is your AI-powered gateway to the future of digital asset trading. Seamlessly buy, enhance, and sell AI-generated or curated images as NFTs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-base font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105">
              Explore Marketplace
            </button>
            <button className="px-8 py-3 text-base font-semibold rounded-md border border-border bg-secondary/50 text-foreground hover:bg-secondary transition-all transform hover:scale-105">
              Create Your NFT
            </button>
          </div>
          <div className="mt-16">
            <p className="text-sm font-medium text-muted-foreground">POWERED BY LEADING BLOCKCHAINS</p>
            <div className="flex justify-center items-center gap-8 md:gap-12 mt-4 grayscale opacity-60">
                <img src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=032" alt="Solana" className="h-8" />
                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=032" alt="Ethereum" className="h-8" />
                <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=032" alt="Bitcoin" className="h-8" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

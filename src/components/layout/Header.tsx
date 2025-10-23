import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWallet } from '../../contexts/WalletContext';
import WalletDisplay from '../common/WalletDisplay';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { walletAddress, disconnectWallet } = useWallet();

  const navItems = ["Explore", "Create", "Learn", "Grants"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">JoffyTrophy</span>
        </a>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {walletAddress ? (
            <WalletDisplay />
          ) : (
            <>
              <button className="px-4 py-2 text-sm font-semibold rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Connect Wallet
              </button>
              <button className="px-4 py-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Sign Up
              </button>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 pt-2 pb-4 space-y-2 border-t border-border/40"
        >
          {navItems.map((item) => (
            <a key={item} href="#" className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground">
              {item}
            </a>
          ))}
          <div className="pt-4 border-t border-border/40 flex flex-col space-y-3">
             {walletAddress ? (
                <>
                    <div className="px-3 py-2 rounded-md bg-secondary">
                        <p className="text-xs font-medium text-muted-foreground">Wallet Connected</p>
                        <p className="text-sm font-semibold text-foreground truncate">{walletAddress}</p>
                    </div>
                    <button onClick={() => { disconnectWallet(); setIsOpen(false); }} className="w-full px-4 py-2 text-sm font-semibold rounded-md border border-destructive/50 text-destructive/90 hover:bg-destructive/10 transition-colors">
                        Disconnect
                    </button>
                </>
             ) : (
                <>
                    <button className="w-full px-4 py-2 text-sm font-semibold rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        Connect Wallet
                    </button>
                    <button className="w-full px-4 py-2 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                        Sign Up
                    </button>
                </>
             )}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

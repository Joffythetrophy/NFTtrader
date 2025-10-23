import { useState, useEffect, useRef } from 'react';
import { useWallet } from '../../contexts/WalletContext';
import { LogOut, Wallet, ChevronDown, User, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WalletDisplay = () => {
    const { walletAddress, disconnectWallet } = useWallet();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!walletAddress) {
        return null;
    }

    const truncatedAddress = `${walletAddress.slice(0, 5)}...${walletAddress.slice(-4)}`;

    const menuItems = [
        { label: 'My Profile', icon: <User size={16} />, action: () => {} },
        { label: 'Settings', icon: <Settings size={16} />, action: () => {} },
        { label: 'Disconnect', icon: <LogOut size={16} />, action: disconnectWallet },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border border-border bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
            >
                <Wallet size={16} className="text-primary" />
                <span>{truncatedAddress}</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-48 bg-secondary rounded-md shadow-lg border border-border z-50 origin-top-right"
                    >
                        <div className="p-1">
                            {menuItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => {
                                        item.action();
                                        setIsOpen(false);
                                    }}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground rounded-sm hover:bg-accent hover:text-accent-foreground"
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WalletDisplay;

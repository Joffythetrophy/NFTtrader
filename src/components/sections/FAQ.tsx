import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is JoffyTrophy?",
        answer: "JoffyTrophy is an AI-powered marketplace for digital assets, allowing users to create, buy, sell, and enhance NFTs across multiple blockchains like Solana, Ethereum, and Bitcoin."
    },
    {
        question: "Which blockchains are supported?",
        answer: "We currently support Solana, Ethereum, and Bitcoin, with plans to integrate more networks in the future to provide a truly cross-chain experience."
    },
    {
        question: "How does the AI enhancement work?",
        answer: "Our proprietary AI models can analyze and upscale image resolution, generate artistic variations of an existing NFT, and even provide a rarity score based on its traits."
    },
    {
        question: "Are there any fees for using the platform?",
        answer: "We charge a small platform fee on successful transactions to maintain and improve our services. There are no fees for listing an item or using our AI creation tools."
    }
];

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-5 text-left"
            >
                <span className="font-semibold text-foreground">{question}</span>
                {isOpen ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-muted-foreground" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-muted-foreground">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="py-20 md:py-28 bg-secondary/20">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
                </div>
                <div>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

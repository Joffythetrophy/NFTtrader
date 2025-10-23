const GetStarted = () => {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-lg bg-gradient-to-r from-primary/80 to-primary p-8 md:p-16 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Dive In?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">Join a growing community of innovators, creators, and collectors. The future of digital assets is waiting for you.</p>
                        <div className="mt-8">
                            <button className="px-8 py-3 text-base font-semibold rounded-md bg-background text-primary hover:bg-background/90 transition-all transform hover:scale-105">
                                Join JoffyTrophy Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;

import { useMockData, Testimonial } from '../../hooks/use-mock-data';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <div className="p-6 rounded-lg bg-secondary/50 border border-border">
            <p className="text-muted-foreground italic">"{testimonial.quote.substring(0, 150)}..."</p>
            <div className="flex items-center mt-4">
                <img src={testimonial.author.avatar} alt={testimonial.author.name} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                    <p className="font-semibold text-foreground">{testimonial.author.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.author.title}</p>
                </div>
            </div>
        </div>
    );
};


const Testimonials = () => {
    const { testimonials } = useMockData();

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Users Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Hear from creators and collectors who are shaping the future with us.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Kareem',
    location: 'Canada',
    text: "I had an outstanding experience working with Ibrahim and the SparkDev agency. They designed a website that perfectly captured my vision with great creativity and attention to detail. They were communicative throughout the entire process, making revisions promptly and ensuring the final design exceeded my expectations. The turnaround time was quick, and their professionalism made the entire process smooth and stress-free. I highly recommend them to anyone looking for high-quality website design!",
  },
  {
    name: 'Vincent',
    location: 'USA',
    text: "Fantastic Job. Will definitely hire the SparkDev team again. Great support and helped after the job was finished as well.",
  },
  {
    name: 'Wout',
    location: 'France',
    text: "The SparkDev team is very experienced and professional. This team is really pleasant to work with and always makes sure everything is as you desire!",
  },
  {
    name: 'Burhan',
    location: 'USA',
    text: "The SparkDev team is my favourite to work with on upwork, the team has alot of knowledge and does not complain to all my little requests. They buily an AI tool from scratch exactly how I wanted it, many others wanted to charge ridiculous high amounts way over our budget but they did it within our budget. Just speaks about how knowledgable they are with AI. I still have multiple other projects with them and will continue to work with them.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-spark-purple/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-radial from-spark-orange/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Client Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from real projects. Here's what it's like working with us.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-card rounded-xl p-6 sm:p-8 border border-border/50 hover:border-spark-orange/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-spark-orange/20 group-hover:text-spark-orange/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-spark-orange text-spark-orange" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-foreground/90 leading-relaxed mb-6 text-sm sm:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-spark flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              {/* Glow accent on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-radial from-spark-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

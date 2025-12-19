import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  tag: 'PRIMARY' | 'SECONDARY';
  features: string[];
  bestFor: string;
}

const ServiceCard = ({ icon, title, tag, features, bestFor }: ServiceCardProps) => {
  return (
    <div className="service-card relative bg-card rounded-xl p-6 sm:p-8 h-full flex flex-col">
      {/* Icon and tag row */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-spark-orange">
          {icon}
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            tag === 'PRIMARY'
              ? 'bg-spark-orange/20 text-spark-orange'
              : 'bg-spark-purple/20 text-spark-purple'
          }`}
        >
          {tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-4">
        {title}
      </h3>

      {/* Features */}
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
            <div className="w-1.5 h-1.5 rounded-full bg-spark-gradient mt-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Best for */}
      <div className="pt-4 border-t border-border">
        <p className="text-sm">
          <span className="font-semibold text-foreground">Best for:</span>{' '}
          <span className="text-muted-foreground">{bestFor}</span>
        </p>
      </div>

      {/* Spark accent */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-radial from-spark-orange/10 to-transparent rounded-full blur-xl pointer-events-none" />
    </div>
  );
};

export default ServiceCard;

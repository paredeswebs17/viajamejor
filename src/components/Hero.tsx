import { ArrowRight, Star, Users, MapPin } from 'lucide-react';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    trackButtonClick('hero_cta', 'hero_section');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gray-50 pt-20 pb-6 max-h-[40vh] sm:max-h-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Compact title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Viaja <span className="text-sky-600">más</span>, gasta <span className="text-emerald-600">menos</span>
          </h1>

          {/* Simple subtitle */}
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Consejos y recursos para tu próxima aventura
          </p>

          {/* Compact CTA */}
          <button
            onClick={() => scrollToSection('consejos')}
            className="bg-sky-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center space-x-2 mx-auto"
          >
            <span>Ver consejos</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
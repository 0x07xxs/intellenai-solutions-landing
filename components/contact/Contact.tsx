import { Calendar } from 'lucide-react';
import GradientText from '../hero/GradientText';
import ContactButton from './ContactButton';
import { FadeInElement } from '../shared/FadeInElement';

const Contact = () => {
  return (
    <section className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeInElement delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's <GradientText>Talk</GradientText>
            </h2>
          </FadeInElement>
          <FadeInElement delay={400}>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Ready to transform your business with AI? Schedule a call with our experts and discover how we can help you innovate.
            </p>
          </FadeInElement>
          <FadeInElement delay={600}>
            <ContactButton />
          </FadeInElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
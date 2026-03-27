import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import AILayer from '../components/AILayer';
import Impact from '../components/Impact';
import SocialProof from '../components/SocialProof';
import CtaBanner from '../components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <AILayer />
      <Impact />
      <SocialProof />
      <CtaBanner />
    </>
  );
}



import PoliciesHero from './PoliciesHero/PoliciesHero';
import PoliciesContent from './PoliciesContent/PoliciesContent';
import PoliciesCTA from './PoliciesCTA/PoliciesCTA';

import './Policies.css';

export default function Policies() {
  return (
    <main className="policies-page">
      <PoliciesHero />
      <PoliciesContent />
      <PoliciesCTA />
    </main>
  );
}

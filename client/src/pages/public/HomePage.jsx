
import Hero from "../../components/common/Hero";
import Welcome from "../../components/common/Welcome";
import Plans from "../../components/common/Plans";
import Protection from "../../components/common/Protection";
import Services from "../../components/common/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Plans />
      <Protection />
      <Services />
    </main>
  );
}

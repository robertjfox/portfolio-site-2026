import { LandingHero } from "@/components/portfolio/landing-hero";
import { Slide, SlidesContainer } from "@/components/portfolio/slides";
import { WorkList } from "@/components/portfolio/work-list";

export default function Home() {
  return (
    <SlidesContainer id="slides">
      <Slide innerClassName="items-center justify-center text-center">
        <LandingHero />
      </Slide>

      <Slide id="work" innerClassName="items-center justify-center">
        <WorkList />
      </Slide>
    </SlidesContainer>
  );
}

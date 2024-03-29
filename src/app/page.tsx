import ThingCurve from "@/components/3d/curves/thing";
import RenderedSection from "@/components/3d/renderedsection";

export default function Home() {
  return (
    <>
      <RenderedSection
        id="about"
        curve={ThingCurve}
        className="relative w-full h-full px-4 md:px-8 max-w-screen-2xl"
        curveClassname="w-[38rem] h-[52rem] -right-32 md:right-8 overflow-hidden"
      >
        <h1 className="text-2xl">Hello, I am a </h1>
      </RenderedSection>
    </>
  );
}

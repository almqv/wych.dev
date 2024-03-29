import SphereCurve from "@/components/3d/curves/sphere";
import RenderedSection from "@/components/3d/renderedsection";

export default function Home() {
  return (
    <>
      <RenderedSection
        id="about"
        curve={SphereCurve}
        className="relative w-full h-full px-4 md:px-8 max-w-screen-2xl"
        curveClassname="w-full h-[calc(100vh-3.5rem)]"
      >
        <h1 className="text-2xl">Hello, I am a </h1>
      </RenderedSection>
    </>
  );
}

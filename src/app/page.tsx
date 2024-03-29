import LorentzCurve from "@/components/3d/curves/lorentz";
import RenderedSection from "@/components/3d/renderedsection";

export default function Home() {
  return (
    <>
      <RenderedSection
        id="about"
        curve={LorentzCurve}
        className="relative h-full"
        curveClassname="w-full h-full"
      >
        <h1 className="text-2xl">Hello, I am a </h1>
      </RenderedSection>
    </>
  );
}

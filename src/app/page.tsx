import ThingCurve from "@/components/3d/curves/thing";
import RenderedSection from "@/components/3d/renderedsection";
import AgeHCyclesDisplay from "@/components/age";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <RenderedSection
        id="about"
        curve={ThingCurve}
        className="relative w-full h-full px-4 md:px-8 max-w-screen-2xl items-center flex"
        curveClassname="w-[38rem] h-[52rem] -right-32 md:right-32 overflow-clip"
      >
        <Card className="max-w-screen-md">
          <CardHeader>
            <CardTitle>Elias Almqvist</CardTitle>
            <CardDescription className="pl-0 space-y-4">
              <p>
                I am a {<AgeHCyclesDisplay precision={6} />}{" "}
                <span className="font-bold">hydrogen-line-cycles</span> old{" "}
                <span className="font-bold">human-</span> founder, engineer, and
                hacker with a passion for CS, physics, and mathematics.
              </p>
              <p>
                Currently working on ingenuity. Most of my projects are
                open-source, and if you are interested, you can find all of my
                projects on my git-server or GitHub.
              </p>
            </CardDescription>
            {/* <CardContent></CardContent> */}
          </CardHeader>
        </Card>
      </RenderedSection>
    </>
  );
}

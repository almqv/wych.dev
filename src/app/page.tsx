import ThingCurve from "@/components/3d/curves/thing";
import RenderedSection from "@/components/3d/renderedsection";
import AgeHCyclesDisplay from "@/components/age";
import fonts from "@/components/fonts";
import ILink from "@/components/ilink";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
                I am a{" "}
                {
                  <AgeHCyclesDisplay
                    className={cn("font-bold", fonts.mono.className)}
                    precision={6}
                  />
                }{" "}
                <span className="font-bold">hydrogen-line-cycles</span> old{" "}
                <span className="font-bold">human-</span> founder, engineer, and
                hacker with a passion for CS, physics, and mathematics.
              </p>
              <p>
                Currently working on{" "}
                <ILink href="https://rembr.co" target="_blank">
                  ingenuity
                </ILink>
                . Some of my projects are open-source (FOSS), and if you are
                interested, you can find them on my{" "}
                <ILink href="https://git.wych.dev/elal" target="_blank">
                  self-hosted git-server
                </ILink>{" "}
                or{" "}
                <ILink href="https://github.com/almqv" target="_blank">
                  GitHub
                </ILink>
                .
              </p>
            </CardDescription>
            {/* <CardContent></CardContent> */}
          </CardHeader>
        </Card>
      </RenderedSection>
    </>
  );
}

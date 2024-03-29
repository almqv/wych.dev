import ThingCurve from "@/components/3d/curves/thing";
import RenderedSection from "@/components/3d/renderedsection";
import AgeHCyclesDisplay from "@/components/age";
import ExternalNav from "@/components/externalnav";
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
    <div className="w-full h-full overflow-y-clip">
      <RenderedSection
        id="about"
        curve={ThingCurve}
        className="relative w-full h-full px-4 md:px-8 max-w-screen-2xl items-center flex"
        curveClassname="w-[38rem] h-[52rem] xl:w-[58rem] xl:h-[82rem] absolute -top-16 xl:-top-48 -right-32 lg:-right-12 2xl:right-32 overflow-clip"
      >
        <Card className="max-w-screen-md">
          <CardHeader>
            <CardTitle>Elias Almqvist</CardTitle>
            <CardDescription className="pl-0 space-y-4">
              <span className="inline-block">
                I am a{" "}
                {
                  <AgeHCyclesDisplay
                    className={cn("font-bold", fonts.mono.className)}
                    precision={12}
                  />
                }{" "}
                <span className="font-bold">hydrogen-line-cycles</span>{" "}
                <span className="text-xs text-foreground/40">(± 2 mHz)</span>{" "}
                old <span className="font-bold">human-</span> founder, engineer,
                and hacker with a passion for CS, physics, and mathematics.
              </span>
              <span className="inline-block">
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
              </span>
            </CardDescription>
            <CardContent className="flex flex-col items-center justify-center pb-0 pt-4">
              <ExternalNav className="w-full max-w-48 flex flex-row justify-between" />
            </CardContent>
          </CardHeader>
        </Card>
      </RenderedSection>
    </div>
  );
}

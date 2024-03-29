import fonts from "@/components/fonts";
import { cn } from "@/lib/utils";
import ILink from "@/components/ilink";
import Image from "next/image";

const quote = `Hello, friend. Hello, friend? 
That's lame. Maybe I should give you a name.
But that's a slippery slope. You're only in my 404 page. 
We have to remember that.`;

const NotFound = () => (
  <div
    className={cn(
      "w-full h-full flex flex-col space-y-8 justify-center items-center",
      fonts.mono.className,
    )}
  >
    <Image src="/404.jpg" alt="Error 404\nNot Found" width={400} height={400} />
    <p className="max-w-md text-foreground/60 space-y-2">
      {quote.split("\n").map((line, i) => (
        <span key={i} className="block">
          {">"} {line}
        </span>
      ))}
    </p>
    <div className="space-x-8">
      <ILink href="#">Stay</ILink>
      <ILink href="/">Leave</ILink>
    </div>
  </div>
);

export default NotFound;

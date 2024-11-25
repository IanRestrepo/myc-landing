"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

export function DotPatternDemo() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl z-auto">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white text-wrap max-w-720">
        ¿Que dicen nuestros Jugadores?
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}

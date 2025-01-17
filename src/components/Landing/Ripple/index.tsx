import Ripple from "@/components/ui/ripple";
import { RainbowButton } from "@/components/ui/rainbow-button.tsx";

export function RippleDemo() {
  return (
    <div className="relative flex content-center m-auto h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-white/20 bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-lg font-medium tracking-tighter text-white">

        <RainbowButton className="text-lg font-medium tracking-tighter text-white" onClick={()=> window.location.href="https://www.roblox.com/games/7345818711/LAST-DAYS-Trucking-Empire"}>Jugar Ahora</RainbowButton>
      </p>
      <Ripple />
    </div>
  );
}

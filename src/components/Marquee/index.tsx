import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Manuel C0",
    username: "@ManuelC0",
    body: "Ey que chimba de proyecto, me encanta. Felicitaciones.",
    img: "https://www.asiamediajournal.com/wp-content/uploads/2022/11/ROBLOX-PFP-1200x1351.png",
  },
  {
    name: "Ian Restrepo",
    username: "@IanRestrepo",
    body: "Disfruto mucho de la experiencia, es increíble.",
    img: "https://pbs.twimg.com/media/EvajUZlXIAEupIG.jpg",
  },
  {
    name: "BlackSebas",
    username: "@BlackSebas",
    body: "Los camiones son Realmente increíbles, la experiencia igual.",
    img: "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/5X/7/7/9/2/779233df75ec701b08b040f87ee9e64ff937cb5a_2_375x375.jpeg",
  },
  {
    name: "Parriña",
    username: "@ParraMotive",
    body: "Es como manejar en la vida real, pero en un juego.",
    img: "https://i.pinimg.com/236x/b7/a2/03/b7a2031bce856f6612ff5e134aab6f63.jpg",
  },
  {
    name: "Zeta",
    username: "@Zeta",
    body: "Es super divertido, me encanta. Gracias por la experiencia.",
    img: "https://i.ytimg.com/vi/rS7M2DVDEDA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAeNg8tulXJp9Dc85KiQMBjh1rH7Q",
  },
  {
    name: "UN58",
    username: "@UN58",
    body: "Los autos japoneses son lo mejor, el mapa? Increíble.",
    img: "https://i.ytimg.com/vi/ozygUSmXxLE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvi9iQrIpSetmG8QlG6z2RDPu1ng",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-mediumtext-white/40 text-white/50">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/50">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-max-full flex-col items-center justify-center overflow-hidden my-10 md:shadow-xl mb-5 -rotate-1 ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}

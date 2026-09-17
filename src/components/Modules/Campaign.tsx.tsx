import Image from "next/image";
import { ArrowDownRight, Sparkles, Star } from "lucide-react";
import { LifestylePhotos } from "@/components/Modules/LifestylePhotos";

export function Campaign() {
  return (
    <section
      id="services"
      className="wrapper-2xl padding wide-container section-space"
      aria-label="Discover your new favorite juice"
    >
      <div className="panel relative pt-7.5 px-6 pb-6 flex flex-col gap-7 sm:flex-row sm:items-center md:p-8 md:gap-5 lg:p-8.5 lg:min-h-75">
        <div className="sm:flex-1">
          <p className="font-display text-[14px] lg:text-[16px] text-muted mb-1">
            Come for the freshness. Remember the flavor.
          </p>
          <h2 className="uppercase text-[clamp(33px,4.3vw,60px)] sm:text-[4vw] lg:text-[clamp(42px,3.8vw,62px)]">
            The Crowd Favorites
          </h2>
        </div>
        <LifestylePhotos
          className="relative z-1 sm:w-[43%] md:gap-4"
          photoClassName="rounded-[26px]"
        />
        <div
          className="w-37.5 h-37.5 border-10 border-[#e5ed95] bg-[repeating-conic-gradient(#eff4c0_0deg_28deg,#fafbe6_28deg_31deg)] rounded-full absolute -left-15 -bottom-13.75 opacity-65 [&>svg]:hidden"
          aria-hidden="true"
        >
          <Sparkles />
        </div>
      </div>
      <div className="panel relative min-h-140 sm:min-h-92.5 md:min-h-105 lg:min-h-117.5 mt-6 md:mt-6.5 md:mx-7.5 lg:mx-10 flex items-end py-8 px-6 md:p-8.5 lg:p-10">
        <Image
          className="object-contain object-top sm:object-left sm:max-w-[70%]"
          src="/zestora-mango-grape-campaign.png"
          alt="Mango and grape Zestora cans bursting with color"
          fill
          sizes="(max-width: 767px) 100vw, 70vw"
        />
        <div className="relative z-1 text-right ml-auto max-w-86.25 sm:w-[42%] lg:w-[41%] lg:max-w-110">
          <h3 className="text-[26px] md:text-[27px] lg:text-[31px] leading-[1.05]">
            Find your perfect flavor match in our vibrant collection of fresh
            juices. Made for every taste, bottled just for you.
          </h3>
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-3 py-2 my-5 border border-border rounded-pill font-display font-semibold text-[12px]">
            <span>Very Good Fruit</span>
            <span
              className="inline-flex gap-0.75 text-[#ed9624]"
              aria-label="5 stars"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={13}
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}
            </span>
            <span>(4.9/5)</span>
          </div>
          <a className={`pill-base bg-lime-400 flex ml-auto`} href="#products">
            100% Natural <ArrowDownRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

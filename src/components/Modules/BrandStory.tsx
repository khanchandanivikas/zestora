import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { SectionBadge } from "../Utils/SectionBadge";

export function BrandStory() {
  return (
    <section
      id="freshness"
      className="wide-container wrapper-2xl section-space grid gap-7 my-16 md:grid-cols-[0.72fr_1.28fr] md:gap-6 md:items-stretch"
      aria-labelledby="story-title"
    >
      <div className="pt-2.5 px-3 pb-0 md:pt-6 md:px-0 md:pb-6 md:pl-3 md:flex md:flex-col md:items-start lg:pt-8 lg:pb-8 lg:pl-10">
        <SectionBadge />
        <h2
          id="story-title"
          className="uppercase text-[clamp(36px,8vw,44px)] md:text-[clamp(40px,4.2vw,56px)] lg:text-[clamp(48px,4.2vw,60px)] mt-5 leading-[0.98]"
        >
          Pure
          <br />
          Freshness.
          <br />
          Zero
          <br />
          Compromises.
        </h2>
        <p className="font-display text-[15px] text-muted mt-4.5 md:max-w-60">
          Dive into our refreshing lineup of all-natural drinks.
        </p>
        <div className="flex flex-wrap gap-4 mt-7 items-center md:mt-auto md:pt-6 md:flex-col md:flex-nowrap md:items-start md:gap-4.5">
          <span className={`pill-base bg-lime-400`}>100% Natural</span>
          <a className={`pill-base border border-border`} href="#products">
            All Flavors <ArrowDownRight size={14} aria-hidden="true" />
          </a>
          <h3 className="basis-full md:basis-auto md:max-w-75 md:mt-2 lg:max-w-none text-2xl lg:text-[28px] leading-[1.1] uppercase">
            Exceptional quality. Honest pricing.
          </h3>
        </div>
      </div>
      <div className="relative h-[clamp(280px,90vw,400px)] md:h-[clamp(520px,48vw,680px)] md:-mr-7 overflow-hidden">
        <Image
          src="/zestora-collage.png"
          alt="Zestora peach, strawberry, mango and grape juices, fresh fruit and sun-filled moments"
          width={1024}
          height={1536}
          sizes="(max-width: 767px) 100vw, 60vw"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_18px_#fff,inset_0_50px_45px_-35px_#fff,inset_0_-50px_45px_-35px_#fff]" />
      </div>
    </section>
  );
}

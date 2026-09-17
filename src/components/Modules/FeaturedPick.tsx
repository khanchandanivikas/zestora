import { Leaf } from "lucide-react";
import Image from "next/image";
import { SectionBadge } from "../Utils/SectionBadge";
import { ButtonLink } from "../Utils/ButtonLink";

export const FeaturedPick = () => {
  return (
    <section
      id="order"
      className="panel wrapper-2xl wide-container wrapper-2xl section-space grid md:grid-cols-2 md:min-h-147.5 lg:min-h-172.5"
      aria-labelledby="pick-title"
    >
      <div className="relative min-h-107.5 md:min-h-full">
        <Image
          src="/zestora-banner.jpg"
          alt="A chilled botanical Zestora juice nestled among mountain rocks and yellow wildflowers"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover object-[center_63%]"
        />
        <span className="absolute top-7 left-7 w-23.5 h-23.5 border border-dashed border-white rounded-full text-white flex flex-col items-center justify-center gap-1.25 [transform:rotate(-14deg)]">
          <Leaf size={25} aria-hidden="true" />
          <span className="text-center font-display uppercase text-[10px] leading-[1.15] tracking-[1px]">
            Rooted in nature
            <br />
            Made for you
          </span>
        </span>
      </div>
      <div className="pt-10 px-6 pb-7 md:pt-11 md:px-7 md:pb-8.5 lg:pt-13 lg:px-12 lg:pb-12 flex flex-col justify-between">
        <div className="text-center">
          <SectionBadge>Natural juices</SectionBadge>
          <h2
            id="pick-title"
            className="uppercase mt-4.5 text-[clamp(40px,4.4vw,58px)] md:text-[4.8vw] lg:text-[58px]"
          >
            Our Top Picks
          </h2>
          <p className="mt-3 text-muted font-display text-[16px]">
            Daily nourishment crafted to vitalize and support
            <br />
            your body’s natural wellness.
          </p>
        </div>
        <div className="relative flex justify-between items-start min-h-38.75 lg:min-h-52.5 mt-9.5 mb-7 lg:my-11.25 font-display font-semibold">
          <span className="relative text-3xl md:text-[34px] lg:text-[42px] leading-[0.95] pl-5 lg:pl-10.5 before:content-['('] before:absolute before:text-[70px] before:font-semibold before:-left-1.25 before:-top-1.75 lg:before:left-0">
            Botanical
            <br />
            Freshpop
          </span>
          <svg
            className="absolute w-26.25 h-25 top-8.75 left-[40%] lg:w-36.25 lg:h-35 lg:top-11.75 lg:left-[34%] text-[#bddc6c]"
            viewBox="0 0 130 110"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 5C85 0 28 92 116 91M101 81L116 91L101 101"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="relative self-end text-[46px] md:text-[50px] lg:text-[58px] pr-5.5 lg:pr-10.5 leading-none after:content-[')'] after:absolute after:text-[70px] after:font-semibold after:-right-1 after:-bottom-1 lg:after:right-0">
            $59.00
          </span>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 border border-border bg-white p-4 md:py-4 md:px-3 lg:p-4.75 rounded-2xl">
          <div>
            <h3 className="text-2xl md:text-[21px] lg:text-[28px] leading-none">
              25% Discount Today
            </h3>
            <p className="font-display text-muted text-[13px] mt-1.25">
              Fresh flavor. Naturally refreshing.
            </p>
          </div>
          <ButtonLink
            href="#products"
            className="px-4 md:px-3 md:text-[13px] lg:px-4.25 lg:text-[15px]"
          >
            Order Now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

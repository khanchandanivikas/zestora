"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { PRODUCTS } from "@/lib/constants";
import { LifestylePhotos } from "@/components/Modules/LifestylePhotos";
import "swiper/css";
import { ButtonLink } from "../../Utils/ButtonLink";
import { FreshStrip } from "../../FreshStrip";
import styles from "./index.module.css";

export const Hero = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [active, setActive] = useState(1);
  return (
    <section
      className="relative isolate overflow-clip h-[min(100vh,700px)] bg-[#f7f7f5]"
      aria-labelledby="hero-title"
    >
      <Image
        className="object-cover object-bottom -z-3"
        src="/zestora-hero.jpg"
        alt="Zestora hero"
        fill
        sizes="100vw"
        preload
      />
      <div className="absolute inset-0 -z-2 bg-[linear-gradient(#f7f7f5_7%,#f7f7f5_30%,#f7f7f5e8_49%,#f7f7f590_70%,#f7f7f51a_100%)]" />
      <div className="wrapper-2xl relative h-full">
        <div className="relative z-3 padding-x pt-5.5 md:pt-7.5 lg:pt-8.5 flex justify-between gap-5">
          <div
            className="grid grid-cols-2 md:grid-cols-[repeat(2,minmax(80px,1fr))] gap-1.5 self-start"
            role="group"
            aria-label="Choose a juice flavor"
          >
            {PRODUCTS.map((product, index) => (
              <button
                key={product.id}
                type="button"
                className="min-h-11 lg:min-h-9 px-2.5 py-2 whitespace-nowrap rounded-pill border border-border font-display text-[13px] md:text-[14px] font-semibold bg-[#f7f7f5bb] transition-colors duration-200 aria-pressed:text-white aria-pressed:bg-ink aria-pressed:border-ink"
                aria-pressed={active === index}
                onClick={() =>
                  swiperRef.current?.slideTo(
                    index,
                    window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                      ? 0
                      : 650,
                  )
                }
              >
                {product.name}
              </button>
            ))}
          </div>
          <div className="w-35 sm:w-50 md:w-1/4">
            <LifestylePhotos photoClassName="rounded-xl lg:rounded-[18px]" />
            <p className="mt-2.5 md:mt-4.5 text-[#62675e] text-right font-display text-[11px] md:text-sm leading-[1.2]">
              Freshly blended from the choicest fruits.
              <br />
              No preservatives. Just pure nature.
            </p>
          </div>
        </div>
        <h1
          id="hero-title"
          className="absolute uppercase -z-1 top-44.5 sm:top-45 md:top-[34%] left-[4%] sm:left-[4%] md:left-[5.4%] w-[92%] md:w-[89.2%] text-center text-[clamp(48px,16vw,112px)] sm:text-[14vw] md:text-[clamp(100px,14.3vw,230px)] lg:text-[clamp(150px,14vw,245px)] leading-[0.9] tracking-[-0.04em] font-extrabold whitespace-nowrap"
        >
          Fresh Energy
        </h1>
        <div
          className={`${styles.heroProductStage} absolute z-1 top-45 sm:top-31.25 md:top-[10%] left-[10%] md:left-[24%] w-[80%] md:w-[52%] h-95 sm:h-110 md:h-[75%]`}
          tabIndex={0}
          role="group"
          aria-label="Juice carousel. Use left and right arrow keys to change flavor."
          onFocusCapture={() => swiperRef.current?.keyboard.enable()}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              swiperRef.current?.keyboard.disable();
          }}
        >
          <Swiper
            modules={[A11y, Keyboard]}
            keyboard={{
              enabled: false,
              onlyInViewport: true,
              pageUpDown: false,
            }}
            initialSlide={1}
            speed={650}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActive(swiper.activeIndex)}
            a11y={{
              containerMessage: "Choose your fresh juice",
              slideLabelMessage: "Flavor {{index}} of {{slidesLength}}",
            }}
          >
            {PRODUCTS.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div className={`${styles.heroCan} relative w-full h-full transform-[rotate(14deg)_scale(0.86)] lg:transform-[rotate(17deg)_scale(0.86)] [transition:transform_700ms_cubic-bezier(0.2,0.7,0.2,1)]`}>
                  <Image
                    src={product.image}
                    alt={`${product.name} Zestora juice can`}
                    fill
                    sizes="(max-width: 600px) 330px, 540px"
                    preload={index === 1}
                    className="object-contain filter-[drop-shadow(-12px_22px_15px_#283b2929)]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute inset-x-0 z-3 bottom-21 md:bottom-auto md:top-[61%] padding-x flex items-center justify-between gap-3">
          <ButtonLink href="#products">Order Now</ButtonLink>
          <span
            className="max-w-25 sm:max-w-none md:hidden text-right font-display text-[13px]"
            aria-live="polite"
          >
            {PRODUCTS[active].name} · 100% natural
          </span>
        </div>
        <div className="absolute inset-x-0 z-3 bottom-6 md:bottom-[6%] padding-x">
          <FreshStrip />
        </div>
      </div>
    </section>
  );
};

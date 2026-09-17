"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ShoppingBag, Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import { PRODUCTS } from "@/lib/constants";
import "swiper/css";
import { formatPrice } from "@/lib/utils/formatPrice";
import { SectionBadge } from "../../Utils/SectionBadge";
import { ButtonLink } from "../../Utils/ButtonLink";
import styles from "./index.module.css";

export function ProductSlider() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [position, setPosition] = useState({ start: true, end: false });
  const [selected, setSelected] = useState<string[]>([]);
  const syncPosition = (swiper: SwiperInstance) =>
    setPosition({ start: swiper.isBeginning, end: swiper.isEnd });
  return (
    <section
      className="section-space section-space"
      id="products"
      aria-labelledby="products-title"
    >
      <div className="wrapper-2xl text-center padding-x">
        <SectionBadge />
        <h2 id="products-title" className="mt-4.5 uppercase">
          Featured Products
        </h2>
        <p className="mt-3 text-muted font-display text-[16px]">
          Our signature cold-pressed blends.
        </p>
      </div>
      <div
        className={`${styles.productsTrack} mt-10 md:mt-12 pl-gutter`}
        tabIndex={0}
        role="group"
        aria-label="Product carousel. Use left and right arrow keys to browse."
      >
        <Swiper
          modules={[A11y, Keyboard]}
          slidesPerView={1.22}
          spaceBetween={16}
          breakpoints={{
            480: { slidesPerView: 1.8, spaceBetween: 20 },
            768: { slidesPerView: 2.6, spaceBetween: 24 },
            1024: { slidesPerView: 3.55, spaceBetween: 28 },
          }}
          keyboard={{ enabled: false, onlyInViewport: true, pageUpDown: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={syncPosition}
          onResize={syncPosition}
          onToEdge={syncPosition}
          onFromEdge={syncPosition}
          a11y={{
            containerMessage: "Featured juices",
            slideLabelMessage: "Product {{index}} of {{slidesLength}}",
          }}
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id}>
              <article
                className="group pt-3.25 px-4.5 pb-5.5 lg:pt-3.75 lg:px-5 lg:pb-6 rounded-[23px]"
                style={{ backgroundColor: product.color }}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="uppercase text-[26px] lg:text-[28px] leading-none">
                    {product.name}
                  </h3>
                  <button
                    className="-mr-2 inline-flex icon-btn"
                    type="button"
                    aria-label={`${selected.includes(product.id) ? "Remove" : "Save"} ${product.name} ${selected.includes(product.id) ? "from" : "to"} your selection`}
                    aria-pressed={selected.includes(product.id)}
                    onClick={() =>
                      setSelected((current) =>
                        current.includes(product.id)
                          ? current.filter((id) => id !== product.id)
                          : [...current, product.id],
                      )
                    }
                  >
                    {selected.includes(product.id) ? (
                      <Check size={17} />
                    ) : (
                      <ShoppingBag size={17} />
                    )}
                  </button>
                </div>
                <div className="relative h-68.75 md:h-77.5 lg:h-83.75 mt-3 mb-5.5 lg:mt-6.25 lg:mb-8.75">
                  <Image
                    src={product.image}
                    alt={`${product.name} juice can`}
                    fill
                    sizes="(max-width: 600px) 65vw, 320px"
                    className="object-contain filter-[drop-shadow(0_14px_8px_#3333)] transition group-hover:-translate-y-1.75 group-hover:-rotate-3 motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:rotate-0"
                  />
                </div>
                <div className="flex justify-between items-end gap-3">
                  <p className="whitespace-pre-line font-display font-semibold text-[13px] lg:text-sm leading-[1.2]">
                    {product.ingredients}
                  </p>
                  <span className="font-display text-[26px] lg:text-[29px] font-semibold leading-none">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="wrapper-xl padding-x flex flex-wrap sm:flex-nowrap items-center justify-between gap-5 mt-7.5 md:mt-10.5">
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex icon-btn border-border"
            aria-label="Previous products"
            disabled={position.start}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            className="inline-flex icon-btn border-border"
            aria-label="Next products"
            disabled={position.end}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRight size={18} />
          </button>
        </div>
        <ButtonLink href="#freshness">Learn more about</ButtonLink>
        <span
          className="basis-full sm:basis-auto sm:w-30 text-muted text-[12px] text-center sm:text-right"
          role="status"
        >
          {selected.length > 0
            ? `${selected.length} flavor${selected.length > 1 ? "s" : ""} saved`
            : "Swipe to find your flavor"}
        </span>
      </div>
    </section>
  );
}

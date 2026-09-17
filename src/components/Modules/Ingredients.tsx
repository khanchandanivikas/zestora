import { Leaf } from "lucide-react";
import { ButtonLink } from "../Utils/ButtonLink";

export const Ingredients = () => {
  return (
    <section
      id="about"
      className="panel wrapper-2xl wide-container relative padding section-space lg:min-h-82.5 lg:grid lg:place-items-center text-center"
      aria-labelledby="ingredients-title"
    >
      <div
        className="absolute text-[#668620] opacity-58 blur-[5px] w-25 h-37.5 pointer-events-none -top-5 -left-11.25 md:left-0.75 md:top-4.5 lg:left-11.25 lg:top-6.25 transform-[rotate(-25deg)] lg:transform-[scale(1.4)_rotate(-25deg)] [&>svg]:absolute [&>svg]:w-16.25 [&>svg]:h-16.25 [&>svg]:fill-[#6e932e] [&>svg]:stroke-[#4f7118] [&>svg:nth-child(2)]:transform-[translate(25px,36px)_rotate(80deg)] [&>svg:nth-child(3)]:transform-[translate(-10px,65px)_rotate(-45deg)]"
        aria-hidden="true"
      >
        <Leaf />
        <Leaf />
        <Leaf />
      </div>
      <div className="relative z-1">
        <h2
          id="ingredients-title"
          className="text-[clamp(25px,2.9vw,38px)] tracking-[-0.01em] leading-[1.08] uppercase"
        >
          Real ingredients. Cold-pressed juices. No sugar.
          <br /> No shortcuts. Healthy living, made delicious.
        </h2>
        <p className="text-muted mt-4.5 mb-6.5 mx-auto font-display text-[15px]">
          Made to power your body and support your best, every single bottle
          seamlessly integrates into the life you love to live.
        </p>
        <ButtonLink href="#freshness">Learn more about</ButtonLink>
      </div>
      <div
        className="absolute text-[#668620] opacity-58 blur-[5px] w-25 h-37.5 pointer-events-none -bottom-8.75 -right-11.25 md:right-0.75 md:bottom-0 lg:right-5 lg:bottom-1.25 [transform:rotate(155deg)] lg:[transform:scale(1.4)_rotate(155deg)] [&>svg]:absolute [&>svg]:w-16.25 [&>svg]:h-16.25 [&>svg]:fill-[#6e932e] [&>svg]:stroke-[#4f7118] [&>svg:nth-child(2)]:[transform:translate(25px,36px)_rotate(80deg)] [&>svg:nth-child(3)]:[transform:translate(-10px,65px)_rotate(-45deg)]"
        aria-hidden="true"
      >
        <Leaf />
        <Leaf />
        <Leaf />
      </div>
    </section>
  );
};

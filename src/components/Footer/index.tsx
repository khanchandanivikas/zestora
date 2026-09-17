import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FOOTER_LINK_GROUPS } from "./consts";
import { FreshStrip } from "../FreshStrip";
import { ButtonLink } from "../Utils/ButtonLink";

export function Footer() {
  return (
    <footer className="relative text-white" id="contact">
      <Image
        className="-z-3 object-cover object-center"
        src="/zestora-footer.jpg"
        alt="Zestora footer"
        fill
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-2 bg-[linear-gradient(#31584e82,#2b443970)]" />
      <div className="wrapper-2xl padding-x pt-11 lg:pt-18">
        <div className="grid gap-7.5 md:flex md:justify-between">
          <h2 className="text-[34px] uppercase lg:text-[38px] leading-[1.1] font-semibold">
            Stay Fresh Get
            <br />
            Exclusive Offers
          </h2>
          <nav
            className="flex justify-between gap-5 md:w-[36%] md:min-w-75 lg:w-[35%]"
            aria-label="Footer navigation"
          >
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.label}>
                <span className="sr-only">{group.label}</span>
                <ul className="flex flex-col gap-0.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-block py-2 font-display text-[15px] hover:text-lime-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="relative h-77.5 mt-8.75 mb-2.5 md:h-21.25 md:my-0 lg:h-31.25">
          <div className="absolute left-1/2 top-0 w-45 h-67.5 md:-top-27.5 md:left-[48%] md:w-52.5 md:h-77.5 md:z-2 lg:w-66.25 lg:h-87.5 lg:-top-28.75 [transform:translateX(-50%)_rotate(-13deg)] bg-[#f8f7f3] border-5 border-ink rounded-[19px] shadow-[0_20px_40px_#0003] overflow-hidden flex items-center justify-center">
            <Image
              src="/zestora-strawberry.png"
              alt="Zestora Strawberry juice"
              width={240}
              height={360}
              className="absolute w-full h-[88%] top-0 object-contain"
            />
            <ButtonLink
              href="#products"
              className="relative z-1 text-[13px] px-3.5 py-2.5 min-h-9.5 mt-15"
            >
              Order Now
            </ButtonLink>
            <span className="absolute bottom-0 w-full bg-ink text-white p-2.5 text-center font-display uppercase text-[23px]">
              Strawberry
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-3 mb-6.25 md:mt-3 md:mb-7 lg:mt-5 font-display text-[14px]">
          <a
            className="inline-flex items-center gap-2 hover:text-lime-400"
            href="mailto:hello@zestora.com"
          >
            <Mail size={14} aria-hidden="true" />
            hello@zestora.com
          </a>
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 hover:text-lime-400"
          >
            Find your fresh <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <FreshStrip />
        <p
          className="font-display uppercase font-extrabold text-[clamp(55px,14.7vw,234px)] md:text-[clamp(100px,14vw,234px)] lg:text-[clamp(140px,13.7vw,239px)] tracking-[-0.04em] leading-none whitespace-nowrap text-center mt-3.5 mb-5 md:mt-2"
          aria-hidden="true"
        >
          Fresh Energy
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#ffffff80] py-5 font-display text-[12px]">
          <small>
            Copyright {new Date().getFullYear()} Zestora. All rights reserved.
          </small>
          <span className="hidden md:inline">Less ingredients. More life.</span>
          <a className="inline-flex items-center gap-1.5" href="#main-content">
            Back to top <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

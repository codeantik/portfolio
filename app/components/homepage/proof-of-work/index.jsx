// @flow strict

import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import FadeIn from "../../helper/fade-in";

const NEKI_URL = "https://my.neki.io/explore";

const lifecycle = [
  "Business Requirements",
  "UI/UX Design",
  "Development",
  "Infrastructure & Monitoring",
];

function ProofOfWork() {
  return (
    <div
      id="proof-of-work"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        aria-hidden="true"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Proof of Work
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <FadeIn direction="up" delay={0.1}>
        <GlowCard identifier="proof-of-work">
          <div className="relative p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Image
              src="/blur-23.svg"
              alt=""
              width={1080}
              height={200}
              className="absolute bottom-0 opacity-60 pointer-events-none"
              aria-hidden="true"
            />

            {/* Narrative */}
            <div className="relative z-10">
              <p className="text-xs font-semibold text-[#16f2b3] uppercase tracking-widest mb-3">
                Neki.io &middot; Live Product
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">
                Solo developer behind Neki for 3 years
              </h3>
              <p className="text-gray-400 text-sm lg:text-base mb-6 leading-relaxed">
                Built 50% of the frontend and owned the full product
                lifecycle&nbsp;&mdash; from translating business requirements
                into specs and designing interfaces, to shipping features and
                running production infrastructure with monitoring.
              </p>

              <ul
                className="flex flex-col gap-3 mb-8"
                aria-label="Product lifecycle ownership"
              >
                {lifecycle.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span
                      className="h-2 w-2 rounded-full bg-[#16f2b3] shrink-0"
                      aria-hidden="true"
                    />
                    {step}
                  </li>
                ))}
              </ul>

              <Link
                href={NEKI_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Neki live product (opens in new tab)"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 rounded-full text-sm font-semibold text-white uppercase tracking-wider transition-all duration-300 hover:from-pink-500 hover:to-violet-600 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
              >
                <span>Visit Live Product</span>
                <BsArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Browser mockup */}
            <Link
              href={NEKI_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open my.neki.io/explore in a new tab"
              className="group relative z-10 rounded-lg border border-[#2a2e5a] overflow-hidden bg-[#0d1224] hover:border-violet-500 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
            >
              {/* Chrome bar */}
              <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
              </div>
              <div className="bg-[#101123] px-4 py-3 flex items-center gap-3 border-b border-[#2a2e5a]">
                <div className="flex gap-1.5 shrink-0">
                  <div className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
                  <div className="h-3 w-3 rounded-full bg-orange-400" aria-hidden="true" />
                  <div className="h-3 w-3 rounded-full bg-green-200" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0 bg-[#1a1443] rounded-md px-3 py-1">
                  <p className="text-xs text-gray-400 font-mono truncate">
                    my.neki.io/explore
                  </p>
                </div>
              </div>

              {/* Screen area */}
              <div className="relative h-52 lg:h-64 bg-gradient-to-br from-[#1a1443] via-[#0d1224] to-[#10172d] flex flex-col items-center justify-center gap-4">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-pink-500/10 group-hover:from-violet-600/20 group-hover:to-pink-500/20 transition-all duration-500" />

                {/* Pulsing live badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#101123]/80 border border-[#2a2e5a] rounded-full px-3 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16f2b3] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16f2b3]" />
                  </span>
                  <span className="text-[10px] text-[#16f2b3] font-medium uppercase tracking-widest">
                    Live
                  </span>
                </div>

                <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BsArrowUpRight size={20} className="text-white" aria-hidden="true" />
                </div>
                <p className="z-10 text-[#16f2b3] text-xs font-medium uppercase tracking-widest">
                  Open Product
                </p>
              </div>
            </Link>
          </div>
        </GlowCard>
        </FadeIn>
      </div>
    </div>
  );
}

export default ProofOfWork;

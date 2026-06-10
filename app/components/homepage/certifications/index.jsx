// @flow strict

import { certifications } from "@/utils/data/certifications";
import Image from "next/image";
import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import FadeIn from "@/app/components/helper/fade-in";
import GlowCard from "@/app/components/helper/glow-card";

function Certifications() {
  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt=""
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        aria-hidden="true"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <FadeIn direction="up" delay={0.05}>
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Certifications
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </FadeIn>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.id} direction="up" delay={0.1 + i * 0.1}>
              <GlowCard identifier={`cert-${cert.id}`}>
                <div className="p-5 relative">
                  <Image
                    src="/blur-23.svg"
                    alt=""
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-60 pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Issuer badge */}
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 shadow-lg">
                      <BsPatchCheckFill size={22} className="text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#16f2b3] font-semibold uppercase tracking-widest mb-1">
                        {cert.issuer}
                      </p>
                      <h3 className="text-sm sm:text-base font-semibold text-white leading-snug mb-3">
                        {cert.title}
                      </h3>

                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <span className="text-xs text-gray-400">
                          Issued {cert.date}
                        </span>
                        <Link
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#16f2b3] hover:text-white transition-colors duration-200"
                          aria-label={`View certificate for ${cert.title}`}
                        >
                          View credential
                          <HiExternalLink size={14} aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;

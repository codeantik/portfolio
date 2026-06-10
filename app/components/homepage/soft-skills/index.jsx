// @flow strict

import { softSkills } from "@/utils/data/soft-skills";
import {
  BsLightningChargeFill,
  BsRocket,
  BsSpeedometer2,
  BsArrowRepeat,
  BsLightbulbFill,
  BsPeopleFill,
} from "react-icons/bs";
import FadeIn from "@/app/components/helper/fade-in";
import GlowCard from "@/app/components/helper/glow-card";

const ICONS = [
  BsLightningChargeFill,
  BsRocket,
  BsSpeedometer2,
  BsArrowRepeat,
  BsLightbulbFill,
  BsPeopleFill,
];

const ICON_COLORS = [
  "text-yellow-400",
  "text-pink-400",
  "text-cyan-400",
  "text-green-400",
  "text-amber-400",
  "text-violet-400",
];

function SoftSkills() {
  return (
    <div id="soft-skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
              Beyond the Code
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </FadeIn>

      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {softSkills.map((skill, i) => {
            const Icon = ICONS[i];
            return (
              <FadeIn key={skill.id} direction="up" delay={0.1 + i * 0.07}>
                <GlowCard identifier={`soft-skill-${skill.id}`}>
                  <div className="p-5 h-full flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`${ICON_COLORS[i]} transition-all duration-300 hover:scale-125`}>
                        <Icon size={28} />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-white leading-tight">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </GlowCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SoftSkills;

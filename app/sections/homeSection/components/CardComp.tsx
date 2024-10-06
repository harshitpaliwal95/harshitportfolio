import Image from "next/image";
import React from "react";

interface CardCompProp {
  title: string | null;
  link: string | null;
  subText: string | null;
  expDate: string | null;
  skills: string[] | null;
  imgUrl: string | null;
}
const CardComp: React.FC<CardCompProp> = ({
  title,
  link,
  subText,
  expDate,
  skills,
  imgUrl,
}) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

        {expDate && (
          <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            {expDate}
          </div>
        )}
        {imgUrl && (
          <Image
            className="z-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 mb-4 lg:mb-0"
            src={imgUrl}
            alt={title || "harshitpaliwal"}
            width={200}
            height={200}
          />
        )}

        <div className="z-10 sm:col-span-6">
          <div className="font-medium leading-snug text-slate-200">
            <a
              href={link || "#"}
              aria-label={title || ""}
              target="_blank"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <p className="mt-2 text-sm leading-normal">{subText}</p>
          {skills && <SkillList skills={skills} />}
        </div>
      </div>
    </li>
  );
};

export default CardComp;

interface SkillProp {
  skills: string[];
}
const SkillList: React.FC<SkillProp> = ({ skills }) => {
  return (
    <ul className="mt-2 flex flex-wrap">
      {skills.map((item) => (
        <li className="mr-1.5 mt-2" key={item}>
          <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

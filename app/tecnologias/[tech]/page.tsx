"use client";

import Footer from '../../../views/sections/Footer';
import { technologies } from '../data';
import { useEffect, useState } from 'react';

const getIcon = async (iconName: string) => {
  const packageModule:any = await import("@heroicons/react/24/solid");
  return packageModule[iconName] || packageModule["QuestionMarkCircleIcon"]; // Fallback icon
};

const generateAdvantages = async (advantages: any[]) => {
  const elements = await Promise.all(
    advantages.map(async (advantage) => {
      const Icon = await getIcon(advantage.heroIcon);

      return (
        <li key={advantage.title} className="flex gap-x-3">
          <Icon
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-none text-indigo-600"
          />
          <span>
            <strong className="font-semibold text-gray-900">
              {advantage.title}
            </strong>{" "}
            {advantage.text}
          </span>
        </li>
      );
    })
  );

  return elements;
};

export default function Tech({ params }: { params: { tech: string } }) {
  let {tech} = params;
  let query = tech.replaceAll("%20", " ");
  const technology = technologies.find((tec) => tec.name === query);

  const [advantageElements, setAdvantageElements] = useState<JSX.Element[]>();

  useEffect(() => {
    if (technology) {
      generateAdvantages(technology.advantages).then(setAdvantageElements);
    }
  }, [technology]);

  if (!technology) return <p>Tecnologia não encontrada.</p>;

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                {technology?.shortDescription}
              </p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {technology?.name}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {technology?.longDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={technology?.image}
            className="w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 max-[640px]:w-[20rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {advantageElements}
              </ul>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/tecnologias"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  VOLTAR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

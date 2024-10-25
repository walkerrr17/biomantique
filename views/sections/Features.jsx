import {
  GlobeAmericasIcon,
  VideoCameraIcon,
  CogIcon,
} from '@heroicons/react/20/solid';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Scene'), { ssr: false });

const features = [
  {
    name: 'Hydrolab DS5',
    description:
      'Sensor para monitoramento contínuo da qualidade da água, medindo parâmetros críticos como pH e oxigênio.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Bushnell Trophy Cam HD',
    description:
      'Câmeras automáticas para monitoramento de fauna em áreas de difícil acesso.',
    icon: VideoCameraIcon,
  },
  {
    name: 'YSI EXO2',
    description:
      'Sistema modular para análise de múltiplos indicadores ambientais com precisão.',
    icon: CogIcon,
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-4" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Um Pouco Sobre Nós
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                BIOMANTIQUE
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                O Projeto Biomantique apresenta soluções inovadoras para
                problemas atuais na preservação dos manguezais. Três das
                tecnologias destacadas incluem:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="max-w-[64rem] max-[640px]:w-[32rem] lg:w-[64rem] max-[640px]:h-[15rem] h-[50vh]">
            <Scene />
          </div>
        </div>
      </div>
    </div>
  );
}

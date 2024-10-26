import { technologies } from '../../app/tecnologias/data';

export default function List() {
  return (
    <ul
      role="list"
      className="flex items-center gap-x-6 py-5 flex-col overflow-hidden bg-white"
      id="list"
    >
      {technologies.map((tech) => (
        <li
          key={tech.name}
          className="flex w-[64rem] max-[640px]:w-[20rem] max-[640px]:flex-col mb-10 justify-between gap-x-6 py-5"
        >
          <div className="flex min-w-0 gap-x-4">
            <img
              alt=""
              src={tech.image}
              className="h-24 w-24 flex-none rounded-full bg-gray-50 object-contain"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {tech.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {tech.shortDescription}
              </p>
            </div>
          </div>
          <div className="shrink-0 sm:flex sm:flex-col items-center">
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href={`/tecnologias/${tech.name}`}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Veja mais!
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

import { Tooth } from "../icon/Tooth";
export const Treatments = () => {
  return (
    <section className="relative">
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
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto flex max-w-[52.5rem] flex-col items-center gap-y-16 px-6 py-32 lg:max-w-[78rem]">
        <div className="mx-auto max-w-[36.75rem] text-center *:text-gray-950 dark:*:text-white">
          <h2 className="mb-3 text-3xl font-bold lg:text-4xl">Tratamentos</h2>
          <p className="text-base">
            Preocupado com a saúde geral dos seus dentes? Oferecemos soluções
            completas.
          </p>
        </div>
        <div className="mx-auto grid max-w-[49.5rem] gap-6 md:grid-cols-1 lg:max-w-full lg:grid-cols-3 *:w-full *:col-span-1 *:text-left">
          <img src="/assets/tratamento.webp" alt="Medica" className="h-[30rem] object-cover rounded-lg lg:h-full"/>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-5 *:flex *:flex-col *:justify-between *:rounded-lg *:bg-white d *:ring-1 *:ring-inset *:ring-gray-200 dark:*:ring-white/50 *:p-6 *:md:col-span-1">
            <div className="lg:row-span-2">
              <div className="w-fit rounded-lg p-3 ring-1 ring-inset ring-gray-200 dark:ring-white/50 bg-white ">
                <Tooth />
              </div>
              <div className="pt-4">
                <h4 className="mb-2 text-lg font-bold text-gray-950 lg:text-xl dark:text-gray-50">
                Ortodontia
                </h4>
                <p className="text-base text-gray-950 dark:text-gray-50">
                Aparelhos ortodônticos para alinhar seus dentes e melhorar sua mordida.
                </p>
              </div>
            </div>
            <div className="lg:row-span-3">
              <div className="w-fit rounded-lg p-3 ring-1 ring-inset ring-gray-200 dark:ring-white/50 bg-white">
              <Tooth />
              </div>
              <div className="pt-4">
                <h4 className="mb-2 text-lg font-bold text-gray-950 lg:text-xl dark:text-gray-50">
                Clareamento Dental
                </h4>
                <p className="text-base text-gray-950 dark:text-gray-50">
                Obtenha dentes brancos e brilhantes com nossos tratamentos de clareamento.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-5 *:flex *:flex-col *:justify-between *:rounded-lg *:bg-white  *:ring-1 *:ring-inset *:ring-gray-200 dark:*:ring-white/50 *:p-6 *:md:col-span-1">
            <div className="lg:row-span-3">
              <div className="w-fit rounded-lg p-3 ring-1 ring-inset ring-gray-200 dark:ring-white/50 bg-white">
                <Tooth />
              </div>
              <div className="pt-4">
                <h4 className="mb-2 text-lg font-bold text-gray-950 lg:text-xl dark:text-gray-50">
                Prevenção
                </h4>
                <p className="text-base text-gray-950 dark:text-gray-50">
                Tratamentos preventivos para manter seus dentes saudáveis e evitar problemas futuros.
                </p>
              </div>
            </div>
            <div className="lg:row-span-2">
              <div className="w-fit rounded-lg p-3 ring-1 ring-inset ring-gray-200 dark:ring-white/50 bg-white">
                <Tooth />
              </div>
              <div className="pt-4">
                <h4 className="mb-2 text-lg font-bold text-gray-950 lg:text-xl dark:text-gray-50">
                Tratamentos Dentários Completos
                </h4>
                <p className="text-base text-gray-950 dark:text-gray-50">
                De restaurações a implantes, cuidamos de todos os aspectos da sua saúde bucal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

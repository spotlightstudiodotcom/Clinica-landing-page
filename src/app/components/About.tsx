import { CloudUpload, LockKeyholeIcon, ServerIcon } from "lucide-react"

export const About = () => {
  return (
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
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Sobre Nós</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sua Clínica Odontológica de Confiança</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Na nossa clínica, priorizamos a saúde e o bem-estar do seu sorriso. Oferecemos uma ampla gama de tratamentos dentários para manter seus dentes saudáveis e esteticamente impecáveis.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="homem sorrindo"
            src="/assets/About.webp"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[35rem] object-cover"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Nós entendemos como problemas dentários podem impactar sua vida. Desde dores persistentes até a insegurança com a aparência dos seus dentes, nossa equipe está aqui para ajudar.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudUpload className="h-6 w-6 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Tratamentos Personalizados.</strong> Oferecemos soluções específicas para cada paciente, garantindo o melhor resultado para o seu sorriso.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockKeyholeIcon className="h-6 w-6 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Segurança e Confiabilidade.</strong> Nossos procedimentos seguem rigorosos padrões de segurança, proporcionando tranquilidade durante o tratamento.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="h-6 w-6 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Tecnologia Avançada.</strong> Utilizamos o que há de mais moderno em tecnologia odontológica para garantir dentes brancos e saudáveis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Estamos comprometidos em transformar a sua experiência odontológica, desde a prevenção até a recuperação, com tratamentos dentários que realmente fazem a diferença.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Confie no Seu Sorriso Conosco</h2>
              <p className="mt-6">
                Agende sua consulta hoje e descubra como podemos ajudar a manter seus dentes saudáveis e brilhantes. Nossa equipe está pronta para cuidar de você em cada etapa do seu tratamento dentário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

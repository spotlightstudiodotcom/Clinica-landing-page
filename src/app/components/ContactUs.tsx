export const ContactUs = () => {
    return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
            <div className="md:mb-0 mb-4">
              <h2 className="text-black text-4xl font-semibold leading-10 mb-5 md:text-left text-center">
                Entre em contato
              </h2>
              <p className="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
                Entre em contato conosco para mais informações ou para agendar sua consulta. Estamos aqui para ajudar você
                a sorrir sem dor!
              </p>
              <div className="flex md:items-center md:justify-start justify-center">
                <button className="w-fit py-3.5 rounded-full bg-blue-600 transition-all duration-700 hover:bg-blue-800 shadow text-white text-center text-base font-semibold leading-6 px-4">
                  Agende sua consulta
                </button>
              </div>
            </div>
            <div className="border-l-2 md:border-blue-600 border-white px-10 py-6">
              <div className="mb-8">
                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Email</h6>
                <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">clinica@gmail.com</h3>
              </div>
              <div>
                <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Numero de telefone</h6>
                <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">88 99999-9999</h3>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50 rounded-lg shadow-lg"></div>
              <img src="/assets/contact/image03.webp" alt="Consultório odontológico moderno" className="w-full h-full object-cover rounded-lg shadow-lg" />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">Clínica Aconchegante</h5>
                <p className="text-white text-base font-medium leading-6">Ambiente moderno e acolhedor para um atendimento odontológico de qualidade.</p>
              </div>
            </div>
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50 rounded-lg shadow-lg"></div>
              <img src="/assets/contact/image02.webp" alt="Sala de espera confortável" className="w-full h-full object-cover rounded-lg shadow-lg" />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">Consultório Especializado</h5>
                <p className="text-white text-base font-medium leading-6">Espaço dedicado para tratamentos especializados com equipamentos de ponta.</p>
              </div>
            </div>
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50 rounded-lg shadow-lg"></div>
              <img src="/assets/contact/image04.webp" alt="Equipe de dentistas especializados" className="w-full h-full object-cover rounded-lg shadow-lg" />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">Equipe Especializada</h5>
                <p className="text-white text-base font-medium leading-6">Profissionais altamente capacitados para cuidar do seu sorriso.</p>
              </div>
            </div>
            <div className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50 rounded-lg shadow-lg"></div>
              <img src="/assets/contact/image01.webp" alt="Equipamentos odontológicos avançados" className="w-full h-full object-cover rounded-lg shadow-lg" />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">Tecnologia Avançada</h5>
                <p className="text-white text-base font-medium leading-6">Equipamentos modernos para tratamentos dentários de alta qualidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
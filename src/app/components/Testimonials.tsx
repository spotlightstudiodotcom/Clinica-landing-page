"use client";
import React from 'react';
import { Carousel } from "@material-tailwind/react";

interface TestimonialProps {
  logoSrc?: string;
  quote: string;
  authorImageSrc: string;
  authorName: string;
  authorTitle: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  logoSrc,
  quote,
  authorImageSrc,
  authorName,
  authorTitle,
}) => {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img alt="" src={logoSrc} className="mx-auto h-12" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src={authorImageSrc}
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{authorName}</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">{authorTitle}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

const testimonials: TestimonialProps[] = [
  {
    // logoSrc: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
    quote: "A melhor clínica odontológica que já frequentei. Tratamentos eficazes e sem dor!",
    authorImageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    authorName: "Maria S",
    authorTitle: "Enfermeira"
  },
  {
    // logoSrc: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
    quote: "A melhor clínica odontológica que já frequentei. Tratamentos eficazes e sem dor!",
    authorImageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    authorName: "Laura Silva",
    authorTitle: "Modelo"
  },
  {
    // logoSrc: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
    quote: "A melhor clínica odontológica que já frequentei. Tratamentos eficazes e sem dor!",
    authorImageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    authorName: "Sarah Santos",
    authorTitle: "Médica"
  }
];

export const TestimonialCarousel: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-gray-50 via-white to-gray-50 lg:py-32'>
        <p className='text-center mb-2'>Testemunhos</p>
        <h2 className='text-3xl font-bold text-black/80 text-center'>Veja o que nossos pacientes dizem sobre nós</h2>

      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-blue-500" : "w-4 bg-blue-500/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        autoplay
        autoplayDelay={5000}
        loop
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Carousel>
    </div>
  );
};
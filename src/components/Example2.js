export default function Example2() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-12" src={require('../img/logo2.jpg')} alt="" />
          <figure className="mt-19">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “¡Comer sano es divertido! Descubre nuestros ricos y saludables snacks que te llenan de energía para aprender y jugar.
                ”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src={require('../img/sonrisa.jpg')}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900"></div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600"></div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
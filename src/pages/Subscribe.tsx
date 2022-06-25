import { Logo } from '../components/Logo'

export function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <img
        className="absolute top-[0.625rem] pointer-events-none"
        src="/src/assets/react-icon.svg"
        alt=""
      />
      <div className="w-full max-w-[1183px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[624px]">
          <Logo />
          <h1 className="text-[2.5rem] leading-tight mt-8">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className='text-gray-200 leading-relaxed mt-4'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="bg-gray-700 p-8 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form action="" className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 h-14 px-5 rounded"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              className="bg-gray-900 h-14 px-5 rounded"
              type="email"
              placeholder="Digite seu e-mail"
            />

            <button
              type="submit"
              className="bg-green-500 mt-4 py-4 text-sm font-bold uppercase rounded hover:bg-green-700 transition-colors"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" alt="Code mockup"/>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { format, isPast } from 'date-fns'
import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  slug: string
  type: 'live' | 'class'
  availableAt: Date
}

export function Lesson({ title, slug, type, availableAt }: LessonProps) {
  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  }).replace(/\w/, firstLetter => firstLetter.toUpperCase())

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={`
            ${type === 'live' ? 'text-green-300' : 'text-white'}
            text-xs font-bold border border-green-300 rounded py-[0.125rem] px-2`
          }>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
          </span>
        </header>
        <strong className="block text-gray-200 mt-5">
          {title}
        </strong>
      </div>
    </Link>
  )
}

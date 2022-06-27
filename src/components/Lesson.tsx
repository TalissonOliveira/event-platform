import { Link, useParams } from 'react-router-dom'
import { format, isPast } from 'date-fns'
import { CheckCircle, Lock } from 'phosphor-react'
import classNames from 'classnames'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  slug: string
  type: 'live' | 'class'
  availableAt: Date
}

export function Lesson({ title, slug, type, availableAt }: LessonProps) {
  const { slug: urlSlug } = useParams<{slug: string}>()

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  }).replace(/\w/, firstLetter => firstLetter.toUpperCase())

  const isActiveLesson = urlSlug === slug

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={classNames('relative rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-color', {
        'border-none before:content-[""] before:absolute before:top-2/4 before:-left-[5.5px] before:bg-green-500 before:w-[13.75px] before:h-[13.75px] before:rounded-sm before:rotate-45 before:translate-y-[calc(50%-13.75px)]': isActiveLesson,
        'bg-green-500': isActiveLesson
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('text-sm font-medium flex items-center gap-2', {
              'text-blue-500': !isActiveLesson,
              'text-white': isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={classNames('text-xs font-bold border rounded py-[0.125rem] px-2', {
            'text-green-300': type === 'live',
            'text-white': type === 'class' || isActiveLesson,
            'border-green-300': !isActiveLesson,
            'border-white': isActiveLesson
          })}>
          
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
          </span>
        </header>
        <strong className={classNames('block mt-5', {
          'text-gray-200': !isActiveLesson,
          'text-white': isActiveLesson
        })}>
          {title}
        </strong>
      </div>
    </Link>
  )
}

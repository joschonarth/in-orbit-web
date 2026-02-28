import dayjs from 'dayjs'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { CreateGoal } from '../components/create-goal'
import { EmptyGoals } from '../components/empty-goals'
import { Dialog } from '../components/ui/dialog'
import { WeeklySummary } from '../components/weekly-summary'
import { useGetWeekSummary } from '../http/generated/api'

export function Application() {
  const [searchParams] = useSearchParams()
  const weekStartsAtParam = searchParams.get('week_starts_at')

  const weekStartsAt = weekStartsAtParam
    ? new Date(weekStartsAtParam)
    : new Date()

  const { data, isLoading } = useGetWeekSummary({
    weekStartsAt: dayjs(weekStartsAt).startOf('week').toISOString(),
  })

  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    )
  }

  const isCurrentWeek = !weekStartsAtParam
  const hasGoals = (data.summary.total ?? 0) > 0

  const showEmptyGoals = isCurrentWeek && !hasGoals

  return (
    <Dialog>
      {showEmptyGoals ? (
        <EmptyGoals />
      ) : (
        <WeeklySummary summary={data.summary} />
      )}

      <CreateGoal />
    </Dialog>
  )
}

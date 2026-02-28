import { useQueryClient } from '@tanstack/react-query'
import { Plus, X } from 'lucide-react'
import { toast } from 'sonner'
import {
  getGetPendingGoalsQueryKey,
  getGetUserExperienceAndLevelQueryKey,
  getGetWeekSummaryQueryKey,
  useCreateCompletion,
  useDeleteGoal,
  useGetPendingGoals,
} from '../http/generated/api'
import { OutlineButton } from './ui/outline-button'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data, isLoading } = useGetPendingGoals()

  const { mutateAsync: createGoalCompletion } = useCreateCompletion()
  const { mutateAsync: deleteGoal } = useDeleteGoal()

  if (isLoading || !data) {
    return null
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion({ data: { goalId } })

    queryClient.invalidateQueries({ queryKey: getGetWeekSummaryQueryKey() })
    queryClient.invalidateQueries({ queryKey: getGetPendingGoalsQueryKey() })
    queryClient.invalidateQueries({
      queryKey: getGetUserExperienceAndLevelQueryKey(),
    })
  }

  async function handleDeleteGoal(goalId: string) {
    try {
      await deleteGoal({ goalId })

      queryClient.invalidateQueries({ queryKey: getGetPendingGoalsQueryKey() })
      queryClient.invalidateQueries({ queryKey: getGetWeekSummaryQueryKey() })
      queryClient.invalidateQueries({
        queryKey: getGetUserExperienceAndLevelQueryKey(),
      })

      toast.success('Meta removida!')
    } catch {
      toast.error('Erro ao remover a meta, tente novamente!')
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.pendingGoals.map(goal => {
        return (
          <div key={goal.id} className="relative group">
            <OutlineButton
              disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
              onClick={() => handleCompleteGoal(goal.id)}
            >
              <Plus className="size-4 text-zinc-600" />
              {goal.title}
            </OutlineButton>

            <button
              type="button"
              onClick={() => handleDeleteGoal(goal.id)}
              className="absolute -top-1.5 -right-1.5 size-4 bg-zinc-700 hover:bg-red-500 rounded-full items-center justify-center hidden group-hover:flex transition-colors"
            >
              <X className="size-2.5 text-white" />
            </button>
          </div>
        )
      })}
    </div>
  )
}

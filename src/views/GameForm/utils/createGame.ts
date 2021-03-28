// libs
import { Ref } from '@vue/reactivity'
import { ElMessage } from 'element-plus'

import { OperationContext, OperationResult } from '@urql/core'
type ExecMutation = (variables: any, context?: Partial<OperationContext>) => Promise<OperationResult<any>>

export const handleCreateGame = async (
  formError: Ref,
  gameForm: GSAPI.CreateGameInput,
  executeMutation: ExecMutation
): Promise<GSAPI.CreateGameInput | Ref> => {
  const { error, data } = await executeMutation({
    input: { data: { ...gameForm } },
  })

  if (error) {
    formError.value = error.message
    ElMessage({
      message: error.message,
      type: 'error',
      center: true,
    })
    return formError
  }

  ElMessage({
    message: 'Игра добавлена',
    type: 'success',
    center: true,
  })

  return data
}
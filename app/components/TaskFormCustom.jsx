'use client'

import { createTaskCustom } from '@/utils/actions'
import { useFormStatus } from 'react-dom'
import { useActionState, useEffect } from 'react'
import toast from 'react-hot-toast'

const SubmitBtn = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='btn btn-primary join-item uppercase'
      disabled={pending}
    >
      {pending ? 'please wait...' : 'create task'}
    </button>
  )
}

const initialState = {
  message: null,
}

const TaskFormCustom = () => {
  const [state, formAction] = useActionState(createTaskCustom, initialState)

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error')
      return
    }

    if (state.message) {
      toast.success('task created')
    }
  }, [state])

  return (
    <form action={formAction}>
      {/* {state.message && <p className='mb-2'>{state.message}</p>} */}

      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='type here'
          name='content'
          required
        />

        <SubmitBtn />
      </div>
    </form>
  )
}

export default TaskFormCustom

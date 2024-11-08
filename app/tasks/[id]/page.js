import EditForm from '@/app/components/EditForm'
import { getTask } from '@/utils/actions'
import Link from 'next/link'
import React from 'react'

const SingleTaskPage = async ({ params }) => {
  const { id } = await params
  const task = await getTask(id)

  return (
    <>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent uppercase'>
          back to tasks
        </Link>
      </div>

      <EditForm task={task} />
    </>
  )
}

export default SingleTaskPage

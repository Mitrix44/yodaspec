import { IProject } from '@/types/interfaces'
import Project from '@/db/models/project'
import { connect, disconnect } from '@/lib/db'
import { revalidatePath } from 'next/cache'

const createProject = async (project: IProject): Promise<void> => {
  'use server'
  await connect()
  const _project = new Project(project)
  await _project.save()
  await disconnect()
  revalidatePath('/')
}
export { createProject }

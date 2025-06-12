import { Loader2 } from 'lucide-react'

function Loading (): React.ReactNode {
  return (
    <div className='flex items-center justify-centerh-screen w-screen'>
      <Loader2 className='w10 h-10 animate-spin' />
    </div>
  )
}
export default Loading

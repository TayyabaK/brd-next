'use client'
import { useRouter } from 'next/navigation'

const BackBtn = () => {
  const router = useRouter()
  return (
    <div className='flex items-center cursor-pointer' onClick={() => router.back()}>
      <i className='tabler-arrow-narrow-left' />
      <span>back</span>
    </div>
  )
}

export default BackBtn

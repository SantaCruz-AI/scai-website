import Box from '@/components/Box'
import NewsLetter from '@/components/NewsLetter'

export default function Home() {
  return (
    <div className="text-black">
      <Box/>
      <div className='w-full flex justify-center'>
        <NewsLetter/>
      </div>
    </div>
  )
}

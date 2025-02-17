import PlaySVG from './svg/play'
import mobile from "../../assets/mobile.jpg"
import Image from 'next/image'

const Video = () => {
  return (
    <div className='rounded-xl overflow-hidden flex-1 relative w-fit p-[2rem_2rem_0_2rem]  bg-grayish'>
      <Image src={mobile} alt='Mobile' className='h-[531px] ' />
      <button className='absolute bottom-5 left-5'>
        <PlaySVG />
      </button>
    </div>
  )
}

export default Video

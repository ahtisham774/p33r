import LeftSVG from '../landingPage/svg/left'
import Video from '../landingPage/Video'

import Button from './button'
import Heading from './heading'
export function MobilePreview () {

  return (
    <section className='py-16 w-full'>
      <div className='w-full flex flex-col items-center'>
        <div className='text-center mb-12'>
          <Heading text='The Hunt is Over' />
          <p className='text-center text-5xl max-w-4xl'>
            Join P33R for a simplier, smarter search, all in one place, made
            just for you.
          </p>
        </div>

        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          <Video />
          <Video />
          <Video />
        </div>
        <Button text='Try it Now' icon={<LeftSVG />} className='w-full max-w-[376px] py-1.5 mt-10' />
      </div>
    </section>
  )
}

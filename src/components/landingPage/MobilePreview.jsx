import SubHeading from './common/subHeading'
import Video from './Video'
import Heading from './common/heading'
export function MobilePreview () {

  return (
    <section className='py-16 w-full'>
      <div className='w-full flex flex-col items-center'>
        <div className='text-center mb-12'>
          <SubHeading text='View video' />
          <Heading text='The Hunt is Over' />
          <p className='text-gray-600 max-w-sm'>
            Join P33R for a simplier, smarter search, all in one place, made
            just for you.
          </p>
        </div>

        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          <Video />
          <Video />
          <Video />
        </div>
      </div>
    </section>
  )
}

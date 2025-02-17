
import Heading from './heading'
import ImageSlider from './ImageSlider'

export const ExplorerSection = () => {

  return (
    <div className=' py-16 bg-white flex-col justify-center items-center gap-12 w-full inline-flex'>
      <div className='text-center mb-12'>
          <Heading text='Built for Every Kind of Explorer'  />
        </div>
      <div className='flex-col justify-start items-center gap-8 flex w-full'>
        <ImageSlider />
      </div>
    </div>
  )
}

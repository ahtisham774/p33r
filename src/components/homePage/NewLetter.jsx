import PopOverText from '../landingPage/common/popOverText'
import EmailSVG from '../landingPage/svg/email'
import Button from './button'

const NewsLetter = () => {
  return (
    <div className='flex items-center justify-center w-full py-24'>
      <div className='flex flex-col items-center gap-2'>
        <PopOverText>
          <h3 className='text-xl font-semibold'>Subscribe to our newsletter</h3>
        </PopOverText>
        <div className='flex items-center bg-[#EAECEF] rounded-full overflow-hidden pl-4'>
          <EmailSVG />
          <input
            type='email'
            placeholder='Enter your email'
            className='flex-1 px-4 py-2 border-none outline-none bg-transparent'
          />
          <Button text='Subscribe' className='rounded-none' />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter

import Image from 'next/image'
import Button from './common/button'
import logo from '../../assets/logo.jpg'
import Link from 'next/link'
export function Footer () {
  const links = [
    { text: 'Buy', href: '#' },
    { text: 'About us', href: '#' },
    { text: 'Agent finder', href: '#' },
    { text: 'Help center', href: '#' },
    { text: 'Contact us', href: '#' },
    { text: 'FAQs', href: '#' }
  ]

  const socialLinks = [
    {
      svg: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18.0002 18.0002V12.1402C18.0002 9.26024 17.3802 7.06024 14.0202 7.06024C12.4002 7.06024 11.3202 7.94024 10.8802 8.78024H10.8402V7.32024H7.66024V18.0002H10.9802V12.7002C10.9802 11.3002 11.2402 9.96024 12.9602 9.96024C14.6602 9.96024 14.6802 11.5402 14.6802 12.7802V17.9802H18.0002V18.0002ZM2.26024 7.32024H5.58024V18.0002H2.26024V7.32024ZM3.92024 2.00024C2.86024 2.00024 2.00024 2.86024 2.00024 3.92024C2.00024 4.98024 2.86024 5.86024 3.92024 5.86024C4.98024 5.86024 5.84024 4.98024 5.84024 3.92024C5.84024 2.86024 4.98024 2.00024 3.92024 2.00024Z'
            fill='CurrentColor'
          />
        </svg>
      ),
      link: '#'
    },
    {
      svg: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.08042 11.0398H6.10042C5.78042 11.0398 5.68042 10.9198 5.68042 10.6198V8.19978C5.68042 7.87978 5.80042 7.77978 6.10042 7.77978H8.08042V6.01978C8.08042 5.21978 8.22042 4.45978 8.62042 3.75978C9.04042 3.03978 9.64042 2.55978 10.4004 2.27978C10.9004 2.09978 11.4004 2.01978 11.9404 2.01978H13.9004C14.1804 2.01978 14.3004 2.13978 14.3004 2.41978V4.69978C14.3004 4.97978 14.1804 5.09978 13.9004 5.09978C13.3604 5.09978 12.8204 5.09978 12.2804 5.11978C11.7404 5.11978 11.4604 5.37978 11.4604 5.93978C11.4404 6.53978 11.4604 7.11978 11.4604 7.73978H13.7804C14.1004 7.73978 14.2204 7.85978 14.2204 8.17978V10.5998C14.2204 10.9198 14.1204 11.0198 13.7804 11.0198H11.4604V17.5398C11.4604 17.8798 11.3604 17.9998 11.0004 17.9998H8.50042C8.20042 17.9998 8.08042 17.8798 8.08042 17.5798V11.0398Z'
            fill='CurrentColor'
          />
        </svg>
      ),
      link: '#'
    },
    {
      svg: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18.9887 5.49171C18.7726 4.68845 18.1392 4.05525 17.3361 3.83895C15.8689 3.4375 9.99976 3.4375 9.99976 3.4375C9.99976 3.4375 4.1309 3.4375 2.66365 3.82375C1.87595 4.03981 1.2272 4.68859 1.01113 5.49171C0.625 6.95884 0.625 10.0015 0.625 10.0015C0.625 10.0015 0.625 13.0595 1.01113 14.5113C1.2274 15.3144 1.86051 15.9476 2.66377 16.1639C4.14634 16.5655 10 16.5655 10 16.5655C10 16.5655 15.8689 16.5655 17.3361 16.1792C18.1394 15.963 18.7726 15.3299 18.9889 14.5267C19.3749 13.0595 19.3749 10.0169 19.3749 10.0169C19.3749 10.0169 19.3903 6.95881 18.9887 5.49171ZM8.13115 12.8124V7.19055L13.0116 10.0015L8.13115 12.8124Z'
            fill='CurrentColor'
          />
        </svg>
      ),
      link: '#'
    },
    {
      svg: (
        <svg
          width='20'
          height='16'
          viewBox='0 0 20 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.6001 2.05995C18.8801 2.35995 18.1601 2.59995 17.3201 2.65995C18.1601 2.17995 18.7601 1.39995 19.0601 0.499951C18.2801 0.979951 17.4401 1.27995 16.5401 1.45995C15.8201 0.679951 14.8001 0.199951 13.7201 0.199951C11.5601 0.199951 9.76009 1.93995 9.76009 4.15995C9.76009 4.45995 9.82009 4.75995 9.88009 5.05995C6.58009 4.87995 3.70009 3.31995 1.72009 0.919951C1.36009 1.51995 1.18009 2.17995 1.18009 2.89995C1.18009 4.27995 1.90009 5.47995 2.92009 6.19995C2.26009 6.19995 1.66009 6.01995 1.12009 5.71995V5.77995C1.12009 7.69995 2.50009 9.25995 4.30009 9.61995C3.94009 9.67995 3.64009 9.73995 3.28009 9.73995C3.04009 9.73995 2.80009 9.73995 2.56009 9.67995C3.04009 11.24 4.54009 12.38 6.22009 12.44C4.90009 13.52 3.16009 14.12 1.30009 14.12C1.00009 14.12 0.640088 14.12 0.340088 14.06C2.14009 15.14 4.24009 15.8 6.46009 15.8C13.7201 15.8 17.6801 9.79995 17.6801 4.57995C17.6801 4.39995 17.6801 4.21995 17.6801 4.09995C18.4001 3.49995 19.0601 2.83995 19.6001 2.05995Z'
            fill='CurrentColor'
          />
        </svg>
      ),
      link: '#'
    }
  ]

  return (
    <footer className='py-12  w-full'>
      <div className='w-full'>
        <div className='flex flex-wrap w-full justify-between gap-8 items-center mb-8'>
          <div className='flex flex-col gap-3 flex-1'>
            <Link href='/'>
              <Image src={logo} alt='P33R Logo' className='w-[115px] h-7' />
            </Link>
            <nav className='flex flex-wrap gap-6'>
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className='text-gray-600 text-base font-semibold hover:text-gray-900 transition-colors'
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>

          <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-semibold'>
              Subscribe to our newsletter
            </h3>
            <div className='flex flex-wrap items-center gap-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <Button text='Subscribe' />
            </div>
          </div>
        </div>

        <div className='flex items-center gap-3 mb-4'>
          {socialLinks.map((socialLink, index) => (
            <a
              href={socialLink.link}
              key={index}
              className='bg-[#F6F7F8] border border-[#EAECF0] size-8 text-[#4B5563] flex items-center justify-center shrink-0 hover:bg-primary hover:text-white rounded-full'
            >
              {socialLink.svg}
            </a>
          ))}
        </div>

        <div className='flex flex-wrap justify-between items-center pt-8 border-t'>
          <select className='rounded-xl bg-[#F6F7F8] p-1.5 outline-none border px-4 '>
            <option value='en'>English</option>
            <option value='es'>Spanish</option>
          </select>
          <div className='text-base font-normal text-[#667085]'>
            © 2024 P33R, Inc.
          </div>
          <div className='flex gap-6'>
            <a
              href='#'
              className='text-base font-normal text-[#667085] hover:text-gray-900'
            >
              Terms
            </a>
            <a
              href='#'
              className='text-base font-normal text-[#667085] hover:text-gray-900'
            >
              Privacy
            </a>
            <a
              href='#'
              className='text-base font-normal text-[#667085] hover:text-gray-900'
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

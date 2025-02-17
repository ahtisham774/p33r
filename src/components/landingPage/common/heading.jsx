import PopOverText from './popOverText'

const Heading = ({ text, className }) => {
  return (
    <PopOverText>
      <h2 className={'text-4xl font-semibold mb-4 ' + className}>{text}</h2>
    </PopOverText>
  )
}

export default Heading

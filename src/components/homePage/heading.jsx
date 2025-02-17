import PopOverText from "../landingPage/common/popOverText"


const Heading = ({ text, className }) => {
  return (
    <PopOverText>
      <h2 className={'text-6xl font-bold mb-4 ' + className}>{text}</h2>
    </PopOverText>
  )
}

export default Heading

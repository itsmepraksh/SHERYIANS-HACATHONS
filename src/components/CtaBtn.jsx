import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const CtaBtn = ({text}) => {
  return (
    <div id="view-more" className="bg-red-300 flex items-center gap-2 w-fit p-2 px-4 rounded font-bold text-lg text-zinc-800">
          <h1 className=''>{text} </h1>
          <FontAwesomeIcon icon={faArrowRight} />
    </div>
  )
}

export default CtaBtn
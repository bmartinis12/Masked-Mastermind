import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function XIcon() {
  return (
    <a href="https://twitter.com/The_MMastermind" target='_blank' >
      <FontAwesomeIcon className='icon' icon={faXTwitter} style={{ color: '#fff' }} />
    </a>
  )
}
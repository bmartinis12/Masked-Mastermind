import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function YoutubeIcon() {
  return (
    <a href='https://www.youtube.com/@Masked.Mastermind' target='_blank' >
      <FontAwesomeIcon className='icon' icon={faYoutube} style={{ color: '#b2071d' }} />
    </a>
  )
}

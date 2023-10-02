import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DiscordIcon() {
  return (
    <a className='flex justify-center' href='https://discord.gg/XVWzNgpBdg' target='_blank' >
      <FontAwesomeIcon className='icon discord-icon' icon={faDiscord} style={{ color: '#7289da' }} />
    </a>
  )
}

import InstagramIcon from "./icons/InstagramIcon";
import XIcon from "./icons/XIcon";
import YoutubeIcon from "./icons/YoutubeIcon";


export default function Socials() {
  return (
    <div className="socials-container">
      <h2>My Socials:</h2>
      <div className="social-icons">
        <YoutubeIcon />
        <InstagramIcon />
        <XIcon />
      </div>
    </div>
  )
}

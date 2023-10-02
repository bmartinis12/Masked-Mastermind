import Image from "next/image"
import Link from "next/link";
import InstaLogo from './Instagram.png';

export default function InstagramIcon() {
  return (
    <a href="https://www.instagram.com/masked.mastermind/" target="_blank" >
      <Image className='icon' alt="Instagram Logo" src={InstaLogo} />
    </a>
  )
}
import Image from "next/image";
import Logo from '../../public/maskedLogo.png';

export default function NavBar() {
  return (
    <nav>
        <h2>Mastermind Network</h2>
        <Image className="logo" src={Logo} alt="Masked Masterming Logo" width={100} quality={100} placeholder="blur" />
    </nav>
  )
}

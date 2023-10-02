import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/maskedLogo.png';

export default function NavBar() {
  return (
    <nav>
        <Image src={Logo} alt="Masked Masterming Logo" width={150} quality={100} placeholder="blur" />
    </nav>
  )
}

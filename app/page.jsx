import Discord from "./components/Discord";
import IntroWindow from "./components/IntroWindow";
import Socails from "./components/Socials";


export default function Home() {
  return (
    <main>
      <IntroWindow />
      <Socails />
      <Discord />
    </main>
  )
}

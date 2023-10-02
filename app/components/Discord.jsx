import DiscordIcon from "./icons/DiscordIcon";

export default function Discord() {
  return (
    <div className="discord-container">
        <h2>Join my <span>Free</span> Discord:</h2>
        <DiscordIcon />
        <div className="list">
            <p>Mastermind Network offers:</p>
            <ul className="list-disc">
                <li>Free Education</li>
                <li>Buy/Sell Signals</li>
                <li>A place to Connect with other Passionate Traders</li>
            </ul>
        </div>
    </div>
  )
}

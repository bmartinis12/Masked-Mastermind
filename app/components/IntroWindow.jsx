

export default function IntroWindow() {
  return (
    <div className="intro-container">
        <video className="bg-video" poster="/videoPoster.png" playsInline autoPlay loop muted >
          <source src="/stocks.mp4" type="video/mp4" />
        </video>
        <div className="intro">
          <div className="name">
            <h2>Masked</h2>
            <h2>Mastermind</h2>
          </div>
          <div className="info">
            <p>I Create Profitable Traders</p>
          </div>
        </div>
    </div>
  )
}

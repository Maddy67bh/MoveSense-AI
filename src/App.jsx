import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Leaf,
  IndianRupee,
  Navigation,
  Sparkles,
  Clock3,
  Bus,
  Train,
  Car,
  MapPin,
  Zap
} from "lucide-react";
import "./App.css";

function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [step, setStep] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    const animation = setInterval(() => {
      setStep((s) => (s + 1) % 4);
      setTime((t) => t + 1);
    }, 2600);

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(animation);
    };
  }, []);

  const routes = [
    {
      icon: Train,
      title: "Metro + Walk",
      time: "32 min",
      cost: "₹45",
      reliability: "96%",
      text: "Fastest & reliable",
      className: "metro"
    },
    {
      icon: Bus,
      title: "Electric Bus",
      time: "41 min",
      cost: "₹25",
      reliability: "91%",
      text: "Lower carbon",
      className: "bus"
    },
    {
      icon: Car,
      title: "Smart Cab",
      time: "27 min",
      cost: "₹180",
      reliability: "87%",
      text: "Comfort priority",
      className: "cab"
    }
  ];

  return (
    <div className="app">

      {/* CURSOR TRACKER */}
      <div
        className="cursor-tracker"
        style={{
          left: cursor.x,
          top: cursor.y
        }}
      />

      {/* BACKGROUND */}
      <div className="grid-bg" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">
            <Navigation size={19} />
          </div>
          <span>MoveSense</span>
          <b>AI</b>
        </div>

        <div className="nav-status">
          <span className="live-dot" />
          AI MOBILITY ASSISTANT
        </div>

        <div className="nav-profile">
          <img src="/movesense-user.jpg" alt="User" />
          <span>Personal Mobility</span>
        </div>
      </nav>

      {/* MAIN */}
      <main>

        {/* HERO */}
        <section className="hero">

          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={15} />
              AI-POWERED URBAN MOBILITY
            </div>

            <h1>
              Move smarter.
              <br />
              <span>Arrive better.</span>
            </h1>

            <p className="hero-description">
              MoveSense AI analyzes time, cost, reliability and
              sustainability to recommend the mobility option
              that fits your journey.
            </p>

            <div className="hero-actions">
              <button className="primary-btn">
                <Zap size={17} />
                Find My Best Route
              </button>

              <div className="secure">
                <ShieldCheck size={18} />
                Privacy-first AI
              </div>
            </div>

            <div className="metrics">
              <div>
                <strong>24/7</strong>
                <span>AI planning</span>
              </div>
              <div>
                <strong>4.8×</strong>
                <span>faster decisions</span>
              </div>
              <div>
                <strong>38%</strong>
                <span>lower emissions</span>
              </div>
            </div>
          </div>

          {/* ANIMATED PHONE / VIDEO */}
          <div className="video-stage">

            <div className="video-label">
              <span className="record-dot" />
              LIVE AI DEMO
            </div>

            <div className="phone">

              <div className="phone-notch" />

              <div className="phone-screen">

                <div className="phone-header">
                  <div>
                    <small>GOOD MORNING</small>
                    <strong>Your journey</strong>
                  </div>

                  <img
                    src="/movesense-user.jpg"
                    alt="Profile"
                  />
                </div>

                <div className="map">

                  <div className="map-road road-one" />
                  <div className="map-road road-two" />
                  <div className="map-road road-three" />

                  <div className="map-grid" />

                  <div className="location start">
                    <div className="location-pulse" />
                    <MapPin size={18} />
                  </div>

                  <div className="location destination">
                    <MapPin size={18} />
                  </div>

                  <svg
                    className="route-line"
                    viewBox="0 0 300 190"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M30 145 C85 145 65 70 135 85 S215 35 270 45"
                      pathLength="1"
                    />
                  </svg>

                  <div className="moving-dot">
                    <span />
                  </div>

                  <div className="destination-label">
                    HITEC CITY
                  </div>

                </div>

                <div className="ai-card">

                  <div className="ai-heading">
                    <div className="ai-icon">
                      <Sparkles size={15} />
                    </div>
                    <div>
                      <span>MOVE SENSE AI</span>
                      <strong>Best option found</strong>
                    </div>
                  </div>

                  <div className="recommendation">
                    <div className="recommend-icon">
                      <Train size={23} />
                    </div>

                    <div className="recommend-text">
                      <strong>Metro + Walk</strong>
                      <span>Fastest & reliable</span>
                    </div>

                    <div className="recommend-time">
                      <strong>32</strong>
                      <span>min</span>
                    </div>
                  </div>

                  <div className="recommend-bottom">
                    <span>
                      <IndianRupee size={12} />
                      ₹45
                    </span>

                    <span>
                      <Leaf size={12} />
                      Low carbon
                    </span>

                    <span>
                      <ShieldCheck size={12} />
                      96% reliable
                    </span>
                  </div>

                </div>

                <div className="phone-bottom">
                  <span>08:42 AM</span>
                  <span>Optimal route selected</span>
                </div>

              </div>
            </div>

            {/* FLOATING CARDS */}
            <div className="floating-card card-time">
              <Clock3 size={18} />
              <div>
                <small>TIME SAVED</small>
                <strong>18 min</strong>
              </div>
            </div>

            <div className="floating-card card-green">
              <Leaf size={18} />
              <div>
                <small>CO₂ REDUCED</small>
                <strong>1.8 kg</strong>
              </div>
            </div>

            <div className="floating-card card-route">
              <Navigation size={17} />
              <div>
                <small>ROUTE</small>
                <strong>Optimal</strong>
              </div>
            </div>

          </div>
        </section>

        {/* ROUTE SECTION */}
        <section className="routes-section">

          <div className="section-heading">
            <div>
              <span>LIVE RECOMMENDATIONS</span>
              <h2>Choose your way forward.</h2>
            </div>

            <div className="location-chip">
              <MapPin size={14} />
              Hyderabad
            </div>
          </div>

          <div className="route-grid">

            {routes.map((route, index) => {
              const Icon = route.icon;

              return (
                <div
                  key={route.title}
                  className={`route-card ${route.className} ${
                    step === index ? "active-route" : ""
                  }`}
                >
                  <div className="route-top">
                    <div className="route-icon">
                      <Icon size={21} />
                    </div>

                    <span className="route-reliability">
                      {route.reliability} reliable
                    </span>
                  </div>

                  <h3>{route.title}</h3>

                  <p>{route.text}</p>

                  <div className="route-details">
                    <span>
                      <Clock3 size={14} />
                      {route.time}
                    </span>

                    <span>
                      <IndianRupee size={14} />
                      {route.cost}
                    </span>
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div>
            <strong>MoveSense AI</strong>
            <span>Intelligent mobility for smarter cities.</span>
          </div>

          <div className="footer-ai">
            <span className="live-dot" />
            AI SYSTEM ONLINE
          </div>
        </footer>

      </main>

    </div>
  );
}

export default App;

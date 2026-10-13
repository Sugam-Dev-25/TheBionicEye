const NAVY = "#0f1a4a";

/* ---------- small icons for the spec card ---------- */
function Icon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[22px] w-[22px] shrink-0"
      fill="none"
      stroke={NAVY}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons = {
  height: (
    <Icon>
      <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
    </Icon>
  ),
  flow: (
    <Icon>
      <path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z" />
    </Icon>
  ),
  pressure: (
    <Icon>
      <path d="M3 17a9 9 0 1 1 18 0z" />
      <path d="M12 17l4-6M7 13h.01M10 10h.01M14 9.5h.01" />
    </Icon>
  ),
  radar: (
    <Icon>
      <circle cx="12" cy="12" r="2" />
      <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2" />
    </Icon>
  ),
  mass: (
    <Icon>
      <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12M9 5v14M15 5v14" />
    </Icon>
  ),
  shield: (
    <svg
      viewBox="0 0 24 24"
      className="h-[24px] w-[24px] shrink-0"
      fill="none"
      stroke={NAVY}
      strokeWidth="1.6"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    </svg>
  ),
};

function SpecRow({ icon, label, sub, prefix, value, unit }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-[#e3eaf7] py-4 first:border-t-0">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <p className="text-[15px] font-semibold leading-tight text-[#0f1a4a]">
            {label}
          </p>
          {sub && (
            <p className="mt-0.5 text-[12.5px] leading-tight text-[#5b6475]">
              {sub}
            </p>
          )}
        </div>
      </div>
      <p className="flex items-baseline gap-1.5 whitespace-nowrap text-[#0f1a4a]">
        {prefix && <span className="text-[15px] font-medium">{prefix}</span>}
        <span className="text-[30px] font-bold leading-none sm:text-[32px]">
          {value}
        </span>
        {unit && <span className="text-[16px] font-semibold">{unit}</span>}
      </p>
    </div>
  );
}

/* ---------- floating label pill (inside the SVG) ---------- */
function Pill({ x, y, w, h = 40, text, delay = "0s", line }) {
  return (
    <g className="sys-float" style={{ animationDelay: delay }}>
      {line && (
        <line
          x1={line[0]}
          y1={line[1]}
          x2={line[2]}
          y2={line[3]}
          stroke="#1e3fae"
          strokeWidth="2"
        />
      )}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="10"
        fill="#e8f1ff"
        stroke="#9dbcf0"
        strokeWidth="2"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 1}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="22"
        fontWeight="600"
        fill="#16306b"
      >
        {text}
      </text>
    </g>
  );
}

/* ---------- animated illustration ---------- */
function Rotor({ x, y, scale = 1, delay = "0s" }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-3" y="0" width="6" height="14" rx="2" fill="#1b1b1f" />
      <ellipse
        className="sys-disc"
        cx="0"
        cy="-1"
        rx="50"
        ry="6"
        fill="#1b1b1f"
        fillOpacity="0.12"
        stroke="#1b1b1f"
        strokeOpacity="0.35"
        strokeWidth="1"
        strokeDasharray="14 10"
      />
      <path
        className="sys-blade"
        style={{ animationDelay: delay }}
        d="M-48 0 Q-22 -5 0 -1 Q22 3 48 0 Q22 -1 0 1 Q-22 4 -48 0 Z"
        fill="#111"
      />
      <circle cx="0" cy="-1" r="5" fill="#2c2c33" />
    </g>
  );
}

function DroneIllustration() {
  const wallCols = [470, 540, 610, 680];
  const wallRows = Array.from({ length: 9 }, (_, i) => 40 + i * 63.33);
  const particles = [
    { dy: -34, delay: "0s" },
    { dy: -18, delay: "0.25s" },
    { dy: -6, delay: "0.5s" },
    { dy: 6, delay: "0.15s" },
    { dy: 20, delay: "0.4s" },
    { dy: 34, delay: "0.65s" },
    { dy: 0, delay: "0.8s" },
  ];

  return (
    <svg
      viewBox="0 0 720 640"
      className="h-auto w-full"
      role="img"
      aria-label="ABZ C10 drone cleaning a 60 metre wall with radar standoff and a 170 bar nozzle"
    >
      <defs>
        <linearGradient id="sysSpray" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5aa2ee" stopOpacity="0.15" />
          <stop offset="1" stopColor="#5aa2ee" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* wall */}
      <rect
        x="470"
        y="40"
        width="210"
        height="570"
        fill="#e7f0fd"
        stroke="#9dbcf0"
        strokeWidth="2"
      />
      {wallCols.map((cx) => (
        <line
          key={cx}
          x1={cx}
          y1="40"
          x2={cx}
          y2="610"
          stroke="#9dbcf0"
          strokeWidth="1.5"
        />
      ))}
      {wallRows.map((ry) => (
        <line
          key={ry}
          x1="470"
          y1={ry}
          x2="680"
          y2={ry}
          stroke="#9dbcf0"
          strokeWidth="1.5"
        />
      ))}
      <ellipse
        className="sys-wet"
        cx="472"
        cy="388"
        rx="16"
        ry="48"
        fill="#5aa2ee"
      />

      {/* ruler */}
      <line
        className="sys-ruler"
        x1="60"
        y1="40"
        x2="60"
        y2="610"
        stroke="#16306b"
        strokeWidth="3"
        strokeDasharray="10 10"
      />
      <line x1="36" y1="40" x2="84" y2="40" stroke="#16306b" strokeWidth="4" />
      <line x1="36" y1="610" x2="84" y2="610" stroke="#16306b" strokeWidth="4" />

      {/* drone (bobbing) */}
      <g className="sys-bob">
        <g transform="translate(50 0)">
          {/* spray */}
          <path
            className="sys-spray-band"
            d="M355 385 L420 350 L420 425 Z"
            fill="url(#sysSpray)"
          />
          {particles.map((p, i) => (
            <circle
              key={i}
              className="sys-particle"
              cx="362"
              cy="383"
              r="2.8"
              fill="#5aa2ee"
              style={{ "--dy": `${p.dy}px`, animationDelay: p.delay }}
            />
          ))}

          {/* legs */}
          <path
            d="M205 330 L185 400 M255 330 L275 400"
            stroke="#1a1a1a"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M168 402 H202 M260 402 H294"
            stroke="#1a1a1a"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* arms */}
          <path
            d="M215 292 L120 252 M245 292 L345 252 M222 288 L170 234 M238 288 L300 234"
            stroke="#222"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* back rotors */}
          <Rotor x={170} y={226} scale={0.75} delay="0.03s" />
          <Rotor x={300} y={226} scale={0.75} delay="0.06s" />

          {/* body */}
          <rect x="195" y="282" width="70" height="46" rx="10" fill="#1b1b1f" />
          <rect x="213" y="268" width="34" height="18" rx="6" fill="#2b2b31" />
          <rect x="205" y="296" width="50" height="5" rx="2.5" fill="#e8e8ea" />

          {/* pump box */}
          <rect x="212" y="328" width="36" height="62" rx="6" fill="#121214" />
          <text
            x="230"
            y="346"
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="#fff"
          >
            FOISS
          </text>

          {/* hose */}
          <path
            d="M212 362 C184 362 176 380 188 398"
            stroke="#e8a21a"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* lance + nozzle */}
          <line
            x1="245"
            y1="352"
            x2="355"
            y2="385"
            stroke="#1e3fae"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="355" cy="385" r="4.5" fill="#1e3fae" />

          {/* front rotors */}
          <Rotor x={120} y={248} delay="0s" />
          <Rotor x={345} y={248} delay="0.05s" />

          {/* radar */}
          <g fill="none" stroke="#1aa05a" strokeWidth="3" strokeLinecap="round">
            <path
              className="sys-wave"
              d="M329 265.5 A45 45 0 0 1 329 334.5"
              strokeDasharray="9 8"
              style={{ animationDelay: "0s" }}
            />
            <path
              className="sys-wave"
              d="M345 246.4 A70 70 0 0 1 345 353.6"
              strokeDasharray="9 8"
              style={{ animationDelay: "0.3s" }}
            />
            <path
              className="sys-wave"
              d="M361 227.2 A95 95 0 0 1 361 372.8"
              strokeDasharray="9 8"
              style={{ animationDelay: "0.6s" }}
            />
          </g>
          <circle className="sys-ping" cx="300" cy="300" r="7" fill="#1aa05a" />
          <circle cx="300" cy="300" r="7" fill="#1aa05a" />
        </g>
      </g>

      {/* floating labels */}
      <Pill
        x={210}
        y={70}
        w={200}
        text="Radar standoff"
        delay="0s"
        line={[310, 110, 350, 293]}
      />
      <Pill
        x={320}
        y={490}
        w={200}
        text="Nozzle, 170 bar"
        delay="-1.3s"
        line={[400, 490, 405, 392]}
      />
      <Pill
        x={130}
        y={550}
        w={210}
        text="ABZ C10, 29 kg"
        delay="-2.4s"
        line={[250, 550, 278, 398]}
      />
      <Pill x={15} y={278} w={90} h={44} text="60 m" delay="-0.7s" />
    </svg>
  );
}

/* ---------- section ---------- */
function TheSystem() {
  return (
    <section id="system" className="relative w-full bg-white py-14 sm:py-16 lg:py-[80px]">
      {/* animation styles */}
      <style>{`
        @keyframes sysBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
        @keyframes sysFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes sysBlade {
          0% { transform: scaleX(1); }
          50% { transform: scaleX(-1); }
          100% { transform: scaleX(1); }
        }
        @keyframes sysDisc {
          to { stroke-dashoffset: -48; }
        }
        @keyframes sysWave {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 1; }
        }
        @keyframes sysPing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(3.2); opacity: 0; }
        }
        @keyframes sysParticle {
          0% { transform: translate(0, 0); opacity: 0; }
          15% { opacity: 0.95; }
          100% { transform: translate(62px, var(--dy)); opacity: 0; }
        }
        @keyframes sysWet {
          0%, 100% { opacity: 0.25; transform: scaleY(0.9); }
          50% { opacity: 0.55; transform: scaleY(1.05); }
        }
        @keyframes sysSprayBand {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes sysRuler {
          to { stroke-dashoffset: -20; }
        }

        .sys-bob { animation: sysBob 3.4s ease-in-out infinite; }
        .sys-float { animation: sysFloat 4s ease-in-out infinite; }
        .sys-blade {
          transform-box: fill-box;
          transform-origin: center;
          animation: sysBlade 0.11s linear infinite;
        }
        .sys-disc { animation: sysDisc 0.35s linear infinite; }
        .sys-wave { animation: sysWave 1.8s ease-in-out infinite; }
        .sys-ping {
          transform-box: fill-box;
          transform-origin: center;
          animation: sysPing 1.8s ease-out infinite;
        }
        .sys-particle { animation: sysParticle 1.1s linear infinite; }
        .sys-wet {
          transform-box: fill-box;
          transform-origin: center;
          animation: sysWet 1.4s ease-in-out infinite;
        }
        .sys-spray-band { animation: sysSprayBand 1.2s ease-in-out infinite; }
        .sys-ruler { animation: sysRuler 1.2s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .sys-bob, .sys-float, .sys-blade, .sys-disc, .sys-wave,
          .sys-ping, .sys-particle, .sys-wet, .sys-spray-band, .sys-ruler {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto w-[calc(100%-24px)] max-w-[1400px] sm:w-[calc(100%-40px)] lg:w-[calc(100%-64px)] xl:w-[calc(100%-80px)]">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 px-3 sm:px-4 lg:grid-cols-2 lg:gap-x-[72px] lg:px-5">
          {/* Heading */}
          <h2 className="text-[32px] font-bold leading-tight tracking-tight text-[#0b1038] sm:text-[38px] lg:text-[44px]">
            The System
          </h2>

          {/* Intro text */}
          <div className="space-y-3 text-[16px] leading-[1.7] text-[#5b6475]">
            <p>
              Drone cleaning removes the requirement for scaffolding, cradles,
              powered access or rope teams across a substantial proportion of
              facade, glazing, cladding and roof maintenance. The work is carried
              out from ground level, and setup is measured in minutes rather than
              days.
            </p>
            <p>
              Maximum take-off mass is 29 kg. The sub 25 kg limit that applied
              under the earlier authorisation route is not required under UK SORA.
            </p>
          </div>

          {/* Animated illustration */}
          <div className="w-full max-w-[720px] self-center">
            <DroneIllustration />
          </div>

          {/* Spec card */}
          <div className="self-start rounded-[20px] border border-[#c9d8f5] bg-gradient-to-b from-white to-[#f6f9ff] px-5 pb-5 pt-5 sm:px-6 lg:max-w-[700px] lg:justify-self-end">
            <div className="flex items-center justify-between gap-3 pb-4">
              <h3 className="text-[22px] font-bold text-[#0f1a4a]">
                ABZ Innovation C10
              </h3>
              <span className="text-[13px] font-medium text-[#2f5fd0]">
                Specifications
              </span>
            </div>

            <div className="border-t border-[#e3eaf7]">
              <SpecRow icon={icons.height} label="Working height" value="60" unit="m+" />
              <SpecRow
                icon={icons.flow}
                label="Flow rate"
                prefix="up to"
                value="15"
                unit="L/min"
              />
              <SpecRow
                icon={icons.pressure}
                label="Working pressure"
                sub="Up to 255 bar at peak"
                prefix="~"
                value="170"
                unit="bar"
              />
              <SpecRow
                icon={icons.radar}
                label="Collision avoidance"
                sub="With standoff control"
                value="Radar"
              />
              <SpecRow icon={icons.mass} label="Max take-off mass" value="29" unit="kg" />
            </div>

            <div className="mt-2 flex items-center gap-3 rounded-[12px] bg-[#d3e2fb] px-5 py-4 text-[14px] text-[#0f1a4a]">
              {icons.shield}
              <span>Reverse osmosis water available for delicate finishes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TheSystem;
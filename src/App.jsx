import { useState, useEffect, useRef } from "react";

function useIsMobile() {
  const [mobile, setMobile] = useState(typeof window !== "undefined" && window.innerWidth <= 640);
  useEffect(function () {
    function handle() { setMobile(window.innerWidth <= 640); }
    window.addEventListener("resize", handle);
    return function () { window.removeEventListener("resize", handle); };
  }, []);
  return mobile;
}

/* ─── Clean SVG Icons ─── */

function IconStorm({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
      <polyline points="13 11 9 17 15 17 11 23" />
    </svg>
  );
}

function IconSearch({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconHome({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconCamera({ size = 20, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function IconCalendar({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle", marginRight: 4 }}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconAgent({ size = 22, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      {/* Head */}
      <circle cx="12" cy="9" r="4.5" />
      {/* Body/shoulders */}
      <path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      {/* Headset band */}
      <path d="M5.5 9a6.5 6.5 0 0 1 13 0" fill="none" stroke={color} strokeWidth="2" />
      {/* Headset earpiece left */}
      <rect x="3.5" y="7.5" width="3" height="4" rx="1.5" />
      {/* Mic boom */}
      <path d="M3.5 11.5c0 2 1.5 3.5 3.5 3.5" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Mic dot */}
      <circle cx="7" cy="15" r="1.2" />
    </svg>
  );
}

function IconChat({ size = 22, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconSend({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

function IconVideo({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function IconMic({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function IconCheck({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: "middle", marginRight: 4 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const T = {
  bg: "#F5F5F7",
  white: "#FFFFFF",
  text: "#1D1D1F",
  t2: "#6E6E73",
  t3: "#AEAEB2",
  blue: "#0071E3",
  blueL: "#EAF3FF",
  blueS: "rgba(0,113,227,0.07)",
  green: "#34C759",
  greenL: "#EAFBEF",
  greenS: "rgba(52,199,89,0.07)",
  orange: "#FF9F0A",
  orangeL: "#FFF5E5",
  orangeS: "rgba(255,159,10,0.07)",
  red: "#FF453A",
  redL: "#FFECEB",
  redS: "rgba(255,69,58,0.07)",
  div: "rgba(0,0,0,0.06)",
  sh: "0 1px 3px rgba(0,0,0,0.04), 0 4px 14px rgba(0,0,0,0.035)",
  shL: "0 2px 8px rgba(0,0,0,0.04), 0 12px 28px rgba(0,0,0,0.06)",
  r: 18,
  rs: 14,
  font: "-apple-system, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif",
};

const CONTACTS = [
  {
    id: 1, name: "Tony Russo", addr: "2200 Post Oak Blvd, Conroe", phone: "(936) 555-0912",
    installed: "2019-12-01", shingle: "CertainTeed Landmark", sqft: 1800, hail: 2, health: 41,
    risk: "high", plan: null, mrr: 0, status: "not_contacted", tier: null,
    timeline: [
      { date: "Mar 31", type: "auto", text: "Sent intro text" },
      { date: "Mar 15", type: "alert", text: "Flagged high risk" },
      { date: "Feb 02", type: "alert", text: "Hail event" },
      { date: "Dec 01", type: "inspection", text: "Installed" },
    ],
    ai: "Oldest roof in portfolio at 6+ years with low slope and 2 hail events. Nearing the end of the optimal maintenance window. Warranty-eligible repairs may expire within the year. Without intervention, this roof is heading for unplanned re-roof. Strong candidate for immediate outreach and maintenance-to-re-roof conversion.",
    sms: "Tony, this is Lifeline Roofing. Your roof at Post Oak is coming up on 6 years and I want to make sure you're still covered. With the hail your area has seen, there might be warranty-eligible repairs we can catch before they expire. Free inspection, 30 minutes. Worth a look. Can I schedule you this week?"
  },
  {
    id: 2, name: "Charles Washington", addr: "1122 Pecan Grove Rd, Conroe", phone: "(936) 555-0718",
    installed: "2020-04-20", shingle: "GAF Timberline Ultra HD", sqft: 2800, hail: 3, health: 48,
    risk: "high", plan: null, mrr: 0, status: "outreach_sent", tier: null,
    timeline: [
      { date: "Mar 28", type: "auto", text: "Sent follow-up" },
      { date: "Mar 14", type: "auto", text: "Sent first text" },
      { date: "Mar 10", type: "alert", text: "Flagged top opportunity" },
      { date: "Jan 22", type: "alert", text: "Third hail event" },
    ],
    ai: "5-year-old complex roof with 3 hail events and dominant south-facing exposure. Multiple compounding risk factors. Predictive model shows 67% probability of requiring full re-roof within 18 months. PRIORITY: Highest revenue opportunity in current pipeline. Maintenance enrollment is the bridge to a projected $22K job project.",
    sms: "Charles, your roof at Pecan Grove is one of our earlier installs and it's been through 3 hail events and five Texas summers on that south-facing slope. I want to be straight with you. There's a good chance we find something that needs attention. A quick inspection now could save you a big surprise later. No cost for the visit. Can I come take a look?"
  },
  {
    id: 3, name: "Sandra Collins", addr: "3301 Magnolia Bend, Conroe", phone: "(936) 555-0334",
    installed: "2020-11-05", shingle: "GAF Timberline HDZ", sqft: 2100, hail: 3, health: 54,
    risk: "high", plan: null, mrr: 0, status: "not_contacted", tier: null,
    timeline: [
      { date: "Apr 01", type: "inspection", text: "Inspection due" },
      { date: "Mar 20", type: "alert", text: "Flagged urgent" },
      { date: "Feb 18", type: "alert", text: "Hail event" },
    ],
    ai: "Three hail events on a low-slope roof approaching 5 years. High probability of hidden damage at valley transitions and pipe boot seals. Granule displacement likely exceeding manufacturer thresholds. URGENT: Inspection recommended within 30 days. Strong maintenance-to-re-roof pipeline candidate with 67% probability of full re-roof within 18 months.",
    sms: "Sandra, this is Blu from Lifeline Roofing. Your roof on Magnolia Bend has been through some rough weather. 3 hail events in under 5 years on a low slope. I'm not calling to sell you a new roof. I want to see if we can extend what you've got by 3-5 years with some preventative care. Can I send someone out for a free look?"
  },
  {
    id: 4, name: "David Chen", addr: "4418 Willowbrook Ct, Huntsville", phone: "(936) 555-0523",
    installed: "2021-02-14", shingle: "Owens Corning TruDefinition", sqft: 2600, hail: 2, health: 63,
    risk: "medium", plan: null, mrr: 0, status: "outreach_sent", tier: null,
    timeline: [
      { date: "Mar 25", type: "auto", text: "Sent second text" },
      { date: "Mar 11", type: "auto", text: "Sent first text" },
      { date: "Mar 01", type: "alert", text: "Flagged sun exposure" },
    ],
    ai: "West-facing primary exposure drives elevated thermal cycling. Hot afternoon sun followed by rapid evening cooling causes expansion and contraction stress. Combined with 2 hail events, pipe boot seals and step flashing at sidewalls are likely degrading. A $200-$400 preventative repair now prevents a $3K-$5K emergency fix later.",
    sms: "David, your Willowbrook roof takes a lot of afternoon sun on that west side, and with a couple of hail events since we installed, I'd like to check your pipe boots and flashing. Those are the first things to go and they're cheap to fix now. We have openings Thursday and Friday. Want me to grab you a slot?"
  },
  {
    id: 5, name: "James Patterson", addr: "2841 Oak Ridge Dr, Conroe", phone: "(936) 555-0142",
    installed: "2022-03-15", shingle: "CertainTeed Landmark", sqft: 2400, hail: 2, health: 72,
    risk: "medium", plan: "Annual", mrr: 45, status: "enrolled", tier: null,
    timeline: [
      { date: "Mar 30", type: "auto", text: "Sent renewal reminder" },
      { date: "Mar 15", type: "complete", text: "Inspection done" },
      { date: "Jan 08", type: "auto", text: "Sent check-in" },
      { date: "Mar 15", type: "complete", text: "Enrolled in plan" },
    ],
    ai: "South-facing primary slope with 2 recorded hail events since installation. UV exposure is accelerating granule loss on the south face. Ridge cap seal strips show early fatigue. Maintenance visit within 60 days will catch this before it becomes a $4K-$6K partial re-roof.",
    sms: "Hey James, it's been about 2 years since we put on your roof at Oak Ridge Dr. With the hail your area caught last fall, I'd like to get eyes on your south-facing slope before summer heat sets in. Free inspection, 30 minutes, no pressure. Want me to send a tech out this week?"
  },
  {
    id: 6, name: "Robert Nguyen", addr: "9102 Pine Hollow Ct, Willis", phone: "(936) 555-0287",
    installed: "2021-08-22", shingle: "Owens Corning Duration", sqft: 1850, hail: 1, health: 81,
    risk: "low", plan: "Semi-Annual", mrr: 25, status: "enrolled", tier: null,
    timeline: [
      { date: "Mar 22", type: "complete", text: "Inspection done" },
      { date: "Feb 10", type: "auto", text: "Booked inspection" },
      { date: "Sep 14", type: "complete", text: "Enrolled in plan" },
    ],
    ai: "Steep pitch provides excellent drainage and reduces standing water risk. One minor hail event with no visible impact expected on Duration-class shingles. Performing within normal range for age. Annual inspection is sufficient.",
    sms: "Robert, your Pine Hollow roof is looking solid at 3 years. One quick check-up to make sure the flashing and vents are sealed tight before storm season."
  },
  {
    id: 7, name: "Maria Davis", addr: "1547 Lakewood Ln, Spring", phone: "(281) 555-0198",
    installed: "2023-01-10", shingle: "CertainTeed Presidential", sqft: 3200, hail: 0, health: 94,
    risk: "low", plan: "Annual", mrr: 55, status: "enrolled", tier: null,
    timeline: [
      { date: "Mar 18", type: "auto", text: "Sent check-in" },
      { date: "Feb 01", type: "complete", text: "Inspection done" },
      { date: "Jan 10", type: "complete", text: "Enrolled in Annual Plan at $55/mo" },
    ],
    ai: "Premium Presidential shingle on complex multi-directional geometry. Zero weather events. Performing excellently. Focus monitoring on valley-to-hip transitions and chimney counter-flashing at the 18-month mark.",
    sms: "Maria, your Presidential roof at Lakewood is performing beautifully. Coming up on 18 months, the perfect time for a quick valley and flashing check."
  },
  {
    id: 8, name: "Richard Thornton", addr: "14 Carlton Woods Dr, The Woodlands", phone: "(281) 555-0461",
    installed: "2020-06-10", shingle: "CertainTeed Presidential TL", sqft: 5200, hail: 2, health: 52,
    risk: "high", plan: null, mrr: 0, status: "not_contacted", tier: "platinum",
    timeline: [
      { date: "Apr 01", type: "alert", text: "Added to call list" },
      { date: "Mar 20", type: "alert", text: "Score dropped to 52" },
      { date: "Feb 15", type: "alert", text: "Hail event" },
    ],
    ai: "5,200 sq ft premium roof in Carlton Woods. Two hail events on a complex multi-hip geometry with 14 penetrations. Presidential TL shingles are high-end but the roof complexity creates multiple failure points at valleys and transitions. Estimated job value $38K. This is the highest-dollar opportunity in the database. Personal outreach strongly recommended.",
    sms: "Mr. Thornton, this is Blu with Lifeline Roofing. We installed your roof at Carlton Woods about 5 years ago and I wanted to personally check in. With the hail your area has taken, I would like to come out and make sure everything is holding up. No charge, just want to take care of you. When works best?"
  },
  {
    id: 9, name: "Catherine Whitfield", addr: "3827 River Oaks Blvd, Houston", phone: "(713) 555-0339",
    installed: "2021-03-22", shingle: "GAF Grand Sequoia", sqft: 4800, hail: 3, health: 44,
    risk: "high", plan: null, mrr: 0, status: "not_contacted", tier: "platinum",
    timeline: [
      { date: "Apr 02", type: "alert", text: "Urgent, schedule visit" },
      { date: "Mar 18", type: "alert", text: "Hail event" },
      { date: "Mar 01", type: "alert", text: "Score dropped to 44" },
    ],
    ai: "4,800 sq ft estate roof in River Oaks with premium Grand Sequoia shingles. Three hail events since installation. Complex roofline with dormers and copper flashing transitions. Estimated job value $34K. Multiple risk factors compounding. Highest urgency platinum contact. Schedule personal visit within 2 weeks.",
    sms: "Mrs. Whitfield, this is Blu from Lifeline Roofing. Your roof at River Oaks Blvd has been through some serious weather since we put it on. I would like to come by personally and take a look. With a home like yours, I want to make sure everything is right. Can I come out this week?"
  },
  {
    id: 10, name: "William Grant III", addr: "221 Fazio Ct, Carlton Woods", phone: "(281) 555-0517",
    installed: "2021-09-14", shingle: "CertainTeed Presidential TL", sqft: 4200, hail: 2, health: 61,
    risk: "medium", plan: null, mrr: 0, status: "outreach_sent", tier: "platinum",
    timeline: [
      { date: "Mar 30", type: "auto", text: "Sent follow-up" },
      { date: "Mar 16", type: "auto", text: "Sent first text" },
      { date: "Mar 10", type: "alert", text: "Added to call list" },
    ],
    ai: "4,200 sq ft roof in Carlton Woods with 2 hail events. Premium Presidential TL performing within range but approaching the maintenance window. Estimated job value $28K. Previous outreach sent with no response. AI recommends personal phone call as follow-up rather than another text.",
    sms: "Mr. Grant, this is Blu with Lifeline Roofing. I reached out a few weeks ago about your Carlton Woods roof. I know things get busy. Just wanted to follow up personally. Your roof is at the age where a quick check can save you real money down the road. Can I stop by?"
  },
  {
    id: 11, name: "Margaret Chen-Alvarez", addr: "8 Greyton Ln, The Woodlands", phone: "(281) 555-0624",
    installed: "2020-12-01", shingle: "GAF Grand Sequoia", sqft: 3800, hail: 2, health: 57,
    risk: "high", plan: null, mrr: 0, status: "not_contacted", tier: "platinum",
    timeline: [
      { date: "Apr 01", type: "alert", text: "Added to call list" },
      { date: "Mar 22", type: "alert", text: "Accelerated wear detected" },
      { date: "Feb 28", type: "alert", text: "Hail event" },
    ],
    ai: "3,800 sq ft premium roof in The Woodlands with Grand Sequoia shingles. Two hail events and 5+ years of age. South and west facing slopes showing accelerated wear. Estimated job value $26K. Strong candidate for maintenance enrollment leading to future re-roof pipeline.",
    sms: "Mrs. Chen-Alvarez, this is Blu with Lifeline Roofing. Your roof on Greyton Lane has been through a lot of weather over the past five years. I would like to come out and give you an honest assessment. No cost, no pressure. Just want to make sure your home is protected. When works for you?"
  },
];

const PHOTO_FINDINGS = [
  { label: "Flashing separation", loc: "Chimney, north side", sev: "high", cost: "$200-$400", note: "Gap between step flashing and chimney masonry. Water infiltration risk within 3 months." },
  { label: "Granule erosion", loc: "South slope, center", sev: "medium", cost: "Monitor", note: "UV-driven granule loss on south-facing shingles. Below critical threshold but progressing." },
  { label: "Pipe boot cracking", loc: "Plumbing vent, west", sev: "high", cost: "$75-$150", note: "Rubber boot seal showing UV cracks. Will leak within 6 months if not replaced." },
];

/* Abby flow data removed - flows are now inline in AbbyChat component */

/* ─── Utility Components ─── */

function FadeIn({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(10px)",
      transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      {children}
    </div>
  );
}

function Pill({ children, color = T.blue, bg: bgOverride }) {
  const bgMap = {
    [T.green]: T.greenS,
    [T.red]: T.redS,
    [T.orange]: T.orangeS,
    [T.blue]: T.blueS,
    [T.t3]: "rgba(0,0,0,0.04)",
  };
  const bg = bgOverride || bgMap[color] || T.blueS;

  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "4px 11px", borderRadius: 20,
      background: bg, color: color,
      fontSize: 12, fontWeight: 600,
    }}>
      {children}
    </span>
  );
}

function HealthRing({ score, size = 56 }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const color = score >= 80 ? T.green : score >= 60 ? T.orange : T.red;
  const bg = score >= 80 ? T.greenS : score >= 60 ? T.orangeS : T.redS;

  return (
    <div style={{ position: "relative", width: size, height: size, borderRadius: "50%", background: bg }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth={3} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={3}
          strokeDasharray={circ} strokeDashoffset={circ * (1 - score / 100)}
          strokeLinecap="round" style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(.16,1,.3,1)" }}
        />
      </svg>
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: size > 48 ? 16 : 12, fontWeight: 700, color: color,
      }}>
        {score}
      </div>
    </div>
  );
}

function Typer({ text, speed = 12, onDone }) {
  const [shown, setShown] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    setShown("");
    idx.current = 0;
    const iv = setInterval(() => {
      if (idx.current < text.length) {
        idx.current++;
        setShown(text.slice(0, idx.current));
      } else {
        clearInterval(iv);
        if (onDone) onDone();
      }
    }, speed);
    return () => clearInterval(iv);
  }, [text]);

  const cursor = shown.length < text.length ? "|" : "";
  return (
    <span>
      {shown}
      <span style={{ opacity: cursor ? 0.4 : 0, transition: "opacity 0.3s" }}>{cursor || "|"}</span>
    </span>
  );
}



function VoiceDemoPopup({ onClose }) {
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)",
      backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 250,
    }}>
      <div style={{
        background: T.white, borderRadius: 20, padding: "32px 36px", width: 320,
        textAlign: "center", boxShadow: "0 24px 80px rgba(0,0,0,0.15)",
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 28, background: T.bg,
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 16px",
        }}>
          <IconMic size={24} color={T.t3} />
        </div>
        <div style={{ fontSize: 17, fontWeight: 600, color: T.text, marginBottom: 8 }}>Demo Mode</div>
        <div style={{ fontSize: 14, color: T.t2, lineHeight: 1.5, marginBottom: 20 }}>
          Voice recording is not available in this preview. In the live version, you speak and it fills in automatically.
        </div>
        <button onClick={onClose} style={{
          background: T.blue, color: "#fff", border: "none", borderRadius: 980,
          padding: "10px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer",
        }}>
          Got it
        </button>
      </div>
    </div>
  );
}

function Card({ children, style: extraStyle, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: T.white, borderRadius: 16, padding: 28,
      boxShadow: "0 0 0 0.5px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.025)",
      ...extraStyle,
    }}>
      {children}
    </div>
  );
}

/* ─── Opener ─── */

function Opener({ onStart }) {
  const [phase, setPhase] = useState(0);
  const mob = useIsMobile();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 3000);
    const t2 = setTimeout(() => setPhase(2), 6000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 0) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontSize: 14, fontWeight: 600, color: T.red, textTransform: "uppercase", letterSpacing: 2, marginBottom: 20 }}>
            The Problem
          </div>
          <div style={{ fontSize: mob ? 26 : 48, fontWeight: 700, color: T.text, letterSpacing: -1.5, lineHeight: 1.2 }}>
            Roofing is tight right now.
          </div>
          <div style={{ fontSize: mob ? 26 : 48, fontWeight: 700, color: T.t3, letterSpacing: -1.5, lineHeight: 1.2, marginTop: 8 }}>
            No storms. Insurance is tightening.
          </div>
          <div style={{ fontSize: mob ? 26 : 48, fontWeight: 700, color: T.t3, letterSpacing: -1.5, lineHeight: 1.2, marginTop: 8 }}>
            You need cash flow every day.
          </div>
          <div style={{ marginTop: 40 }}>
            <button onClick={onStart} style={{
              background: T.blue, color: "#fff", border: "none", borderRadius: 980,
              padding: mob ? "12px 24px" : "14px 40px", fontSize: mob ? 15 : 17, fontWeight: 600, cursor: "pointer",
              boxShadow: "0 2px 12px rgba(0,113,227,0.35)",
            }}>
              See How It Works
            </button>
          </div>
        </FadeIn>
      </div>
    );
  }

  if (phase === 1) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontSize: 14, fontWeight: 600, color: T.orange, textTransform: "uppercase", letterSpacing: 2, marginBottom: 20 }}>
            Right Now
          </div>
          <div style={{ fontSize: mob ? 26 : 48, fontWeight: 700, color: T.text, letterSpacing: -1.5, lineHeight: 1.2 }}>
            4,000+ past customers in AccuLynx.
          </div>
          <div style={{ fontSize: mob ? 26 : 48, fontWeight: 700, color: T.t3, letterSpacing: -1.5, lineHeight: 1.2, marginTop: 8 }}>
            Nobody is following up.
          </div>
          <div style={{ fontSize: mob ? 26 : 48, fontWeight: 700, color: T.t3, letterSpacing: -1.5, lineHeight: 1.2, marginTop: 8 }}>
            That's money sitting on the table.
          </div>
          <div style={{ marginTop: 40 }}>
            <button onClick={onStart} style={{
              background: T.blue, color: "#fff", border: "none", borderRadius: 980,
              padding: mob ? "12px 24px" : "14px 40px", fontSize: mob ? 15 : 17, fontWeight: 600, cursor: "pointer",
              boxShadow: "0 2px 12px rgba(0,113,227,0.35)",
            }}>
              See How It Works
            </button>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", textAlign: "center" }}>
      <FadeIn>
        <div style={{ marginBottom: 24 }}>
          <img src="/logo.png" alt="Lifeline Roofing" style={{ height: 40, objectFit: "contain" }} />
        </div>
        <div style={{ fontSize: mob ? 28 : 52, fontWeight: 700, color: T.text, letterSpacing: -1.5, lineHeight: 1.15 }}>
          Turn maintenance into recurring revenue.
        </div>
        <div style={{ fontSize: mob ? 28 : 52, fontWeight: 700, color: T.blue, letterSpacing: -1.5, lineHeight: 1.15, marginTop: 4 }}>
          Automated by AI.
        </div>
        <div style={{ marginTop: 40 }}>
          <button onClick={onStart} style={{
            background: T.blue, color: "#fff", border: "none", borderRadius: 980,
            padding: mob ? "12px 24px" : "14px 40px", fontSize: mob ? 15 : 17, fontWeight: 600, cursor: "pointer",
            boxShadow: "0 2px 12px rgba(0,113,227,0.35)",
          }}>
            See How It Works
          </button>
        </div>
      </FadeIn>
    </div>
  );
}

/* ─── New Contact Modal (Magic Moment) ─── */

function NewContactModal({ onClose, onNav }) {
  const mob = useIsMobile();
  const [formData, setFormData] = useState({
    name: "", addr: "", installed: "", shingle: "CertainTeed Landmark",
  });
  const [step, setStep] = useState("form"); // form, thinking, result
  const [generatedContact, setGeneratedContact] = useState(null);

  function handleChange(field, value) {
    setFormData(function (prev) {
      return Object.assign({}, prev, { [field]: value });
    });
  }

  function handleAnalyze() {
    setStep("thinking");
    setTimeout(function () {
      var installed = formData.installed || "2021-06-15";
      var ageYears = ((Date.now() - new Date(installed).getTime()) / (365.25 * 24 * 3600000));
      var hailCount = Math.floor(Math.random() * 3) + 1;
      var baseScore = Math.max(30, Math.min(95, 100 - (ageYears * 8) - (hailCount * 7) + Math.floor(Math.random() * 10)));
      var score = Math.round(baseScore);
      var risk = score < 60 ? "high" : score < 80 ? "medium" : "low";
      var firstName = formData.name.split(" ")[0] || "Customer";
      var shortAddr = formData.addr.split(",")[0] || "your property";
      var shingleShort = formData.shingle.split(" ").pop();

      var aiText = "";
      if (risk === "high") {
        aiText = ageYears.toFixed(1) + "-year-old " + formData.shingle + " roof with " + hailCount + " recorded hail events. Age and weather exposure are compounding. Granule loss and flashing degradation are likely progressing beyond safe thresholds. Recommend urgent inspection within 30 days. Strong candidate for maintenance enrollment and potential future re-roof pipeline within 12-18 months.";
      } else if (risk === "medium") {
        aiText = formData.shingle + " roof at " + ageYears.toFixed(1) + " years with " + hailCount + " hail event" + (hailCount > 1 ? "s" : "") + " on record. Performance is within expected range but approaching the window where proactive maintenance pays off significantly. Recommend scheduling an inspection within 60 days to catch early-stage wear before it becomes costly.";
      } else {
        aiText = formData.shingle + " roof performing well at " + ageYears.toFixed(1) + " years. " + (hailCount === 0 ? "No weather events on record." : "Minor hail exposure with no expected impact on this shingle class.") + " Standard annual maintenance check is sufficient. Ideal candidate for early enrollment to lock in long-term protection.";
      }

      var smsText = "Hey " + firstName + ", this is Lifeline Roofing. Your roof at " + shortAddr + " is " + ageYears.toFixed(1) + " years in";
      if (hailCount > 0) {
        smsText += " and your area has seen " + hailCount + " hail event" + (hailCount > 1 ? "s" : "") + " since install";
      }
      if (risk === "high") {
        smsText += ". I want to be honest with you. There is a good chance we find something that needs attention. A quick inspection now could save you a big surprise later. Free visit, no pressure. Can I schedule you this week?";
      } else if (risk === "medium") {
        smsText += ". Now is a great time for a quick check-up before the next storm season. Free inspection, 30 minutes. Want me to send a tech out?";
      } else {
        smsText += ". Everything is likely in good shape, but a quick annual check keeps it that way. Want me to get you on the schedule?";
      }

      var newContact = {
        id: 99,
        name: formData.name || "New Customer",
        addr: formData.addr || "Address pending",
        phone: "(936) 555-0000",
        installed: installed,
        shingle: formData.shingle,
        sqft: 2200,
        hail: hailCount,
        health: score,
        risk: risk,
        plan: null,
        mrr: 0,
        status: "not_contacted",
        ai: aiText,
        sms: smsText,
      };

      setGeneratedContact(newContact);
      setStep("result");
    }, 2800);
  }

  var canAnalyze = formData.name.length > 0 && formData.addr.length > 0;

  var shingleOptions = [
    "CertainTeed Landmark",
    "CertainTeed Presidential",
    "CertainTeed Landmark Pro",
    "GAF Timberline HDZ",
    "GAF Timberline Ultra HD",
    "Owens Corning Duration",
    "Owens Corning TruDefinition",
  ];

  var inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: 12,
    border: "1px solid " + T.div, background: T.bg, fontSize: 15,
    color: T.text, outline: "none", fontFamily: T.font,
    boxSizing: "border-box",
  };

  var labelStyle = {
    fontSize: 12, fontWeight: 600, color: T.t2, textTransform: "uppercase",
    letterSpacing: 0.6, marginBottom: 6, display: "block",
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)",
      backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200,
    }}>
      <div style={{
        background: T.white, borderRadius: mob ? 16 : 24, padding: mob ? 20 : 36, width: mob ? "calc(100vw - 32px)" : 520,
        boxShadow: "0 24px 80px rgba(0,0,0,0.15)", maxHeight: "90vh", overflowY: "auto",
      }}>
        {step === "form" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: T.text }}>Add a Contact</div>
                <div style={{ fontSize: 14, color: T.t2, marginTop: 4 }}>Enter their info and watch the AI do the rest.</div>
              </div>
              <button onClick={onClose} style={{
                background: T.bg, border: "none", borderRadius: 980, width: 32, height: 32,
                fontSize: 16, color: T.t3, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {"x"}
              </button>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Customer Name</label>
              <input
                placeholder="e.g. Mike Johnson"
                value={formData.name}
                onChange={function (e) { handleChange("name", e.target.value); }}
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Property Address</label>
              <input
                placeholder="e.g. 4520 Elm Creek Dr, Conroe, TX"
                value={formData.addr}
                onChange={function (e) { handleChange("addr", e.target.value); }}
                style={inputStyle}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 14, marginBottom: 24 }}>
              <div>
                <label style={labelStyle}>Install Date</label>
                <input
                  type="date"
                  value={formData.installed}
                  onChange={function (e) { handleChange("installed", e.target.value); }}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Shingle Type</label>
                <select
                  value={formData.shingle}
                  onChange={function (e) { handleChange("shingle", e.target.value); }}
                  style={Object.assign({}, inputStyle, { height: 46 })}
                >
                  {shingleOptions.map(function (s) {
                    return <option key={s} value={s}>{s}</option>;
                  })}
                </select>
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!canAnalyze}
              style={{
                width: "100%", padding: "14px 0",
                background: canAnalyze ? T.blue : T.t3,
                color: "#fff", border: "none", borderRadius: 980,
                fontSize: 16, fontWeight: 600, cursor: canAnalyze ? "pointer" : "default",
                boxShadow: canAnalyze ? "0 2px 12px rgba(0,113,227,0.3)" : "none",
              }}
            >
              Analyze This Roof
            </button>
          </div>
        )}

        {step === "thinking" && (
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <div style={{
              width: 48, height: 48, border: "3px solid " + T.div,
              borderTopColor: T.blue, borderRadius: "50%",
              animation: "lifelinespin 0.8s linear infinite",
              margin: "0 auto 24px",
            }} />
            <style>{`@keyframes lifelinespin { to { transform: rotate(360deg); } }`}</style>
            <div style={{ fontSize: 18, fontWeight: 600, color: T.text, marginBottom: 8 }}>Analyzing roof...</div>
            <div style={{ fontSize: 14, color: T.t2, lineHeight: 1.6 }}>
              Checking install age, shingle specs, local weather<br />history, UV exposure, and hail records
            </div>
          </div>
        )}

        {step === "result" && generatedContact && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: T.text }}>{generatedContact.name}</div>
                <div style={{ fontSize: 14, color: T.t2, marginTop: 2 }}>{generatedContact.addr}</div>
              </div>
              <HealthRing score={generatedContact.health} size={64} />
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              <Pill color={generatedContact.risk === "high" ? T.red : generatedContact.risk === "medium" ? T.orange : T.green}>
                {generatedContact.risk === "high" ? "High Risk" : generatedContact.risk === "medium" ? "Medium Risk" : "Low Risk"}
              </Pill>
              <Pill color={T.t3} bg="rgba(0,0,0,0.04)">{generatedContact.hail} hail events detected</Pill>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: T.blue,  }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: T.t2 }}>AI Analysis</span>
              </div>
              <div style={{ fontSize: 14, color: T.t2, lineHeight: 1.7, padding: "14px 18px", background: T.bg, borderRadius: T.rs }}>
                <Typer text={generatedContact.ai} speed={8} />
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: T.green,  }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: T.t2 }}>Generated SMS</span>
              </div>
              <div style={{ fontSize: 14, color: T.t2, lineHeight: 1.7, padding: "14px 18px", background: T.bg, borderRadius: T.rs }}>
                <Typer text={generatedContact.sms} speed={8} />
              </div>
            </div>

            {/* AccuLynx Sync */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              padding: "10px 0", marginBottom: 10,
            }}>
              <IconCheck size={14} color={T.green} />
              <span style={{ fontSize: 12, fontWeight: 600, color: T.green }}>Synced to AccuLynx</span>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={function () { onClose(); onNav("detail", generatedContact); }}
                style={{
                  flex: 1, background: T.blue, color: "#fff", border: "none", borderRadius: 980,
                  padding: "13px 0", fontSize: 15, fontWeight: 600, cursor: "pointer",
                  boxShadow: "0 2px 10px rgba(0,113,227,0.3)",
                }}
              >
                View Full Profile
              </button>
              <button
                onClick={onClose}
                style={{
                  padding: "13px 24px", background: "transparent", color: T.t2,
                  border: "1px solid " + T.div, borderRadius: 980, fontSize: 14, fontWeight: 500, cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Command Center ─── */

function Home({ onNav }) {
  const [pct, setPct] = useState(15);
  const [queueTab, setQueueTab] = useState("risk");
  const [showNewContact, setShowNewContact] = useState(false);
  const mob = useIsMobile();
  const avgH = Math.round(CONTACTS.reduce((a, c) => a + c.health, 0) / CONTACTS.length);
  const highR = CONTACTS.filter(c => c.risk === "high").length;
  const enrolled = CONTACTS.filter(c => c.status === "enrolled").length;
  const mrr = CONTACTS.reduce((a, c) => a + c.mrr, 0);

  const base = 4231;
  const members = Math.round(base * pct / 100);
  const avgPlan = 45;
  const mrrCalc = members * avgPlan;
  const annual = mrrCalc * 12;

  const stats = [
    { label: "Need Attention", content: <span style={{ fontSize: 28, fontWeight: 700, color: T.red }}>312</span>, sub: "roofs flagged by AI" },
    { label: "Plan Revenue", content: <span style={{ fontSize: 28, fontWeight: 700, color: T.green }}>$10K/mo</span>, sub: "up $1,800 this month" },
  ];

  const priorityContacts = [...CONTACTS].sort((a, b) => a.health - b.health);

  return (
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      {showNewContact && (
        <NewContactModal
          onClose={function () { setShowNewContact(false); }}
          onNav={onNav}
        />
      )}

      <FadeIn>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: T.text, margin: 0, letterSpacing: -0.5 }}>Command Center</h1>
          <button
            onClick={function () { setShowNewContact(true); }}
            style={{
              background: T.blue, color: "#fff", border: "none", borderRadius: 980,
              padding: mob ? "10px 16px" : "8px 20px", fontSize: mob ? 12 : 13, fontWeight: 600, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 4,
            }}
          >
            + Add Contact
          </button>
        </div>
      </FadeIn>

      {/* Weather Alert */}
      <FadeIn delay={80}>
        <div
          onClick={() => onNav("weather")}
          style={{
            background: T.white, borderRadius: 16, padding: "20px 26px",
            display: "flex", alignItems: "center", gap: 18, cursor: "pointer",
            marginBottom: 24,
          }}
        >
          <div style={{
            width: 42, height: 42, borderRadius: 12, background: T.orangeL,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <IconStorm size={20} color={T.orange} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: mob ? 14 : 15, fontWeight: 600, color: T.text }}>{mob ? "Storm Watch: Montgomery Co." : "Storm Watch: Montgomery and Walker Counties"}</div>
            <div style={{ fontSize: mob ? 12 : 13, color: T.t3, marginTop: 3 }}>{mob ? "1,247 texts ready" : "1,247 personalized messages ready to deploy"}</div>
          </div>
          <span style={{ color: T.blue, fontSize: 14, fontWeight: 500, whiteSpace: "nowrap" }}>Review {"›"}</span>
        </div>
      </FadeIn>

      {/* Stats Row */}
      <FadeIn delay={160}>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(2, 1fr)", gap: 10, marginBottom: 20 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: T.white, borderRadius: 14, padding: "16px 14px",
              boxShadow: "0 0 0 0.5px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.025)",
            }}>
              <div style={{ fontSize: 11, color: T.t3, fontWeight: 500, marginBottom: 10 }}>
                {s.label}
              </div>
              {s.content}
              <div style={{ fontSize: 11, color: T.t3, marginTop: 8 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Automated Follow-Up Queue */}
      <FadeIn delay={200}>
        <Card style={{ marginBottom: 16, padding: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: T.text }}>Follow-Ups</div>
            <Pill color={T.blue}>This Week</Pill>
          </div>
          {[
            { name: "Tony Russo", phrase: "Sending intro", status: "queued" },
            { name: "Charles Washington", phrase: "Call him", status: "flagged" },
            { name: "James Patterson", phrase: "Sent renewal", status: "sent" },
            { name: "David Chen", phrase: "Sending follow-up", status: "queued" },
            { name: "Sandra Collins", phrase: "Sent storm text", status: "sent" },
          ].slice(0, mob ? 3 : 5).map((item, i) => (
            <div key={i} style={{
              padding: mob ? "14px 0" : "10px 0",
              borderTop: i > 0 ? `1px solid ${T.div}` : "none",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: 4, flexShrink: 0,
                background: item.status === "sent" ? T.green : item.status === "flagged" ? T.orange : T.blue,
              }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: T.text, flex: 1 }}>{item.name}</span>
              <span style={{ fontSize: 12, color: item.status === "sent" ? T.green : item.status === "flagged" ? T.orange : T.blue, fontWeight: 500 }}>
                {item.phrase}
              </span>
            </div>
          ))}
        </Card>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 20 }}>
        {/* Priority Queue with Segmented Toggle */}
        <FadeIn delay={280}>
          <Card>

            {/* Segmented Control */}
            <div style={{
              display: "inline-flex", background: T.bg, borderRadius: 10, padding: 3, marginBottom: 16,
            }}>
              {[
                { id: "risk", label: "At Risk" },
                { id: "platinum", label: "Platinum" },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setQueueTab(tab.id)}
                  style={{
                    padding: mob ? "10px 20px" : "7px 18px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontSize: 13, fontWeight: 600,
                    background: queueTab === tab.id ? T.white : "transparent",
                    color: queueTab === tab.id ? (tab.id === "risk" ? T.red : T.blue) : T.t3,
                    boxShadow: queueTab === tab.id ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* At Risk List */}
            {queueTab === "risk" && priorityContacts.filter(c => !c.tier).map((c, i) => (
              <div
                key={c.id}
                onClick={() => onNav("detail", c)}
                style={{
                  display: "flex", alignItems: "center", gap: mob ? 10 : 14,
                  padding: mob ? "16px 0" : "13px 0", cursor: "pointer",
                  borderTop: i > 0 ? `1px solid ${T.div}` : "none",
                }}
              >
                <HealthRing score={c.health} size={mob ? 36 : 40} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: mob ? 14 : 15, fontWeight: 600, color: T.text }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: T.t3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{mob ? (c.addr.split(" ").slice(1, 3).join(" ") + " · " + c.hail + " hail") : (c.addr.split(",")[0] + " · " + c.hail + " hail events")}</div>
                </div>
                <Pill color={c.risk === "high" ? T.red : c.risk === "medium" ? T.orange : T.green}>
                  {c.risk === "high" ? "High" : c.risk === "medium" ? "Med" : "Low"}
                </Pill>
                <span style={{ color: T.t3, fontSize: 16 }}>{"›"}</span>
              </div>
            ))}

            {/* Platinum List */}
            {queueTab === "platinum" && (
              <div>
                {/* Platinum summary bar */}
                <div style={{
                  display: "flex", flexDirection: mob ? "column" : "row", justifyContent: "space-between", alignItems: mob ? "flex-start" : "center", gap: mob ? 4 : 0,
                  padding: "12px 16px", background: "linear-gradient(135deg, rgba(0,113,227,0.06), rgba(52,199,89,0.06))",
                  borderRadius: 12, marginBottom: 14,
                }}>
                  <div style={{ fontSize: 12, color: T.t2 }}>4 properties · <strong style={{ color: T.text }}>avg $32K</strong> per job</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: T.green }}>$131K in potential jobs</div>
                </div>

                {[...CONTACTS].filter(c => c.tier === "platinum").sort((a, b) => b.sqft - a.sqft).map((c, i) => {
                  const estValue = Math.round(c.sqft * 7.2 / 1000);
                  return (
                    <div
                      key={c.id}
                      onClick={() => onNav("detail", c)}
                      style={{
                        display: "flex", alignItems: "center", gap: mob ? 10 : 14,
                        padding: mob ? "16px 0" : "14px 0", cursor: "pointer",
                        borderTop: i > 0 ? `1px solid ${T.div}` : "none",
                      }}
                    >
                      <div style={{
                        width: mob ? 36 : 40, height: mob ? 36 : 40, borderRadius: 10, flexShrink: 0,
                        background: "linear-gradient(135deg, " + T.blueS + ", " + T.greenS + ")",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 14, fontWeight: 700, color: T.blue,
                      }}>
                        ${estValue}K
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: mob ? 14 : 15, fontWeight: 600, color: T.text }}>{c.name}</div>
                        <div style={{ fontSize: 12, color: T.t3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{mob ? (c.addr.split(",")[0].split(" ").slice(1).join(" ") + " · " + c.sqft.toLocaleString() + " sqft") : (c.addr.split(",")[0] + " · " + c.sqft.toLocaleString() + " sq ft")}</div>
                      </div>
                      <Pill color={T.blue} bg="rgba(0,113,227,0.08)">Call</Pill>
                      <span style={{ color: T.t3, fontSize: 16 }}>{"›"}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        </FadeIn>

        {/* ROI Calculator */}
        <FadeIn delay={360}>
          <Card>
            <div style={{ fontSize: 16, fontWeight: 600, color: T.text, marginBottom: 20 }}>Revenue Calculator</div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 14, color: T.t2 }}>Sign-up rate</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: T.blue }}>{pct}%</span>
              </div>
              <input
                type="range" min={5} max={40} value={pct}
                onChange={e => setPct(Number(e.target.value))}
                style={{ width: "100%", accentColor: T.blue, height: mob ? 10 : 6 }}
              />
            </div>

            <div style={{ padding: "18px 20px", background: T.greenL, borderRadius: T.rs, textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: T.green, letterSpacing: -0.5 }}>
                ${mrrCalc.toLocaleString()}/mo
              </div>
              <div style={{ fontSize: 13, color: T.t3, marginTop: 4 }}>{members.toLocaleString()} customers at ${avgPlan}/mo</div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}

/* ─── Contact Detail ─── */

function Detail({ contact, onBack }) {
  const mob = useIsMobile();
  const [showAI, setShowAI] = useState(false);
  const [showSms, setShowSms] = useState(false);
  const [smsDone, setSmsDone] = useState(false);
  const [sent, setSent] = useState(false);
  const [showVoiceDemo, setShowVoiceDemo] = useState(false);
  const c = contact;
  const age = ((Date.now() - new Date(c.installed).getTime()) / (365.25 * 24 * 3600000)).toFixed(1);

  const riskColor = c.risk === "high" ? T.red : c.risk === "medium" ? T.orange : T.green;
  const riskLabel = c.risk === "high" ? "High Risk" : c.risk === "medium" ? "Medium Risk" : "Low Risk";

  const detailCards = [
    { label: "Installed", value: new Date(c.installed).toLocaleDateString("en-US", { month: "short", year: "numeric" }) },
    { label: "Age", value: age + " yrs" },
    { label: "Sq Ft", value: c.sqft.toLocaleString() },
    { label: "Hail Events", value: String(c.hail) },
    { label: "Shingle", value: c.shingle.split(" ").pop() },
  ];

  return (
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      <button onClick={onBack} style={{
        background: "none", border: "none", color: T.blue, fontSize: 15,
        cursor: "pointer", fontWeight: 500, padding: 0, marginBottom: 20,
      }}>
        {"‹ Back"}
      </button>

      {/* Hero Card */}
      <FadeIn>
        <Card style={{ marginBottom: 20, display: "flex", flexDirection: mob ? "column" : "row", justifyContent: "space-between", alignItems: mob ? "flex-start" : "flex-start", gap: mob ? 16 : 0, padding: mob ? "20px 16px" : "26px 30px" }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: T.text, margin: 0, letterSpacing: -0.5 }}>{c.name}</h2>
            <p style={{ fontSize: 15, color: T.t2, margin: "4px 0" }}>{c.addr} · {c.phone}</p>
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <Pill color={riskColor}>{riskLabel}</Pill>
              {c.plan ? (
                <Pill color={T.blue}>{c.plan} Plan · ${c.mrr}/mo</Pill>
              ) : (
                <Pill color={T.t3} bg="rgba(0,0,0,0.04)">Not Enrolled</Pill>
              )}
            </div>
          </div>
          <HealthRing score={c.health} size={80} />
        </Card>
      </FadeIn>

      {/* Detail Tiles */}
      <FadeIn delay={80}>
        <div style={{ display: "flex", gap: 16, fontSize: 13, color: T.t3, marginBottom: 16, padding: "0 4px" }}>
          <span><IconCalendar size={12} color={T.t3} />{age} yrs</span>
          <span>{c.sqft.toLocaleString()} sq ft</span>
          <span><IconStorm size={12} color={T.t3} />{c.hail} hail</span>
        </div>
      </FadeIn>

      {/* Activity Timeline */}
      {c.timeline && c.timeline.length > 0 && (
        <FadeIn delay={120}>
          <Card style={{ marginBottom: 20, padding: "22px 28px" }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 14 }}>Activity</div>
            <div style={{ position: "relative", paddingLeft: 20 }}>
              {/* Vertical line */}
              <div style={{
                position: "absolute", left: 5, top: 6, bottom: 6, width: 1,
                background: T.div,
              }} />
              {c.timeline.map((entry, i) => {
                const dotColor = entry.type === "alert" ? T.orange : entry.type === "complete" || entry.type === "inspection" ? T.green : T.blue;
                return (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 14,
                    paddingBottom: i < c.timeline.length - 1 ? 14 : 0,
                    position: "relative",
                  }}>
                    {/* Dot */}
                    <div style={{
                      width: 11, height: 11, borderRadius: 6, background: dotColor,
                      flexShrink: 0, marginTop: 2, position: "absolute", left: -20,
                      border: "2px solid " + T.white,
                    }} />
                    <div style={{ fontSize: 12, color: T.t3, fontWeight: 500, width: 50, flexShrink: 0 }}>{entry.date}</div>
                    <div style={{ fontSize: 13, color: T.t2, lineHeight: 1.4 }}>{entry.text}</div>
                  </div>
                );
              })}
            </div>
          </Card>
        </FadeIn>
      )}

      {/* AI Analysis + Outreach */}
      <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 20 }}>
        <FadeIn delay={160}>
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: T.blue,  }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: T.t2 }}>AI Analysis</span>
            </div>
            {!showAI ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <button onClick={() => setShowAI(true)} style={{
                  background: T.blue, color: "#fff", border: "none", borderRadius: 980,
                  padding: "12px 30px", fontSize: 15, fontWeight: 600, cursor: "pointer",
                }}>
                  Analyze This Roof
                </button>
              </div>
            ) : (
              <div style={{ fontSize: 15, color: T.t2, lineHeight: 1.8 }}>
                <Typer text={c.ai} speed={10} />
              </div>
            )}
          </Card>
        </FadeIn>

        <FadeIn delay={240}>
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: T.green,  }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: T.t2 }}>AI Outreach</span>
            </div>
            {!showSms ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <button onClick={() => setShowSms(true)} style={{
                  background: T.blue, color: "#fff", border: "none", borderRadius: 980,
                  padding: "12px 30px", fontSize: 15, fontWeight: 600, cursor: "pointer",
                }}>
                  Write a Message
                </button>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: 15, color: T.t2, lineHeight: 1.8, marginBottom: 16 }}>
                  <Typer text={c.sms} speed={10} onDone={() => setSmsDone(true)} />
                </div>
                {smsDone && !sent && (
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => setSent(true)} style={{
                      flex: 1, background: T.blue, color: "#fff", border: "none", borderRadius: 980,
                      padding: "12px 0", fontSize: 15, fontWeight: 600, cursor: "pointer",
                      boxShadow: "0 2px 10px rgba(0,113,227,0.3)",
                    }}>
                      Send SMS
                    </button>
                    <button onClick={function () { setShowVoiceDemo(true); }} style={{
                      padding: "12px 20px", background: "transparent", color: T.t2,
                      border: `1px solid ${T.div}`, borderRadius: 980, fontSize: 14, fontWeight: 500, cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 6,
                    }}>
                      <IconMic size={12} color={T.t2} />Edit
                    </button>
                  </div>
                )}
                {sent && (
                  <div style={{ padding: "14px 18px", background: T.greenL, borderRadius: T.rs, textAlign: "center" }}>
                    <div style={{ color: T.green, fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}><IconCheck size={16} color={T.green} />Sent to {c.phone}</div>
                    <div style={{ color: T.t2, fontSize: 13, marginTop: 4 }}>
                      Sent as text from Lifeline Roofing
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        </FadeIn>
      </div>

      {/* Phone Mockup */}
      {sent && (
        <FadeIn delay={200}>
          <Card style={{ marginTop: 20 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: T.text, marginBottom: 16 }}>
              What {c.name.split(" ")[0]} sees on their phone
            </div>
            <div style={{ maxWidth: 340, margin: "0 auto" }}>
              <div style={{ background: "#000", borderRadius: 28, padding: "12px 12px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "20px 18px", minHeight: 280 }}>
                  <div style={{ fontSize: 12, color: T.t3, marginBottom: 12 }}>SMS · Lifeline Roofing · now</div>
                  <div style={{
                    background: T.bg, borderRadius: 16, borderBottomLeftRadius: 4,
                    padding: "12px 16px", fontSize: 14, color: T.text, lineHeight: 1.55, marginBottom: 16,
                  }}>
                    {c.sms}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <button style={{
                      background: T.blue, color: "#fff", border: "none", borderRadius: 980,
                      padding: "10px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                    }}>
                      <IconCalendar size={14} color="#fff" />Book Free Inspection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>
      )}

      {showVoiceDemo && <VoiceDemoPopup onClose={function () { setShowVoiceDemo(false); }} />}
    </div>
  );
}

/* ─── Weather Intel ─── */

function Weather({ onBack }) {
  const mob = useIsMobile();
  const [deploying, setDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);

  function handleDeploy() {
    setDeploying(true);
    setTimeout(() => {
      setDeploying(false);
      setDeployed(true);
    }, 2200);
  }

  return (
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      <button onClick={onBack} style={{
        background: "none", border: "none", color: T.blue, fontSize: 15,
        cursor: "pointer", fontWeight: 500, padding: 0, marginBottom: 20,
      }}>
        {"‹ Back"}
      </button>

      <FadeIn>
        <Card style={{ marginBottom: 20, padding: mob ? 16 : "26px 30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: mob ? 12 : 16 }}>
            <div style={{
              width: mob ? 40 : 52, height: mob ? 40 : 52, borderRadius: mob ? 12 : 16, background: T.orangeL,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <IconStorm size={mob ? 20 : 24} color={T.orange} />
            </div>
            <div>
              <h2 style={{ fontSize: mob ? 20 : 24, fontWeight: 700, color: T.text, margin: 0 }}>Severe Storm Watch</h2>
              <p style={{ fontSize: mob ? 13 : 15, color: T.t2, margin: "2px 0 0" }}>{mob ? "Montgomery Co. · Hail 1.5in · Tonight" : "Montgomery and Walker Counties · Hail up to 1.5 inches · Tonight"}</p>
            </div>
          </div>
        </Card>
      </FadeIn>

      <FadeIn delay={80}>
        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 20, marginBottom: 24 }}>
          <Card style={{ borderLeft: `3px solid ${T.red}` }}>
            <Pill color={T.red}>Immediate · 312 contacts</Pill>
            <div style={{ fontSize: 13, color: T.t2, margin: "10px 0 14px" }}>
              Highest risk roofs
            </div>
            <div style={{
              background: T.bg, borderRadius: T.rs, padding: "14px 16px",
              fontSize: 14, color: T.t2, lineHeight: 1.65, fontStyle: "italic",
            }}>
              "Storm alert tonight. Call us if you see damage: 936-701-2242"
            </div>
          </Card>

          <Card style={{ borderLeft: `3px solid ${T.orange}` }}>
            <Pill color={T.orange}>8:00 AM · 935 contacts</Pill>
            <div style={{ fontSize: 13, color: T.t2, margin: "10px 0 14px" }}>
              All other customers
            </div>
            <div style={{
              background: T.bg, borderRadius: T.rs, padding: "14px 16px",
              fontSize: 14, color: T.t2, lineHeight: 1.65, fontStyle: "italic",
            }}>
              "Storms last night. Lifeline is here if your roof took a hit."
            </div>
          </Card>
        </div>
      </FadeIn>

      <FadeIn delay={160}>
        {!deployed ? (
          <button onClick={handleDeploy} disabled={deploying} style={{
            width: "100%", padding: "16px 0",
            background: deploying ? T.t3 : T.blue, color: "#fff",
            border: "none", borderRadius: 980, fontSize: mob ? 15 : 17, fontWeight: 600,
            cursor: deploying ? "wait" : "pointer",
            boxShadow: deploying ? "none" : "0 2px 14px rgba(0,113,227,0.3)",
          }}>
            {deploying ? "Sending 1,247 texts..." : "Send Storm Alerts · 1,247 Customers"}
          </button>
        ) : (
          <div style={{ padding: mob ? 16 : "20px 28px", background: T.greenL, borderRadius: T.r, textAlign: "center" }}>
            <div style={{ fontSize: mob ? 17 : 20, fontWeight: 700, color: T.green, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><IconCheck size={mob ? 17 : 20} color={T.green} />Storm Alerts Sent</div>
            <div style={{ fontSize: mob ? 13 : 14, color: T.t2, marginTop: 6 }}>
              {mob ? "312 sent now · 935 at 8 AM" : "312 sent immediately · 935 queued for 8 AM · Each personalized to the customer's roof"}
            </div>
          </div>
        )}
      </FadeIn>
    </div>
  );
}

/* ─── Inspection AI ─── */

function InspectionPage({ onBack }) {
  const mob = useIsMobile();
  const [reportPopup, setReportPopup] = useState(null); // null | "generating" | "ready" | "sent"
  const [showFullReport, setShowFullReport] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [showVoiceDemo, setShowVoiceDemo] = useState(false);

  const inspectionInputs = [
    { label: "1. Shingles", question: "Shingle surface condition?", value: "UV-driven granule loss on south-facing slope, center section. Below critical threshold but progressing." },
    { label: "2. Flashing", question: "Condition of flashing at chimney, walls, and vents?", value: "Separation at chimney north side. Gap between step flashing and masonry. Water infiltration risk within 3 months." },
    { label: "3. Pipe Boots", question: "Pipe boot and vent seal condition?", value: "Rubber boot seal on west plumbing vent showing UV cracks. Will leak within 6 months if not replaced." },
    { label: "4. Ridge/Hip Caps", question: "Ridge and hip cap condition?", value: "Minor seal strip fatigue starting. Monitor." },
    { label: "5. Valleys", question: "Valley condition and debris accumulation?", value: "Leaf buildup in north valley. Cleared during visit. No underlying damage." },
    { label: "6. Gutters/Drip Edge", question: "Gutter and drip edge condition?", value: "Clean. No issues. Drip edge secure." },
    { label: "7. Ventilation", question: "Ridge vents and soffit vents functioning?", value: "Ridge vent intact. Soffit vents clear. Attic airflow adequate." },
    { label: "8. Skylights/Penetrations", question: "Skylight seals and roof penetrations?", value: "No skylights. Satellite dish mount sealed. No issues." },
    { label: "9. Chimney/Masonry", question: "Chimney cap, crown, and masonry condition?", value: "Cap present. Minor mortar cracking on north side. Monitor next visit." },
    { label: "10. Drainage/Debris", question: "Overall drainage and debris condition?", value: "Adequate slope. No ponding observed. Minor debris cleared from valleys." },
  ];

  function handleGenerate() {
    setReportPopup("generating");
    setTimeout(function () { setReportPopup("ready"); }, 2200);
  }

  return (
    <div style={{ maxWidth: 960, margin: "0 auto" }}>
      <button onClick={onBack} style={{
        background: "none", border: "none", color: T.blue, fontSize: 15,
        cursor: "pointer", fontWeight: 500, padding: 0, marginBottom: 20,
      }}>
        {"‹ Back"}
      </button>

      <FadeIn>
        <div style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: T.text, margin: 0, letterSpacing: -0.5 }}>Maintenance Report</h2>
          <p style={{ fontSize: 15, color: T.t2, margin: "6px 0 0" }}>Fill out on site. Send to customer.</p>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 20 }}>
        <FadeIn delay={160}>
          <Card>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: T.blue }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: T.t2 }}>Inspection Checklist</span>
              </div>
              <Pill color={T.t3} bg="rgba(0,0,0,0.04)">Sandra Collins</Pill>
            </div>
            <div style={{ fontSize: 12, color: T.t3, marginBottom: 12 }}>3301 Magnolia Bend, Conroe · GAF Timberline HDZ</div>

            {/* Voice indicator */}
            <div
              onClick={function () { setShowVoiceDemo(true); }}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "8px 14px", background: T.greenS, borderRadius: 10, marginBottom: 18,
                cursor: "pointer",
              }}
            >
              <IconMic size={14} color={T.green} />
              <span style={{ fontSize: 12, fontWeight: 600, color: T.green }}>Voice enabled</span>
              <span style={{ fontSize: 11, color: T.t3 }}>Tap to dictate</span>
            </div>

            {showVoiceDemo && <VoiceDemoPopup onClose={function () { setShowVoiceDemo(false); }} />}

            {inspectionInputs.map((item, i) => (
              <div key={i} style={{
                borderTop: i > 0 ? "1px solid " + T.div : "none",
              }}>
                <div
                  onClick={function () { setExpandedItem(expandedItem === i ? null : i); }}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, padding: mob ? "14px 0" : "10px 0",
                    cursor: "pointer",
                  }}
                >
                  <IconCheck size={14} color={T.green} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: T.text, flex: 1 }}>{item.label}</span>
                  <span style={{ fontSize: 12, color: T.t3 }}>{expandedItem === i ? "−" : "+"}</span>
                </div>
                {expandedItem === i && (
                  <div style={{ paddingBottom: 12, paddingLeft: 24 }}>
                    <div style={{ fontSize: 11, color: T.t3, marginBottom: 4 }}>{item.question}</div>
                    <div style={{
                      padding: "8px 12px", borderRadius: 8, background: T.bg,
                      fontSize: 13, color: T.text, lineHeight: 1.5,
                    }}>
                      {item.value}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ padding: "10px 14px", background: T.blueS, borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
                <IconCamera size={15} color={T.blue} />
                <span style={{ fontSize: 13, color: T.blue, fontWeight: 500, flex: 1 }}>6 photos attached</span>
                <button style={{
                  background: T.blue, color: "#fff", border: "none", borderRadius: 980,
                  padding: mob ? "8px 14px" : "4px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer",
                }}>
                  + Attach Photo
                </button>
              </div>
              <div style={{ padding: "10px 14px", background: T.blueS, borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
                <IconVideo size={15} color={T.blue} />
                <span style={{ fontSize: 13, color: T.blue, fontWeight: 500, flex: 1 }}>1 video attached</span>
                <button style={{
                  background: T.blue, color: "#fff", border: "none", borderRadius: 980,
                  padding: mob ? "8px 14px" : "4px 12px", fontSize: 11, fontWeight: 600, cursor: "pointer",
                }}>
                  + Attach Video
                </button>
              </div>
            </div>

            <div style={{ marginTop: 12, fontSize: 12, color: T.t3, textAlign: "center" }}>
              {mob ? "Syncs with AccuLynx + more" : "Syncs with GAF QuickMeasure · CompanyCam · EagleView"}
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={240}>
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: T.blue }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: T.t2 }}>AI Report</span>
            </div>

            {!reportPopup && (
              <div style={{ textAlign: "center", padding: mob ? "12px 0" : "24px 0 20px" }}>
                <button onClick={handleGenerate} style={{
                  width: "100%", background: T.blue, color: "#fff", border: "none",
                  borderRadius: 980, padding: "13px 0", fontSize: 15, fontWeight: 600, cursor: "pointer",
                  boxShadow: "0 2px 12px rgba(0,113,227,0.3)",
                }}>
                  Generate Report
                </button>
              </div>
            )}

            {(reportPopup === "ready" || reportPopup === "sent" || reportPopup === "done") && (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 8 }}>
                  <IconCheck size={16} color={T.green} />
                  <span style={{ fontSize: 15, fontWeight: 600, color: T.green }}>{reportPopup === "ready" ? "Report generated" : "Report sent"}</span>
                </div>
                {(reportPopup === "sent" || reportPopup === "done") && (
                  <button onClick={function () { setShowFullReport(true); }} style={{
                    background: "transparent", border: "none", color: T.blue,
                    fontSize: 13, fontWeight: 500, cursor: "pointer", padding: 0,
                  }}>
                    View full report
                  </button>
                )}
              </div>
            )}
          </Card>
        </FadeIn>

        {/* Report Popup */}
        {(reportPopup === "generating" || reportPopup === "ready") && (
          <div style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200,
          }}>
            <div style={{
              background: T.white, borderRadius: 20, padding: mob ? 20 : 32, width: mob ? "calc(100vw - 32px)" : 420,
              boxShadow: "0 24px 80px rgba(0,0,0,0.15)", maxHeight: "80vh", overflowY: "auto",
            }}>
              {reportPopup === "generating" && (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <div style={{
                    width: 36, height: 36, border: "3px solid " + T.div,
                    borderTopColor: T.blue, borderRadius: "50%",
                    animation: "lifelinespin 0.8s linear infinite",
                    margin: "0 auto 20px",
                  }} />
                  <style>{`@keyframes lifelinespin { to { transform: rotate(360deg); } }`}</style>
                  <div style={{ fontSize: 15, fontWeight: 600, color: T.text }}>Generating report...</div>
                </div>
              )}

              {reportPopup === "ready" && (
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 16 }}>Report Ready</div>

                  {PHOTO_FINDINGS.map(function (r, i) {
                    return (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", gap: 10, padding: "10px 0",
                        borderTop: i > 0 ? "1px solid " + T.div : "none",
                      }}>
                        <div style={{ width: 8, height: 8, borderRadius: 4, background: r.sev === "high" ? T.red : T.orange, flexShrink: 0 }} />
                        <span style={{ fontSize: 14, fontWeight: 600, color: T.text, flex: 1 }}>{r.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: T.t2 }}>{r.cost}</span>
                      </div>
                    );
                  })}

                  <div style={{ marginTop: 12, padding: "12px 16px", background: T.blueL, borderRadius: 10, textAlign: "center" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: T.blue }}>$275-$550 total repairs</span>
                  </div>

                  <button onClick={function () { setReportPopup("sent"); }} style={{
                    width: "100%", background: T.blue, color: "#fff", border: "none",
                    borderRadius: 980, padding: "14px 0", fontSize: 15, fontWeight: 600,
                    cursor: "pointer", marginTop: 16,
                    boxShadow: "0 2px 12px rgba(0,113,227,0.3)",
                  }}>
                    Send to Sandra
                  </button>

                  <div style={{ textAlign: "center", marginTop: 10 }}>
                    <button onClick={function () { setReportPopup("sent"); setShowFullReport(true); }} style={{
                      background: "transparent", border: "none", color: T.t3,
                      fontSize: 12, cursor: "pointer", padding: 0,
                    }}>
                      View full report
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sent confirmation popup */}
        {reportPopup === "sent" && !showFullReport && (
          <div style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200,
          }}
          onClick={function () { setReportPopup("done"); }}
          >
            <div onClick={function (e) { e.stopPropagation(); }} style={{
              background: T.white, borderRadius: 20, padding: mob ? 24 : 32, width: mob ? "calc(100vw - 32px)" : 360,
              boxShadow: "0 24px 80px rgba(0,0,0,0.15)", textAlign: "center",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 24, background: T.greenL,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px",
              }}>
                <IconCheck size={24} color={T.green} />
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 6 }}>Report Sent</div>
              <div style={{ fontSize: 14, color: T.t2, marginBottom: 20 }}>Emailed to Sandra Collins</div>

              <button onClick={function () { setShowFullReport(true); }} style={{
                width: "100%", background: T.blue, color: "#fff", border: "none",
                borderRadius: 980, padding: "12px 0", fontSize: 15, fontWeight: 600, cursor: "pointer",
                marginBottom: 10,
              }}>
                View Full Report
              </button>
              <button onClick={function () { setReportPopup("done"); }} style={{
                background: "transparent", border: "none", color: T.t3,
                fontSize: 13, cursor: "pointer", padding: 0,
              }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Homeowner Report Preview - Modal */}
      {showFullReport && (
        <div
          onClick={function () { setShowFullReport(false); setReportPopup("done"); }}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
            display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200,
            padding: mob ? 16 : 40,
          }}
        >
          <div
            onClick={function (e) { e.stopPropagation(); }}
            style={{
              background: T.white, borderRadius: 20, overflow: "hidden",
              boxShadow: T.shL, maxHeight: "90vh", overflowY: "auto",
              width: mob ? "100%" : 640, position: "relative",
            }}
          >
            {/* Close button */}
            <button
              onClick={function () { setShowFullReport(false); setReportPopup("done"); }}
              style={{
                position: "sticky", top: 12, float: "right", marginRight: 12, zIndex: 10,
                width: 32, height: 32, borderRadius: 16, background: T.bg, border: "none",
                fontSize: 16, color: T.t3, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >x</button>

              {/* Clean white header */}
              <div style={{ padding: mob ? "20px 16px 16px" : "36px 40px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <img src="/logo.png" alt="Lifeline Roofing" style={{ height: 36, objectFit: "contain" }} />
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: T.t3, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 2 }}>
                        Roof Inspection Report
                      </div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: T.text, letterSpacing: -0.3 }}>
                        Lifeline Roofing Systems
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 13, color: T.t2 }}>April 1, 2026</div>
                    <div style={{ fontSize: 12, color: T.t3, marginTop: 2 }}>#LRS-2026-0412</div>
                  </div>
                </div>
              </div>

              <div style={{ height: 1, background: T.div, margin: mob ? "0 16px" : "0 40px" }} />

              {/* Customer + Property */}
              <div style={{ padding: mob ? "16px" : "24px 40px" }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: T.text }}>Sandra Collins</div>
                <div style={{ fontSize: 15, color: T.t2, marginTop: 4 }}>3301 Magnolia Bend, Conroe, TX</div>
                <div style={{ fontSize: 14, color: T.t3, marginTop: 2 }}>
                  GAF Timberline HDZ · Installed November 2020 · 2,100 sq ft
                </div>
              </div>

              <div style={{ height: 1, background: T.div, margin: mob ? "0 16px" : "0 40px" }} />

              {/* Health Score - big and simple */}
              <div style={{ padding: mob ? "20px 16px" : "32px 40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <HealthRing score={54} size={88} />
                <div style={{ fontSize: 14, fontWeight: 600, color: T.text, marginTop: 14 }}>
                  Roof Health Score
                </div>
                <div style={{ fontSize: 14, color: T.t2, marginTop: 4, maxWidth: 380, margin: "4px auto 0" }}>
                  Your roof is showing wear that should be addressed soon to avoid costly repairs down the road.
                </div>
              </div>

              <div style={{ height: 1, background: T.div, margin: mob ? "0 16px" : "0 40px" }} />

              {/* Findings - clean list */}
              <div style={{ padding: mob ? "16px" : "28px 40px" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: T.t3, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 20 }}>
                  What We Found
                </div>

                {PHOTO_FINDINGS.map(function (f, i) {
                  var dotColor = f.sev === "high" ? T.red : T.orange;
                  return (
                    <div key={i} style={{
                      padding: "18px 0",
                      borderTop: i > 0 ? "1px solid " + T.div : "none",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <div style={{
                          width: 8, height: 8, borderRadius: 4, background: dotColor, flexShrink: 0,
                        }} />
                        <span style={{ fontSize: 16, fontWeight: 600, color: T.text, flex: 1 }}>{f.label}</span>
                        <span style={{ fontSize: 15, fontWeight: 600, color: T.text }}>{f.cost}</span>
                      </div>
                      <div style={{ fontSize: 14, color: T.t2, lineHeight: 1.65, paddingLeft: 18 }}>
                        {f.note}
                      </div>
                    </div>
                  );
                })}

                <div style={{
                  marginTop: 12, padding: "18px 20px", borderRadius: T.rs,
                  background: T.bg,
                }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: T.text, marginBottom: 6 }}>
                    Bottom Line
                  </div>
                  <div style={{ fontSize: 14, color: T.t2, lineHeight: 1.65 }}>
                    Total estimated repair: $275-$550. Fix these now and your roof stays healthy for another 3-5 years. Leave them, and you are looking at a full re-roof ($15K-$20K) within 18 months.
                  </div>
                </div>
              </div>

              <div style={{ height: 1, background: T.div, margin: mob ? "0 16px" : "0 40px" }} />

              {/* Maintenance CTA - minimal */}
              <div style={{ padding: mob ? "20px 16px" : "32px 40px", textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: T.text, letterSpacing: -0.3 }}>
                  Keep your roof protected.
                </div>
                <div style={{ fontSize: 15, color: T.t2, marginTop: 8, maxWidth: 440, margin: "8px auto 28px" }}>
                  Lifeline members get annual inspections, priority repairs, and 10% off all service. Catch problems before they cost you.
                </div>

                <div style={{ display: "flex", flexDirection: mob ? "column" : "row", gap: 16, justifyContent: "center", alignItems: "center", marginBottom: 28 }}>
                  <div style={{ width: 200, textAlign: "center" }}>
                    <div style={{ fontSize: 36, fontWeight: 700, color: T.text, letterSpacing: -1 }}>
                      $45
                      <span style={{ fontSize: 16, fontWeight: 500, color: T.t3 }}>/mo</span>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.t2, marginTop: 4 }}>Annual Plan</div>
                    <div style={{ fontSize: 12, color: T.t3, marginTop: 2 }}>Full inspection + priority repairs</div>
                  </div>

                  <div style={{ width: 1, background: T.div }} />

                  <div style={{ width: 200, textAlign: "center" }}>
                    <div style={{ fontSize: 36, fontWeight: 700, color: T.text, letterSpacing: -1 }}>
                      $25
                      <span style={{ fontSize: 16, fontWeight: 500, color: T.t3 }}>/mo</span>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: T.t2, marginTop: 4 }}>Semi-Annual Plan</div>
                    <div style={{ fontSize: 12, color: T.t3, marginTop: 2 }}>Seasonal check-ins + priority</div>
                  </div>
                </div>

                <button style={{
                  background: T.blue, color: "#fff", border: "none", borderRadius: 980,
                  padding: "14px 40px", fontSize: 16, fontWeight: 600, cursor: "pointer",
                  boxShadow: "0 2px 12px rgba(0,113,227,0.25)",
                }}>
                  Enroll Now
                </button>
                <div style={{ fontSize: 13, color: T.t3, marginTop: 12 }}>
                  or call 936-701-2242
                </div>
              </div>

              {/* Minimal footer */}
              <div style={{ height: 1, background: T.div }} />
              <div style={{ padding: mob ? "12px 16px" : "18px 40px", textAlign: "center" }}>
                <div style={{ fontSize: 12, color: T.t3 }}>
                  Lifeline Roofing Systems · Conroe, TX · lifelineroofingsystems.com
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Abby Chat Assistant ─── */

function AbbyDots() {
  return (
    <div style={{ display: "flex", gap: 4, padding: "12px 16px" }}>
      <style>{`@keyframes abbydots { 0%, 80% { opacity: 0.3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-3px); } }`}</style>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 6, height: 6, borderRadius: 3, background: T.t3,
          animation: `abbydots 1.2s ease-in-out ${i * 0.15}s infinite`,
        }} />
      ))}
    </div>
  );
}

function AbbyChat() {
  const mob = useIsMobile();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [flow, setFlow] = useState(null);
  const [showVoiceDemo, setShowVoiceDemo] = useState(false); // null = menu, "lookup" | "draft" | "revenue" | "inspect"
  const [flowStep, setFlowStep] = useState(0); // step within a flow
  const messagesEndRef = useRef(null);
  const deliveryRef = useRef([]);

  function scrollToBottom() {
    if (messagesEndRef.current) {
      setTimeout(function () {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }

  useEffect(scrollToBottom, [messages, typing, flowStep]);

  function handleOpen() {
    setOpen(true);
    if (messages.length === 0) {
      setMessages([{ role: "abby", text: "Hey! I'm Abby, your Lifeline AI assistant. I monitor your roofs, manage follow-ups, and keep things moving. What can I help with?" }]);
    }
  }

  function cancelDelivery() {
    deliveryRef.current.forEach(function (t) { clearTimeout(t); });
    deliveryRef.current = [];
    setTyping(false);
  }

  function deliverMessages(msgs, onDone) {
    cancelDelivery();
    setTyping(true);
    var cumulativeDelay = 800;
    msgs.forEach(function (entry, i) {
      if (i > 0) cumulativeDelay += (entry.delay || 500);
      var tid = setTimeout(function () {
        if (i === 0) setTyping(false);
        setMessages(function (prev) { return prev.concat([{ role: "abby", text: entry.text }]); });
        if (i === msgs.length - 1 && onDone) {
          setTimeout(onDone, 100);
        }
      }, cumulativeDelay);
      deliveryRef.current.push(tid);
    });
    var tidFinal = setTimeout(function () { setTyping(false); }, cumulativeDelay + 200);
    deliveryRef.current.push(tidFinal);
  }

  function resetToMenu() {
    cancelDelivery();
    setMessages([{ role: "abby", text: "What else can I help with?" }]);
    setFlow(null);
    setFlowStep(0);
  }

  // Flow handlers
  function startFlow(flowName) {
    setFlow(flowName);
    setFlowStep(1);
    if (flowName === "lookup") {
      setMessages(function (prev) { return prev.concat([
        { role: "user", text: "Look up a roof" },
        { role: "abby", text: "Which customer do you want to check on?" },
      ]); });
    } else if (flowName === "draft") {
      setMessages(function (prev) { return prev.concat([
        { role: "user", text: "Draft a message" },
        { role: "abby", text: "Who should I write to?" },
      ]); });
    } else if (flowName === "revenue") {
      setMessages(function (prev) { return prev.concat([
        { role: "user", text: "Revenue report" },
      ]); });
      deliverMessages([
        { text: "Here's your current numbers:", delay: 800 },
        { text: "$10K monthly recurring from 223 enrolled members. Up $1,800 from last month.", delay: 500 },
        { text: "Your top 4 properties are worth $131K in potential jobs. Catherine Whitfield ($34K) and Richard Thornton ($38K) are the biggest. Both need personal outreach this week.", delay: 500 },
        { text: "If 15% of your 4,231 contacts sign up, you're looking at $28K/month. That's $342K a year from customers currently bringing in zero.", delay: 500 },
      ], function () { setFlowStep(99); });
    } else if (flowName === "inspect") {
      setMessages(function (prev) { return prev.concat([
        { role: "user", text: "Schedule an inspection" },
        { role: "abby", text: "Who needs an inspection?" },
      ]); });
    }
  }

  function selectContact(name, flowName) {
    var c = CONTACTS.find(function (x) { return x.name === name; });
    if (!c) return;

    if (flowName === "lookup") {
      setMessages(function (prev) { return prev.concat([{ role: "user", text: name }]); });
      var age = ((Date.now() - new Date(c.installed).getTime()) / (365.25 * 24 * 3600000)).toFixed(1);
      deliverMessages([
        { text: c.name + " at " + c.addr.split(",")[0] + ". Health score " + c.health + " out of 100.", delay: 800 },
        { text: c.hail + " hail event" + (c.hail !== 1 ? "s" : "") + " on a " + c.shingle + " roof, " + age + " years old. " + (c.risk === "high" ? "Elevated risk. Multiple factors compounding." : c.risk === "medium" ? "Moderate risk. Approaching maintenance window." : "Low risk. Performing within normal range."), delay: 500 },
        { text: c.status === "not_contacted" ? "Not contacted yet. I'd recommend outreach within the next 2 weeks." : c.status === "outreach_sent" ? "Outreach was sent but no response yet. A follow-up call might be worth it." : "Currently enrolled in " + c.plan + " plan at $" + c.mrr + "/mo.", delay: 500 },
      ], function () { setFlowStep(99); });
    } else if (flowName === "draft") {
      setMessages(function (prev) { return prev.concat([{ role: "user", text: name }]); });
      deliverMessages([
        { text: "Here's what I'd send " + c.name.split(" ")[0] + ":", delay: 800 },
      ], function () { setFlowStep(2); });
      // Store selected contact for send step
      deliveryRef.current.selectedContact = c;
    } else if (flowName === "inspect") {
      setMessages(function (prev) { return prev.concat([{ role: "user", text: name }]); });
      var lastInspection = c.status === "enrolled" ? "Last inspection completed" : "Never inspected";
      deliverMessages([
        { text: c.name + ", " + c.addr.split(",")[0] + ". Health score " + c.health + ". " + lastInspection + ".", delay: 800 },
        { text: "Next available slot: Thursday, April 10 at 10:00 AM. Should I book it?", delay: 500 },
      ], function () { setFlowStep(2); });
      deliveryRef.current.selectedContact = c;
    }
  }

  function handleSendMessage() {
    var c = deliveryRef.current.selectedContact;
    if (!c) return;
    setMessages(function (prev) { return prev.concat([{ role: "user", text: "Send it" }]); });
    deliverMessages([
      { text: "Sent to " + c.name + " at " + c.phone + ". They'll see it as a text from Lifeline Roofing. I'll let you know if they respond.", delay: 800 },
    ], function () { setFlowStep(99); });
  }

  function handleBookInspection() {
    var c = deliveryRef.current.selectedContact;
    if (!c) return;
    setMessages(function (prev) { return prev.concat([{ role: "user", text: "Book it" }]); });
    deliverMessages([
      { text: "Done. Inspection booked for " + c.name + ", Thursday April 10 at 10:00 AM. I'll send them a confirmation text and add it to AccuLynx.", delay: 800 },
    ], function () { setFlowStep(99); });
  }

  var lookupContacts = ["Tony Russo", "Sandra Collins", "Catherine Whitfield", "David Chen"];
  var draftContacts = ["Tony Russo", "Sandra Collins", "Charles Washington"];
  var inspectContacts = ["Sandra Collins", "Tony Russo", "Catherine Whitfield"];

  var menuItems = [
    { id: "lookup", label: "Look Up a Roof", sub: "Check a customer's roof health and risk", icon: <IconSearch size={16} color={T.blue} /> },
    { id: "draft", label: "Draft a Message", sub: "Write and send a personalized outreach", icon: <IconSend size={16} color={T.blue} /> },
    { id: "revenue", label: "Revenue Report", sub: "See your monthly and yearly revenue", icon: <IconHome size={16} color={T.blue} /> },
    { id: "inspect", label: "Schedule Inspection", sub: "Book a maintenance visit for a customer", icon: <IconCalendar size={16} color={T.blue} /> },
  ];

  // Which contact buttons to show based on flow
  var contactButtons = flow === "lookup" ? lookupContacts : flow === "draft" ? draftContacts : flow === "inspect" ? inspectContacts : [];
  // For draft flow step 2, get the selected contact's SMS
  var draftContact = deliveryRef.current.selectedContact;

  return (
    <>
      {/* Click-outside overlay */}
      {open && (
        <div
          onClick={function () { setOpen(false); }}
          style={{
            position: "fixed", inset: 0, zIndex: 149,
          }}
        />
      )}

      {/* Floating Button - Abby Avatar */}
      <div
        onClick={function (e) { e.stopPropagation(); if (open) { setOpen(false); } else { handleOpen(); } }}
        style={{
          position: "fixed", bottom: mob ? 16 : 28, right: mob ? 16 : 28, zIndex: 151,
          cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
        }}
      >
        <div style={{
          width: mob ? 48 : 56, height: mob ? 48 : 56, borderRadius: mob ? 24 : 28,
          background: open ? T.t3 : "linear-gradient(135deg, " + T.blue + ", #34C759)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,113,227,0.35)",
          transition: "all 0.2s ease",
          position: "relative",
        }}>
          {open ? (
            <span style={{ color: "#fff", fontSize: 20, fontWeight: 300, lineHeight: 1 }}>x</span>
          ) : (
            <>
              <IconAgent size={mob ? 22 : 26} color="#fff" />
              <div style={{
                position: "absolute", top: -2, right: -2, width: 12, height: 12, borderRadius: 6,
                background: T.green, border: "2px solid #fff",
                animation: "lifelinepulse 2s ease-in-out infinite",
              }} />
            </>
          )}
        </div>
        {!open && !mob && <span style={{ fontSize: 10, fontWeight: 600, color: T.t2 }}>Abby</span>}
      </div>

      {/* Chat Panel */}
      <div style={{
        position: "fixed", bottom: mob ? 72 : 96, right: mob ? 0 : 28, zIndex: 150,
        width: mob ? "100%" : 380, maxHeight: mob ? "calc(100vh - 80px)" : "calc(100vh - 140px)",
        background: T.white, borderRadius: 20,
        boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 12px 28px rgba(0,0,0,0.08)",
        border: "0.5px solid rgba(0,0,0,0.08)",
        display: "flex", flexDirection: "column", overflow: "hidden",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0) scale(1)" : "translateY(8px) scale(0.97)",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: open ? "auto" : "none",
      }}>
        {/* Header */}
        <div style={{
          padding: "16px 20px", borderBottom: "1px solid " + T.div,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 18,
            background: "linear-gradient(135deg, " + T.blue + ", #34C759)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}><IconAgent size={18} color="#fff" /></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: T.text }}>Abby</div>
            <div style={{ fontSize: 11, color: T.t3 }}>Lifeline AI Assistant</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, background: T.green }} />
            <span style={{ fontSize: 11, color: T.green, fontWeight: 600 }}>Online</span>
          </div>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: "auto", padding: "16px 16px 8px",
          display: "flex", flexDirection: "column", gap: 8,
        }}>
          {messages.map(function (msg, i) {
            if (msg.role === "abby") {
              return (
                <div key={i} style={{
                  alignSelf: "flex-start", maxWidth: "85%",
                  background: T.bg, borderRadius: 14, borderBottomLeftRadius: 4,
                  padding: "10px 14px", fontSize: 14, color: T.text, lineHeight: 1.55,
                }}>
                  {msg.text}
                </div>
              );
            }
            return (
              <div key={i} style={{
                alignSelf: "flex-end", maxWidth: "85%",
                background: T.blue, borderRadius: 14, borderBottomRightRadius: 4,
                padding: "10px 14px", fontSize: 14, color: "#fff", lineHeight: 1.55,
              }}>
                {msg.text}
              </div>
            );
          })}

          {typing && (
            <div style={{
              alignSelf: "flex-start",
              background: T.bg, borderRadius: 14, borderBottomLeftRadius: 4,
            }}>
              <AbbyDots />
            </div>
          )}

          {/* Menu Buttons (shown when no flow is active) */}
          {!flow && !typing && messages.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
              {menuItems.map(function (item) {
                return (
                  <button key={item.id} onClick={function () { startFlow(item.id); }} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    background: T.white, border: "1px solid " + T.div, borderRadius: 12,
                    padding: "12px 14px", cursor: "pointer", textAlign: "left", width: "100%",
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8, background: T.blueS,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: T.t3 }}>{item.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Contact Selection Buttons */}
          {(flow === "lookup" || flow === "draft" || flow === "inspect") && flowStep === 1 && !typing && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
              {contactButtons.map(function (name) {
                return (
                  <button key={name} onClick={function () { selectContact(name, flow); }} style={{
                    background: T.white, border: "1px solid " + T.div, borderRadius: 20,
                    padding: "8px 16px", fontSize: 13, fontWeight: 500, color: T.blue,
                    cursor: "pointer",
                  }}>
                    {name}
                  </button>
                );
              })}
            </div>
          )}

          {/* Draft Message Preview + Send Button */}
          {flow === "draft" && flowStep === 2 && draftContact && !typing && (
            <div>
              <div style={{
                background: T.bg, borderRadius: 12, padding: "12px 14px",
                fontSize: 13, color: T.t2, lineHeight: 1.55, marginBottom: 8,
                borderLeft: "3px solid " + T.blue,
              }}>
                {draftContact.sms}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={handleSendMessage} style={{
                  flex: 1, background: T.blue, color: "#fff", border: "none", borderRadius: 20,
                  padding: "9px 0", fontSize: 13, fontWeight: 600, cursor: "pointer",
                }}>Send Now</button>
                <button onClick={resetToMenu} style={{
                  padding: "9px 16px", background: "transparent", color: T.t2,
                  border: "1px solid " + T.div, borderRadius: 20, fontSize: 13, cursor: "pointer",
                }}>Back</button>
              </div>
            </div>
          )}

          {/* Inspection Book Button */}
          {flow === "inspect" && flowStep === 2 && !typing && (
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              <button onClick={handleBookInspection} style={{
                flex: 1, background: T.green, color: "#fff", border: "none", borderRadius: 20,
                padding: "9px 0", fontSize: 13, fontWeight: 600, cursor: "pointer",
              }}>Book It</button>
              <button onClick={resetToMenu} style={{
                padding: "9px 16px", background: "transparent", color: T.t2,
                border: "1px solid " + T.div, borderRadius: 20, fontSize: 13, cursor: "pointer",
              }}>Back</button>
            </div>
          )}

          {/* Back to Menu (after completed flows) */}
          {flowStep === 99 && !typing && (
            <button onClick={resetToMenu} style={{
              alignSelf: "flex-start", background: T.white, border: "1px solid " + T.div,
              borderRadius: 20, padding: "8px 16px", fontSize: 12, fontWeight: 500,
              color: T.blue, cursor: "pointer", marginTop: 4,
            }}>
              Back to menu
            </button>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Voice Input Bar */}
        <div
          onClick={function () { setShowVoiceDemo(true); }}
          style={{
            padding: "12px 16px", borderTop: "1px solid " + T.div,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            cursor: "pointer",
          }}
        >
          <IconMic size={14} color={T.green} />
          <span style={{ fontSize: 12, color: T.green, fontWeight: 500 }}>Voice input</span>
        </div>
        {showVoiceDemo && <VoiceDemoPopup onClose={function () { setShowVoiceDemo(false); }} />}
      </div>
    </>
  );
}

/* ─── App Shell ─── */

export default function App() {
  const [started, setStarted] = useState(false);
  const [page, setPage] = useState("home");
  const [detailContact, setDetailContact] = useState(null);
  const mob = useIsMobile();

  function nav(target, data) {
    if (target === "detail") {
      setDetailContact(data);
    } else {
      setPage(target);
      setDetailContact(null);
    }
  }

  function goBack() {
    setDetailContact(null);
    setPage("home");
  }

  if (!started) {
    return (
      <div style={{
        minHeight: "100vh", background: T.bg, fontFamily: T.font,
        WebkitFontSmoothing: "antialiased",
        display: "flex", flexDirection: "column",
      }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: mob ? 16 : 40 }}>
          <Opener onStart={() => setStarted(true)} />
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "home", label: "Home", icon: <IconHome size={15} /> },
    { id: "weather", label: "Weather", icon: <IconStorm size={15} /> },
    { id: "inspection", label: "Inspect", icon: <IconSearch size={15} /> },
  ];

  function renderContent() {
    if (detailContact) {
      return <Detail contact={detailContact} onBack={goBack} />;
    }
    if (page === "weather") {
      return <Weather onBack={goBack} />;
    }
    if (page === "inspection") {
      return <InspectionPage onBack={goBack} />;
    }
    return <Home onNav={nav} />;
  }

  return (
    <div style={{
      minHeight: "100vh", background: T.bg, fontFamily: T.font,
      WebkitFontSmoothing: "antialiased",
      display: "flex", flexDirection: "column", overflowX: "hidden",
    }}>
      {/* Top Navigation */}
      <div style={{
        height: 52,
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "0.5px solid rgba(0,0,0,0.08)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: mob ? "0 12px" : "0 28px",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div
          onClick={goBack}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        >
          <img src="/logo.png" alt="Lifeline Roofing" style={{ height: mob ? 24 : 28, objectFit: "contain" }} />
          {!mob && <span style={{ fontSize: 12, color: T.t3, fontWeight: 500 }}>Lifeline AI</span>}
        </div>

        <div style={{ display: "flex", gap: 2 }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => nav(t.id)}
              style={{
                display: "flex", alignItems: "center", gap: mob ? 4 : 6,
                padding: mob ? "6px 10px" : "6px 16px", borderRadius: 980, border: "none", cursor: "pointer",
                fontSize: mob ? 12 : 13, fontWeight: 600,
                background: page === t.id && !detailContact ? "rgba(0,0,0,0.06)" : "transparent",
                color: page === t.id && !detailContact ? T.text : T.t2,
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        {!mob && <div style={{ fontSize: 12, color: T.blue, fontWeight: 600 }}>Powered by Evios</div>}
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, overflowY: "auto", padding: mob ? "16px 14px 80px" : "32px 40px 60px" }}>
        {renderContent()}
      </div>

      {/* Abby Chat Assistant */}
      <AbbyChat />
    </div>
  );
}

import { useState, useEffect, useRef } from "react";

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
    risk: "high", plan: null, mrr: 0, status: "not_contacted",
    ai: "Oldest roof in portfolio at 6+ years with low slope and 2 hail events. Nearing the end of the optimal maintenance window. Warranty-eligible repairs may expire within the year. Without intervention, this roof is heading for unplanned replacement. Strong candidate for immediate outreach and maintenance-to-replacement conversion.",
    sms: "Tony, this is Lifeline Roofing. Your roof at Post Oak is coming up on 6 years and I want to make sure you're still covered. With the hail your area has seen, there might be warranty-eligible repairs we can catch before they expire. Free inspection, 30 minutes. Worth a look. Can I schedule you this week?"
  },
  {
    id: 2, name: "Charles Washington", addr: "1122 Pecan Grove Rd, Conroe", phone: "(936) 555-0718",
    installed: "2020-04-20", shingle: "GAF Timberline Ultra HD", sqft: 2800, hail: 3, health: 48,
    risk: "high", plan: null, mrr: 0, status: "outreach_sent",
    ai: "5-year-old complex roof with 3 hail events and dominant south-facing exposure. Multiple compounding risk factors. Predictive model shows 67% probability of requiring full replacement within 18 months. PRIORITY: Highest revenue opportunity in current pipeline. Maintenance enrollment is the bridge to a projected $22K replacement project.",
    sms: "Charles, your roof at Pecan Grove is one of our earlier installs and it's been through 3 hail events and five Texas summers on that south-facing slope. I want to be straight with you. There's a good chance we find something that needs attention. A quick inspection now could save you a big surprise later. No cost for the visit. Can I come take a look?"
  },
  {
    id: 3, name: "Sandra Collins", addr: "3301 Magnolia Bend, Conroe", phone: "(936) 555-0334",
    installed: "2020-11-05", shingle: "GAF Timberline HDZ", sqft: 2100, hail: 3, health: 54,
    risk: "high", plan: null, mrr: 0, status: "not_contacted",
    ai: "Three hail events on a low-slope roof approaching 5 years. High probability of hidden damage at valley transitions and pipe boot seals. Granule displacement likely exceeding manufacturer thresholds. URGENT: Inspection recommended within 30 days. Strong maintenance-to-replacement pipeline candidate with 67% probability of full replacement within 18 months.",
    sms: "Sandra, this is Blu from Lifeline Roofing. Your roof on Magnolia Bend has been through some rough weather. 3 hail events in under 5 years on a low slope. I'm not calling to sell you a new roof. I want to see if we can extend what you've got by 3-5 years with some preventative care. Can I send someone out for a free look?"
  },
  {
    id: 4, name: "David Chen", addr: "4418 Willowbrook Ct, Huntsville", phone: "(936) 555-0523",
    installed: "2021-02-14", shingle: "Owens Corning TruDefinition", sqft: 2600, hail: 2, health: 63,
    risk: "medium", plan: null, mrr: 0, status: "outreach_sent",
    ai: "West-facing primary exposure drives elevated thermal cycling. Hot afternoon sun followed by rapid evening cooling causes expansion and contraction stress. Combined with 2 hail events, pipe boot seals and step flashing at sidewalls are likely degrading. A $200-$400 preventative repair now prevents a $3K-$5K emergency fix later.",
    sms: "David, your Willowbrook roof takes a lot of afternoon sun on that west side, and with a couple of hail events since we installed, I'd like to check your pipe boots and flashing. Those are the first things to go and they're cheap to fix now. We have openings Thursday and Friday. Want me to grab you a slot?"
  },
  {
    id: 5, name: "James Patterson", addr: "2841 Oak Ridge Dr, Conroe", phone: "(936) 555-0142",
    installed: "2022-03-15", shingle: "CertainTeed Landmark", sqft: 2400, hail: 2, health: 72,
    risk: "medium", plan: "Annual", mrr: 45, status: "enrolled",
    ai: "South-facing primary slope with 2 recorded hail events since installation. UV exposure is accelerating granule loss on the south face. Ridge cap seal strips show early fatigue. Maintenance visit within 60 days will catch this before it becomes a $4K-$6K partial re-roof.",
    sms: "Hey James, it's been about 2 years since we put on your roof at Oak Ridge Dr. With the hail your area caught last fall, I'd like to get eyes on your south-facing slope before summer heat sets in. Free inspection, 30 minutes, no pressure. Want me to send a tech out this week?"
  },
  {
    id: 6, name: "Robert Nguyen", addr: "9102 Pine Hollow Ct, Willis", phone: "(936) 555-0287",
    installed: "2021-08-22", shingle: "Owens Corning Duration", sqft: 1850, hail: 1, health: 81,
    risk: "low", plan: "Semi-Annual", mrr: 25, status: "enrolled",
    ai: "Steep pitch provides excellent drainage and reduces standing water risk. One minor hail event with no visible impact expected on Duration-class shingles. Performing within normal range for age. Annual inspection is sufficient.",
    sms: "Robert, your Pine Hollow roof is looking solid at 3 years. One quick check-up to make sure the flashing and vents are sealed tight before storm season."
  },
  {
    id: 7, name: "Maria Davis", addr: "1547 Lakewood Ln, Spring", phone: "(281) 555-0198",
    installed: "2023-01-10", shingle: "CertainTeed Presidential", sqft: 3200, hail: 0, health: 94,
    risk: "low", plan: "Annual", mrr: 55, status: "enrolled",
    ai: "Premium Presidential shingle on complex multi-directional geometry. Zero weather events. Performing excellently. Focus monitoring on valley-to-hip transitions and chimney counter-flashing at the 18-month mark.",
    sms: "Maria, your Presidential roof at Lakewood is performing beautifully. Coming up on 18 months, the perfect time for a quick valley and flashing check."
  },
];

const PHOTO_FINDINGS = [
  { label: "Flashing separation", loc: "Chimney, north side", sev: "high", cost: "$200-$400", note: "Gap between step flashing and chimney masonry. Water infiltration risk within 3 months." },
  { label: "Granule erosion", loc: "South slope, center", sev: "medium", cost: "Monitor", note: "UV-driven granule loss on south-facing shingles. Below replacement threshold but progressing." },
  { label: "Pipe boot cracking", loc: "Plumbing vent, west", sev: "high", cost: "$75-$150", note: "Rubber boot seal showing UV cracks. Will leak within 6 months if not replaced." },
];

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

function Narrator({ text }) {
  return (
    <div style={{
      padding: "0 0 18px",
      marginBottom: 18,
      borderBottom: "1px solid " + T.div,
    }}>
      <div style={{ fontSize: 14, color: T.t3, lineHeight: 1.6, fontStyle: "italic" }}>{text}</div>
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
            Today
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, color: T.text, letterSpacing: -1.5, lineHeight: 1.2 }}>
            4,231 past customers.
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, color: T.t3, letterSpacing: -1.5, lineHeight: 1.2, marginTop: 8 }}>
            Zero being contacted.
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, color: T.t3, letterSpacing: -1.5, lineHeight: 1.2, marginTop: 8 }}>
            $0/month recurring.
          </div>
          <div style={{ marginTop: 40 }}>
            <button onClick={onStart} style={{
              background: T.blue, color: "#fff", border: "none", borderRadius: 980,
              padding: "14px 40px", fontSize: 17, fontWeight: 600, cursor: "pointer",
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
          <div style={{ fontSize: 14, fontWeight: 600, color: T.green, textTransform: "uppercase", letterSpacing: 2, marginBottom: 20 }}>
            With Lifeline AI
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, color: T.text, letterSpacing: -1.5, lineHeight: 1.2 }}>
            Every roof has a health score.
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, color: T.blue, letterSpacing: -1.5, lineHeight: 1.2, marginTop: 8 }}>
            $28K/month recurring.
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, color: T.green, letterSpacing: -1.5, lineHeight: 1.2, marginTop: 8 }}>
            One button deploys 1,200 messages.
          </div>
          <div style={{ marginTop: 40 }}>
            <button onClick={onStart} style={{
              background: T.blue, color: "#fff", border: "none", borderRadius: 980,
              padding: "14px 40px", fontSize: 17, fontWeight: 600, cursor: "pointer",
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
        <div style={{ fontSize: 52, fontWeight: 700, color: T.text, letterSpacing: -1.5, lineHeight: 1.15 }}>
          Your roofs. Your customers.
        </div>
        <div style={{ fontSize: 52, fontWeight: 700, color: T.blue, letterSpacing: -1.5, lineHeight: 1.15, marginTop: 4 }}>
          Managed by AI.
        </div>
        <div style={{ marginTop: 40 }}>
          <button onClick={onStart} style={{
            background: T.blue, color: "#fff", border: "none", borderRadius: 980,
            padding: "14px 40px", fontSize: 17, fontWeight: 600, cursor: "pointer",
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
        aiText = ageYears.toFixed(1) + "-year-old " + formData.shingle + " roof with " + hailCount + " recorded hail events. Age and weather exposure are compounding. Granule loss and flashing degradation are likely progressing beyond safe thresholds. Recommend urgent inspection within 30 days. Strong candidate for maintenance enrollment and potential replacement pipeline within 12-18 months.";
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
        background: T.white, borderRadius: 24, padding: 36, width: 520,
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

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
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
  const [showNewContact, setShowNewContact] = useState(false);
  const avgH = Math.round(CONTACTS.reduce((a, c) => a + c.health, 0) / CONTACTS.length);
  const highR = CONTACTS.filter(c => c.risk === "high").length;
  const enrolled = CONTACTS.filter(c => c.status === "enrolled").length;
  const mrr = CONTACTS.reduce((a, c) => a + c.mrr, 0);

  const base = 4231;
  const members = Math.round(base * pct / 100);
  const avgPlan = 45;
  const mrrCalc = members * avgPlan;
  const annual = mrrCalc * 12;
  const leads = Math.round(members * 0.22);
  const pipeline = leads * 18500;
  const total = annual + pipeline;

  const stats = [
    { label: "Avg Health", content: <HealthRing score={avgH} size={50} />, sub: "4,231 roofs scored" },
    { label: "High Risk", content: <span style={{ fontSize: 28, fontWeight: 700, color: T.red }}>{highR}</span>, sub: "need attention" },
    { label: "Members", content: <span style={{ fontSize: 28, fontWeight: 700, color: T.blue }}>{enrolled}</span>, sub: "enrolled" },
    { label: "Monthly Rev", content: <span style={{ fontSize: 28, fontWeight: 700, color: T.green }}>${mrr}</span>, sub: "+$1,035 this mo" },
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: 34, fontWeight: 700, color: T.text, margin: 0, letterSpacing: -0.8 }}>Command Center</h1>
            <p style={{ fontSize: 16, color: T.t2, margin: "6px 0 0" }}>AI analyzed 4,231 roofs overnight. Here is what needs your attention.</p>
          </div>
          <button
            onClick={function () { setShowNewContact(true); }}
            style={{
              background: "transparent", color: T.blue, border: "none", borderRadius: 980,
              padding: "10px 0", fontSize: 15, fontWeight: 500, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 4, whiteSpace: "nowrap",
              marginTop: 4,
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
            <div style={{ fontSize: 15, fontWeight: 600, color: T.text }}>Storm Watch: Montgomery and Walker Counties</div>
            <div style={{ fontSize: 13, color: T.t3, marginTop: 3 }}>1,247 personalized messages ready to deploy</div>
          </div>
          <span style={{ color: T.blue, fontSize: 14, fontWeight: 500, whiteSpace: "nowrap" }}>Review {"›"}</span>
        </div>
      </FadeIn>

      {/* Stats Row */}
      <FadeIn delay={160}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 28 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: T.white, borderRadius: 16, padding: "22px 20px" }}>
              <div style={{ fontSize: 12, color: T.t3, fontWeight: 500, marginBottom: 14 }}>
                {s.label}
              </div>
              {s.content}
              <div style={{ fontSize: 12, color: T.t3, marginTop: 10 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Priority Queue */}
        <FadeIn delay={240}>
          <Card>
            <Narrator text="The AI scored every roof in your database by age, weather history, shingle type, and exposure. These contacts need attention first." />
            <div style={{ fontSize: 17, fontWeight: 600, color: T.text, marginBottom: 16 }}>Priority Queue</div>
            {priorityContacts.map((c, i) => (
              <div
                key={c.id}
                onClick={() => onNav("detail", c)}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "13px 0", cursor: "pointer",
                  borderTop: i > 0 ? `1px solid ${T.div}` : "none",
                }}
              >
                <HealthRing score={c.health} size={40} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: T.text }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: T.t3 }}>{c.shingle} · {c.hail} hail events</div>
                </div>
                <Pill color={c.risk === "high" ? T.red : c.risk === "medium" ? T.orange : T.green}>
                  {c.risk === "high" ? "High" : c.risk === "medium" ? "Med" : "Low"}
                </Pill>
                <span style={{ color: T.t3, fontSize: 16 }}>{"›"}</span>
              </div>
            ))}
          </Card>
        </FadeIn>

        {/* ROI Calculator */}
        <FadeIn delay={320}>
          <Card>
            <Narrator text="Drag the slider to model your revenue. These are your numbers, your 4,231 contacts." />
            <div style={{ fontSize: 17, fontWeight: 600, color: T.text, marginBottom: 4 }}>Revenue Calculator</div>
            <div style={{ fontSize: 13, color: T.t3, marginBottom: 24 }}>Based on your 4,231 contacts</div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 14, color: T.t2 }}>Enrollment rate</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: T.blue }}>{pct}%</span>
              </div>
              <input
                type="range" min={5} max={40} value={pct}
                onChange={e => setPct(Number(e.target.value))}
                style={{ width: "100%", accentColor: T.blue, height: 6 }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: T.t3, marginTop: 4 }}>
                <span>5%</span>
                <span>Conservative</span>
                <span>40%</span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0" }}>
              <span style={{ fontSize: 14, color: T.t2 }}>Members</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: T.text }}>{members.toLocaleString()} at ${avgPlan}/mo</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderTop: `1px solid ${T.div}` }}>
              <span style={{ fontSize: 14, color: T.t2 }}>Monthly recurring</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: T.blue }}>${mrrCalc.toLocaleString()}/mo</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderTop: `1px solid ${T.div}` }}>
              <span style={{ fontSize: 14, color: T.t2 }}>Annual recurring</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: T.blue }}>${(annual / 1000).toFixed(0)}K/yr</span>
            </div>

            <div style={{ height: 1, background: T.div, margin: "12px 0" }} />
            <div style={{ fontSize: 12, color: T.t3, marginBottom: 10 }}>Maintenance to Replacement Pipeline (22%)</div>

            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
              <span style={{ fontSize: 14, color: T.t2 }}>Replacement leads</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: T.text }}>{leads}/yr</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderTop: `1px solid ${T.div}` }}>
              <span style={{ fontSize: 14, color: T.t2 }}>Pipeline value</span>
              <span style={{ fontSize: 20, fontWeight: 800, color: T.green }}>${(pipeline / 1e6).toFixed(1)}M/yr</span>
            </div>

            <div style={{ marginTop: 18, padding: "16px 20px", background: T.greenL, borderRadius: T.rs, textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 700, color: T.green, letterSpacing: -0.5 }}>
                ${(total / 1e6).toFixed(1)}M
              </div>
              <div style={{ fontSize: 13, color: T.t2, marginTop: 4 }}>total annual revenue impact</div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}

/* ─── Contact Detail ─── */

function Detail({ contact, onBack }) {
  const [showAI, setShowAI] = useState(false);
  const [showSms, setShowSms] = useState(false);
  const [smsDone, setSmsDone] = useState(false);
  const [sent, setSent] = useState(false);
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
        <Card style={{ marginBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "26px 30px" }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 20 }}>
          {detailCards.map((d) => (
            <Card key={d.label} style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: 10, color: T.t3, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 5 }}>{d.label}</div>
              <div style={{ fontSize: 17, fontWeight: 600, color: T.text }}>{d.value}</div>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* AI Analysis + Outreach */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <FadeIn delay={160}>
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: T.blue,  }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: T.t2 }}>AI Analysis</span>
            </div>
            <Narrator text={"The AI looked at " + c.name.split(" ")[0] + "'s install date, shingle type, local weather events, slope, and UV exposure to generate this assessment."} />
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
            <Narrator text="This is not a template. The AI wrote this message specifically for this customer based on their roof data, risk factors, and the right tone for Lifeline." />
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
                    <button style={{
                      padding: "12px 20px", background: "transparent", color: T.t2,
                      border: `1px solid ${T.div}`, borderRadius: 980, fontSize: 14, fontWeight: 500, cursor: "pointer",
                    }}>
                      Edit
                    </button>
                  </div>
                )}
                {sent && (
                  <div style={{ padding: "14px 18px", background: T.greenL, borderRadius: T.rs, textAlign: "center" }}>
                    <div style={{ color: T.green, fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}><IconCheck size={16} color={T.green} />Sent to {c.phone}</div>
                    <div style={{ color: T.t2, fontSize: 13, marginTop: 4 }}>
                      Customer will see this as a text from Lifeline Roofing. If they reply, your team gets notified instantly.
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
            <Narrator text={"This is what " + c.name.split(" ")[0] + " sees on their phone. When they tap Book, they see available times and confirm in 10 seconds."} />
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
    </div>
  );
}

/* ─── Weather Intel ─── */

function Weather({ onBack }) {
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
        <Card style={{ marginBottom: 20, padding: "26px 30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              width: 52, height: 52, borderRadius: 16, background: T.orangeL,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <IconStorm size={24} color={T.orange} />
            </div>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: T.text, margin: 0 }}>Severe Storm Watch</h2>
              <p style={{ fontSize: 15, color: T.t2, margin: "2px 0 0" }}>Montgomery and Walker Counties · Hail up to 1.5 inches · Tonight</p>
            </div>
          </div>
        </Card>
      </FadeIn>

      <FadeIn delay={80}>
        <Narrator text="The AI cross-referenced the storm path with every customer address, then ranked them by roof vulnerability. High-risk roofs get an immediate heads-up. Everyone else gets a morning follow-up timed for when they are inspecting their property." />
      </FadeIn>

      <FadeIn delay={160}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24 }}>
          <Card style={{ borderLeft: `3px solid ${T.red}` }}>
            <Pill color={T.red}>Immediate · 312 contacts</Pill>
            <div style={{ fontSize: 13, color: T.t2, margin: "10px 0 14px" }}>
              Roof health below 70. Most vulnerable to storm damage.
            </div>
            <div style={{
              background: T.bg, borderRadius: T.rs, padding: "14px 16px",
              fontSize: 14, color: T.t2, lineHeight: 1.65, fontStyle: "italic",
            }}>
              "Storm alert for your area tonight. Your roof has wear from previous hail. If you notice anything after the storm like missing shingles, leaks, or debris, call us at 936-701-2242 and you will be first in line."
            </div>
          </Card>

          <Card style={{ borderLeft: `3px solid ${T.orange}` }}>
            <Pill color={T.orange}>8:00 AM · 935 contacts</Pill>
            <div style={{ fontSize: 13, color: T.t2, margin: "10px 0 14px" }}>
              Standard risk. Sent when homeowners are assessing damage.
            </div>
            <div style={{
              background: T.bg, borderRadius: T.rs, padding: "14px 16px",
              fontSize: 14, color: T.t2, lineHeight: 1.65, fontStyle: "italic",
            }}>
              "Heads up, storms last night in your area with possible hail. If your roof took a hit, Lifeline is here. Save our number: 936-701-2242."
            </div>
          </Card>
        </div>
      </FadeIn>

      <FadeIn delay={240}>
        {!deployed ? (
          <button onClick={handleDeploy} disabled={deploying} style={{
            width: "100%", padding: "16px 0",
            background: deploying ? T.t3 : T.blue, color: "#fff",
            border: "none", borderRadius: 980, fontSize: 17, fontWeight: 600,
            cursor: deploying ? "wait" : "pointer",
            boxShadow: deploying ? "none" : "0 2px 14px rgba(0,113,227,0.3)",
          }}>
            {deploying ? "Personalizing 1,247 messages..." : "Deploy Storm Response · 1,247 Contacts"}
          </button>
        ) : (
          <div style={{ padding: "20px 28px", background: T.greenL, borderRadius: T.r, textAlign: "center" }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: T.green, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}><IconCheck size={20} color={T.green} />Storm Response Deployed</div>
            <div style={{ fontSize: 14, color: T.t2, marginTop: 6 }}>
              312 sent immediately · 935 queued for 8 AM · Each personalized to the customer's roof
            </div>
          </div>
        )}
      </FadeIn>
    </div>
  );
}

/* ─── Inspection AI ─── */

function InspectionPage({ onBack }) {
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [reportSent, setReportSent] = useState(false);

  function runAnalysis() {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults(PHOTO_FINDINGS);
    }, 2200);
  }

  const bboxes = [
    { x: "10%", y: "8%", w: "32%", h: "28%", color: T.red },
    { x: "52%", y: "32%", w: "38%", h: "34%", color: T.orange },
    { x: "36%", y: "58%", w: "18%", h: "24%", color: T.red },
  ];

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
          <h2 style={{ fontSize: 28, fontWeight: 700, color: T.text, margin: 0, letterSpacing: -0.5 }}>Inspection AI</h2>
          <p style={{ fontSize: 15, color: T.t2, margin: "6px 0 0" }}>Photo in. Analysis out. Homeowner report generated.</p>
        </div>
      </FadeIn>

      <FadeIn delay={80}>
        <Narrator text="Your tech snaps a photo during a maintenance visit. The AI identifies damage, estimates repair costs, and generates a professional report, all before the tech leaves the property." />
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <FadeIn delay={160}>
          <Card>
            <div style={{
              width: "100%", aspectRatio: "4/3", borderRadius: T.rs, overflow: "hidden",
              position: "relative",
              background: "#4a4035",
              marginBottom: 16,
            }}>
              <img
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80"
                alt="Roof inspection"
                style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  position: "absolute", inset: 0,
                }}
              />

              {!results && !analyzing && (
                <div style={{
                  position: "absolute", inset: 0, display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ marginBottom: 8 }}><IconCamera size={32} color="rgba(255,255,255,0.85)" /></div>
                  <div style={{ color: "rgba(255,255,255,.85)", fontSize: 14, fontWeight: 600 }}>Sandra Collins</div>
                  <div style={{ color: "rgba(255,255,255,.5)", fontSize: 12 }}>3301 Magnolia Bend</div>
                </div>
              )}

              {analyzing && (
                <div style={{
                  position: "absolute", inset: 0, display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,.35)",
                }}>
                  <div style={{
                    width: 36, height: 36, border: "3px solid rgba(255,255,255,.2)",
                    borderTopColor: "#fff", borderRadius: "50%",
                    animation: "lifelinespin .8s linear infinite",
                  }} />
                  <div style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginTop: 12 }}>Analyzing roof surface...</div>
                  <style>{`@keyframes lifelinespin { to { transform: rotate(360deg); } }`}</style>
                </div>
              )}

              {results && (
                <>
                  <div style={{
                    position: "absolute", top: 10, left: 10,
                    background: "rgba(0,0,0,.55)", color: "#fff",
                    padding: "4px 10px", borderRadius: 6, fontSize: 11, fontWeight: 600,
                  }}>
                    3 issues found
                  </div>
                  {bboxes.map((b, i) => (
                    <div key={i} style={{
                      position: "absolute", left: b.x, top: b.y, width: b.w, height: b.h,
                      border: `2px solid ${b.color}`, borderRadius: 8,
                      background: b.color + "15",
                    }} />
                  ))}
                </>
              )}
            </div>

            {!results && !analyzing && (
              <button onClick={runAnalysis} style={{
                width: "100%", background: T.blue, color: "#fff", border: "none",
                borderRadius: 980, padding: "13px 0", fontSize: 15, fontWeight: 600, cursor: "pointer",
              }}>
                Analyze Photo
              </button>
            )}
          </Card>
        </FadeIn>

        <FadeIn delay={240}>
          <Card>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: T.blue,  }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: T.t2 }}>Findings</span>
            </div>

            {!results ? (
              <div style={{ textAlign: "center", padding: "48px 0", color: T.t3, fontSize: 14 }}>
                Run analysis to see results
              </div>
            ) : (
              <div>
                {results.map((r, i) => (
                  <div key={i} style={{ padding: "14px 0", borderTop: i > 0 ? `1px solid ${T.div}` : "none" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontSize: 15, fontWeight: 600, color: T.text }}>{r.label}</span>
                      <Pill color={r.sev === "high" ? T.red : T.orange}>{r.sev} · {r.cost}</Pill>
                    </div>
                    <div style={{ fontSize: 12, color: T.t3, marginBottom: 3 }}>{r.loc}</div>
                    <div style={{ fontSize: 14, color: T.t2, lineHeight: 1.6 }}>{r.note}</div>
                  </div>
                ))}

                <div style={{ marginTop: 14, padding: "14px 18px", background: T.blueL, borderRadius: T.rs }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: T.blue, marginBottom: 4 }}>AI Summary</div>
                  <div style={{ fontSize: 14, color: T.t2, lineHeight: 1.6 }}>
                    Total repair: $275-$550. Fix now and the roof lasts 3-5 more years. Skip it and you are looking at $15K-$20K replacement within 18 months.
                  </div>
                </div>

                {!reportSent ? (
                  <button onClick={() => setReportSent(true)} style={{
                    width: "100%", background: T.blue, color: "#fff", border: "none",
                    borderRadius: 980, padding: "13px 0", fontSize: 15, fontWeight: 600,
                    cursor: "pointer", marginTop: 14,
                    boxShadow: "0 2px 12px rgba(0,113,227,0.3)",
                  }}>
                    Generate and Send Report
                  </button>
                ) : (
                  <div style={{ marginTop: 14, padding: "14px 18px", background: T.greenL, borderRadius: T.rs, textAlign: "center" }}>
                    <div style={{ color: T.green, fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}><IconCheck size={16} color={T.green} />Report emailed to Sandra Collins</div>
                    <div style={{ color: T.t2, fontSize: 13, marginTop: 4 }}>
                      Scroll down to see what Sandra received
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        </FadeIn>
      </div>

      {/* Homeowner Report Preview */}
      {reportSent && (
        <FadeIn delay={200}>
          <div style={{ marginTop: 28 }}>
            <Narrator text="This is what Sandra just received. A clean, branded report she can understand in 30 seconds. The maintenance offer is at the bottom." />

            <Card style={{ padding: 0, overflow: "hidden", boxShadow: T.shL }}>

              {/* Clean white header */}
              <div style={{ padding: "36px 40px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: T.t3, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
                      Roof Inspection Report
                    </div>
                    <div style={{ fontSize: 26, fontWeight: 700, color: T.text, letterSpacing: -0.5 }}>
                      Lifeline Roofing Systems
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 13, color: T.t2 }}>April 1, 2026</div>
                    <div style={{ fontSize: 12, color: T.t3, marginTop: 2 }}>#LRS-2026-0412</div>
                  </div>
                </div>
              </div>

              <div style={{ height: 1, background: T.div, margin: "0 40px" }} />

              {/* Customer + Property */}
              <div style={{ padding: "24px 40px" }}>
                <div style={{ fontSize: 20, fontWeight: 600, color: T.text }}>Sandra Collins</div>
                <div style={{ fontSize: 15, color: T.t2, marginTop: 4 }}>3301 Magnolia Bend, Conroe, TX</div>
                <div style={{ fontSize: 14, color: T.t3, marginTop: 2 }}>
                  GAF Timberline HDZ · Installed November 2020 · 2,100 sq ft
                </div>
              </div>

              <div style={{ height: 1, background: T.div, margin: "0 40px" }} />

              {/* Health Score - big and simple */}
              <div style={{ padding: "32px 40px", textAlign: "center" }}>
                <HealthRing score={54} size={88} />
                <div style={{ fontSize: 14, fontWeight: 600, color: T.text, marginTop: 14 }}>
                  Roof Health Score
                </div>
                <div style={{ fontSize: 14, color: T.t2, marginTop: 4, maxWidth: 380, margin: "4px auto 0" }}>
                  Your roof is showing wear that should be addressed soon to avoid costly repairs down the road.
                </div>
              </div>

              <div style={{ height: 1, background: T.div, margin: "0 40px" }} />

              {/* Findings - clean list */}
              <div style={{ padding: "28px 40px" }}>
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
                    Total estimated repair: $275-$550. Fix these now and your roof stays healthy for another 3-5 years. Leave them, and you are looking at a full replacement ($15K-$20K) within 18 months.
                  </div>
                </div>
              </div>

              <div style={{ height: 1, background: T.div, margin: "0 40px" }} />

              {/* Maintenance CTA - minimal */}
              <div style={{ padding: "32px 40px", textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: T.text, letterSpacing: -0.3 }}>
                  Keep your roof protected.
                </div>
                <div style={{ fontSize: 15, color: T.t2, marginTop: 8, maxWidth: 440, margin: "8px auto 28px" }}>
                  Lifeline members get annual inspections, priority repairs, and 10% off all service. Catch problems before they cost you.
                </div>

                <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 28 }}>
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
              <div style={{ padding: "18px 40px", textAlign: "center" }}>
                <div style={{ fontSize: 12, color: T.t3 }}>
                  Lifeline Roofing Systems · Conroe, TX · lifelineroofingsystems.com
                </div>
              </div>
            </Card>
          </div>
        </FadeIn>
      )}
    </div>
  );
}

/* ─── App Shell ─── */

export default function App() {
  const [started, setStarted] = useState(false);
  const [page, setPage] = useState("home");
  const [detailContact, setDetailContact] = useState(null);

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
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
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
      display: "flex", flexDirection: "column",
    }}>
      {/* Top Navigation */}
      <div style={{
        height: 52,
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "0.5px solid rgba(0,0,0,0.08)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 28px",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div
          onClick={goBack}
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        >
          <img src="/logo.png" alt="Lifeline Roofing" style={{ height: 28, objectFit: "contain" }} />
          <span style={{ fontSize: 12, color: T.t3, fontWeight: 500 }}>AI Roof Intelligence</span>
        </div>

        <div style={{ display: "flex", gap: 2 }}>
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => nav(t.id)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "6px 16px", borderRadius: 980, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600,
                background: page === t.id && !detailContact ? "rgba(0,0,0,0.06)" : "transparent",
                color: page === t.id && !detailContact ? T.text : T.t2,
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>{t.icon}</span> {t.label}
            </button>
          ))}
        </div>

        <div style={{ fontSize: 12, color: T.blue, fontWeight: 600 }}>Powered by Evios</div>
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, overflowY: "auto", padding: "32px 40px 60px" }}>
        {renderContent()}
      </div>
    </div>
  );
}

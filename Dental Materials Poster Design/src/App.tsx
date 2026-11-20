import clinicalImage from "./assets/clinical-dentistry.jpg";

const C = {
  ink: "#143C35",
  text: "#24332F",
  blue: "#6F96A2",
  bluePale: "#DDE9E9",
  sage: "#9CAD98",
  sagePale: "#E4E8DE",
  clay: "#C96F56",
  gold: "#B08A4A",
  paper: "#F6F3EB",
};

function MasterCurve() {
  return (
    <svg viewBox="0 0 1320 590" role="img" aria-label="Complete annotated stress strain curve">
      <defs>
        <linearGradient id="curveArea" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={C.blue} stopOpacity=".22" />
          <stop offset=".36" stopColor={C.sage} stopOpacity=".18" />
          <stop offset="1" stopColor={C.clay} stopOpacity=".08" />
        </linearGradient>
        <pattern
          id="elasticHatch"
          width="11"
          height="11"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="11" stroke={C.blue} strokeWidth="2" opacity=".42" />
        </pattern>
        <marker id="curveArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 8 4 0 8" fill="none" stroke={C.ink} strokeWidth="1.2" />
        </marker>
      </defs>

      <g stroke="#91A5A1" strokeOpacity=".22" strokeWidth="1">
        {[124, 220, 316, 412].map((y) => (
          <line key={y} x1="112" y1={y} x2="1248" y2={y} />
        ))}
        {[316, 520, 724, 928, 1132].map((x) => (
          <line key={x} x1="42" y1="38" x2={x} y2="492" />
        ))}
      </g>

      <path
        d="M112 492 L394 250 C430 221 453 211 477 207 C557 195 649 182 755 145 C856 109 951 75 1024 82 C1119 92 1182 157 1205 275 L1205 492 Z"
        fill="url(#curveArea)"
      />
      <path d="M112 492 L394 250 L394 492 Z" fill="url(#elasticHatch)" />

      <g stroke={C.ink} strokeWidth="2">
        <path d="M112 492 H1260" />
        <path d="M112 492 V30" />
      </g>
      <g fill={C.ink} fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="2.5">
        <text x="0" y="22">
          STRESS · σ
        </text>
        <text x="1132" y="548">
          STRAIN · ε
        </text>
      </g>

      <path d="M112 492 L394 250" fill="none" stroke={C.blue} strokeWidth="11" />
      <path
        d="M394 250 C430 221 453 211 477 207 C557 195 649 182 755 145 C856 109 951 75 1024 82 C1119 92 1182 157 1205 275"
        fill="none"
        stroke={C.sage}
        strokeWidth="11"
      />
      <path
        d="M1085 101 C1144 130 1184 186 1205 275"
        fill="none"
        stroke={C.clay}
        strokeWidth="11"
      />

      <line
        x1="171"
        y1="492"
        x2="445"
        y2="257"
        stroke={C.gold}
        strokeWidth="2.5"
        strokeDasharray="9 9"
      />
      <line x1="171" y1="492" x2="171" y2="510" stroke={C.gold} strokeWidth="2" />
      <text x="143" y="532" fill={C.gold} fontFamily="IBM Plex Mono" fontSize="13">
        0.2%
      </text>

      <g stroke="#60756F" strokeOpacity=".55" strokeWidth="1.2" strokeDasharray="5 6">
        <line x1="394" y1="250" x2="394" y2="492" />
        <line x1="421" y1="226" x2="421" y2="492" />
        <line x1="477" y1="207" x2="477" y2="492" />
        <line x1="1024" y1="82" x2="1024" y2="492" />
        <line x1="1205" y1="275" x2="1205" y2="492" />
      </g>

      {[
        [394, 250, C.blue],
        [421, 226, C.gold],
        [477, 207, C.ink],
        [1024, 82, C.gold],
        [1205, 275, C.clay],
      ].map(([x, y, color], index) => (
        <g key={index}>
          <circle cx={x} cy={y} r="11" fill={C.paper} stroke={color} strokeWidth="4" />
          <circle cx={x} cy={y} r="3" fill={color} />
        </g>
      ))}

      <g fontFamily="Manrope, sans-serif" fill={C.text}>
        <g fontSize="13" fontWeight="700" letterSpacing="1.8">
          <text x="336" y="202">
            P.L.
          </text>
          <text x="405" y="174">
            E.L.
          </text>
          <text x="492" y="214">
            Y.S.
          </text>
          <text x="997" y="35">
            U.S.
          </text>
          <text x="1161" y="323" fill={C.clay}>
            FRACTURE
          </text>
        </g>
        <g fontSize="12">
          <text x="301" y="220">
            proportionality ends
          </text>
          <text x="398" y="190">
            elastic recovery ends
          </text>
          <text x="492" y="231">
            plastic flow begins
          </text>
          <text x="961" y="53">
            maximum stress
          </text>
          <text x="1161" y="341">
            final endpoint
          </text>
        </g>
      </g>

      <g fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="1.4">
        <text x="146" y="97" fill={C.blue}>
          01 / ELASTIC
        </text>
        <text x="596" y="440" fill={C.ink}>
          02 / PLASTIC DEFORMATION
        </text>
        <text x="1085" y="407" fill={C.clay}>
          03 / FAILURE
        </text>
      </g>

      <path d="M174 412 L342 274" stroke={C.ink} strokeWidth="1.4" markerEnd="url(#curveArrow)" />
      <text
        x="157"
        y="382"
        fontFamily="Newsreader, serif"
        fontSize="25"
        fontStyle="italic"
        fill={C.ink}
      >
        E = σ / ε
      </text>
      <text x="157" y="402" fontFamily="Manrope" fontSize="11" letterSpacing="1.2" fill={C.text}>
        SLOPE = ELASTIC MODULUS
      </text>

      <g transform="translate(244 424)">
        <rect width="120" height="44" fill={C.paper} fillOpacity=".74" />
        <text x="12" y="18" fontFamily="IBM Plex Mono" fontSize="10" fill={C.blue}>
          RESILIENCE
        </text>
        <text x="12" y="33" fontFamily="Manrope" fontSize="10" fill={C.text}>
          elastic area
        </text>
      </g>
      <g transform="translate(735 354)">
        <text x="0" y="0" fontFamily="Newsreader" fontSize="25" fontStyle="italic" fill={C.ink}>
          Toughness
        </text>
        <text x="0" y="19" fontFamily="Manrope" fontSize="11" letterSpacing="1" fill={C.text}>
          ALL ENERGY ABSORBED TO FRACTURE
        </text>
      </g>
    </svg>
  );
}

function OffsetSketch() {
  return (
    <svg viewBox="0 0 250 140" className="diagram">
      <path d="M22 122H235M22 122V12" stroke={C.ink} strokeWidth="1.2" />
      <path d="M22 122L100 53C115 41 132 37 151 36" fill="none" stroke={C.blue} strokeWidth="4" />
      <path d="M55 122L129 57" fill="none" stroke={C.gold} strokeWidth="2" strokeDasharray="6 5" />
      <circle cx="123" cy="62" r="5" fill={C.paper} stroke={C.ink} strokeWidth="2" />
      <text x="129" y="65" fontSize="10" fill={C.ink}>
        Y.S.
      </text>
      <text x="42" y="136" fontSize="9" fill={C.gold}>
        0.2% offset
      </text>
    </svg>
  );
}

function SlopeSketch() {
  return (
    <svg viewBox="0 0 290 150" className="diagram">
      <path d="M25 128H278M25 128V12" stroke={C.ink} strokeWidth="1.2" />
      <path d="M25 128L88 24" stroke={C.ink} strokeWidth="5" />
      <path d="M25 128L237 35" stroke={C.blue} strokeWidth="5" />
      <path d="M25 68H238" stroke={C.gold} strokeWidth="1.5" strokeDasharray="5 5" />
      <text x="61" y="18" fontSize="10" fill={C.ink} fontWeight="700">
        STIFF / HIGH E
      </text>
      <text x="174" y="30" fontSize="10" fill={C.blue} fontWeight="700">
        FLEXIBLE / LOW E
      </text>
      <text x="126" y="62" fontSize="9" fill={C.gold}>
        equal stress
      </text>
    </svg>
  );
}

function FormingSketch() {
  return (
    <svg viewBox="0 0 420 132" className="diagram">
      <g transform="translate(0 8)">
        <text x="0" y="10" fontSize="10" fontWeight="700" fill={C.ink}>
          TENSION → WIRE
        </text>
        <path
          d="M5 42H90L116 29H148M5 58H90L116 71H148M148 29V71M148 50H198"
          fill="none"
          stroke={C.blue}
          strokeWidth="3"
        />
        <path d="M206 50H255" stroke={C.gold} strokeWidth="2" />
        <path d="m255 50-9-5v10z" fill={C.gold} />
      </g>
      <g transform="translate(0 78)">
        <text x="0" y="10" fontSize="10" fontWeight="700" fill={C.ink}>
          COMPRESSION → SHEET
        </text>
        <rect x="5" y="28" width="92" height="20" fill={C.sage} opacity=".7" />
        <path
          d="M119 16l18 16-18 16M119 62l18-16-18-16"
          fill="none"
          stroke={C.clay}
          strokeWidth="3"
        />
        <rect x="165" y="35" width="118" height="8" fill={C.gold} opacity=".7" />
      </g>
    </svg>
  );
}

function FractureSketch() {
  return (
    <svg viewBox="0 0 360 155" className="diagram">
      <g>
        <path d="M18 132H164M18 132V16" stroke={C.ink} strokeWidth="1" />
        <path
          d="M18 132L67 61C87 35 125 37 143 57C155 71 156 100 148 117"
          fill="none"
          stroke={C.sage}
          strokeWidth="4"
        />
        <circle cx="148" cy="117" r="4" fill={C.clay} />
        <text x="45" y="15" fontSize="10" fontWeight="700" fill={C.ink}>
          DUCTILE
        </text>
        <text x="45" y="149" fontSize="9" fill={C.text}>
          necking · plastic flow
        </text>
      </g>
      <g transform="translate(182)">
        <path d="M18 132H164M18 132V16" stroke={C.ink} strokeWidth="1" />
        <path d="M18 132L75 48L81 92" fill="none" stroke={C.blue} strokeWidth="4" />
        <path d="M85 65l7 8-7 8 7 8-7 8" fill="none" stroke={C.clay} strokeWidth="2" />
        <circle cx="81" cy="92" r="4" fill={C.clay} />
        <text x="47" y="15" fontSize="10" fontWeight="700" fill={C.ink}>
          BRITTLE
        </text>
        <text x="41" y="149" fontSize="9" fill={C.text}>
          crack propagation
        </text>
      </g>
    </svg>
  );
}

function EnergySketch() {
  return (
    <svg viewBox="0 0 360 170" className="diagram">
      <path d="M24 145H344M24 145V15" stroke={C.ink} strokeWidth="1" />
      <path
        d="M24 145L107 61C135 35 177 52 232 34C280 18 323 54 338 102L338 145Z"
        fill={C.sage}
        opacity=".27"
      />
      <path d="M24 145L107 61V145Z" fill={C.blue} opacity=".52" />
      <path
        d="M24 145L107 61C135 35 177 52 232 34C280 18 323 54 338 102"
        fill="none"
        stroke={C.ink}
        strokeWidth="3.5"
      />
      <text x="51" y="126" fontSize="9" fontWeight="700" fill={C.ink}>
        RESILIENCE
      </text>
      <text x="184" y="118" fontSize="9" fontWeight="700" fill={C.ink}>
        TOTAL TOUGHNESS
      </text>
      <text x="95" y="51" fontSize="9" fill={C.blue}>
        P.L.
      </text>
      <text x="316" y="96" fontSize="9" fill={C.clay}>
        fracture
      </text>
    </svg>
  );
}

type NoteProps = { n: string; title: string; children: React.ReactNode; className?: string };

function Note({ n, title, children, className = "" }: NoteProps) {
  return (
    <article className={`note ${className}`}>
      <span className="note-number">{n}</span>
      <h3>{title}</h3>
      <div className="note-copy">{children}</div>
    </article>
  );
}

export default function App() {
  return (
    <main className="stage">
      <article className="poster">
        <header className="masthead">
          <div className="institution">
            <strong>THE BRITISH UNIVERSITY IN EGYPT</strong>
            <span>FACULTY OF DENTISTRY</span>
            <span>DENTAL MATERIALS I</span>
          </div>
          <div className="issue">PROJECT 07 · 17 NOV 2027</div>
          <div className="title">
            <p>PROPERTIES OBTAINED FROM THE STRESS–STRAIN CURVE</p>
            <h1>
              THE SCIENCE OF HOW
              <br />
              <i>DENTAL MATERIALS</i> BEHAVE
            </h1>
            <div className="title-foot">
              <span>
                From deformation to fracture: the mechanical language behind clinical performance.
              </span>
              <b>σ → ε</b>
            </div>
          </div>
          <div className="topic-number">07</div>
        </header>

        <section className="curve-field">
          <div className="curve-head">
            <div>
              <span>THE MASTER CURVE / READ FROM LEFT TO RIGHT</span>
              <h2>
                ONE CURVE.
                <br />
                AN ENTIRE MATERIAL STORY.
              </h2>
            </div>
            <p>
              The curve’s shape and the magnitudes of stress and strain reveal strength, stiffness,
              deformation and energy absorption—without inventing numerical measurements.
            </p>
          </div>
          <MasterCurve />
        </section>

        <section className="limits-band">
          <div className="chapter-label">
            <span>A</span>
            <p>
              STRESS LIMITS
              <br />+ STRENGTH
            </p>
          </div>
          <Note n="01" title="PROPORTIONAL LIMIT">
            <p>
              Maximum stress without deviation from proportionality between stress and strain. It
              describes their <b>relationship.</b>
            </p>
          </Note>
          <Note n="02" title="ELASTIC LIMIT">
            <p>
              Maximum stress without permanent deformation. It describes the material’s{" "}
              <b>behavior.</b>
            </p>
            <p className="aside">
              P.L. ≈ E.L. in practical stress value—different definitions, almost the same location.
            </p>
          </Note>
          <Note n="03" title="YIELD STRENGTH">
            <p>
              Stress where marked plastic behavior begins; located using{" "}
              <b>0.1–0.2% permanent strain.</b>
            </p>
            <div className="clinical-flag">
              CLINICALLY CRITICAL / permanent bridge deformation is functional failure.
            </div>
          </Note>
          <OffsetSketch />
          <Note n="04" title="ULTIMATE STRENGTH">
            <p>
              The maximum stress just before failure: <b>tensile</b> in tension, <b>compressive</b>{" "}
              in compression.
            </p>
            <p className="aside clay">U.S. is the peak—not the fracture endpoint.</p>
          </Note>
        </section>

        <section className="properties-field">
          <div className="deformation-story">
            <div className="chapter-title">
              <span>B / STIFFNESS + DEFORMATION</span>
              <h2>
                HOW A MATERIAL
                <br />
                <i>GIVES</i>—OR REFUSES TO.
              </h2>
            </div>
            <div className="modulus-layout">
              <Note n="05" title="YOUNG’S MODULUS · E">
                <p>
                  The constant stress–strain ratio within the elastic limit; the slope of the
                  elastic region and a measure of rigidity.
                </p>
                <div className="equation">E = STRESS / STRAIN</div>
                <p>
                  <b>High E</b> = stiff. <b>Low E</b> = flexible.
                </p>
              </Note>
              <SlopeSketch />
              <div className="fact-line">
                <strong>2×</strong>
                <span>
                  Chromium–cobalt is approximately twice as stiff as gold alloy, enabling a denture
                  base at half the thickness.
                </span>
              </div>
            </div>

            <div className="forming-layout">
              <div className="forming-notes">
                <Note n="06" title="DUCTILITY">
                  <p>
                    Plastic deformation under <b>tensile</b> stress without fracture; measured by
                    elongation.
                  </p>
                  <div className="equation small">
                    [(L<sub>f</sub> − L<sub>0</sub>) / L<sub>0</sub>] × 100
                  </div>
                  <p>Gold alloy ≈ 20%. Above 5% is ductile and burnishable; below 5% is brittle.</p>
                </Note>
                <Note n="07" title="MALLEABILITY">
                  <p>
                    Plastic deformation under <b>compressive</b> stress without fracture.
                  </p>
                </Note>
              </div>
              <FormingSketch />
            </div>

            <div className="brittle-layout">
              <Note n="08" title="BRITTLENESS">
                <p>
                  Little or no plastic deformation. Fracture occurs at or near P.L.; there is no
                  necking—cracks propagate to failure.
                </p>
                <p className="aside">Examples / amalgam · porcelain · composites</p>
              </Note>
              <FractureSketch />
              <div className="six-times">
                <strong>≈6×</strong>
                <span>Amalgam’s compressive strength versus its tensile strength.</span>
              </div>
            </div>
          </div>

          <aside className="energy-story">
            <div className="chapter-title light">
              <span>C / ENERGY ABSORPTION</span>
              <h2>
                HOW MUCH
                <br />
                CAN IT <i>ABSORB?</i>
              </h2>
            </div>
            <EnergySketch />
            <Note n="09" title="RESILIENCE">
              <p>
                Energy required to reach P.L.—the area beneath the <b>elastic</b> portion.
              </p>
              <div className="equation dark">R = ½ × STRAIN × STRESS</div>
              <p className="unit">
                JOULE · m<sup>−3</sup>
              </p>
              <p className="energy-case">
                <b>ORTHODONTIC WIRES</b>
                <br />
                Work available from a spring during tooth movement.
              </p>
              <p className="energy-case">
                <b>DENTURE TEETH</b>
                <br />
                Acrylic is more resilient than porcelain, absorbing force and transmitting less to
                bone.
              </p>
            </Note>
            <Note n="10" title="TOUGHNESS">
              <p>
                Total energy to fracture—the area under <b>elastic + plastic</b> regions. High P.L.
                plus good ductility tends to create a tough material.
              </p>
              <p className="unit">
                JOULE · m<sup>−3</sup>
              </p>
            </Note>
            <div className="energy-relation">
              <span>RESILIENCE</span>
              <i>⊂</i>
              <span>TOUGHNESS</span>
            </div>
          </aside>
        </section>

        <section className="clinical-band">
          <figure>
            <img src={clinicalImage} alt="Clinical dental examination with mirror and probe" />
            <figcaption>CLINICAL CONTEXT / authentic dental examination photography</figcaption>
          </figure>
          <div className="clinical-copy">
            <span>FROM MATERIAL SCIENCE TO CLINICAL DENTISTRY</span>
            <h2>
              THE CURVE BECOMES
              <br />A CLINICAL DECISION.
            </h2>
            <p>
              Every restoration must answer a different mechanical demand. The right property is the
              one that protects function.
            </p>
          </div>
          <div className="application-index">
            <div>
              <b>BRIDGE</b>
              <span>yield strength prevents permanent displacement</span>
            </div>
            <div>
              <b>DENTURE BASE</b>
              <span>high modulus distributes masticatory load</span>
            </div>
            <div>
              <b>ORTHODONTIC WIRE</b>
              <span>resilience stores useful work</span>
            </div>
            <div>
              <b>GOLD MARGIN</b>
              <span>ductility permits safe burnishing</span>
            </div>
            <div>
              <b>DENTURE TEETH</b>
              <span>acrylic resilience reduces force to bone</span>
            </div>
          </div>
        </section>

        <section className="closing">
          <div className="closing-title">
            <span>THE FINAL PRINCIPLE</span>
            <h2>
              NO SINGLE PROPERTY
              <br />
              MAKES A MATERIAL <i>IDEAL.</i>
            </h2>
          </div>
          <div className="closing-copy">
            <p>
              Stiffness, strength and ductility are independent. Materials can exhibit very
              different combinations of them.
            </p>
            <blockquote>
              The ideal dental material is determined not by one property alone,
              <br />
              but by the mechanical demands of its clinical application.
            </blockquote>
          </div>
        </section>

        <footer>
          <div className="sources">
            <b>REFERENCES</b>
            <p>
              01 / <i>Mechanical Properties</i>, pp. 38–45. &nbsp; 02 /{" "}
              <i>Relation Between Stress &amp; Strain</i>, supplied lecture material.
            </p>
            <p>
              Scientific diagrams redrawn as editable SVG. Clinical photograph: Unsplash, used under
              the Unsplash License.
            </p>
          </div>
          <div className="contributors">
            <b>GROUP / EDIT NAMES</b>
            {[
              "Research + writing",
              "Design + layout",
              "Figures + illustration",
              "Verification + references",
              "Clinical examples + proofing",
            ].map((role, i) => (
              <div key={role}>
                <span>0{i + 1}</span>
                <p>NAME __________________</p>
                <small>{role}</small>
              </div>
            ))}
          </div>
          <div className="submission">
            <b>DENTAL MATERIALS I</b>
            <span>MARKS / 10</span>
            <span>GROUP / ≤ 5</span>
            <span>A1 / 594 × 841 MM</span>
          </div>
        </footer>
      </article>
    </main>
  );
}

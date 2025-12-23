"use strict";

// ==============================
// Option lists (A, B, C)
// ==============================
const PROCEDURE_TYPES = [
  "General Surgery \u2013 Abdomen",
  "Head & Neck",
  "ENT / Airway surgery",
  "Thoracic",
  "Neurosurgery",
  "Obstetrics",
  "Orthopedics",
  "Short procedure / Day case",
  "Endoscopy",
  "Trauma surgery",
  "ICU Intubation / Procedure"
];

const LOCATIONS = [
  "Operating Room (OR)",
  "Emergency Department (ED)",
  "ICU",
  "Ward / Floor",
  "Prehospital / Ambulance",
  "Outside OR (NORA: endoscopy / radiology)"
];

const CONDITIONS = [
  "None / No special condition",
  "Anticipated difficult airway",
  "Full stomach / Aspiration risk",
  "Cervical spine concern / immobilization",
  "Obesity / High BMI",
  "Limited mouth opening / trismus",
  "Limited neck mobility",
  "Facial trauma / blood in airway",
  "Burns / inhalation injury",
  "Pregnancy",
  "Severe hypoxemia / Respiratory failure",
  "Need for lung isolation"
];

// ==============================
// Airway tools database 
// ==============================
const TOOLS_DB = [
  {
  id: "ett_oxford",
  tool_name: "Oxford Tracheal Tube",
  tool_category: "Endotracheal – Specialized",
  insertion_method: "Oral intubation using laryngoscope",
  insertion_site: "Oral",
  contraindications: ["Severe tracheal stenosis"],
  advantages: [
    "Longer tube length",
    "Suitable for head and neck surgery",
    "Allows surgical access without tube displacement"
  ],
  preferred_in: [
    "Head and neck surgery",
    "ENT procedures"
  ],
  warnings: [
    "Ensure correct depth due to increased length",
    "Confirm tube position after patient positioning"
  ],
  backup_tools: ["Standard ETT", "Bougie"],
  skill_level: "Intermediate",
  image: { alt: "Oxford Tracheal Tube", url: "images/ett_oxford.png" },
  supported_procedure_types: [
    "ENT Surgery",
    "Head and Neck Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Need for longer tracheal tube"
  ],
  contraindicated_conditions: [
    "Very short trachea"
  ],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_armoured",
  tool_name: "Armoured (Reinforced) Tracheal Tube",
  tool_category: "Endotracheal – Reinforced",
  insertion_method: "Oral or nasal intubation using laryngoscope",
  insertion_site: "Oral / Nasal",
  contraindications: ["Need for tube clamping or stylet fixation"],
  advantages: [
    "Resists kinking",
    "Maintains lumen patency during extreme positioning"
  ],
  preferred_in: [
    "Prone position surgery",
    "Neurosurgery",
    "Head and neck surgery"
  ],
  warnings: [
    "Cannot be cut",
    "More difficult to secure with stylet"
  ],
  backup_tools: ["Standard ETT", "Video laryngoscope"],
  skill_level: "Intermediate",
  image: { alt: "Armoured ETT", url: "images/ett_armoured.png" },
  supported_procedure_types: [
    "Neurosurgery",
    "Spine Surgery",
    "ENT Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)",
    "ICU"
  ],
  preferred_conditions: [
    "Risk of tube kinking"
  ],
  contraindicated_conditions: [
    "Need for tube shortening"
  ],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Emergency", "Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_armoured",
  tool_name: "Armoured (Reinforced) Tracheal Tube",
  tool_category: "Endotracheal – Reinforced",
  insertion_method: "Oral or nasal intubation using laryngoscope",
  insertion_site: "Oral / Nasal",
  contraindications: ["Need for tube clamping or stylet fixation"],
  advantages: [
    "Resists kinking",
    "Maintains lumen patency during extreme positioning"
  ],
  preferred_in: [
    "Prone position surgery",
    "Neurosurgery",
    "Head and neck surgery"
  ],
  warnings: [
    "Cannot be cut",
    "More difficult to secure with stylet"
  ],
  backup_tools: ["Standard ETT", "Video laryngoscope"],
  skill_level: "Intermediate",
  image: { alt: "Armoured ETT", url: "images/ett_armoured.png" },
  supported_procedure_types: [
    "Neurosurgery",
    "Spine Surgery",
    "ENT Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)",
    "ICU"
  ],
  preferred_conditions: [
    "Risk of tube kinking"
  ],
  contraindicated_conditions: [
    "Need for tube shortening"
  ],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Emergency", "Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_polar",
  tool_name: "Polar Preformed Tracheal Tube",
  tool_category: "Endotracheal – Preformed",
  insertion_method: "Oral intubation using laryngoscope",
  insertion_site: "Oral",
  contraindications: ["Incorrect size selection"],
  advantages: [
    "Preformed curve reduces pressure on lips",
    "Improved fixation stability"
  ],
  preferred_in: [
    "ENT surgery",
    "Oral and maxillofacial surgery"
  ],
  warnings: [
    "Correct orientation is essential",
    "Limited repositioning once placed"
  ],
  backup_tools: ["Standard ETT"],
  skill_level: "Intermediate",
  image: { alt: "Polar Tracheal Tube", url: "images/ett_polar.png" },
  supported_procedure_types: [
    "ENT Surgery",
    "Dental Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Need for preformed tube"
  ],
  contraindicated_conditions: [],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_rae",
  tool_name: "RAE Tracheal Tube",
  tool_category: "Endotracheal – Preformed",
  insertion_method: "Oral or nasal intubation using laryngoscope",
  insertion_site: "Oral / Nasal",
  contraindications: ["Incorrect orientation"],
  advantages: [
    "Keeps tube away from surgical field",
    "Preformed shape reduces kinking"
  ],
  preferred_in: [
    "ENT surgery",
    "Maxillofacial surgery"
  ],
  warnings: [
    "Tube depth must be carefully checked",
    "Limited ability to adjust once fixed"
  ],
  backup_tools: ["Standard ETT"],
  skill_level: "Intermediate",
  image: { alt: "RAE Tracheal Tube", url: "images/ett_rae.png" },
  supported_procedure_types: [
    "ENT Surgery",
    "Dental Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Surgical field near mouth or nose"
  ],
  contraindicated_conditions: [],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_rae",
  tool_name: "RAE Tracheal Tube",
  tool_category: "Endotracheal – Preformed",
  insertion_method: "Oral or nasal intubation using laryngoscope",
  insertion_site: "Oral / Nasal",
  contraindications: ["Incorrect orientation"],
  advantages: [
    "Keeps tube away from surgical field",
    "Preformed shape reduces kinking"
  ],
  preferred_in: [
    "ENT surgery",
    "Maxillofacial surgery"
  ],
  warnings: [
    "Tube depth must be carefully checked",
    "Limited ability to adjust once fixed"
  ],
  backup_tools: ["Standard ETT"],
  skill_level: "Intermediate",
  image: { alt: "RAE Tracheal Tube", url: "images/ett_rae.png" },
  supported_procedure_types: [
    "ENT Surgery",
    "Dental Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Surgical field near mouth or nose"
  ],
  contraindicated_conditions: [],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_rae_north",
  tool_name: "North-facing RAE Tracheal Tube",
  tool_category: "Endotracheal – Preformed Oral",
  insertion_method: "Oral intubation using laryngoscope",
  insertion_site: "Oral",
  contraindications: ["Need for nasal intubation"],
  advantages: [
    "Keeps tube directed upward",
    "Clear surgical field for oral surgery"
  ],
  preferred_in: [
    "Cleft palate surgery",
    "Oral surgery"
  ],
  warnings: [
    "Confirm depth after fixation"
  ],
  backup_tools: ["Standard ETT"],
  skill_level: "Intermediate",
  image: { alt: "North-facing RAE", url: "images/ett_rae_north.png" },
  supported_procedure_types: [
    "Oral Surgery",
    "ENT Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Oral surgical access required"
  ],
  contraindicated_conditions: [],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_rae_south",
  tool_name: "South-facing RAE Tracheal Tube",
  tool_category: "Endotracheal – Preformed Nasal",
  insertion_method: "Nasal intubation using laryngoscope or Magill forceps",
  insertion_site: "Nasal",
  contraindications: ["Basal skull fracture", "Coagulopathy"],
  advantages: [
    "Keeps tube away from facial surgical field",
    "Ideal for dental surgery"
  ],
  preferred_in: [
    "Dental surgery",
    "Maxillofacial surgery"
  ],
  warnings: [
    "Risk of nasal bleeding",
    "Confirm bilateral breath sounds"
  ],
  backup_tools: ["Oral ETT"],
  skill_level: "Advanced",
  image: { alt: "South-facing RAE", url: "images/ett_rae_south.png" },
  supported_procedure_types: [
    "Dental Surgery",
    "Maxillofacial Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Need for nasal intubation"
  ],
  contraindicated_conditions: [
    "Base of skull fracture"
  ],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_laser",
  tool_name: "Laser Resistant Tracheal Tube",
  tool_category: "Endotracheal – Laser Surgery",
  insertion_method: "Oral intubation using laryngoscope",
  insertion_site: "Oral",
  contraindications: ["Non-laser procedures"],
  advantages: [
    "Resistant to laser-induced ignition",
    "Reduces airway fire risk"
  ],
  preferred_in: [
    "Laser airway surgery"
  ],
  warnings: [
    "Use lowest FiO2 possible",
    "Cuff may need saline inflation with dye"
  ],
  backup_tools: ["Standard ETT"],
  skill_level: "Advanced",
  image: { alt: "Laser Resistant ETT", url: "images/ett_laser.png" },
  supported_procedure_types: [
    "Laser Laryngeal Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Laser use in airway"
  ],
  contraindicated_conditions: [],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_parker",
  tool_name: "Parker Flex-Tip Tracheal Tube",
  tool_category: "Endotracheal – Atraumatic Tip",
  insertion_method: "Oral or nasal intubation using laryngoscope",
  insertion_site: "Oral / Nasal",
  contraindications: [],
  advantages: [
    "Flexible atraumatic tip",
    "Reduced vocal cord trauma",
    "Improved first-pass success"
  ],
  preferred_in: [
    "Difficult airway",
    "Nasal intubation"
  ],
  warnings: [
    "Still confirm placement with capnography"
  ],
  backup_tools: ["Standard ETT"],
  skill_level: "Intermediate",
  image: { alt: "Parker Tracheal Tube", url: "images/ett_parker.png" },
  supported_procedure_types: [
    "General Surgery",
    "ENT Surgery"
  ],
  supported_locations: [
    "OR",
    "ED",
    "ICU"
  ],
  preferred_conditions: [
    "Need to reduce airway trauma"
  ],
  contraindicated_conditions: [],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Emergency", "Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_mlt",
  tool_name: "Microlaryngeal Tracheal Tube (MLT)",
  tool_category: "Endotracheal – Small Diameter",
  insertion_method: "Oral intubation using laryngoscope",
  insertion_site: "Oral",
  contraindications: ["Need for high ventilation pressures"],
  advantages: [
    "Small internal diameter",
    "Improved surgical exposure of vocal cords"
  ],
  preferred_in: [
    "Laryngeal surgery",
    "Microlaryngoscopy"
  ],
  warnings: [
    "Increased airway resistance",
    "Monitor peak airway pressure"
  ],
  backup_tools: ["Standard ETT"],
  skill_level: "Advanced",
  image: { alt: "Microlaryngeal Tube", url: "images/ett_mlt.png" },
  supported_procedure_types: [
    "Laryngeal Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Need for small tube diameter"
  ],
  contraindicated_conditions: [
    "Poor lung compliance"
  ],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_mlt",
  tool_name: "Microlaryngeal Tracheal Tube (MLT)",
  tool_category: "Endotracheal – Small Diameter",
  insertion_method: "Oral intubation using laryngoscope",
  insertion_site: "Oral",
  contraindications: ["Need for high ventilation pressures"],
  advantages: [
    "Small internal diameter",
    "Improved surgical exposure of vocal cords"
  ],
  preferred_in: [
    "Laryngeal surgery",
    "Microlaryngoscopy"
  ],
  warnings: [
    "Increased airway resistance",
    "Monitor peak airway pressure"
  ],
  backup_tools: ["Standard ETT"],
  skill_level: "Advanced",
  image: { alt: "Microlaryngeal Tube", url: "images/ett_mlt.png" },
  supported_procedure_types: [
    "Laryngeal Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Need for small tube diameter"
  ],
  contraindicated_conditions: [
    "Poor lung compliance"
  ],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "ett_emg",
  tool_name: "Electromyography Endotracheal Tube (EMG Tube)",
  tool_category: "Endotracheal – Neuromonitoring",
  insertion_method: "Oral intubation using laryngoscope or video laryngoscope",
  insertion_site: "Oral",
  contraindications: ["Use of neuromuscular blockers during monitoring"],
  advantages: [
    "Allows recurrent laryngeal nerve monitoring",
    "Reduces risk of nerve injury"
  ],
  preferred_in: [
    "Thyroid surgery",
    "Parathyroid surgery"
  ],
  warnings: [
    "Correct electrode positioning essential",
    "Avoid muscle relaxants after placement"
  ],
  backup_tools: ["Standard ETT"],
  skill_level: "Advanced",
  image: { alt: "EMG Endotracheal Tube", url: "images/ett_emg.png" },
  supported_procedure_types: [
    "Thyroid Surgery",
    "Neck Surgery"
  ],
  supported_locations: [
    "Operating Room (OR)"
  ],
  preferred_conditions: [
    "Need for nerve monitoring"
  ],
  contraindicated_conditions: [
    "Continuous neuromuscular blockade"
  ],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated"]
},

{
  id: "lma_generic",
  tool_name: "Laryngeal Mask Airway (LMA) — generic",
  tool_category: "Supraglottic",
  insertion_method: "Oral insertion, advance until mask seats in hypopharynx then inflate (if inflatable cuff)",
  insertion_site: "Oral / Oropharynx",
  contraindications: ["Unprotected full stomach / high aspiration risk (relative)", "Severely restricted mouth opening", "Upper airway obstruction proximal to larynx"],
  advantages: ["Rapid placement", "Less stimulation than intubation", "Useful for elective GA and rescue airway"],
  preferred_in: ["Elective general anaesthesia in fasted patients", "Rescue airway in difficult ventilation/intubation"],
  warnings: ["Monitor seal pressure; not a definitive aspiration-proof airway unless 2nd-generation with gastric channel", "Ensure correct cuff pressure if inflatable"],
  backup_tools: ["Endotracheal tube", "Video laryngoscope", "Bougie"],
  skill_level: "Basic",
  image: { alt: "Generic LMA", url: "images/lma_generic.png" },
  supported_procedure_types: ["General surgery", "Short ENT procedures", "Day case anaesthesia"],
  supported_locations: ["Operating Room (OR)", "Emergency Department (ED)", "ICU (rescue)"],
  preferred_conditions: ["Fasted elective patient", "No high aspiration risk"],
  contraindicated_conditions: ["Active vomiting / high aspiration risk"],
  consciousness_levels: ["Sedated", "Unconscious (with no gag reflex)"],
  urgency_levels: ["Non-emergency", "Rescue emergency"],
  sedation_status: ["Sedated", "Anesthetized"]
},

{
  id: "lma_classic",
  tool_name: "LMA Classic",
  tool_category: "Supraglottic — 1st generation LMA",
  insertion_method: "Oral insertion until cuff seats in hypopharynx, then inflate cuff",
  insertion_site: "Oral",
  contraindications: ["High aspiration risk", "Poor pulmonary compliance requiring high airway pressures"],
  advantages: ["Simple, reusable design", "Fast insertion — well known standard device"],
  preferred_in: ["Routine GA for fasted patients", "Short operations"],
  warnings: ["Not designed primarily for gastric suctioning; limited protection against aspiration"],
  backup_tools: ["LMA ProSeal/Supreme (if gastric access needed)", "ETT"],
  skill_level: "Basic",
  image: { alt: "LMA Classic", url: "images/lma_classic.png" },
  supported_procedure_types: ["Day-case surgery", "ENT (select)", "Minor general surgery"],
  supported_locations: ["OR", "ED (rescue)"],
  preferred_conditions: ["Fasted elective patients"],
  contraindicated_conditions: ["High aspiration risk"],
  consciousness_levels: ["Sedated", "Unconscious"],
  urgency_levels: ["Non-emergency", "Rescue"],
  sedation_status: ["Anesthetized"]
},

{
  id: "lma_unique",
  tool_name: "LMA Unique",
  tool_category: "Supraglottic — single-use LMA",
  insertion_method: "Oral insertion, inflate cuff (single-use disposable design)",
  insertion_site: "Oral",
  contraindications: ["High aspiration risk", "Very high airway pressures required"],
  advantages: ["Single-use (sterile) — avoids cross-infection", "Similar handling to Classic"],
  preferred_in: ["Day-case anaesthesia", "Settings preferring disposables"],
  warnings: ["Inflate cuff to recommended pressure", "Not for patients with high aspiration risk"],
  backup_tools: ["LMA ProSeal / ETT"],
  skill_level: "Basic",
  image: { alt: "LMA Unique", url: "images/lma_unique.png" },
  supported_procedure_types: ["Minor surgeries", "Day-case procedures"],
  supported_locations: ["OR", "ED"],
  preferred_conditions: ["Fasted elective patients"],
  contraindicated_conditions: ["High aspiration risk"],
  consciousness_levels: ["Sedated", "Unconscious"],
  urgency_levels: ["Non-emergency", "Rescue"],
  sedation_status: ["Anesthetized"]
},
{
  id: "lma_proseal",
  tool_name: "LMA ProSeal",
  tool_category: "Supraglottic — 2nd generation LMA with drain channel",
  insertion_method: "Oral insertion; inflatable cuff; has gastric/drain channel for gastric tube",
  insertion_site: "Oral / Hypopharynx",
  contraindications: ["Severe upper GI bleeding with active aspiration risk (use definitive airway)"],
  advantages: ["Better seal and higher oropharyngeal leak pressure than classic", "Gastric/drain channel reduces gastric insufflation risk"],
  preferred_in: ["Cases needing higher seal pressure or gastric access", "Some laparoscopic cases under controlled settings"],
  warnings: ["Confirm position of drain channel; monitor cuff pressure"],
  backup_tools: ["ETT", "LMA Supreme"],
  skill_level: "Intermediate",
  image: { alt: "LMA ProSeal", url: "images/lma_proseal.png" },
  supported_procedure_types: ["Abdominal surgery (select)", "Laparoscopy (selected cases)"],
  supported_locations: ["OR", "ED (rescue)"],
  preferred_conditions: ["Need for higher seal pressure", "Controlled ventilation"],
  contraindicated_conditions: ["Active uncontrolled aspiration"],
  consciousness_levels: ["Anesthetized", "Sedated"],
  urgency_levels: ["Non-emergency", "Rescue"],
  sedation_status: ["Anesthetized"]
},
{
  id: "lma_unique",
  tool_name: "LMA Unique",
  tool_category: "Supraglottic — single-use LMA",
  insertion_method: "Oral insertion, inflate cuff (single-use disposable design)",
  insertion_site: "Oral",
  contraindications: ["High aspiration risk", "Very high airway pressures required"],
  advantages: ["Single-use (sterile) — avoids cross-infection", "Similar handling to Classic"],
  preferred_in: ["Day-case anaesthesia", "Settings preferring disposables"],
  warnings: ["Inflate cuff to recommended pressure", "Not for patients with high aspiration risk"],
  backup_tools: ["LMA ProSeal / ETT"],
  skill_level: "Basic",
  image: { alt: "LMA Unique", url: "images/lma_unique.png" },
  supported_procedure_types: ["Minor surgeries", "Day-case procedures"],
  supported_locations: ["OR", "ED"],
  preferred_conditions: ["Fasted elective patients"],
  contraindicated_conditions: ["High aspiration risk"],
  consciousness_levels: ["Sedated", "Unconscious"],
  urgency_levels: ["Non-emergency", "Rescue"],
  sedation_status: ["Anesthetized"]
},
{
  id: "lma_proseal",
  tool_name: "LMA ProSeal",
  tool_category: "Supraglottic — 2nd generation LMA with drain channel",
  insertion_method: "Oral insertion; inflatable cuff; has gastric/drain channel for gastric tube",
  insertion_site: "Oral / Hypopharynx",
  contraindications: ["Severe upper GI bleeding with active aspiration risk (use definitive airway)"],
  advantages: ["Better seal and higher oropharyngeal leak pressure than classic", "Gastric/drain channel reduces gastric insufflation risk"],
  preferred_in: ["Cases needing higher seal pressure or gastric access", "Some laparoscopic cases under controlled settings"],
  warnings: ["Confirm position of drain channel; monitor cuff pressure"],
  backup_tools: ["ETT", "LMA Supreme"],
  skill_level: "Intermediate",
  image: { alt: "LMA ProSeal", url: "images/lma_proseal.png" },
  supported_procedure_types: ["Abdominal surgery (select)", "Laparoscopy (selected cases)"],
  supported_locations: ["OR", "ED (rescue)"],
  preferred_conditions: ["Need for higher seal pressure", "Controlled ventilation"],
  contraindicated_conditions: ["Active uncontrolled aspiration"],
  consciousness_levels: ["Anesthetized", "Sedated"],
  urgency_levels: ["Non-emergency", "Rescue"],
  sedation_status: ["Anesthetized"]
},
{
  id: "lma_supreme",
  tool_name: "LMA Supreme",
  tool_category: "Supraglottic — 2nd generation single-use LMA with drain channel",
  insertion_method: "Oral insertion; preformed curved tube; inflatable cuff; gastric channel present",
  insertion_site: "Oral",
  contraindications: ["High aspiration risk (relative)"],
  advantages: ["Preformed curved airway for easier insertion", "Gastric access via drain channel", "Single-use hygiene benefit"],
  preferred_in: ["Emergency airway rescue", "Elective GA when a disposable LMA is preferred"],
  warnings: ["Check drain channel patency; confirm cuff pressure"],
  backup_tools: ["ETT", "LMA ProSeal"],
  skill_level: "Basic–Intermediate",
  image: { alt: "LMA Supreme", url: "images/lma_supreme.png" },
  supported_procedure_types: ["General surgery", "Day-case procedures", "Emergency rescue ventilation"],
  supported_locations: ["OR", "ED", "ICU"],
  preferred_conditions: ["Need for gastric/venting access", "Fasted patients"],
  contraindicated_conditions: ["Active vomiting / high aspiration risk"],
  consciousness_levels: ["Anesthetized", "Sedated"],
  urgency_levels: ["Non-emergency", "Rescue emergency"],
  sedation_status: ["Anesthetized"]
},
{
  id: "lma_reinforced",
  tool_name : "Reinforced / Flexible LMA",
  tool_category: "Supraglottic — reinforced / flexible tube",
  insertion_method: "Oral insertion; flexible/reinforced airway tube designed to tolerate bending/kinking",
  insertion_site: "Oral",
  contraindications: ["High airway pressures sometimes limit use"],
  advantages: ["Flexible shaft allows positioning without kinking (useful for head/neck surgery)", "Maintains seal even with neck flexion/rotation"],
  preferred_in: ["Head & neck surgery where tube may be flexed", "Dental/ENT with special positioning"],
  warnings: ["Still monitor cuff pressure; flexible shaft may make blind intubation more difficult"],
  backup_tools: ["Standard LMA", "ETT with flexible stylet"],
  skill_level: "Intermediate",
  image: { alt: "Reinforced LMA", url: "images/lma_reinforced.png" },
  supported_procedure_types: ["ENT surgery (select)", "Maxillofacial procedures (select)"],
  supported_locations: ["OR"],
  preferred_conditions: ["Need to flex/rotate head during surgery"],
  contraindicated_conditions: ["High ventilation pressure requirements"],
  consciousness_levels: ["Anesthetized"],
  urgency_levels: ["Non-emergency", "Rescue"],
  sedation_status: ["Anesthetized"]
},
{
  id: "lma_flexible",
  tool_name: "Flexible LMA",
  tool_category: "Supraglottic — flexible silicone shaft LMA",
  insertion_method: "Oral insertion; flexible silicone shaft; cuff inflation as per size",
  insertion_site: "Oral",
  contraindications: ["High airway pressure ventilation"],
  advantages: ["Low-profile flexible shaft — useful when tube must be routed away from surgical field"],
  preferred_in: ["Head/neck/ENT procedures needing tube routing"],
  warnings: ["Insertion sometimes slightly slower; check seal and cuff pressure"],
  backup_tools: ["Standard LMA", "ETT"],
  skill_level: "Intermediate",
  image: { alt: "Flexible LMA", url: "images/lma_flexible.png" },
  supported_procedure_types: ["ENT", "Head & neck surgery (selected cases)"],
  supported_locations: ["OR"],
  preferred_conditions: ["Surgical positioning requiring shaft flexibility"],
  contraindicated_conditions: ["High airway pressure ventilation"],
  consciousness_levels: ["Anesthetized"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Anesthetized"]
},
{
  id: "ilma_fastrach",
  tool_name: "Intubating LMA (ILMA) / LMA Fastrach",
  tool_category: "Supraglottic — designed to facilitate blind/tracheal intubation",
  insertion_method: "Oral insertion; used as conduit for blind or guided endotracheal intubation without head/neck movement",
  insertion_site: "Oral / Hypopharynx",
  contraindications: ["Very small mouth opening preventing device insertion"],
  advantages: ["Designed specifically to allow tracheal intubation through the device", "Useful in difficult airway where neck movement must be minimized"],
  preferred_in: ["Difficult airway scenarios as intubation conduit", "Cervical spine immobilization cases"],
  warnings: ["Intubation still requires skill; confirm tube placement with capnography"],
  backup_tools: ["Video laryngoscope", "Flexible bronchoscope"],
  skill_level: "Advanced",
  image: { alt: "LMA Fastrach / ILMA", url: "images/lma_fastrach.png" },
  supported_procedure_types: ["Trauma cases with cervical immobilization", "Difficult airway management"],
  supported_locations: ["OR", "ED", "ICU"],
  preferred_conditions: ["Need to intubate without neck movement"],
  contraindicated_conditions: ["Extremely limited mouth opening"],
  consciousness_levels: ["Anesthetized", "Sedated"],
  urgency_levels: ["Emergency", "Non-emergency difficult airway"],
  sedation_status: ["Anesthetized"]
},
{
  id: "lma_ctrach",
  tool_name: "LMA CTrach",
  tool_category: "Intubating LMA with integrated fiberoptic/visualisation",
  insertion_method: "Oral insertion; device provides visual channel to see glottis and guide intubation",
  insertion_site: "Oral",
  contraindications: ["Severe secretions/bleeding obscuring view"],
  advantages: ["Allows visualised intubation through an LMA platform", "Useful when direct laryngoscopy is difficult"],
  preferred_in: ["Difficult airway with need for visualised tracheal intubation"],
  warnings: ["Requires training to operate the integrated viewer and pass ETT"],
  backup_tools: ["Fiberoptic bronchoscope", "Video laryngoscope"],
  skill_level: "Advanced",
  image: { alt: "LMA CTrach", url: "images/lma_ctrach.png" },
  supported_procedure_types: ["Difficult airway management scenarios"],
  supported_locations: ["OR", "ED"],
  preferred_conditions: ["Difficult airway where visual guidance helps"],
  contraindicated_conditions: ["Poor visibility due to blood/secretions"],
  consciousness_levels: ["Anesthetized"],
  urgency_levels: ["Emergency", "Non-emergency difficult airway"],
  sedation_status: ["Anesthetized"]
},
{
  id: "combitube_etc",
  tool_name: "Esophageal-Tracheal Combitube (ETC) / Combitube",
  tool_category: "Supraglottic double-lumen emergency airway",
  insertion_method: "Blind oral insertion; two-lumen device — ventilation possible whether tube in esophagus (usual) or trachea; inflate both cuffs",
  insertion_site: "Oral — seals hypopharynx and upper esophagus/trachea depending position",
  contraindications: ["Conscious patients with intact gag reflex (poor tolerance)", "Known esophageal disease where inflation risks perforation (relative)"],
  advantages: ["High first-pass success in difficult/trauma airways", "Can ventilate whether positioned in esophagus or trachea"],
  preferred_in: ["Prehospital/ED difficult airway where rapid rescue ventilation needed", "Massive facial/airway trauma making intubation hard"],
  warnings: ["Monitor cuff volumes and pressures; confirm ventilation and chest rise; subsequent definitive airway often required"],
  backup_tools: ["ETT (definitive airway)", "Surgical airway if necessary"],
  skill_level: "Intermediate",
  image: { alt: "Esophageal-Tracheal Combitube", url: "images/combitube.png" },
  supported_procedure_types: ["Emergency airway rescue", "Trauma airway management"],
  supported_locations: ["ED", "Prehospital", "OR (as rescue)"],
  preferred_conditions: ["Cannot intubate / cannot ventilate rescue scenarios"],
  contraindicated_conditions: ["Awake patient with gag reflex", "Suspected esophageal rupture"],
  consciousness_levels: ["Unconscious", "Sedated (rare)"],
  urgency_levels: ["Emergency / Rescue"],
  sedation_status: ["Often used without prior sedation in cardiac arrest/rescue"]
},
{
  id: "amd_generic",
  tool_name: "Airway Management Device (AMD) — generic supraglottic",
  tool_category: "Supraglottic / Airway adjuncts",
  insertion_method: "Varies by device (oral placement into hypopharynx), see device-specific instructions",
  insertion_site: "Oral",
  contraindications: ["High aspiration risk (device dependent)"],
  advantages: ["Rapid airway control", "Less invasive than ETT in many cases"],
  preferred_in: ["Rescue ventilation", "Short elective procedures (device dependent)"],
  warnings: ["Check device-specific features (drain channel, cuff type)"],
  backup_tools: ["ETT", "Surgical airway"],
  skill_level: "Basic–Intermediate",
  image: { alt: "Airway Management Device (generic)", url: "images/amd_generic.png" },
  supported_procedure_types: ["Rescue ventilation", "Elective GA (device dependent)"],
  supported_locations: ["OR", "ED", "ICU", "Prehospital"],
  preferred_conditions: ["Depends on specific device"],
  contraindicated_conditions: ["Depends on specific device"],
  consciousness_levels: ["Sedated", "Unconscious"],
  urgency_levels: ["Emergency", "Non-emergency"],
  sedation_status: ["Anesthetized / Sedated"]
},
{
  id: "portex_soft_seal",
  tool_name: "Portex Soft-Seal Laryngeal Mask",
  tool_category: "Supraglottic — single-use Soft-Seal cuff design",
  insertion_method: "Oral insertion; designed without obstructive epiglottic bars; inflate cuff per instructions",
  insertion_site: "Oral",
  contraindications: ["High aspiration risk (relative)"],
  advantages: ["Soft-Seal cuff designed to improve oropharyngeal seal", "No epiglottic bars facilitates fiberoptic access"],
  preferred_in: ["Cases requiring fiberoptic access through airway", "Day-case anaesthesia"],
  warnings: ["Observe cuff pressure recommendations; single-use variants available"],
  backup_tools: ["ETT", "LMA ProSeal if gastric access required"],
  skill_level: "Basic",
  image: { alt: "Portex Soft-Seal LMA", url: "images/portex_softseal.png" },
  supported_procedure_types: ["Pediatrics (sizes) and adult day-case surgery"],
  supported_locations: ["OR"],
  preferred_conditions: ["Need for unobstructed fiberoptic access"],
  contraindicated_conditions: ["High aspiration risk"],
  consciousness_levels: ["Anesthetized", "Sedated"],
  urgency_levels: ["Non-emergency", "Rescue"],
  sedation_status: ["Anesthetized"]
},
{
  id: "ambu_auraonce",
  tool_name: "Ambu AuraOnce",
  tool_category: "Supraglottic — single-use anatomically curved LMA",
  insertion_method: "Oral insertion; preformed anatomical curve; inflate cuff",
  insertion_site: "Oral",
  contraindications: ["High aspiration risk", "Very low lung compliance needing high pressures"],
  advantages: ["Anatomical preformed curve for easy insertion", "Single-use (sterile) convenience"],
  preferred_in: ["Day-case anesthesia", "Settings preferring disposable devices"],
  warnings: ["Monitor cuff pressure; ensure adequate seal for positive pressure ventilation"],
  backup_tools: ["ETT", "LMA Supreme/ProSeal"],
  skill_level: "Basic",
  image: { alt: "Ambu AuraOnce", url: "images/ambu_auraonce.png" },
  supported_procedure_types: ["Day case surgery", "Short general anaesthesia"],
  supported_locations: ["OR", "ED"],
  preferred_conditions: ["Fasted elective patients"],
  contraindicated_conditions: ["High aspiration risk"],
  consciousness_levels: ["Anesthetized"],
  urgency_levels: ["Non-emergency", "Rescue"],
  sedation_status: ["Anesthetized"]
},
{
  id: "ambu_aura40",
  tool_name: "Ambu Aura40 (reusable)",
  tool_category: "Supraglottic — reusable laryngeal mask",
  insertion_method: "Oral insertion; reusable steam-autoclavable design with anatomical curvature",
  insertion_site: "Oral",
  contraindications: ["High aspiration risk"],
  advantages: ["Reusable option with anatomy-mimicking curve", "Good seal characteristics"],
  preferred_in: ["Hospitals preferring reusable LMAs", "Routine OR use"],
  warnings: ["Follow reprocessing/autoclave instructions closely"],
  backup_tools: ["ETT", "Disposable LMAs"],
  skill_level: "Basic",
  image: { alt: "Ambu Aura40", url: "images/ambu_aura40.png" },
  supported_procedure_types: ["General surgery", "Day case"],
  supported_locations: ["OR"],
  preferred_conditions: ["Routine GA in fasted patients"],
  contraindicated_conditions: ["High aspiration risk"],
  consciousness_levels: ["Anesthetized"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Anesthetized"]
},
{
  id: "king_lt",
  tool_name: "King Laryngeal Tube (King LT family)",
  tool_category: "Supraglottic laryngeal tube (single/double lumen variants)",
  insertion_method: "Oral insertion; large proximal cuff seals hypopharynx and distal cuff seals upper esophagus; some models have gastric channel",
  insertion_site: "Oral / Hypopharynx",
  contraindications: ["Awake patient with intact gag reflex", "Known esophageal pathology (relative)"],
  advantages: ["Easy blind insertion; can provide effective ventilation and allow gastric drain (models)", "Good for prehospital and emergency rescue airway"],
  preferred_in: ["Prehospital/EMS airway management", "ED rescue ventilation when ETT not feasible"],
  warnings: ["Confirm chest rise and capnography; many devices are single-use or disposable"],
  backup_tools: ["ETT", "Combitube"],
  skill_level: "Basic–Intermediate",
  image: { alt: "King Laryngeal Tube", url: "images/king_lt.png" },
  supported_procedure_types: ["Emergency airway rescue", "Short ventilatory support in controlled settings"],
  supported_locations: ["Prehospital", "ED", "OR (rescue)"],
  preferred_conditions: ["Cannot intubate / need quick airway"],
  contraindicated_conditions: ["Awake patient with gag reflex", "Esophageal disease"],
  consciousness_levels: ["Unconscious", "Sedated"],
  urgency_levels: ["Emergency", "Rescue"],
  sedation_status: ["Often used without prior sedation in arrest scenarios"]
},
{
  id: "king_ltsd",
  tool_name: "King LTS-D (Disposable) / King LTS-D with suction (LTS-D / LTS-S variants)",
  tool_category: "Supraglottic laryngeal tube — disposable with gastric channel or suction variants",
  insertion_method: "Oral insertion; inflated cuffs; separate channel allows gastric tube passage and suctioning (model dependent)",
  insertion_site: "Oral",
  contraindications: ["Awake patient with gag reflex", "Suspected esophageal injury"],
  advantages: ["Disposable, quick insertion, gastric access for decompression", "Stable during CPR/transport"],
  preferred_in: ["Prehospital, EMS, ED, airway rescue during CPR/transport"],
  warnings: ["Ensure correct cuff volumes; monitor ventilation pressures; confirm tube position"],
  backup_tools: ["ETT", "Surgical airway"],
  skill_level: "Basic",
  image: { alt: "King LTS-D", url: "images/king_ltsd.png" },
  supported_procedure_types: ["Emergency airway rescue", "Transport/CPR scenarios"],
  supported_locations: ["Prehospital", "ED", "ICU (transport)"],
  preferred_conditions: ["Cardiac arrest, emergency airway"], 
  contraindicated_conditions: ["Conscious patient with gag reflex", "Esophageal pathology (relative)"],
  consciousness_levels: ["Unconscious"],
  urgency_levels: ["Emergency", "Rescue"],
  sedation_status: ["Often none (used in cardiac arrest)"]
},
{
  id: "cobra_pla",
  tool_name: "Cobra Perilaryngeal Airway (CobraPLA)",
  tool_category: "Supraglottic — perilaryngeal airway",
  insertion_method: "Oral insertion; distinctive 'cobra' head that abuts aryepiglottic folds; inflatable cuff",
  insertion_site: "Oral / Perilaryngeal",
  contraindications: ["Severe oropharyngeal bleeding that obscures placement", "Awake patient with gag reflex (relative)"],
  advantages: ["Good seal pressures; insertion characteristics similar to LMA", "May provide higher airway seal pressure in some studies"],
  preferred_in: ["Rescue airway and selected anaesthesia cases where higher seal pressure is desirable"],
  warnings: ["Monitor cuff pressure; watch for postoperative sore throat related to cuff pressure"],
  backup_tools: ["LMA", "ETT"],
  skill_level: "Basic–Intermediate",
  image: { alt: "Cobra Perilaryngeal Airway", url: "images/cobra_pla.png" },
  supported_procedure_types: ["Rescue ventilation", "Short general anaesthesia (selected)"],
  supported_locations: ["OR", "ED"],
  preferred_conditions: ["Need for higher seal pressure"],
  contraindicated_conditions: ["Awake patient with gag reflex"],
  consciousness_levels: ["Anesthetized", "Unconscious"],
  urgency_levels: ["Non-emergency", "Rescue"],
  sedation_status: ["Anesthetized"]
},
{
  id: "slipa",
  tool_name: "SLIPA (Streamlined Liner of the Pharynx Airway)",
  tool_category: "Supraglottic — liner type (disposable) that seals without an inflatable cuff",
  insertion_method: "Oral insertion; designed to seat in pharynx and create seal by anatomy (some models have preformed sizes)",
  insertion_site: "Oral / Pharynx",
  contraindications: ["Awake patient with gag reflex", "Patients with peculiar pharyngeal anatomy preventing seal"],
  advantages: ["Rapid insertion; seals without inflatable cuff; may give good sealing pressures"],
  preferred_in: ["Day-case surgeries, gynecologic operations (reported in literature)"],
  warnings: ["Proper size selection important; some techniques recommend prewarming for better fit"],
  backup_tools: ["LMA ProSeal/Supreme", "ETT"],
  skill_level: "Basic–Intermediate",
  image: { alt: "SLIPA airway", url: "images/slipa.png" },
  supported_procedure_types: ["Day-case surgery", "Gynecologic operations (reported)"],
  supported_locations: ["OR"],
  preferred_conditions: ["Elective, fasted patients"],
  contraindicated_conditions: ["High aspiration risk"],
  consciousness_levels: ["Anesthetized"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Anesthetized"]
},
{
  id: "slipa",
  tool_name: "SLIPA (Streamlined Liner of the Pharynx Airway)",
  tool_category: "Supraglottic — liner type (disposable) that seals without an inflatable cuff",
  insertion_method: "Oral insertion; designed to seat in pharynx and create seal by anatomy (some models have preformed sizes)",
  insertion_site: "Oral / Pharynx",
  contraindications: ["Awake patient with gag reflex", "Patients with peculiar pharyngeal anatomy preventing seal"],
  advantages: ["Rapid insertion; seals without inflatable cuff; may give good sealing pressures"],
  preferred_in: ["Day-case surgeries, gynecologic operations (reported in literature)"],
  warnings: ["Proper size selection important; some techniques recommend prewarming for better fit"],
  backup_tools: ["LMA ProSeal/Supreme", "ETT"],
  skill_level: "Basic–Intermediate",
  image: { alt: "SLIPA airway", url: "images/slipa.png" },
  supported_procedure_types: ["Day-case surgery", "Gynecologic operations (reported)"],
  supported_locations: ["OR"],
  preferred_conditions: ["Elective, fasted patients"],
  contraindicated_conditions: ["High aspiration risk"],
  consciousness_levels: ["Anesthetized"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Anesthetized"]
},
{
  id: "i_gel",
  tool_name: "i-gel Supraglottic Airway",
  tool_category: "Supraglottic — 2nd generation, non-inflatable cuff",
  insertion_method: "Oral insertion; anatomically shaped non-inflatable thermoplastic cuff that seals by shape",
  insertion_site: "Oral / Perilaryngeal",
  contraindications: ["Severe airway obstruction proximal to larynx", "Awake patient with intact gag reflex (relative)"],
  advantages: ["No inflatable cuff (reduces cuff-related trauma)", "Gastric channel available on some sizes/models", "Quick insertion; single-use options"],
  preferred_in: ["Emergency and anaesthesia settings; rescue airway; resuscitation algorithms"],
  warnings: ["Confirm ventilation and position; choose correct size for anatomy"],
  backup_tools: ["ETT", "LMA ProSeal/Supreme"],
  skill_level: "Basic–Intermediate",
  image: { alt: "i-gel supraglottic", url: "images/igel.png" },
  supported_procedure_types: ["Rescue ventilation", "Routine GA in fasted patients", "Resuscitation"],
  supported_locations: ["OR", "ED", "Prehospital", "ICU"],
  preferred_conditions: ["Need for rapid airway with minimal trauma", "Resuscitation/EMS use"],
  contraindicated_conditions: ["Active aspiration risk (relative)"],
  consciousness_levels: ["Anesthetized", "Unconscious"],
  urgency_levels: ["Emergency", "Non-emergency"],
  sedation_status: ["Anesthetized"]
},
{
  id: "lma_intubating_variants",
  tool_name: "Intubating LMA variants (ILMA / Fastrach family)",
  tool_category: "Supraglottic — intubation conduit family",
  insertion_method: "Oral insertion then use as conduit for ETT (blind or guided), allows ventilation while intubating",
  insertion_site: "Oral",
  contraindications: ["Very limited mouth opening preventing insertion"],
  advantages: ["Maintains ventilation while enabling tracheal intubation", "Useful in restricted neck movement cases"],
  preferred_in: ["Difficult airway where neck movement contraindicated", "Cervical spine immobilization"],
  warnings: ["Requires operator skill for blind intubation; confirm with capnography"],
  backup_tools: ["Flexible bronchoscope", "Video laryngoscope"],
  skill_level: "Advanced",
  image: { alt: "Intubating LMA variants", url: "images/ilma_family.png" },
  supported_procedure_types: ["Trauma with immobilized neck", "Difficult airway management"],
  supported_locations: ["OR", "ED", "ICU"],
  preferred_conditions: ["Need to intubate without neck movement"],
  contraindicated_conditions: ["Extremely limited mouth opening"],
  consciousness_levels: ["Anesthetized"],
  urgency_levels: ["Emergency", "Non-emergency difficult airway"],
  sedation_status: ["Anesthetized"]
},
{
  id: "lma_supplied_examples_note",
  tool_name: "Notes: variants & clinical selection",
  tool_category: "Reference / guidance",
  insertion_method: "Device-specific",
  insertion_site: "Oral",
  contraindications: ["Assess aspiration risk per device; drain channel can mitigate but not eliminate aspiration risk"],
  advantages: ["2nd generation devices (ProSeal, Supreme, i-gel, King LTS, etc.) add gastric access/seal improvements"],
  preferred_in: ["When higher seal pressure or gastric access is required choose 2nd-generation devices"],
  warnings: ["Always confirm placement (capnography, chest rise); cuff/pressure management important"],
  backup_tools: ["ETT", "Video laryngoscope", "Fiberoptic bronchoscope", "Surgical airway"],
  skill_level: "Varies",
  image: { alt: "Supraglottic device selection", url: "images/sgA_selection.png" },
  supported_procedure_types: ["All listed above per device"],
  supported_locations: ["OR", "ED", "ICU", "Prehospital"],
  preferred_conditions: ["Depends on device and clinical scenario"],
  contraindicated_conditions: ["High aspiration risk (consider ETT)"],
  consciousness_levels: ["Sedated", "Anesthetized", "Unconscious"],
  urgency_levels: ["Emergency", "Non-emergency"],
  sedation_status: ["Depends"]
},
{
  id: "tracheostomy_tube",
  tool_name: "Tracheostomy Tube",
  tool_category: "Tracheostomy Tubes & Accessories",
  insertion_method: "Surgical insertion into tracheal stoma",
  insertion_site: "Trachea via neck stoma",
  contraindications: ["Uncorrected coagulopathy", "Severe neck infection"], // relative contraindications طبقاً للـ StatPearls
  advantages: ["Airway protection", "Facilitates ventilation and suctioning"],
  preferred_in: ["Long-term ventilation", "Weaning from endotracheal tube"],
  warnings: ["Monitor cuff pressure", "Risk of tracheal injury if overinflated"],
  backup_tools: ["Bougie", "Tracheal dilators"],
  skill_level: "Intermediate",
  image: { alt: "Tracheostomy Tube", url: "images/tracheostomy_tube.png" },
  supported_procedure_types: [
    "Long-term ventilation",
    "Airway management",
    "Weaning support"
  ],
  supported_locations: ["ICU", "Surgical wards", "Homecare with monitoring"],
  preferred_conditions: ["Prolonged mechanical ventilation", "Airway obstruction bypass"],
  contraindicated_conditions: ["Uncorrected coagulopathy", "Local infection"],
  consciousness_levels: ["Sedated", "Unconscious", "Awake if stable"],
  urgency_levels: ["Planned", "Emergency"],
  sedation_status: ["Sedated"]
},
{
  id: "fenestrated_tracheostomy_tube",
  tool_name: "Fenestrated Tracheostomy Tube",
  tool_category: "Tracheostomy Tubes & Accessories",
  insertion_method: "Surgical insertion into tracheal stoma",
  insertion_site: "Trachea via neck stoma",
  contraindications: ["Newly formed stoma", "Positive pressure ventilation risk"],
  advantages: ["Allows speech", "Facilitates airflow through upper airway"],
  preferred_in: ["Weaning trials", "Speech improvement"],
  warnings: ["Air leak during positive pressure", "Risk of granuloma at fenestration edges"],
  backup_tools: ["Standard tracheostomy tube", "Inner non-fenestrated cannula"],
  skill_level: "Advanced",
  image: { alt: "Fenestrated Tracheostomy Tube", url: "images/fenestrated_tracheostomy_tube.png" },
  supported_procedure_types: [
    "Weaning from ventilator",
    "Speech rehabilitation"
  ],
  supported_locations: ["ICU", "ENT wards"],
  preferred_conditions: ["Patient able to phonate", "Weaning stage"],
  contraindicated_conditions: ["Poorly healed stoma", "Need for positive pressure ventilation"],
  consciousness_levels: ["Awake with stability"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Awake / minimal sedation"]
},
{
  id: "metal_tracheostomy_tube",
  tool_name: "Metal Tracheostomy Tube",
  tool_category: "Tracheostomy Tubes & Accessories",
  insertion_method: "Surgical insertion into tracheal stoma",
  insertion_site: "Trachea via neck stoma",
  contraindications: ["Need for ventilator circuit connection without adapter"],
  advantages: ["Reusable after sterilization", "Durable for long-term use"],
  preferred_in: ["Chronic tracheostomy patients", "Homecare settings"],
  warnings: ["Rigid design may cause discomfort", "May require adapter for ventilator"],
  backup_tools: ["Plastic tracheostomy tube"],
  skill_level: "Intermediate",
  image: { alt: "Metal Tracheostomy Tube", url: "images/metal_tracheostomy_tube.png" },
  supported_procedure_types: [
    "Long-term airway management"
  ],
  supported_locations: ["Homecare", "Long-term care facility"],
  preferred_conditions: ["Stable airway needs", "Chronic care"],
  contraindicated_conditions: ["Need for frequent suctioning with 15mm connector"],
  consciousness_levels: ["Awake", "Sedated if needed"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Awake / Sedated"]
},
{
  id: "tracheostomy_button",
  tool_name: "Tracheostomy Button",
  tool_category: "Tracheostomy Tubes & Accessories",
  insertion_method: "Placed into mature tracheostomy stoma",
  insertion_site: "Tracheal stoma",
  contraindications: ["Unhealed stoma", "Need for ventilation support"],
  advantages: ["Minimal airway obstruction", "Easy breathing and speech"],
  preferred_in: ["Obstructive sleep apnea patients", "Post-decannulation support"],
  warnings: ["Not suitable for positive pressure ventilation"],
  backup_tools: ["Standard tracheostomy tube"],
  skill_level: "Basic",
  image: { alt: "Tracheostomy Button", url: "images/tracheostomy_button.png" },
  supported_procedure_types: [
    "Decannulation",
    "Sleep breathing support"
  ],
  supported_locations: ["Homecare", "Outpatient"],
  preferred_conditions: ["Mature stoma", "Stable airway"],
  contraindicated_conditions: ["Ventilation dependency"],
  consciousness_levels: ["Awake"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Awake"]
},
{
  id: "laryngectomy_tube",
  tool_name: "Laryngectomy Tube",
  tool_category: "Tracheostomy Tubes & Accessories",
  insertion_method: "Inserted surgically after laryngectomy",
  insertion_site: "Trachea via surgical airway",
  contraindications: ["Incomplete surgical airway"],
  advantages: ["Maintains airway post-laryngectomy", "Prevents airway collapse"],
  preferred_in: ["Total laryngectomy patients"],
  warnings: ["Requires proper sizing to avoid mucosal injury"],
  backup_tools: ["Standard tracheostomy tube"],
  skill_level: "Advanced",
  image: { alt: "Laryngectomy Tube", url: "images/laryngectomy_tube.png" },
  supported_procedure_types: [
    "Post-laryngectomy airway management"
  ],
  supported_locations: ["ENT wards", "ICU"],
  preferred_conditions: ["Post laryngectomy recovery"],
  contraindicated_conditions: ["No surgical airway"],
  consciousness_levels: ["Awake / Sedated"],
  urgency_levels: ["Non-emergency"],
  sedation_status: ["Sedated / Awake"]
},
{
  id: "double_lumen_endobronchial_tube",
  tool_name: "Double Lumen Endobronchial Tube (DLT)",
  tool_category: "Endobronchial Tubes",
  insertion_method: "Oral intubation directed into bronchus",
  insertion_site: "Trachea → main bronchus",
  contraindications: ["Difficult airway", "Tracheal stoma", "Tracheal constriction"],
  advantages: ["Allows one-lung ventilation", "Facilitates lung isolation"],
  preferred_in: ["Thoracic surgery", "Lung isolation procedures"],
  warnings: ["Requires skilled placement", "Risk of airway trauma"],
  backup_tools: ["Bronchial blocker", "Single lumen tube"],
  skill_level: "Advanced",
  image: { alt: "Double Lumen Endobronchial Tube", url: "images/double_lumen_endobronchial_tube.png" },
  supported_procedure_types: [
    "Thoracic surgery – lobectomy",
    "Lung isolation procedures"
  ],
  supported_locations: ["OR", "ICU"],
  preferred_conditions: ["Need for one-lung ventilation"],
  contraindicated_conditions: ["Limited mouth opening"],
  consciousness_levels: ["Sedated"],
  urgency_levels: ["Planned"],
  sedation_status: ["General anesthesia"]
},
{
  id: "left_sided_double_lumen_tube",
  tool_name: "Left-sided Double Lumen Tube",
  tool_category: "Endobronchial Tubes",
  insertion_method: "Oral intubation into left bronchus",
  insertion_site: "Trachea → left main bronchus",
  contraindications: ["Severe anatomic distortion", "Tracheal stoma"],
  advantages: ["Optimized lung isolation for left-sided procedures"],
  preferred_in: ["Left thoracic surgery"],
  warnings: ["Precise placement needed"],
  backup_tools: ["Bronchial blocker"],
  skill_level: "Advanced",
  image: { alt: "Left-sided Double Lumen Tube", url: "images/left_double_lumen.png" },
  supported_procedure_types: [
    "Left lobectomy",
    "Thoracic surgeries requiring left lung isolation"
  ],
  supported_locations: ["OR"],
  preferred_conditions: ["Need for left lung isolation"],
  contraindicated_conditions: ["Difficult airway"],
  consciousness_levels: ["Sedated"],
  urgency_levels: ["Planned"],
  sedation_status: ["General anesthesia"]
},
{
  id: "right_sided_double_lumen_tube",
  tool_name: "Right-sided Double Lumen Tube",
  tool_category: "Endobronchial Tubes",
  insertion_method: "Oral intubation into right bronchus",
  insertion_site: "Trachea → right main bronchus",
  contraindications: ["Airway distortion", "Tracheal stoma"],
  advantages: ["Optimized isolation for right-sided lung"],
  preferred_in: ["Right thoracic surgery"],
  warnings: ["More difficult bronchial alignment"],
  backup_tools: ["Bronchial blocker"],
  skill_level: "Advanced",
  image: { alt: "Right-sided Double Lumen Tube", url: "images/right_double_lumen.png" },
  supported_procedure_types: [
    "Right lobectomy",
    "Thoracic surgery"
  ],
  supported_locations: ["OR"],
  preferred_conditions: ["Right lung isolation"],
  contraindicated_conditions: ["Difficult airway"],
  consciousness_levels: ["Sedated"],
  urgency_levels: ["Planned"],
  sedation_status: ["General anesthesia"]
},
{
  id: "bronchocath_tube",
  tool_name: "Bronchocath Tube",
  tool_category: "Endobronchial Tubes",
  insertion_method: "Oral intubation with bronchial lumen",
  insertion_site: "Trachea → bronchus",
  contraindications: ["Distorted airway anatomy"],
  advantages: ["Facilitates one-lung ventilation", "Optional CPAP support to deflated lung"],
  preferred_in: ["Thoracic surgery"],
  warnings: ["Requires experienced placement"],
  backup_tools: ["Bronchial blocker"],
  skill_level: "Advanced",
  image: { alt: "Bronchocath Tube", url: "images/bronchocath_tube.png" },
  supported_procedure_types: [
    "One-lung ventilation procedures"
  ],
  supported_locations: ["OR"],
  preferred_conditions: ["Need for lung isolation"],
  contraindicated_conditions: ["Difficult airway"],
  consciousness_levels: ["Sedated"],
  urgency_levels: ["Planned"],
  sedation_status: ["General anesthesia"]
}

];
// ==============================
// Helper: populate select options
// ==============================
function populateSelect(selectElement, values) {
  values.forEach(function (value) {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value;
    selectElement.appendChild(opt);
  });
}

// ==============================
// Recommendation logic
// ==============================
function scoreToolAgainstContext(tool, procedureType, location, condition) {
  if (tool.contraindicated_conditions.includes(condition)) {
    return null; // excluded by contraindication
  }

  let score = 0;
  const reasons = [];

  if (tool.preferred_conditions.includes(condition)) {
    score += 3;
    reasons.push("matches preferred condition");
  }

  if (tool.supported_procedure_types.includes(procedureType)) {
    score += 2;
    reasons.push("supports selected procedure");
  }

  if (tool.supported_locations.includes(location)) {
    score += 2;
    reasons.push("suited to selected location");
  }

  // Mild baseline for very generic condition
  if (condition === "None / No special condition" && tool.preferred_conditions.includes("None / No special condition")) {
    score += 1;
    if (!reasons.includes("matches preferred condition")) {
      reasons.push("matches preferred condition");
    }
  }

  return {
    tool: tool,
    score: score,
    reasons: reasons
  };
}

function buildReasonText(entry) {
  if (!entry) return "";
  const reasons = entry.reasons || [];
  if (!reasons.length) {
    return "General educational option: no specific match, but not contraindicated for the selected context.";
  }
  const humanReadable = reasons
    .map(function (r) {
      if (r === "matches preferred condition") {
        return "preferred for the selected condition/risk";
      }
      if (r === "supports selected procedure") {
        return "explicitly supported for this procedure type";
      }
      if (r === "suited to selected location") {
        return "commonly used in the selected location";
      }
      return r;
    })
    .join(" + ");
  return "Selected because it " + humanReadable + ".";
}

// ==============================
// UI rendering helpers
// ==============================
function renderTagList(items) {
  if (!items || !items.length) {
    return '<span class="tag-list"><span>None specified</span></span>';
  }
  return (
    '<span class="tag-list">' +
    items
      .map(function (txt) {
        return "<span>" + txt + "</span>";
      })
      .join(" ") +
    "</span>"
  );
}

function renderList(items, className) {
  if (!items || !items.length) {
    return '<ul class="list-inline"><li>None specified</li></ul>';
  }
  return (
    '<ul class="list-inline ' +
    (className || "") +
    '">' +
    items
      .map(function (txt) {
        return "<li>" + txt + "</li>";
      })
      .join("") +
    "</ul>"
  );
}

function renderWarningsList(items) {
  if (!items || !items.length) {
    return '<ul class="list-inline"><li><span class="warn">None specified</span></li></ul>';
  }
  return (
    '<ul class="list-inline">' +
    items
      .map(function (txt) {
        return '<li><span class="warn">' + txt + "</span></li>";
      })
      .join("") +
    "</ul>"
  );
}

function renderContraindicationsList(items) {
  if (!items || !items.length) {
    return '<ul class="list-inline"><li><span class="danger">None specified</span></li></ul>';
  }
  return (
    '<ul class="list-inline">' +
    items
      .map(function (txt) {
        return '<li><span class="danger">' + txt + "</span></li>";
      })
      .join("") +
    "</ul>"
  );
}

function buildCardHTML(entry, label) {
  if (!entry) return "";
  const tool = entry.tool;
  const skillClass = tool.skill_level === "Basic" ? "skill-basic" : "skill-advanced";
  const reasonText = buildReasonText(entry);
  const isRecommended = label === "Recommended";

  return (
    '<article class="card' +
    (isRecommended ? " recommended" : "") +
    '" aria-label="' +
    label +
    '">' +
    '<div class="card-header">' +
    '<div>' +
    '<div class="card-label"><span class="card-label-dot"></span>' +
    label +
    "</div>" +
    '<h3 class="card-title">' +
    tool.tool_name +
    "</h3>" +
    '<div class="chip-row">' +
    '<div class="chip"><span class="dot"></span>' +
    tool.tool_category +
    "</div>" +
    '<div class="chip ' +
    skillClass +
    '"><span class="dot"></span>' +
    tool.skill_level +
    " skill</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="card-image" aria-hidden="true">' +
    '<div class="card-image-inner">' +
    '<img src="' +
    tool.image.url +
    '" alt="' +
    tool.image.alt +
    '" />' +
    '<div class="card-image-text">' +
    "<div>Illustrative placeholder only.</div>" +
    '<div class="card-image-url">' +
    tool.image.url +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="card-body">' +
    '<div class="field-group">' +
    '<div class="field"><strong>Insertion:</strong> ' +
    tool.insertion_method +
    " (" +
    tool.insertion_site +
    ")</div>" +
    '<div class="field"><strong>Supported procedures:</strong> ' +
    renderTagList(tool.supported_procedure_types) +
    "</div>" +
    '<div class="field"><strong>Supported locations:</strong> ' +
    renderTagList(tool.supported_locations) +
    "</div>" +
    '<div class="field"><strong>Preferred conditions:</strong> ' +
    renderTagList(tool.preferred_conditions) +
    "</div>" +
    "</div>" +
    '<div class="field-group">' +
    '<div class="field"><strong>Advantages:</strong> ' +
    renderList(tool.advantages) +
    "</div>" +
    '<div class="field"><strong>Contraindications:</strong> ' +
    renderContraindicationsList(tool.contraindications) +
    "</div>" +
    '<div class="field"><strong>Warnings:</strong> ' +
    renderWarningsList(tool.warnings) +
    "</div>" +
    '<div class="field"><strong>Backup tools:</strong> ' +
    renderTagList(tool.backup_tools) +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="reason"><strong>Why this device?</strong> ' +
    reasonText +
    "</div>" +
    "</article>"
  );
}

function renderResults(best, backup1, backup2, context) {
  const resultsContainer = document.getElementById("results");
  const empty = document.getElementById("emptyState");
  if (empty) empty.remove();

  const summary =
    "Context: " +
    context.procedureType +
    " \u2022 " +
    context.location +
    " \u2022 " +
    context.condition;

  const cardsHTML =
    '<div class="results-header">' +
    "<h2>Suggested airway devices</h2>" +
    "<span>" +
    summary +
    "</span>" +
    "</div>" +
    '<div class="results-grid">' +
    buildCardHTML(best, "Recommended") +
    (backup1 ? buildCardHTML(backup1, "Backup 1") : "") +
    (backup2 ? buildCardHTML(backup2, "Backup 2") : "") +
    "</div>";

  resultsContainer.innerHTML = cardsHTML;
}

function showNoResultMessage() {
  const resultsContainer = document.getElementById("results");
  const msg =
    '<div class="empty-state">' +
    "No devices could be suggested after applying contraindications for this combination. " +
    "In real clinical practice, this would trigger an immediate review of the airway plan, " +
    "consultation with a senior colleague, and adherence to local guidelines." +
    "</div>";
  resultsContainer.innerHTML = msg;
}

// ==============================
// Event handlers
// ==============================
function handleCalculateClick() {
  const procedureSelect = document.getElementById("procedureSelect");
  const locationSelect = document.getElementById("locationSelect");
  const conditionSelect = document.getElementById("conditionSelect");

  const procedureType = procedureSelect.value;
  const location = locationSelect.value;
  const condition = conditionSelect.value;

  if (!procedureType || !location || !condition) {
    alert("Please select procedure type, location, and key condition / risk factor before calculating.");
    return;
  }

  const scored = [];

  TOOLS_DB.forEach(function (tool) {
    const entry = scoreToolAgainstContext(tool, procedureType, location, condition);
    if (entry) {
      scored.push(entry);
    }
  });

  if (!scored.length) {
    showNoResultMessage();
    return;
  }

  scored.sort(function (a, b) {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    // tie-break: prefer Basic over Advanced if scores equal
    if (a.tool.skill_level !== b.tool.skill_level) {
      return a.tool.skill_level === "Basic" ? -1 : 1;
    }
    // final tie-break on tool name for deterministic order
    if (a.tool.tool_name < b.tool.tool_name) return -1;
    if (a.tool.tool_name > b.tool.tool_name) return 1;
    return 0;
  });

  const best = scored[0] || null;
  const backup1 = scored[1] || null;
  const backup2 = scored[2] || null;

  renderResults(best, backup1, backup2, {
    procedureType: procedureType,
    location: location,
    condition: condition
  });
}

function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  function updateLabel() {
    const isDark = document.body.classList.contains("dark");
    const iconSpan = btn.querySelector(".icon");
    const textSpan = btn.querySelector("span:nth-child(2)");
    if (iconSpan) {
      iconSpan.textContent = isDark ? "☀️" : "🌙";
    }
    if (textSpan) {
      textSpan.textContent = isDark ? "Light mode" : "Dark mode";
    }
  }

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    updateLabel();
  });

  updateLabel();
}

// ==============================
// Initialisation
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  const procedureSelect = document.getElementById("procedureSelect");
  const locationSelect = document.getElementById("locationSelect");
  const conditionSelect = document.getElementById("conditionSelect");

  populateSelect(procedureSelect, PROCEDURE_TYPES);
  populateSelect(locationSelect, LOCATIONS);
  populateSelect(conditionSelect, CONDITIONS);

  document.getElementById("calculateBtn").addEventListener("click", handleCalculateClick);
  initThemeToggle();
});


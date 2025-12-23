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
// Airway tools database (27 entries)
// ==============================
const TOOLS_DB = [
  {
    id: "tool_standard_ett",
    tool_name: "Standard cuffed endotracheal tube",
    tool_category: "Endotracheal",
    insertion_method: "Oral intubation using direct or video laryngoscopy",
    insertion_site: "Oral",
    contraindications: [
      "Relative: severe upper airway distortion",
      "Relative: inability to open mouth sufficiently",
      "Requires equipment and monitoring"
    ],
    advantages: [
      "Provides definitive airway and protects against aspiration",
      "Compatible with most ventilator modes",
      "Widely available and familiar"
    ],
    preferred_in: [
      "Major abdominal surgery with controlled ventilation",
      "Patients at high risk of regurgitation and aspiration",
      "ICU intubations requiring prolonged ventilation"
    ],
    warnings: [
      "Requires appropriate depth and cuff pressure monitoring",
      "Tube misplacement or endobronchial intubation must be excluded",
      "May worsen cervical spine movement if not handled carefully"
    ],
    backup_tools: [
      "Video laryngoscope (non-channeled)",
      "Bougie (intubating introducer)",
      "Bag-mask ventilation with PEEP valve"
    ],
    skill_level: "Basic",
    image: {
      alt: "Standard cuffed endotracheal tube",
      url: "images/standard-ett.png"
    },
    supported_procedure_types: [
      "General Surgery \u2013 Abdomen",
      "Orthopedics",
      "Trauma surgery",
      "Neurosurgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU",
      "Emergency Department (ED)"
    ],
    preferred_conditions: [
      "Full stomach / Aspiration risk",
      "None / No special condition",
      "Severe hypoxemia / Respiratory failure"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_reinforced_ett",
    tool_name: "Reinforced (armored) endotracheal tube",
    tool_category: "Endotracheal",
    insertion_method: "Oral intubation with stylet or bougie as needed",
    insertion_site: "Oral",
    contraindications: [
      "Aspiration risk is not reduced compared with standard ETT",
      "Rare risk of tube collapse if bitten or sharply angulated"
    ],
    advantages: [
      "Resistant to kinking in flexed or rotated positions",
      "Useful when surgical field is close to the airway",
      "Can be taped away from surgical site"
    ],
    preferred_in: [
      "Head and neck procedures with extreme neck flexion",
      "Prone or lateral positioning where tube kinking is a concern",
      "ENT surgery requiring a low-profile tube"
    ],
    warnings: [
      "Confirm tube patency after positioning and draping",
      "Avoid biting by using bite block if patient emerges intubated"
    ],
    backup_tools: [
      "Standard cuffed endotracheal tube",
      "Video laryngoscope (non-channeled)",
      "Rigid stylet"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Reinforced armored endotracheal tube",
      url: "images/reinforced-ett.png"
    },
    supported_procedure_types: [
      "Head & Neck",
      "ENT / Airway surgery",
      "Neurosurgery",
      "General Surgery \u2013 Abdomen"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU"
    ],
    preferred_conditions: [
      "None / No special condition",
      "Obesity / High BMI"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_nasal_rae_ett",
    tool_name: "Nasal RAE endotracheal tube",
    tool_category: "Endotracheal",
    insertion_method: "Nasal intubation via laryngoscopy or fiberoptic guidance",
    insertion_site: "Nasal",
    contraindications: [
      "Basilar skull fracture or midface trauma",
      "Severe nasal obstruction or coagulopathy",
      "Recent nasal surgery"
    ],
    advantages: [
      "Keeps tube away from oral surgical field",
      "Useful in dental and some maxillofacial procedures",
      "Allows better intraoral access"
    ],
    preferred_in: [
      "Dental and oral surgery where mouth needs to be free",
      "Some maxillofacial trauma cases without midface fractures",
      "Elective nasal intubation in cooperative ICU patients"
    ],
    warnings: [
      "Risk of epistaxis – gentle technique and preparation required",
      "Confirm that nasal route is appropriate before attempting",
      "Monitor for tube kinking at the bend"
    ],
    backup_tools: [
      "Oral RAE endotracheal tube",
      "Standard cuffed endotracheal tube",
      "Fiberoptic bronchoscope (awake intubation)"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Preformed nasal RAE endotracheal tube",
      url: "images/nasal-rae-ett.png"
    },
    supported_procedure_types: [
      "ENT / Airway surgery",
      "Head & Neck",
      "Neurosurgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU"
    ],
    preferred_conditions: [
      "None / No special condition"
    ],
    contraindicated_conditions: [
      "Facial trauma / blood in airway"
    ]
  },
  {
    id: "tool_oral_rae_ett",
    tool_name: "Oral RAE endotracheal tube",
    tool_category: "Endotracheal",
    insertion_method: "Oral intubation with preformed bend away from field",
    insertion_site: "Oral",
    contraindications: [
      "Need for frequent tube repositioning",
      "Situations requiring flexible tube routing"
    ],
    advantages: [
      "Keeps tube away from facial surgical field",
      "Improves access in certain ENT procedures",
      "Less kinking when positioned correctly"
    ],
    preferred_in: [
      "Tonsillectomy and adenoidectomy",
      "Some maxillofacial and oral procedures",
      "ENT procedures in supine position"
    ],
    warnings: [
      "Check that preformed curve is compatible with surgical plan",
      "Avoid undue pressure on lips and oral mucosa"
    ],
    backup_tools: [
      "Reinforced (armored) endotracheal tube",
      "Standard cuffed endotracheal tube",
      "Classic laryngeal mask airway (LMA)"
    ],
    skill_level: "Basic",
    image: {
      alt: "Preformed oral RAE endotracheal tube",
      url: "images/oral-rae-ett.png"
    },
    supported_procedure_types: [
      "ENT / Airway surgery",
      "Head & Neck",
      "Short procedure / Day case"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Outside OR (NORA: endoscopy / radiology)"
    ],
    preferred_conditions: [
      "None / No special condition"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_dlt",
    tool_name: "Double-lumen endotracheal tube (DLT)",
    tool_category: "Endotracheal",
    insertion_method: "Oral intubation with bronchoscopic confirmation",
    insertion_site: "Tracheal",
    contraindications: [
      "Very small or distorted airway anatomy",
      "Limited mouth opening or severe cervical immobility",
      "Need for rapid basic airway in extremis"
    ],
    advantages: [
      "Allows reliable lung isolation and one-lung ventilation",
      "Enables independent lung ventilation if required",
      "Facilitates surgical exposure in thoracic procedures"
    ],
    preferred_in: [
      "Elective open thoracic surgery requiring lung isolation",
      "Video-assisted thoracic surgery (VATS) procedures",
      "Massive unilateral pathology needing isolation"
    ],
    warnings: [
      "Incorrect positioning can cause hypoxemia and high pressures",
      "Requires confirmation with auscultation and bronchoscopy",
      "Choose size appropriate to patient anatomy"
    ],
    backup_tools: [
      "Bronchial blocker via single-lumen tube",
      "Video laryngoscope (non-channeled)",
      "Fiberoptic bronchoscope (awake intubation)"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Double-lumen endotracheal tube for lung isolation",
      url: "images/dlt.png"
    },
    supported_procedure_types: [
      "Thoracic",
      "General Surgery \u2013 Abdomen",
      "Trauma surgery"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU"
    ],
    preferred_conditions: [
      "Need for lung isolation"
    ],
    contraindicated_conditions: [
      "Limited mouth opening / trismus",
      "Limited neck mobility"
    ]
  },
  {
    id: "tool_bronchial_blocker",
    tool_name: "Bronchial blocker via single-lumen tube",
    tool_category: "Adjunct",
    insertion_method: "Blocker advanced through in-situ single-lumen ETT under bronchoscopic guidance",
    insertion_site: "Tracheal",
    contraindications: [
      "Failure to achieve adequate seal or position",
      "Severe tracheal distortion preventing blocker placement"
    ],
    advantages: [
      "Lung isolation without exchanging a definitive ETT",
      "Useful in difficult airway after standard intubation",
      "May remain in place postoperatively while tube is retained"
    ],
    preferred_in: [
      "Thoracic procedures with anticipated difficult airway",
      "ICU patients already intubated needing lung isolation",
      "Trauma cases where tube exchange is high risk"
    ],
    warnings: [
      "Requires bronchoscopy and experience to position",
      "Blocker dislodgement can lead to loss of isolation",
      "Monitor ventilator pressures and oxygenation closely"
    ],
    backup_tools: [
      "Double-lumen endotracheal tube (DLT)",
      "Fiberoptic bronchoscope (awake intubation)",
      "Video laryngoscope (non-channeled)"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Bronchial blocker used through single-lumen endotracheal tube",
      url: "images/bronchial-blocker.png"
    },
    supported_procedure_types: [
      "Thoracic",
      "Trauma surgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU"
    ],
    preferred_conditions: [
      "Need for lung isolation",
      "Anticipated difficult airway"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_classic_lma",
    tool_name: "Classic laryngeal mask airway (LMA)",
    tool_category: "Supraglottic",
    insertion_method: "Blind insertion into hypopharynx with cuff inflation",
    insertion_site: "Oral",
    contraindications: [
      "Non-fasted patients at significant aspiration risk",
      "Poor mouth opening or fixed airway obstruction",
      "High-pressure ventilation requirements"
    ],
    advantages: [
      "Rapid insertion with minimal head/neck movement",
      "Useful for many short elective procedures",
      "Less hemodynamic response than intubation"
    ],
    preferred_in: [
      "Short day case procedures in fasting patients",
      "Minor peripheral surgeries not requiring muscle relaxation",
      "As a rescue airway after failed intubation in low-risk patients"
    ],
    warnings: [
      "Does not provide reliable protection against aspiration",
      "Gastric insufflation and leak may occur at high pressures",
      "Cuff pressure should be monitored and minimized"
    ],
    backup_tools: [
      "Second-generation LMA",
      "Standard cuffed endotracheal tube",
      "i-gel supraglottic airway"
    ],
    skill_level: "Basic",
    image: {
      alt: "Classic laryngeal mask airway device",
      url: "images/classic-lma.png"
    },
    supported_procedure_types: [
      "Short procedure / Day case",
      "Endoscopy",
      "Orthopedics"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Outside OR (NORA: endoscopy / radiology)"
    ],
    preferred_conditions: [
      "None / No special condition"
    ],
    contraindicated_conditions: [
      "Full stomach / Aspiration risk",
      "Pregnancy"
    ]
  },
  {
    id: "tool_second_gen_lma",
    tool_name: "Second-generation LMA (with gastric drain)",
    tool_category: "Supraglottic",
    insertion_method: "Blind oral insertion with gastric drain access",
    insertion_site: "Oral",
    contraindications: [
      "Very high aspiration risk when a cuffed ETT is feasible",
      "Severe oropharyngeal pathology preventing placement"
    ],
    advantages: [
      "Higher seal pressures compared with classic LMA",
      "Gastric channel allows suctioning and tube placement",
      "Useful bridge in unanticipated difficult airway"
    ],
    preferred_in: [
      "Lap or short abdominal procedures in selected fasting patients",
      "Obese patients for short, low-risk surgery with careful monitoring",
      "Rescue ventilation when intubation fails"
    ],
    warnings: [
      "Still not equivalent to cuffed ETT for aspiration protection",
      "Monitor leak pressure, gastric fluid and positioning",
      "Use caution in high-risk obstetric or emergency patients"
    ],
    backup_tools: [
      "Standard cuffed endotracheal tube",
      "Video laryngoscope (channeled)",
      "Second-generation supraglottic rescue device kit"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Second-generation supraglottic airway with gastric drain",
      url: "images/second-gen-lma.png"
    },
    supported_procedure_types: [
      "General Surgery \u2013 Abdomen",
      "Short procedure / Day case",
      "Obstetrics"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Outside OR (NORA: endoscopy / radiology)",
      "Emergency Department (ED)"
    ],
    preferred_conditions: [
      "Obesity / High BMI",
      "None / No special condition"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_igel",
    tool_name: "i-gel supraglottic airway",
    tool_category: "Supraglottic",
    insertion_method: "Non-inflatable cuff seated over laryngeal inlet",
    insertion_site: "Oral",
    contraindications: [
      "Non-fasted patients at high aspiration risk",
      "Severe mouth opening limitation",
      "Significant fixed upper airway obstruction"
    ],
    advantages: [
      "Quick insertion with good seal in many patients",
      "Useful as rescue airway in ED and prehospital settings",
      "Can be used as a conduit for intubation with fiberoptic scope"
    ],
    preferred_in: [
      "Rapid rescue of hypoxemia in difficult airway scenario",
      "Short procedures where intubation is not essential",
      "Prehospital airway management when intubation skills vary"
    ],
    warnings: [
      "Does not fully protect from aspiration",
      "Prolonged use requires airway and gastric monitoring",
      "Confirm correct depth and fixation before releasing mask"
    ],
    backup_tools: [
      "Second-generation LMA",
      "Standard cuffed endotracheal tube",
      "LMA Fastrach (intubating LMA)"
    ],
    skill_level: "Basic",
    image: {
      alt: "i-gel supraglottic airway device",
      url: "images/igel.png"
    },
    supported_procedure_types: [
      "Short procedure / Day case",
      "Trauma surgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Emergency Department (ED)",
      "Prehospital / Ambulance",
      "Operating Room (OR)"
    ],
    preferred_conditions: [
      "Severe hypoxemia / Respiratory failure",
      "None / No special condition"
    ],
    contraindicated_conditions: [
      "Full stomach / Aspiration risk"
    ]
  },
  {
    id: "tool_lma_fastrach",
    tool_name: "LMA Fastrach (intubating LMA)",
    tool_category: "Supraglottic",
    insertion_method: "Supraglottic placement used as conduit for intubation",
    insertion_site: "Oral",
    contraindications: [
      "Markedly limited mouth opening",
      "Significant supraglottic obstruction",
      "Patients at high risk of aspiration"
    ],
    advantages: [
      "Facilitates intubation when direct laryngoscopy view is poor",
      "Allows ventilation while intubation is attempted",
      "Useful in unanticipated difficult airway situations"
    ],
    preferred_in: [
      "Rescue after failed direct laryngoscopy in difficult airway",
      "Trauma with relative cervical spine concerns but mouth opening adequate",
      "Elective difficult airway with backup plan"
    ],
    warnings: [
      "Requires familiarity with specific tube sizes and technique",
      "Aspiration protection remains incomplete until ETT is in place",
      "Avoid in patients with high aspiration risk unless no alternatives"
    ],
    backup_tools: [
      "Fiberoptic bronchoscope (awake intubation)",
      "Video laryngoscope (channeled)",
      "Second-generation supraglottic rescue device kit"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Intubating laryngeal mask airway (LMA Fastrach)",
      url: "images/lma-fastrach.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "ENT / Airway surgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Emergency Department (ED)"
    ],
    preferred_conditions: [
      "Anticipated difficult airway",
      "Limited mouth opening / trismus"
    ],
    contraindicated_conditions: [
      "Full stomach / Aspiration risk"
    ]
  },
  {
    id: "tool_king_lt",
    tool_name: "Laryngeal tube (King LT)",
    tool_category: "Supraglottic",
    insertion_method: "Blind supraglottic insertion with proximal and distal cuffs",
    insertion_site: "Oral",
    contraindications: [
      "Known esophageal pathology or recent upper GI surgery",
      "High aspiration risk where intubation is feasible"
    ],
    advantages: [
      "Rapid insertion in prehospital or ED settings",
      "Provides reasonable seal for controlled ventilation",
      "Useful as rescue airway when intubation fails"
    ],
    preferred_in: [
      "Out-of-hospital cardiac arrest for basic airway control",
      "Trauma patients in prehospital systems without routine intubation",
      "Short transport or bridge to definitive airway"
    ],
    warnings: [
      "Gastric insufflation may occur at high ventilation pressures",
      "Aspiration risk is reduced but not eliminated",
      "Securing device and cuff pressures is essential"
    ],
    backup_tools: [
      "Standard cuffed endotracheal tube",
      "Second-generation supraglottic rescue device kit",
      "Bag-mask ventilation with PEEP valve"
    ],
    skill_level: "Basic",
    image: {
      alt: "Laryngeal tube King LT used in prehospital airway management",
      url: "images/king-lt.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "Short procedure / Day case",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Prehospital / Ambulance",
      "Emergency Department (ED)"
    ],
    preferred_conditions: [
      "Severe hypoxemia / Respiratory failure",
      "None / No special condition"
    ],
    contraindicated_conditions: [
      "Full stomach / Aspiration risk"
    ]
  },
  {
    id: "tool_opa",
    tool_name: "Oropharyngeal airway (Guedel)",
    tool_category: "Adjunct",
    insertion_method: "Placed over tongue to maintain oropharyngeal patency",
    insertion_site: "Oral",
    contraindications: [
      "Conscious or semi-conscious patients with intact gag reflex",
      "Severe oral trauma or obstruction preventing placement"
    ],
    advantages: [
      "Simple, rapid and inexpensive airway adjunct",
      "Helps improve mask ventilation by lifting tongue",
      "Useful in operating room and resuscitation settings"
    ],
    preferred_in: [
      "Bag-mask ventilation during induction or resuscitation",
      "Short procedures under deep sedation",
      "ICU or ED patients requiring temporary airway support"
    ],
    warnings: [
      "Incorrect size may worsen obstruction or cause trauma",
      "Avoid use in lightly sedated patients with strong gag",
      "Does not protect against aspiration"
    ],
    backup_tools: [
      "Nasopharyngeal airway",
      "Bag-mask ventilation with PEEP valve",
      "i-gel supraglottic airway"
    ],
    skill_level: "Basic",
    image: {
      alt: "Oropharyngeal Guedel airway",
      url: "images/oropharyngeal-airway.png"
    },
    supported_procedure_types: [
      "Short procedure / Day case",
      "Endoscopy",
      "Trauma surgery"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU",
      "Emergency Department (ED)"
    ],
    preferred_conditions: [
      "None / No special condition",
      "Severe hypoxemia / Respiratory failure"
    ],
    contraindicated_conditions: [
      "Limited mouth opening / trismus"
    ]
  },
  {
    id: "tool_npa",
    tool_name: "Nasopharyngeal airway",
    tool_category: "Adjunct",
    insertion_method: "Lubricated tube inserted via nostril into nasopharynx",
    insertion_site: "Nasal",
    contraindications: [
      "Basilar skull fracture or midface trauma",
      "Severe coagulopathy or nasal pathology"
    ],
    advantages: [
      "Better tolerated in semi-conscious patients than OPA",
      "Provides airway patency during bag-mask ventilation",
      "Useful when mouth opening is limited"
    ],
    preferred_in: [
      "Resuscitation of patients with partial consciousness",
      "Obese or snoring patients during sedation",
      "ICU or ward patients with obstructive breathing pattern"
    ],
    warnings: [
      "Risk of epistaxis especially in coagulopathic patients",
      "Avoid forceful insertion against resistance",
      "Does not protect against aspiration"
    ],
    backup_tools: [
      "Oropharyngeal airway (Guedel)",
      "High-flow nasal cannula (HFNC)",
      "i-gel supraglottic airway"
    ],
    skill_level: "Basic",
    image: {
      alt: "Soft nasopharyngeal airway device",
      url: "images/nasopharyngeal-airway.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "Short procedure / Day case",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Emergency Department (ED)",
      "ICU",
      "Ward / Floor"
    ],
    preferred_conditions: [
      "Obesity / High BMI",
      "Severe hypoxemia / Respiratory failure"
    ],
    contraindicated_conditions: [
      "Facial trauma / blood in airway"
    ]
  },
  {
    id: "tool_combitube",
    tool_name: "Esophageal-tracheal combitube",
    tool_category: "Rescue",
    insertion_method: "Blind oropharyngeal insertion with dual-lumen ventilation",
    insertion_site: "Oral",
    contraindications: [
      "Known esophageal disease or varices",
      "Patients with intact protective reflexes",
      "Very small adults where device sizing is not suitable"
    ],
    advantages: [
      "Provides ventilation whether inflated in esophagus or trachea",
      "Rapid rescue device in prehospital and ED settings",
      "Reasonable protection from gastric insufflation in many cases"
    ],
    preferred_in: [
      "Cardiac arrest with difficult or failed intubation",
      "Prehospital airway when expertise in intubation is limited",
      "Short-term rescue ventilation until definitive airway"
    ],
    warnings: [
      "Insertion trauma and sore throat are relatively common",
      "Not intended for prolonged mechanical ventilation",
      "Requires careful training to use safely"
    ],
    backup_tools: [
      "Standard cuffed endotracheal tube",
      "Laryngeal tube (King LT)",
      "Second-generation supraglottic rescue device kit"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Esophageal-tracheal combitube for rescue airway",
      url: "images/combitube.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "General Surgery \u2013 Abdomen",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Prehospital / Ambulance",
      "Emergency Department (ED)",
      "Operating Room (OR)"
    ],
    preferred_conditions: [
      "Severe hypoxemia / Respiratory failure",
      "Full stomach / Aspiration risk"
    ],
    contraindicated_conditions: [
      "Limited mouth opening / trismus"
    ]
  },
  {
    id: "tool_bougie",
    tool_name: "Bougie (intubating introducer)",
    tool_category: "Adjunct",
    insertion_method: "Introducer passed through glottis then ETT railroaded over",
    insertion_site: "Other",
    contraindications: [
      "Poor visualization of epiglottis or landmarks",
      "Risk of airway trauma if used forcefully"
    ],
    advantages: [
      "Simple tool to convert poor view into successful intubation",
      "Widely available and easy to learn",
      "Particularly useful with Cormack-Lehane grade 2–3 views"
    ],
    preferred_in: [
      "Difficult laryngoscopy with partial vocal cord visualization",
      "Trauma or obstetric patients with limited positioning options",
      "ICU intubations where view is suboptimal"
    ],
    warnings: [
      "Avoid advancing against significant resistance",
      "Monitor for airway trauma or bleeding",
      "Confirm final tube position with capnography"
    ],
    backup_tools: [
      "Video laryngoscope (non-channeled)",
      "Video laryngoscope (channeled)",
      "Fiberoptic bronchoscope (awake intubation)"
    ],
    skill_level: "Basic",
    image: {
      alt: "Flexible bougie introducer for endotracheal intubation",
      url: "images/bougie.png"
    },
    supported_procedure_types: [
      "General Surgery \u2013 Abdomen",
      "Orthopedics",
      "Trauma surgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Emergency Department (ED)",
      "ICU"
    ],
    preferred_conditions: [
      "Anticipated difficult airway",
      "Cervical spine concern / immobilization"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_rigid_stylet",
    tool_name: "Rigid intubating stylet",
    tool_category: "Adjunct",
    insertion_method: "Stylet pre-shaped and inserted inside ETT for intubation",
    insertion_site: "Other",
    contraindications: [
      "Very small or fragile airways",
      "Limited mouth opening preventing safe insertion"
    ],
    advantages: [
      "Helps direct tube toward glottis in anterior airways",
      "Standard accessory in many operating rooms",
      "Low cost and reusable when processed appropriately"
    ],
    preferred_in: [
      "Obese patients with anterior larynx",
      "Rapid sequence induction with standard ETT",
      "Cases where video laryngoscopy is not available"
    ],
    warnings: [
      "Tip should not protrude beyond ETT to avoid trauma",
      "Uncurl stylet before advancing beyond vocal cords",
      "Use gentle movements to prevent soft tissue injury"
    ],
    backup_tools: [
      "Bougie (intubating introducer)",
      "Video laryngoscope (non-channeled)",
      "Standard cuffed endotracheal tube"
    ],
    skill_level: "Basic",
    image: {
      alt: "Rigid stylet shaped for endotracheal intubation",
      url: "images/rigid-stylet.png"
    },
    supported_procedure_types: [
      "General Surgery \u2013 Abdomen",
      "Obstetrics",
      "Orthopedics"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU"
    ],
    preferred_conditions: [
      "Obesity / High BMI",
      "Full stomach / Aspiration risk"
    ],
    contraindicated_conditions: [
      "Limited mouth opening / trismus"
    ]
  },
  {
    id: "tool_hfnc",
    tool_name: "High-flow nasal cannula (HFNC)",
    tool_category: "Adjunct",
    insertion_method: "Heated humidified oxygen via wide-bore nasal cannula",
    insertion_site: "Nasal",
    contraindications: [
      "Complete nasal obstruction or recent nasal surgery",
      "Significant facial trauma preventing seal"
    ],
    advantages: [
      "Provides apneic oxygenation and some positive pressure",
      "Improves oxygenation in hypoxemic respiratory failure",
      "Can be used during intubation attempts"
    ],
    preferred_in: [
      "Pre-oxygenation for severely hypoxemic ICU patients",
      "Bridge therapy for respiratory failure under close monitoring",
      "Apneic oxygenation during difficult airway management"
    ],
    warnings: [
      "Does not protect against aspiration or guarantee ventilation",
      "Requires monitoring for worsening hypercapnia",
      "Humidifier and circuit function must be checked"
    ],
    backup_tools: [
      "Bag-mask ventilation with PEEP valve",
      "Standard cuffed endotracheal tube",
      "Non-invasive ventilation interfaces"
    ],
    skill_level: "Basic",
    image: {
      alt: "High-flow nasal cannula interface",
      url: "images/hfnc.png"
    },
    supported_procedure_types: [
      "ICU Intubation / Procedure",
      "Endoscopy",
      "Thoracic"
    ],
    supported_locations: [
      "ICU",
      "Ward / Floor",
      "Operating Room (OR)"
    ],
    preferred_conditions: [
      "Severe hypoxemia / Respiratory failure",
      "Obesity / High BMI"
    ],
    contraindicated_conditions: [
      "Facial trauma / blood in airway",
      "Burns / inhalation injury"
    ]
  },
  {
    id: "tool_bmv_peep",
    tool_name: "Bag-mask ventilation with PEEP valve",
    tool_category: "Adjunct",
    insertion_method: "Manual ventilation via face mask with PEEP",
    insertion_site: "Other",
    contraindications: [
      "Inability to maintain an adequate mask seal",
      "Severe facial trauma precluding mask placement"
    ],
    advantages: [
      "Universal emergency airway technique",
      "Provides oxygenation while planning definitive airway",
      "PEEP improves functional residual capacity in many patients"
    ],
    preferred_in: [
      "Pre-oxygenation and rescue ventilation in induction",
      "Cardiopulmonary resuscitation in any location",
      "Bridge to intubation in ICU and ED"
    ],
    warnings: [
      "Excessive tidal volumes can cause gastric insufflation",
      "Requires two-person technique in many obese patients",
      "Does not protect against aspiration"
    ],
    backup_tools: [
      "Oropharyngeal airway (Guedel)",
      "Nasopharyngeal airway",
      "i-gel supraglottic airway"
    ],
    skill_level: "Basic",
    image: {
      alt: "Bag-mask ventilation system with PEEP valve",
      url: "images/bmv-peep.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "ICU Intubation / Procedure",
      "Short procedure / Day case"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Emergency Department (ED)",
      "ICU",
      "Prehospital / Ambulance"
    ],
    preferred_conditions: [
      "Severe hypoxemia / Respiratory failure",
      "Obesity / High BMI"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_direct_laryngoscope",
    tool_name: "Direct laryngoscope (Macintosh)",
    tool_category: "Visualization",
    insertion_method: "Oral blade with direct line-of-sight laryngoscopy",
    insertion_site: "Oral",
    contraindications: [
      "Significant cervical spine instability",
      "Severe mouth opening limitation",
      "Massive upper airway bleeding or obstruction"
    ],
    advantages: [
      "Widely available and familiar to most anesthetists",
      "Predictable performance in routine airways",
      "No dependence on video screen or power"
    ],
    preferred_in: [
      "Routine elective surgical intubations",
      "Training settings for basic airway skills",
      "Backup when video equipment fails"
    ],
    warnings: [
      "May worsen cervical spine movement if positioning is aggressive",
      "Poor view is likely in many predicted difficult airways",
      "Adequate pre-oxygenation and backup plans are essential"
    ],
    backup_tools: [
      "Video laryngoscope (non-channeled)",
      "Bougie (intubating introducer)",
      "Standard cuffed endotracheal tube"
    ],
    skill_level: "Basic",
    image: {
      alt: "Macintosh direct laryngoscope for endotracheal intubation",
      url: "images/direct-laryngoscope.png"
    },
    supported_procedure_types: [
      "General Surgery \u2013 Abdomen",
      "Orthopedics",
      "Obstetrics",
      "Trauma surgery"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Emergency Department (ED)",
      "ICU"
    ],
    preferred_conditions: [
      "None / No special condition"
    ],
    contraindicated_conditions: [
      "Cervical spine concern / immobilization",
      "Limited mouth opening / trismus"
    ]
  },
  {
    id: "tool_video_laryngoscope",
    tool_name: "Video laryngoscope (non-channeled)",
    tool_category: "Visualization",
    insertion_method: "Video-assisted laryngoscopy with separate ETT",
    insertion_site: "Oral",
    contraindications: [
      "Severe airway contamination obscuring camera",
      "Very limited mouth opening preventing blade insertion"
    ],
    advantages: [
      "Improved glottic visualization in many difficult airways",
      "Shared view for teaching and team communication",
      "Reduces cervical spine movement compared with some direct techniques"
    ],
    preferred_in: [
      "Predicted difficult airways in OR or ICU",
      "Intubation with cervical spine precautions",
      "Obese or obstetric patients with limited reserve"
    ],
    warnings: [
      "Good view does not guarantee easy tube passage",
      "Familiarity with device-specific technique is required",
      "Screen contamination can rapidly degrade visualization"
    ],
    backup_tools: [
      "Bougie (intubating introducer)",
      "Video laryngoscope (channeled)",
      "Fiberoptic bronchoscope (awake intubation)"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Non-channeled video laryngoscope for airway visualization",
      url: "images/video-laryngoscope.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "Neurosurgery",
      "Obstetrics",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Emergency Department (ED)",
      "ICU",
      "Ward / Floor"
    ],
    preferred_conditions: [
      "Anticipated difficult airway",
      "Cervical spine concern / immobilization",
      "Obesity / High BMI"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_video_laryngoscope_channeled",
    tool_name: "Video laryngoscope (channeled)",
    tool_category: "Visualization",
    insertion_method: "Video blade with tube-guiding channel",
    insertion_site: "Oral",
    contraindications: [
      "Severe mouth opening limitation",
      "Marked airway distortion not aligning with channel"
    ],
    advantages: [
      "Integrated tube channel simplifies intubation path",
      "Useful in unanticipated difficult airway after failed direct laryngoscopy",
      "Often provides good views in limited neck mobility"
    ],
    preferred_in: [
      "ICU or ED intubations with suspected difficult airway",
      "Rescue after failed direct laryngoscopy",
      "Prehospital settings where devices are available"
    ],
    warnings: [
      "Requires correct midline insertion to align channel",
      "Fogging or secretions can obscure camera",
      "Tube size must match device recommendations"
    ],
    backup_tools: [
      "Bougie (intubating introducer)",
      "i-gel supraglottic airway",
      "Second-generation supraglottic rescue device kit"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Channeled video laryngoscope guiding endotracheal tube",
      url: "images/video-laryngoscope-channeled.png"
    },
    supported_procedure_types: [
      "ICU Intubation / Procedure",
      "Trauma surgery",
      "Short procedure / Day case"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "Emergency Department (ED)",
      "Prehospital / Ambulance"
    ],
    preferred_conditions: [
      "Anticipated difficult airway",
      "Limited neck mobility"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_fiberoptic_awake",
    tool_name: "Fiberoptic bronchoscope (awake intubation)",
    tool_category: "Visualization",
    insertion_method: "Flexible scope-guided intubation via oral or nasal route",
    insertion_site: "Oral",
    contraindications: [
      "Massive airway bleeding obscuring view",
      "Patient unable to cooperate or maintain positioning",
      "Severe secretions not manageable with suction"
    ],
    advantages: [
      "Maintains spontaneous ventilation in difficult airway",
      "Minimal neck movement and mouth opening required",
      "Allows careful navigation around airway pathology"
    ],
    preferred_in: [
      "Severely anticipated difficult airways (tumour, deformity)",
      "Cervical spine instability needing minimal movement",
      "Previously failed laryngoscopy with stable oxygenation"
    ],
    warnings: [
      "Requires time, topical anesthesia and patient cooperation",
      "Not ideal in rapidly deteriorating hypoxemic patients",
      "Needs regular practice to maintain skill"
    ],
    backup_tools: [
      "LMA Fastrach (intubating LMA)",
      "Video laryngoscope (non-channeled)",
      "Surgical cricothyrotomy kit"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Flexible fiberoptic bronchoscope used for awake intubation",
      url: "images/fiberoptic-bronchoscope.png"
    },
    supported_procedure_types: [
      "Head & Neck",
      "ENT / Airway surgery",
      "ICU Intubation / Procedure",
      "Neurosurgery"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU",
      "Ward / Floor"
    ],
    preferred_conditions: [
      "Anticipated difficult airway",
      "Limited mouth opening / trismus",
      "Limited neck mobility"
    ],
    contraindicated_conditions: [
      "Severe hypoxemia / Respiratory failure",
      "Facial trauma / blood in airway"
    ]
  },
  {
    id: "tool_flex_scope_sgad",
    tool_name: "Flexible bronchoscope through supraglottic device",
    tool_category: "Visualization",
    insertion_method: "Scope passed through supraglottic airway as conduit",
    insertion_site: "Oral",
    contraindications: [
      "Failure to ventilate adequately through supraglottic device",
      "Marked airway obstruction distal to the device"
    ],
    advantages: [
      "Allows intubation while maintaining ventilation",
      "Useful bridge from rescue supraglottic airway to ETT",
      "Less neck movement than repeated laryngoscopy"
    ],
    preferred_in: [
      "Unanticipated difficult airway rescued by supraglottic device",
      "Obese patients with poor laryngoscopy view but good supraglottic ventilation",
      "ICU patients with difficult laryngoscopy who can be ventilated via LMA or i-gel"
    ],
    warnings: [
      "Requires fiberoptic skills and appropriate connectors",
      "Device displacement may occur during intubation",
      "Ensure final tube position before removing supraglottic device"
    ],
    backup_tools: [
      "Second-generation supraglottic rescue device kit",
      "Video laryngoscope (non-channeled)",
      "Surgical cricothyrotomy kit"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Flexible bronchoscope passed through supraglottic airway",
      url: "images/flex-scope-sgad.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "ENT / Airway surgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU"
    ],
    preferred_conditions: [
      "Anticipated difficult airway",
      "Obesity / High BMI"
    ],
    contraindicated_conditions: [
      "Severe hypoxemia / Respiratory failure"
    ]
  },
  {
    id: "tool_optical_stylet",
    tool_name: "Optical stylet (e.g., Bonfils-type)",
    tool_category: "Visualization",
    insertion_method: "Rigid optical stylet guiding ETT under direct view",
    insertion_site: "Oral",
    contraindications: [
      "Very limited mouth opening",
      "Massive airway bleeding obscuring lens"
    ],
    advantages: [
      "Useful in anterior larynx with minimal neck movement",
      "Compact device helpful in crowded surgical fields",
      "Provides direct view of glottis without full laryngoscopy"
    ],
    preferred_in: [
      "Head and neck patients with altered anatomy",
      "Neurosurgical cases where neck movement should be limited",
      "Difficult airways where video laryngoscope is not ideal"
    ],
    warnings: [
      "Requires specific training and practice",
      "Lens fogging and secretions can compromise view",
      "Gentle advancement is critical to avoid trauma"
    ],
    backup_tools: [
      "Video laryngoscope (non-channeled)",
      "Bougie (intubating introducer)",
      "Fiberoptic bronchoscope (awake intubation)"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Optical intubating stylet guiding an endotracheal tube",
      url: "images/optical-stylet.png"
    },
    supported_procedure_types: [
      "Head & Neck",
      "Orthopedics",
      "Neurosurgery"
    ],
    supported_locations: [
      "Operating Room (OR)",
      "ICU",
      "Emergency Department (ED)"
    ],
    preferred_conditions: [
      "Anticipated difficult airway",
      "Limited neck mobility"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_surgical_cric",
    tool_name: "Surgical cricothyrotomy kit",
    tool_category: "Rescue",
    insertion_method: "Open surgical airway via cricothyroid membrane",
    insertion_site: "Surgical",
    contraindications: [
      "Very young children where surgical cricothyrotomy is not standard",
      "Inability to identify landmarks (relative)"
    ],
    advantages: [
      "Definitive front-of-neck airway in cannot intubate, cannot oxygenate",
      "Allows connection to standard breathing circuits",
      "Rapid life-saving procedure when performed correctly"
    ],
    preferred_in: [
      "Failed intubation and failed supraglottic ventilation",
      "Severe facial or upper airway trauma obstructing access",
      "Thermal or inhalation injury with complete upper airway obstruction"
    ],
    warnings: [
      "High-stakes procedure requiring training and preparation",
      "Bleeding and misplacement are possible complications",
      "Post-procedure care and eventual conversion to tracheostomy may be required"
    ],
    backup_tools: [
      "Needle cricothyrotomy with jet ventilation",
      "Second-generation supraglottic rescue device kit",
      "Bag-mask ventilation with PEEP valve"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Surgical cricothyrotomy emergency airway kit",
      url: "images/surgical-cric.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "ENT / Airway surgery",
      "ICU Intubation / Procedure"
    ],
    supported_locations: [
      "Emergency Department (ED)",
      "Prehospital / Ambulance",
      "Operating Room (OR)"
    ],
    preferred_conditions: [
      "Severe hypoxemia / Respiratory failure",
      "Facial trauma / blood in airway",
      "Burns / inhalation injury"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_needle_cric",
    tool_name: "Needle cricothyrotomy with jet ventilation",
    tool_category: "Rescue",
    insertion_method: "Percutaneous cannula through cricothyroid membrane",
    insertion_site: "Surgical",
    contraindications: [
      "Complete upper airway obstruction without exhalation pathway",
      "Lack of appropriate jet ventilation equipment"
    ],
    advantages: [
      "Rapid temporizing oxygenation in small children and adults",
      "Less invasive than formal surgical cricothyrotomy",
      "Can be life-saving while preparing for definitive airway"
    ],
    preferred_in: [
      "Cannot intubate, cannot oxygenate in remote settings",
      "Severe facial trauma with no oral or nasal access",
      "Inhalation injury with rapidly closing airway"
    ],
    warnings: [
      "Does not provide effective CO2 elimination long term",
      "Risk of barotrauma and subcutaneous emphysema",
      "Requires careful timing and monitoring"
    ],
    backup_tools: [
      "Surgical cricothyrotomy kit",
      "Second-generation supraglottic rescue device kit",
      "Standard cuffed endotracheal tube"
    ],
    skill_level: "Advanced",
    image: {
      alt: "Needle cricothyrotomy kit with jet ventilation",
      url: "images/needle-cric.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "ICU Intubation / Procedure",
      "ENT / Airway surgery"
    ],
    supported_locations: [
      "Emergency Department (ED)",
      "Prehospital / Ambulance",
      "Operating Room (OR)"
    ],
    preferred_conditions: [
      "Severe hypoxemia / Respiratory failure",
      "Facial trauma / blood in airway",
      "Burns / inhalation injury"
    ],
    contraindicated_conditions: []
  },
  {
    id: "tool_sgad_rescue_kit",
    tool_name: "Second-generation supraglottic rescue device kit",
    tool_category: "Rescue",
    insertion_method: "Rapid insertion supraglottic device with gastric drain and accessories",
    insertion_site: "Oral",
    contraindications: [
      "Extreme aspiration risk when ETT is immediately feasible",
      "Severe mouth opening limitation"
    ],
    advantages: [
      "Fast rescue ventilation after failed intubation",
      "Gastric drain allows suction or gastric tube placement",
      "Can serve as conduit for fiberoptic-guided intubation"
    ],
    preferred_in: [
      "Unanticipated difficult airway with failed laryngoscopy",
      "Trauma or ED patients where oxygenation is failing",
      "Prehospital airway rescue when intubation fails"
    ],
    warnings: [
      "Not a definitive aspiration-protecting airway",
      "Careful monitoring of ventilation pressures and gastric contents is needed",
      "Plan for transition to cuffed ETT when appropriate"
    ],
    backup_tools: [
      "Flexible bronchoscope through supraglottic device",
      "Standard cuffed endotracheal tube",
      "Surgical cricothyrotomy kit"
    ],
    skill_level: "Basic",
    image: {
      alt: "Second-generation supraglottic rescue airway kit",
      url: "images/sgad-rescue-kit.png"
    },
    supported_procedure_types: [
      "Trauma surgery",
      "ICU Intubation / Procedure",
      "Endoscopy"
    ],
    supported_locations: [
      "Emergency Department (ED)",
      "Prehospital / Ambulance",
      "Operating Room (OR)"
    ],
    preferred_conditions: [
      "Severe hypoxemia / Respiratory failure",
      "Anticipated difficult airway"
    ],
    contraindicated_conditions: [
      "Full stomach / Aspiration risk"
    ]
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

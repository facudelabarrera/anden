// Source of truth: "copys anden ENGLISH.txt"
// Strings are taken verbatim from that document. No corrections applied.
export const en = {
  hero: {
    title: 'Bridging existing regulation with global technology.',
    body: 'Andén provides the digital infrastructure that turns existing special regimes into engines of the Knowledge Economy. It requires no new legislation, complements the State, and delivers measurable results within months.',
    cta: 'CONTACT THE TEAM',
  },
  stats: {
    // Source: "7000 PLUS WORD ECONOMICS ZONES / 250 TRULY OPERATIONAL / 0 DIGITAL ZONES OPERATING IN LATIN AMERICA / 100K CURRENT INTERNATIONAL STRUCTURING COST"
    items: [
      { line1: 'WORD ECONOMICS', line2: 'ZONES' },
      { line1: 'TRULY', line2: 'OPERATIONAL' },
      { line1: 'DIGITAL ZONES', line2: 'OPERATING IN LATIN AMERICA' },
      { line1: 'CURRENT INTERNATIONAL', line2: 'STRUCTURING COST' },
    ],
  },
  problem: {
    label: 'The Regional Opportunity',
    title: 'Economic zones across the region still operate under a 20th century logic.',
    body: 'Built for physical trade in the 1990s, existing SEZs fail to address the digital economy. Their regulatory frameworks, processes, and infrastructure create a cycle that no single jurisdiction can break alone. Outdated regulation and legacy systems reduce competitiveness, concentrate capital and talent elsewhere, and widen the gap.',
    sticker: 'A CYCLE\nWITH NO\nEXIT',
    cards: [
      {
        title: 'OUTDATED\nREGULATION',
        text: 'Frameworks from the last century fail to address AI, tokenization, or digital services.',
      },
      {
        title: 'LEGACY\nINFRASTRUCTURE',
        text: 'Manual processes and siloed agencies slow modernization. Upgrading systems takes more than seven years.',
      },
      {
        title: 'CAPITAL AND\nTALENT FLIGHT',
        text: 'Without digital first infrastructure, the region cannot compete for the capital captured by Dubai, Estonia, or Singapore.',
      },
      {
        title: 'LOWER\nCOMPETITIVENESS',
        text: 'Regulatory and operational friction increases the cost of digital business and extends time-to-market compared with more agile hubs.',
      },
    ],
  },
  solution: {
    label: 'The Solution',
    title: 'Andén OS: the operating system for special economic regimes.',
    body: 'Andén designs, launches, and operates Digital Zones on top of existing legal frameworks. It does not require new legislation or replace the State. Instead, it adds a technology layer that improves execution, speed, and full traceability.',
    features: [
      'Digital Company Registry',
      'Tax and Compliance Automation',
      'AI agents and Task Automation',
      'Government Operations Dashboard',
      'Cross Agency interoperability',
      'Deployment Toolkit',
    ],
  },
  benefits: {
    label: 'The Solution',
    title: 'Infrastructure that creates value on both sides of the ecosystem.',
    body: 'Digital Zones benefit both users and the jurisdictions that implement them. Each side reinforces the other.',
    leftBadge: 'FOR STARTUPS AND COMPANIES',
    leftItems: [
      'Fast, fully digital incorporation',
      'Regulatory certainty',
      'Access to global capital',
      'Lower offshore structuring costs',
      'Scalability from Latin America',
    ],
    rightBadge: 'FOR THE OPERATOR',
    rightItems: [
      'Real time traceability and oversight',
      'Capture value from the knowledge economy',
      'Attract talent and investment',
      'Modernize without new legislation',
      'Develop technology ecosystems',
    ],
  },
  global: {
    label: 'Around the World',
    title: 'Asia, the UAE, and Europe have already proven this model. Latin America still lacks an equivalent.',
    body: 'Three regions have shown that digital zones generate value at scale. The opportunity across the region remains open.',
    regions: [
      { amount: 'USD $180M+', location: 'DMCC · DUBAI', category: 'Trade & Services', badge: 'REGULATION = GROWTH' },
      { amount: 'USD $100M+', location: 'RAK DAO · RAS AL KHAIMAH', category: 'Blockchain / Web3', badge: 'INNOVATION = CAPITAL' },
      { amount: 'USD $80M+', location: 'E-ESTONIA', category: 'Digital Identity', badge: 'TRUST = SCALE' },
    ],
  },
  argentina: {
    label: 'The Opportunity in Argentina',
    title: 'Argentina presents the first implementation case.',
    bodyParagraphs: [
      'The country offers unique conditions to launch a Digital Zone: world class technology talent, a special regime that regulators can activate, and a Knowledge Economy Law with stackable benefits.',
      'The legal framework already exists. Andén adapts and digitizes it to host technology, AI, fintech, and digital asset companies, without requiring new legislation.',
    ],
    quote: '\u201cThe incentives exist. What was missing was the digital layer needed to activate them.\u201d',
    statsDescriptions: [
      'Knowledge Economy Exports, Argentina (2025 record)',
      'Year-over-year growth in knowledge-based service exports',
      'Knowledge Economy employees. 2030 goal: 440K',
      'Global developer density (GitHub, 2024)',
    ],
    nextJurisdictionsTitle: 'NEXT JURISDICTIONS',
    nextJurisdictionsBody: 'The model can scale to any jurisdiction with an active SEZ framework. Multiple Latin American countries are under evaluation.',
  },
  team: {
    // TODO: EN source document has "The Team Making It Happen" as a combined heading.
    // "The Team" label is derived from that phrase — no standalone short label in source.
    label: 'The Team',
    title: 'The Team Making It Happen.',
    body: 'A multidisciplinary team combining expertise in technology, regulation, and ecosystem development. Trained in leading Web3 and innovation environments across Latin America.',
    backedByLabel: 'BACKED BY',
    // Order matches TEAM_MEMBERS array: Milagros, Simón, Teófilo, Santiago
    memberRoles: [
      'COS & CO-FOUNDER',
      'CBO & CO-FOUNDER',
      'CPA & CO-FOUNDER',
      'CEO & CO-FOUNDER',
    ],
  },
  footer: {
    quote: 'A Digital Zone can become operational within six months. The legal framework exists. The technology is ready. The remaining step is the decision.',
    cta: 'CONTACT THE TEAM',
    copyright: '© 2026 ANDÉN · Infrastructure for Digital Zones · Buenos Aires, Argentina',
  },
} as const

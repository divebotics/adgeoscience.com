import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import type { ServiceData } from "./ServiceDetailClient";

const servicesData: ServiceData[] = [
  {
    slug: "marine-geophysical-survey",
    iconName: "Waves",
    title: "Marine Geophysical Survey",
    tagline: "Complete image of the seafloor",
    image: "/services/marine_geophysical_survey.png",
    heroDescription:
      "From surf zone to full ocean depth high resolution bathymetry, 2D HR&UHR seismic, sub-bottom profiling, side-scan sonar and magnetometry for a complete image of the seafloor.",
    intro:
      "AD Geoscience's marine geophysical survey capability covers the full range of acoustic and electromagnetic methods required to characterize the seafloor and its sub-strata. From shallow nearshore environments to deep offshore basin surveys, we deploy calibrated sensor systems aboard our specialized vessel fleet.",
    methods: [
      {
        title: "High Resolution Multibeam Bathymetry",
        desc: "Full coverage seafloor mapping providing accurate water depths and seabed morphology using state-of-the-art multibeam echo sounder systems.",
      },
      {
        title: "2D HR & UHR Seismic",
        desc: "High and ultra-high resolution seismic acquisition revealing sub-surface stratigraphy and geological features critical for pipeline and infrastructure routing.",
      },
      {
        title: "Sub-Bottom Profiling",
        desc: "Parametric and chirp SBP systems delivering high-resolution acoustic imagery of shallow sediment layers for engineering foundation assessments.",
      },
      {
        title: "Side-Scan Sonar",
        desc: "Towfish and hull-mounted SSS systems providing photographic-quality seabed imagery to identify features, hazards, and man-made objects.",
      },
      {
        title: "Magnetometry",
        desc: "Towed and integrated magnetometer systems for detection of metallic objects, pipeline verification, and UXO risk screening.",
      },
    ],
    applications: ["Pipeline Route Surveys", "Platform Site Investigations", "Cable Route Surveys", "Renewable Energy Site Surveys", "UXO Pre-Screening"],
    relatedSlugs: ["marine-geotechnical-survey", "uxo-survey"],
  },
  {
    slug: "marine-geotechnical-survey",
    iconName: "Layers",
    title: "Marine Geotechnical Survey",
    tagline: "Soil certainty for engineering foundations",
    image: "/services/marine_geotechnical_survey.jpg",
    heroDescription:
      "Precision CPT, coring, and sediment characterization to define soil parameters with certainty.",
    intro:
      "Geotechnical data quality directly determines the reliability of offshore foundation design. ADG's marine geotechnical program integrates in-situ testing with laboratory analysis to deliver soil profiles that engineering teams can rely on for critical structural decisions.",
    methods: [
      {
        title: "Cone Penetration Testing (CPT)",
        desc: "Seabed and downhole PCPT systems providing continuous soil strength profiles and stratigraphic information at target locations.",
      },
      {
        title: "Gravity & Piston Coring",
        desc: "Recovery of sediment cores for visual description, sub-sampling, and laboratory testing to validate in-situ measurements.",
      },
      {
        title: "Geotechnical Laboratory Analysis",
        desc: "Full suite of index and engineering property tests: grain size, Atterberg limits, shear strength, consolidation, and more.",
      },
      {
        title: "Sediment Characterization",
        desc: "Integration of CPT, core, and acoustic data to define sediment facies and engineering soil units across the survey area.",
      },
    ],
    applications: ["Foundation Design", "Pipeline On-Bottom Stability", "Jack-Up Rig Site Assessments", "Anchor and Mooring Analysis", "Wind Turbine Foundation Support"],
    relatedSlugs: ["marine-geophysical-survey", "offshore-construction-support"],
  },
  {
    slug: "offshore-construction-support",
    iconName: "Shield",
    title: "Offshore Construction Support",
    tagline: "Precision for infrastructure installation",
    image: "/services/construction_support.jpg",
    heroDescription:
      "Precise positioning, touchdown monitoring, and subsea metrology for infrastructure installation.",
    intro:
      "Offshore construction operations demand centimeter-level positioning accuracy and real-time subsea awareness. ADG provides integrated construction support services that give installation teams the spatial intelligence needed for safe, efficient, and verified offshore operations.",
    methods: [
      {
        title: "Acoustic Positioning (LBL/USBL)",
        desc: "Long and ultra-short baseline acoustic systems providing continuous sub-sea tracking of structures, ROVs, and installation tools.",
      },
      {
        title: "Touchdown Monitoring (TDM)",
        desc: "Real-time monitoring of pipe and cable touchdown points during lay operations to verify route compliance and protect seabed infrastructure.",
      },
      {
        title: "Subsea Metrology",
        desc: "Precision measurement of subsea structure positions and orientations for spool and jumper fabrication and installation.",
      },
      {
        title: "As-Built Surveys",
        desc: "Post-installation surveys confirming final positions of installed infrastructure and verifying compliance with design specifications.",
      },
    ],
    applications: ["Pipeline Installation", "Cable Laying Operations", "Platform Installation", "Subsea Structure Installation", "Dredging Operations"],
    relatedSlugs: ["marine-geophysical-survey", "marine-geotechnical-survey"],
  },
  {
    slug: "uxo-survey",
    iconName: "Radar",
    title: "UXO Survey",
    tagline: "Safety-critical clearance support",
    image: "/services/uxo_survey.jpg",
    heroDescription:
      "Advanced detection and investigation services for unexploded ordnance in complex offshore environments.",
    intro:
      "The Mediterranean and Black Sea contain significant quantities of unexploded ordnance from past conflicts. ADG's UXO survey program provides systematic detection, identification, and risk assessment services that protect personnel and assets during offshore operations.",
    methods: [
      {
        title: "Magnetometry & Gradiometry",
        desc: "Towed and AUV-deployed magnetometer and gradiometer arrays providing high-sensitivity detection of ferrous anomalies on and beneath the seabed.",
      },
      {
        title: "AUV-Based Detection",
        desc: "Autonomous underwater vehicle deployment enabling efficient, high-resolution coverage of large survey areas with consistent altitude control.",
      },
      {
        title: "Risk Assessment & Mapping",
        desc: "Identification and characterization of detected anomalies, classification by likelihood, and production of UXO risk maps for project areas.",
      },
      {
        title: "Historical Background Research",
        desc: "Archival research into historical military activities and known ordnance disposal sites to inform survey design and risk evaluation.",
      },
    ],
    applications: ["Offshore Wind Farm Development", "Pipeline Route Clearance", "Cable Route Clearance", "Port Expansion Projects", "Dredging Operations"],
    relatedSlugs: ["marine-geophysical-survey", "offshore-construction-support"],
  },
  {
    slug: "metocean-monitoring-modelling",
    iconName: "CloudRain",
    title: "Metocean Monitoring and Modelling",
    tagline: "Understand the marine environment",
    image: "/services/metocean.jpg",
    heroDescription:
      "Real-time data and predictive modelling with numerical simulations to understand the impact of marine dynamics on your project.",
    intro:
      "Understanding the marine environment is fundamental to safe and efficient offshore operations. ADG's metocean service combines in-situ monitoring with advanced numerical modelling to deliver the environmental intelligence your project needs — from early-stage design through operational planning.",
    methods: [
      {
        title: "Wave & Current Monitoring",
        desc: "Deployment of WaveRider buoys, ADCP current profilers, and tide gauges providing continuous high-quality environmental measurements.",
      },
      {
        title: "Wind & Meteorological Data",
        desc: "Met station and anemometer deployments supplemented by satellite data products for comprehensive atmospheric characterization.",
      },
      {
        title: "Numerical Ocean Modelling",
        desc: "Implementation of validated spectral wave models (SWAN/WAVEWATCH III) and circulation models for site-specific environmental characterization.",
      },
      {
        title: "Extreme Event Analysis",
        desc: "Statistical analysis of long-term datasets to derive design conditions for 1, 10, 100, and 10,000-year return period events.",
      },
    ],
    applications: ["Offshore Structure Design", "Operational Weather Windows", "Environmental Impact Assessment", "Renewable Energy Resource Assessment", "Coastal Structure Design"],
    relatedSlugs: ["marine-geophysical-survey", "offshore-construction-support"],
  },
];

const serviceMap = Object.fromEntries(servicesData.map((s) => [s.slug, s]));

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceMap[slug];

  if (!service) notFound();

  const relatedServices = service.relatedSlugs
    .map((rs) => serviceMap[rs])
    .filter(Boolean) as ServiceData[];

  return <ServiceDetailClient service={service} relatedServices={relatedServices} />;
}

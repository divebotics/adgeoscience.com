import { notFound } from "next/navigation";
import IndustryDetailClient from "./IndustryDetailClient";
import type { IndustryData } from "./IndustryDetailClient";

const industriesData: IndustryData[] = [
  {
    slug: "oil-and-gas",
    iconName: "Flame",
    title: "Oil and Gas",
    tagline: "Integrated surveys for complex offshore environments",
    color: "#F36C21",
    intro:
      "Integrated surveys for pipeline routing, site screening, and platform structural integrity. The oil and gas sector demands the highest standards of survey accuracy and data quality — ADG delivers fully integrated geoscience programs that reduce risk and accelerate project delivery.",
    body:
      "From exploration phase site screening to decommissioning surveys, ADG supports the full asset lifecycle for offshore oil and gas operators. Our integrated geophysical and geotechnical programs eliminate the data gaps that arise when multiple survey contractors are deployed, giving engineering teams a single coherent picture of the subsurface environment.",
    services: [
      "Pipeline Route Surveys",
      "Site Screening & Characterization",
      "Platform Structural Integrity Surveys",
      "Seabed Hazard Assessment",
      "Cable and Umbilical Route Surveys",
      "UXO Pre-Screening",
    ],
    whyAdg: [
      "Fully integrated geophysical + geotechnical programs",
      "DP2 vessel operations for deep water environments",
      "Regulatory-compliant data acquisition and reporting",
      "Mediterranean and Black Sea regional expertise",
    ],
  },
  {
    slug: "submarine-cables",
    iconName: "Cable",
    title: "Submarine Cables",
    tagline: "Precise route corridors for telecom and power",
    color: "#3DAFC4",
    intro:
      "Precise route corridor surveys and burial verification for interconnectors and telecom cables. Submarine cable projects require a comprehensive understanding of the seabed environment along the entire route — from shallow nearshore environments to deep water crossing points.",
    body:
      "ADG provides the full suite of survey services required for submarine cable projects: route corridor surveys combining bathymetry, sub-bottom profiling, and side-scan sonar; detailed seabed characterization for burial depth assessments; geotechnical investigations at landing points; and post-installation burial verification surveys.",
    services: [
      "Route Corridor Surveys",
      "Seabed Feature Mapping",
      "Burial Depth Assessment",
      "Landing Point Geotechnical Surveys",
      "Post-Lay Burial Verification",
      "UXO Route Screening",
    ],
    whyAdg: [
      "End-to-end route survey capability",
      "Shore approach and nearshore survey expertise",
      "Integrated geophysical and geotechnical programs",
      "Rapid mobilization across the Mediterranean",
    ],
  },
  {
    slug: "renewables",
    iconName: "Wind",
    title: "Renewables",
    tagline: "Site intelligence for offshore wind developers",
    color: "#F2D64B",
    intro:
      "Wind monitoring, site investigations and foundation installation surveys for offshore wind farm developers. The offshore renewables sector demands comprehensive environmental characterization to support foundation design, installation planning, and operational monitoring.",
    body:
      "ADG delivers integrated geoscience programs for offshore wind developers — from early-stage resource assessment and metocean monitoring through detailed ground investigation and installation support. Our geotechnical surveys provide the soil data required for monopile, jacket, and floating foundation design, while our construction support services ensure precise turbine positioning and cable route verification.",
    services: [
      "Wind Resource Monitoring",
      "Site Investigation (Geophysical + Geotechnical)",
      "Foundation Design Support",
      "UXO Survey & Clearance Support",
      "Installation Support",
      "Export Cable Route Surveys",
    ],
    whyAdg: [
      "Full metocean monitoring and modelling capability",
      "Integrated site investigation programs",
      "Foundation geotechnics expertise",
      "Construction and installation support",
    ],
  },
  {
    slug: "positioning-construction-support",
    iconName: "Anchor",
    title: "Positioning and Construction Support",
    tagline: "Reliable positioning for offshore infrastructure",
    color: "#DBCBB8",
    intro:
      "Reliable positioning, subsea metrology and 3D seabed modelling for dredging and offshore infrastructure placement. Construction and installation operations in the offshore environment require precise positioning systems and real-time spatial intelligence.",
    body:
      "ADG provides the positioning and survey support services that keep offshore construction projects on track. From acoustic positioning and ROV tracking through touchdown monitoring and post-installation as-built surveys, our construction support team delivers the spatial data that installation contractors need to work safely and efficiently.",
    services: [
      "USBL/LBL Acoustic Positioning",
      "ROV Navigation Support",
      "Touchdown Monitoring",
      "Dredging Control Surveys",
      "Subsea Metrology",
      "As-Built Documentation",
    ],
    whyAdg: [
      "Real-time positioning solutions",
      "Subsea metrology expertise",
      "3D seabed model generation",
      "Experienced offshore survey personnel",
    ],
  },
];

const industryMap = Object.fromEntries(industriesData.map((i) => [i.slug, i]));

export function generateStaticParams() {
  return industriesData.map((i) => ({ slug: i.slug }));
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industryMap[slug];

  if (!industry) notFound();

  return <IndustryDetailClient industry={industry} />;
}

import nestjsIcon from "../assets/nestjs.svg"
import nextjsIcon from "../assets/nextjs.svg"
import nodejsIcon from "../assets/nodejs.svg"
import reactjsIcon from "../assets/reactjs.svg"
import typescriptIcon from "../assets/typescript.svg"

// Personal Information
export const personalInfo = {
  name: "La Quoc Anh",
  title: "Fullstack & Blockchain Developer",
  email: "quocanhbk17@gmail.com",
  phone: "0384415336",
  location: "Ho Chi Minh City",
  github: "https://github.com/quocanhbk",
  birthDate: "01/06/1999",
  bio: "Passionate developer specializing in fullstack and blockchain technologies with a strong foundation in Computer Science.",
  education: {
    university: "Ho Chi Minh University of Technology",
    major: "Computer Science",
    period: "08/2017 - 04/2022",
  },
  certifications: [
    {
      name: "TOEIC Certificate",
      score: "960",
      issuer: "IIG Viet Nam",
      year: "2023",
    },
  ],
}

// Skills
export const skills = [
  { name: "React.js", icon: reactjsIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "Nest.js", icon: nestjsIcon },
]

// Companies and Projects
export const companies = [
  {
    id: "blockpixels",
    name: "Blockpixels",
    logo: "https://placehold.co/100x100?text=BP",
    website: "https://blockpixels.io",
    description: "Blockchain development company specializing in decentralized applications and smart contracts.",
    role: "Fullstack and Blockchain Developer",
    period: "06/2023 - Current",
    projects: [
      {
        id: "dapp-1",
        name: "Multi-chain DEX Platform",
        image: "https://placehold.co/600x400?text=DEX+Platform",
        description:
          "Decentralized exchange platform supporting multiple EVM chains with liquidity pools and staking features.",
        role: "Developed smart contracts and frontend integration using Next.js and Ethers.js",
        technologies: ["Next.js", "Solidity", "Ethers.js", "TailwindCSS"],
      },
      {
        id: "dapp-2",
        name: "NFT Marketplace",
        image: "https://placehold.co/600x400?text=NFT+Marketplace",
        description:
          "Marketplace for creating, buying, and selling NFTs with support for multiple collections and royalties.",
        role: "Built the frontend and integrated with smart contracts",
        technologies: ["React.js", "Solidity", "GraphQL", "Nest.js"],
      },
      {
        id: "dapp-3",
        name: "DeFi Dashboard",
        image: "https://placehold.co/600x400?text=DeFi+Dashboard",
        description: "Dashboard for monitoring and managing DeFi investments across multiple protocols and chains.",
        role: "Developed the frontend and backend API services",
        technologies: ["Next.js", "Nest.js", "TailwindCSS", "GraphQL"],
      },
    ],
  },
  {
    id: "ather-labs",
    name: "Ather Labs",
    logo: "https://placehold.co/100x100?text=AL",
    website: "https://atherlabs.io",
    description: "Blockchain innovation lab focused on developing cutting-edge blockchain solutions.",
    role: "Fullstack and Blockchain Developer",
    period: "09/2021 - 05/2023",
    projects: [
      {
        id: "ather-1",
        name: "Token Launchpad",
        image: "https://placehold.co/600x400?text=Token+Launchpad",
        description:
          "Platform for launching new tokens with features like vesting, staking, and automatic liquidity provision.",
        role: "Designed and developed the frontend and smart contracts",
        technologies: ["Next.js", "Chakra UI", "Solidity", "Hardhat"],
      },
      {
        id: "ather-2",
        name: "DAO Governance Platform",
        image: "https://placehold.co/600x400?text=DAO+Platform",
        description: "Decentralized governance platform allowing token holders to create and vote on proposals.",
        role: "Implemented the voting mechanism and frontend interface",
        technologies: ["React.js", "TailwindCSS", "Solidity", "TypeScript"],
      },
    ],
  },
  {
    id: "trung-thuy",
    name: "Trung Thuy Group",
    logo: "https://placehold.co/100x100?text=TTG",
    website: "https://trungthuycorp.com",
    description: "Real estate development corporation with diverse business interests.",
    role: "Software Developer",
    period: "03/2020 - 09/2021",
    projects: [
      {
        id: "ttg-1",
        name: "Document Management System",
        image: "https://placehold.co/600x400?text=Document+System",
        description: "Internal system for managing document workflows, approvals, and digital signatures.",
        role: "Developed the frontend and backend integration",
        technologies: ["React.js", "Node.js", "PostgreSQL", "Microsoft PowerApps"],
      },
      {
        id: "ttg-2",
        name: "CRM Platform",
        image: "https://placehold.co/600x400?text=CRM+Platform",
        description: "Customer relationship management system for sales and marketing teams.",
        role: "Built custom modules and integrations",
        technologies: ["React.js", "Express.js", "PostgreSQL", "SharePoint"],
      },
      {
        id: "ttg-3",
        name: "HR Management Portal",
        image: "https://placehold.co/600x400?text=HR+Portal",
        description: "Employee management portal for HR processes, leave management, and performance reviews.",
        role: "Developed the frontend and backend services",
        technologies: ["React.js", "Node.js", "Microsoft PowerApps"],
      },
    ],
  },
]

// Contact Information
export const contactInfo = {
  email: "quocanhbk17@gmail.com",
  phone: "0384415336",
  location: "Ho Chi Minh City",
  github: "https://github.com/quocanhbk",
  message: "Feel free to reach out if you're looking for a developer, have a question, or just want to connect.",
}

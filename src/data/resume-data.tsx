import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ushira Dineth",
  initials: "UD",
  location: "Seeduwa, Sri Lanka",
  locationLink: "https://maps.app.goo.gl/qgnqky2HEBKcEE587",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail from UI/UX to Infrastructure and everything in between.",
  summary:
    "As a Full Stack Software Engineer, I have successfully taken part in multiple project learning and understanding how software is built from end to end. Currently, I work mostly with TypeScript, NextJS, Terraform and Kuberentes. I have over an year of experience in working with client projects. I am currently learning Go and Rust to expand my knowledge on low level languages.",
  avatarUrl: "https://avatars.githubusercontent.com/u/70438264?v=6",
  personalWebsiteUrl: "https://ushira.com",
  contact: {
    email: "ushiradineth@gmail.com",
    tel: "+94777292424",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ushiradineth",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ushiradineth/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ushiradineth",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SLIIT City University",
      degree: "Bachelor's Degree in Computer Science and Software Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Surge Global",
      link: "https://surge.global",
      badges: ["Kubernetes", "CI/CD", "Terraform", "AWS"],
      title: "Associate Software Engineer → Software Engineer",
      logo: undefined,
      start: "September 2023",
      end: "Present",
      description:
        "I spearheaded the migration of the Hello Tiger Platform to an AWS EKS Kubernetes cluster using Terraform, enhancing scalability and cost efficiency. I contributed to infrastructure design, ensuring alignment with project requirements and optimizing performance. Additionally, I implemented monitoring tools like Istio, Prometheus, Grafana, Kiali, and Jaeger for real-time system tracking. Moreover, I introduced GitOps practices with ArgoCD and Helm charts to automate deployment processes, ensuring consistency and efficiency in managing infrastructure and applications on the AWS EKS Kubernetes cluster.",
    },
    {
      company: "Surge Global",
      link: "https://surge.global",
      badges: ["TypeScript", "NextJS", "NestJS", "Terraform", "AWS"],
      title: "Software Engineering Intern",
      logo: undefined,
      start: "March 2023",
      end: "August 2023",
      description:
        "During my internship at Surge Global, I enhanced StudyRooms with UI improvements and OTP verifications, migrated it to AWS EKS Kubernetes, and led the development of SubM. I gained experience in full-stack development, DevOps, and technologies like Kubernetes, AWS, Docker, and GraphQL. Additionally, I implemented a real-time monitoring system using Prometheus, Grafana, Kiali, and Jaeger.",
    },
  ],
  skills: ["TypeScript", "React/Next.js", "Node.js", "Kubernetes", "AWS"],
  projects: [
    {
      title: "Hello Tiger",
      techStack: [
        "Surge Global",
        "Terraform",
        "AWS",
        "Kubernetes (AWS EKS)",
        "Docker",
        "Keycloak",
        "PostgreSQL",
        "Prometheus",
        "Grafana",
        "Jaeger",
        "Istio",
        "Kiali",
      ],
      description:
        "A faster, safer, and hassle-free dating app prioritizing user satisfaction and safety for a top-notch online dating experience.",
      logo: undefined,
      link: {
        label: "Hello Tiger on App Store",
        href: "https://apps.apple.com/lk/app/hello-tiger-dating-app-chat/id1575544065",
      },
    },
    {
      title: "Studyrooms",
      techStack: [
        "Surge Global",
        "TypeScript",
        "NextJS",
        "NestJS",
        "GraphQL",
        "MongoDB",
        "Terraform",
        "AWS",
        "Kubernetes (AWS EKS)",
        "Keycloak",
        "Docker",
        "Jest",
      ],
      description:
        "An online tuition platform that provides a wide variety of courses and access to skilled tutors, catering to a diverse range of learners.",
      logo: undefined,
      link: {
        label: "Studyrooms",
        href: "https://studyrooms.com",
      },
    },
    {
      title: "SubM",
      techStack: [
        "TypeScript",
        "NextJS",
        "Expo",
        "React Native",
        "Turborepo",
        "PostgreSQL",
        "TailwindCSS",
        "Prisma",
        "tRPC",
        "React Mail",
        "Vercel",
      ],
      description:
        "A Subscription management platform for businesses and users, connecting subscriptions, consumers, and providers.",
      logo: undefined,
      link: {
        label: "SubM on GitHub",
        href: "https://github.com/ushiradineth/subm",
      },
    },
    {
      title: "Clonegram",
      techStack: [
        "TypeScript",
        "NextJS",
        "TailwindCSS",
        "Prisma",
        "tRPC",
        "Vercel",
      ],
      description:
        "A website replicating Instagram built with TypeScript, NextJS, Prisma. Website hosted on Vercel. Database and Storage hosted on Supabase.",
      logo: undefined,
      link: {
        label: "Clonegram on GitHub",
        href: "https://github.com/ushiradineth/clonegram",
      },
    },
    {
      title: "Celiao",
      techStack: [
        "Java",
        "Android Studio",
        "Firebase Firestore",
        "Firebase Storage",
        "Javax Mail",
      ],
      description:
        "A Vehicle Rental Application with User, Booking and other management systems.",
      logo: undefined,
      link: {
        label: "Celiao on GitHub",
        href: "https://github.com/ushiradineth/carApp",
      },
    },
    {
      title: "Social Tracker",
      techStack: ["Python", "Selenium", "Tweepy (Twitter API)"],
      description:
        "A Script that scrapes information from specific social media sites and post tweets as updates on Twitter.",
      logo: undefined,
      link: {
        label: "Social Tracker on GitHub",
        href: "https://github.com/ushiradineth/socialmedia-bot",
      },
    },
    {
      title: "Portrait Website",
      techStack: ["PHP", "XAMPP", "MySQL"],
      description:
        "A Website with login, Post and User management similar to Instagram.",
      logo: undefined,
      link: {
        label: "Portrait Website on GitHub",
        href: "https://github.com/ushiradineth/portraitWebsite",
      },
    },
    {
      title: "Twitter Messenger",
      techStack: ["JavaScript", "Twitter API", "Google API"],
      description:
        "A Script which takes user input from a Google form to create anonymous tweets.",
      logo: undefined,
      link: {
        label: "Twitter Messenger on GitHub",
        href: "https://github.com/ushiradineth/twittermsgbot",
      },
    },
  ],
} as const;

// This file exports the CMS data structure for the Crown Shield Agency website
// All content can be modified here and will be reflected throughout the site

export interface CMS {
  siteInfo: SiteInfo
  navigation: Navigation
  pages: {
    home: HomePage
    about: AboutPage
    services: ServicesPage
    contact: ContactPage
    careers: CareersPage
    blog: BlogPage
  }
  shared: {
    callToAction: CallToAction
    footer: Footer
    whatsApp: WhatsAppButton
  }
}

export interface SiteInfo {
  title: string
  description: string
  logo: string
  favicon: string
}

export interface Navigation {
  links: NavLink[]
  ctaButton: {
    text: string
    href: string
  }
}

export interface NavLink {
  name: string
  href: string
}

export interface HomePage {
  hero: Hero
  services: ServicesOverview
  whyChooseUs: WhyChooseUs
  stats: Stats
  testimonials: Testimonials
  faq: FAQ
}

export interface AboutPage {
  hero: Hero
  missionVision: MissionVision
  leadership: Leadership
}

export interface ServicesPage {
  hero: Hero
  securityServices: ServiceSection
  electricalServices: ServiceSection
  mechanicalServices: ServiceSection
  domesticServices: ServiceSection
}

export interface ContactPage {
  hero: Hero
  contactInfo: ContactInfo
  mapLocation: MapLocation
}

export interface CareersPage {
  hero: Hero
  jobOpenings: JobOpenings
}

export interface BlogPage {
  hero: Hero
  blogPosts: BlogPost[]
}

export interface Hero {
  title: string
  subtitle: string
  backgroundImage?: string
  logo?: string
  buttons?: Button[]
  slides?: HeroSlide[]
}

export interface HeroSlide {
  image: string
  alt: string
  title: string
}

export interface Button {
  text: string
  href: string
  variant: "primary" | "secondary" | "outline"
}

export interface ServicesOverview {
  title: string
  subtitle: string
  services: Service[]
  ctaButton: Button
}

export interface Service {
  icon: string
  title: string
  description: string
  link: string
}

export interface WhyChooseUs {
  title: string
  subtitle: string
  reasons: Reason[]
}

export interface Reason {
  icon: string
  title: string
  description: string
}

export interface Stats {
  items: StatItem[]
}

export interface StatItem {
  value: number
  label: string
  suffix?: string
}

export interface Testimonials {
  title: string
  subtitle: string
  items: Testimonial[]
}

export interface Testimonial {
  name: string
  position: string
  content: string
  rating: number
}

export interface FAQ {
  title: string
  subtitle: string
  questions: FAQItem[]
}

export interface FAQItem {
  question: string
  answer: string
}

export interface MissionVision {
  mission: {
    title: string
    description: string
  }
  vision: {
    title: string
    description: string
  }
  values: {
    title: string
    subtitle: string
    items: Value[]
  }
}

export interface Value {
  icon: string
  title: string
  description: string
}

export interface Leadership {
  title: string
  subtitle: string
  team: TeamMember[]
}

export interface TeamMember {
  name: string
  position: string
  image: string
  bio: string
  contact: {
    email: string
    phone: string
    linkedin: string
  }
}

export interface ServiceSection {
  icon: string
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  features: string[] | ServiceFeature[]
  rating?: number
}

export interface ServiceFeature {
  icon: string
  title: string
  description: string
  rating?: number
}

export interface ContactInfo {
  items: ContactItem[]
}

export interface ContactItem {
  icon: string
  title: string
  content: string
  link: string
}

export interface MapLocation {
  title: string
  embedUrl: string
}

export interface JobOpenings {
  title: string
  subtitle: string
  jobs: Job[]
}

export interface Job {
  title: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
}

export interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
}

export interface CallToAction {
  title: string
  subtitle: string
  button: Button
}

export interface Footer {
  logo: string
  description: string
  socialLinks: SocialLink[]
  quickLinks: FooterLink[]
  services: FooterLink[]
  contactInfo: {
    address: string
    phone: string
    email: string
  }
  copyright: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface FooterLink {
  text: string
  href: string
}

export interface WhatsAppButton {
  phoneNumber: string
  message: string
}

// Export the CMS data
const cms: CMS = {
  siteInfo: {
    title: "Crown Shield Agency | Premium Manpower Solutions",
    description:
      "Your Trusted Partner for Quality Manpower Solutions - Security Guards, Electricians, Mechanics, and Domestic Help",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2012.26.46_3fc88e65.jpg-MjlPwfLJn2I7UdXRi9EsE5SkMyXxJ9.jpeg",
    favicon:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2012.26.46_3fc88e65.jpg-MjlPwfLJn2I7UdXRi9EsE5SkMyXxJ9.jpeg",
  },
  navigation: {
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    ctaButton: {
      text: "Get a Free Consultation",
      href: "/contact",
    },
  },
  pages: {
    home: {
      hero: {
        title: 'Your Trusted Partner for <span class="text-gold-500">Quality Manpower Solutions</span>',
        subtitle:
          "Providing exceptional security guards, electricians, mechanics, and domestic help services across Kolkata and beyond.",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2012.26.46_3fc88e65.jpg-MjlPwfLJn2I7UdXRi9EsE5SkMyXxJ9.jpeg",
        buttons: [
          {
            text: "Get a Free Consultation",
            href: "/contact",
            variant: "primary",
          },
          {
            text: "Explore Our Services",
            href: "/services",
            variant: "outline",
          },
        ],
        slides: [
          {
            image:
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.42_3746ea0b.jpg-DQxXNBeFgDrJsrLxQcCnV3OL0w7bzd.jpeg",
            alt: "Professional security guard in uniform",
            title: "Security Guards",
          },
          {
            image:
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_242e225e.jpg-OPdjVYNMgefSdEu5gXuLUEJX2QgmAb.jpeg",
            alt: "Professional electrician working on electrical panel",
            title: "Electricians",
          },
          {
            image:
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_eb6e73e6.jpg-Hh18mtQmI8vt5AvFuc4mBynGIUE0Ha.jpeg",
            alt: "Professional mechanic in safety gear",
            title: "Mechanics",
          },
          {
            image:
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.44_bae11465.jpg-ab5wpYMB1gkD6zXwwBekREF2Th9cL2.jpeg",
            alt: "Professional domestic help staff",
            title: "Domestic Help",
          },
        ],
      },
      services: {
        title: "Our Premium Services",
        subtitle:
          "Crown Shield Agency provides top-tier manpower solutions tailored to meet your specific requirements with excellence and reliability.",
        services: [
          {
            icon: "Shield",
            title: "Security Guards",
            description:
              "Professional security personnel trained to protect your property, assets, and people with vigilance and integrity.",
            link: "/services#security",
          },
          {
            icon: "Zap",
            title: "Electricians",
            description:
              "Skilled electrical professionals for installations, repairs, and maintenance with a focus on safety and reliability.",
            link: "/services#electrical",
          },
          {
            icon: "Tool",
            title: "Mechanics",
            description:
              "Expert mechanical technicians providing comprehensive repair and maintenance services for all your equipment needs.",
            link: "/services#mechanical",
          },
          {
            icon: "Home",
            title: "housekeeping",
            description:
              "Reliable and trustworthy domestic staff including maids, cooks, and caretakers to maintain your home with care.",
            link: "/services#domestic",
          },
        ],
        ctaButton: {
          text: "Explore All Services",
          href: "/services",
          variant: "primary",
        },
      },
      whyChooseUs: {
        title: "Why Choose Crown Shield Agency",
        subtitle:
          "We pride ourselves on delivering exceptional manpower solutions that exceed expectations and build lasting relationships.",
        reasons: [
          {
            icon: "Check",
            title: "Verified Professionals",
            description:
              "All our staff undergo rigorous background checks and training to ensure the highest standards of service.",
          },
          {
            icon: "Award",
            title: "Quality Assurance",
            description:
              "We maintain strict quality control measures to deliver consistent and exceptional service every time.",
          },
          {
            icon: "Clock",
            title: "24/7 Availability",
            description: "Our services are available round the clock to address your needs whenever they arise.",
          },
          {
            icon: "Shield",
            title: "Fully Insured",
            description:
              "We provide comprehensive insurance coverage for all our services, giving you complete peace of mind.",
          },
          {
            icon: "Users",
            title: "Experienced Team",
            description:
              "Our team consists of highly skilled professionals with years of experience in their respective fields.",
          },
          {
            icon: "MapPin",
            title: "Wide Coverage",
            description: "We serve clients across Kolkata and surrounding areas with prompt and reliable service.",
          },
        ],
      },
      stats: {
        items: [
          {
            value: 15,
            label: "Years of Experience",
            suffix: "+",
          },
          {
            value: 5000,
            label: "Clients Served",
            suffix: "+",
          },
          {
            value: 1000,
            label: "Professionals Employed",
            suffix: "+",
          },
          {
            value: 24,
            label: "Hour Support",
            suffix: "/7",
          },
        ],
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Hear from organizations that have experienced the Crown Shield difference.",
        items: [
          {
            name: "Rajesh Kumar",
            position: "Operations Manager, Tata Steel",
            content:
              "Crown Shield Agency has provided us with exceptional security personnel for our facilities. Their guards are professional, vigilant, and well-trained. We've seen a significant improvement in our overall security since partnering with them.",
            rating: 5,
          },
          {
            name: "Priya Sharma",
            position: "Hotel Manager, The Oberoi Grand",
            content:
              "We've been using Crown Shield's domestic staff services for our hotel, and the quality of their personnel is outstanding. They're reliable, hardworking, and maintain our high standards of cleanliness and service.",
            rating: 5,
          },
          {
            name: "Amit Banerjee",
            position: "Facility Director, Apollo Hospitals",
            content:
              "The electricians from Crown Shield Agency have been instrumental in maintaining our critical electrical systems. Their quick response time and technical expertise have prevented several potential disruptions to our operations.",
            rating: 4,
          },
          {
            name: "Sunita Agarwal",
            position: "Property Manager, South City Residences",
            content:
              "We rely on Crown Shield for all our manpower needs - from security to maintenance. Their comprehensive service and attention to detail have made them an invaluable partner for our residential complex.",
            rating: 5,
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions about our services and operations.",
        questions: [
          {
            question: "What areas do you provide your services in?",
            answer:
              "Crown Shield Agency primarily serves Kolkata and surrounding areas. We cover all major localities including Taratala, Salt Lake, New Town, Howrah, and other regions within a 50km radius of Kolkata.",
          },
          {
            question: "How are your staff members vetted and trained?",
            answer:
              "All our staff undergo a comprehensive vetting process including background checks, verification of credentials, and reference checks. They receive specialized training based on their roles, with regular refresher courses to maintain high standards of service.",
          },
          {
            question: "What is the minimum contract period for your services?",
            answer:
              "Our minimum contract period varies by service type. For security and domestic help, we typically offer 3-month minimum contracts. For specialized services like electrical and mechanical work, we offer both project-based and ongoing maintenance contracts.",
          },
          {
            question: "Can I request a replacement if I'm not satisfied with the service?",
            answer:
              "Yes, customer satisfaction is our priority. If you're not satisfied with any of our staff members, you can request a replacement. We'll arrange for a suitable alternative as quickly as possible, usually within 24-48 hours.",
          },
          {
            question: "Do you provide emergency services outside regular hours?",
            answer:
              "Yes, we offer 24/7 emergency services for critical needs. Our emergency response team is available round the clock for security incidents, electrical emergencies, and other urgent requirements.",
          },
        ],
      },
    },
    about: {
      hero: {
        title: "About Crown Shield Agency",
        subtitle:
          "Delivering excellence in manpower solutions with integrity, professionalism, and dedication since 2008.",
        backgroundImage:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.42_3746ea0b.jpg-DQxXNBeFgDrJsrLxQcCnV3OL0w7bzd.jpeg",
      },
      missionVision: {
        mission: {
          title: "Our Mission",
          description:
            "To provide exceptional manpower solutions that exceed client expectations through professional excellence, integrity, and innovation. We are committed to delivering reliable and quality services while maintaining the highest standards of safety and professionalism.",
        },
        vision: {
          title: "Our Vision",
          description:
            "To be the most trusted and respected manpower solutions provider in India, known for our commitment to excellence, innovation, and customer satisfaction. We aim to set industry standards and create lasting partnerships with our clients.",
        },
        values: {
          title: "Our Core Values",
          subtitle: "The principles that guide us in delivering excellence.",
          items: [
            {
              icon: "Shield",
              title: "Integrity",
              description: "We conduct our business with the highest standards of honesty and transparency.",
            },
            {
              icon: "Users",
              title: "Excellence",
              description: "We strive for excellence in every service we provide to our clients.",
            },
            {
              icon: "Zap",
              title: "Innovation",
              description: "We continuously evolve and adapt to meet changing industry needs.",
            },
          ],
        },
      },
      leadership: {
        title: "Our Leadership Team",
        subtitle: "Meet the experienced professionals who guide Crown Shield Agency towards excellence.",
        team: [
          {
            name: "Rajiv Kumar",
            position: "Chief Executive Officer",
            image: "/placeholder.svg?height=400&width=400",
            bio: "With over 20 years of experience in manpower solutions, Rajiv leads Crown Shield Agency with a vision for excellence and innovation.",
            contact: {
              email: "rajiv.kumar@crownshieldagency.com",
              phone: "+91 98765 43210",
              linkedin: "https://linkedin.com/in/rajiv-kumar",
            },
          },
          {
            name: "Priya Sharma",
            position: "Operations Director",
            image: "/placeholder.svg?height=400&width=400",
            bio: "Priya oversees all operational aspects of Crown Shield Agency, ensuring seamless service delivery and client satisfaction.",
            contact: {
              email: "priya.sharma@crownshieldagency.com",
              phone: "+91 98765 43211",
              linkedin: "https://linkedin.com/in/priya-sharma",
            },
          },
          {
            name: "Amit Patel",
            position: "Head of Security Services",
            image: "/placeholder.svg?height=400&width=400",
            bio: "A former military officer, Amit brings extensive security expertise to lead our security services division.",
            contact: {
              email: "amit.patel@crownshieldagency.com",
              phone: "+91 98765 43212",
              linkedin: "https://linkedin.com/in/amit-patel",
            },
          },
          {
            name: "Meera Singh",
            position: "HR Director",
            image: "/placeholder.svg?height=400&width=400",
            bio: "Meera leads our recruitment and training programs, ensuring we maintain the highest standards in our workforce.",
            contact: {
              email: "meera.singh@crownshieldagency.com",
              phone: "+91 98765 43213",
              linkedin: "https://linkedin.com/in/meera-singh",
            },
          },
        ],
      },
    },
    services: {
      hero: {
        title: "Our Services",
        subtitle:
          "Comprehensive manpower solutions tailored to meet your specific requirements with excellence and reliability.",
        backgroundImage:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_242e225e.jpg-OPdjVYNMgefSdEu5gXuLUEJX2QgmAb.jpeg",
      },
      securityServices: {
        icon: "Shield",
        title: "Security Guard Services",
        subtitle:
          "Professional security personnel trained to protect your property, assets, and people with vigilance and integrity.",
        description:
          "Our security personnel are rigorously trained and certified to handle various security challenges. We provide customized security solutions for residential complexes, commercial establishments, industrial facilities, and special events.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.42_3746ea0b.jpg-DQxXNBeFgDrJsrLxQcCnV3OL0w7bzd.jpeg",
        imageAlt: "Professional security guard in uniform",
        features: [
          "Trained and certified security personnel",
          "24/7 security coverage",
          "Residential and commercial security",
          "Event security management",
          "Security audits and risk assessment",
          "Emergency response protocols",
          "CCTV monitoring and surveillance",
          "Access control management",
        ],
      },
      electricalServices: {
        icon: "Zap",
        title: "Electrical Services",
        subtitle:
          "Skilled electrical professionals for installations, repairs, and maintenance with a focus on safety and reliability.",
        description:
          "Our team of certified electricians provides comprehensive electrical services for residential, commercial, and industrial clients. We prioritize safety, quality workmanship, and customer satisfaction in every project.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_242e225e.jpg-OPdjVYNMgefSdEu5gXuLUEJX2QgmAb.jpeg",
        imageAlt: "Professional electrician working on electrical panel",
        features: [
          {
            icon: "🔌",
            title: "Installation",
            description: "Professional installation of electrical systems, wiring, and fixtures.",
          },
          {
            icon: "🔧",
            title: "Maintenance",
            description: "Regular maintenance to ensure optimal performance and safety.",
          },
          {
            icon: "🚨",
            title: "Emergency Repairs",
            description: "24/7 emergency electrical repair services for critical situations.",
          },
          {
            icon: "🔍",
            title: "Inspections",
            description: "Comprehensive electrical inspections and safety audits.",
          },
        ],
      },
      mechanicalServices: {
        icon: "Tool",
        title: "Mechanical Services",
        subtitle:
          "Expert mechanical technicians providing comprehensive repair and maintenance services for all your equipment needs.",
        description:
          "Our mechanical services team consists of highly skilled technicians with expertise in various mechanical systems and equipment. We provide reliable solutions for industrial, commercial, and residential clients, ensuring optimal performance and longevity of your mechanical assets.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_eb6e73e6.jpg-Hh18mtQmI8vt5AvFuc4mBynGIUE0Ha.jpeg",
        imageAlt: "Professional mechanic in safety gear",
        features: [
          "Equipment installation and setup",
          "Preventive maintenance programs",
          "Emergency repair services",
          "System troubleshooting and diagnostics",
          "Performance optimization",
          "Equipment upgrades and retrofits",
          "Safety inspections and compliance",
          "Technical consultation and support",
        ],
      },
      domesticServices: {
        icon: "Home",
        title: "Domestic Help Services",
        subtitle:
          "Reliable and trustworthy domestic staff including maids, cooks, and caretakers to maintain your home with care.",
        description:
          "Our domestic help services provide thoroughly vetted and trained staff for your home. We understand the importance of trust and reliability when it comes to household staff, which is why we maintain rigorous standards in our recruitment and training processes.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.44_bae11465.jpg-ab5wpYMB1gkD6zXwwBekREF2Th9cL2.jpeg",
        imageAlt: "Professional domestic help staff",
        features: [
          {
            icon: "",
            title: "Housekeepers",
            description: "Professional housekeeping staff for cleaning, organizing, and maintaining your home.",
            rating: 5,
          },
          {
            icon: "",
            title: "Cooks & Chefs",
            description:
              "Skilled culinary professionals who can prepare a variety of cuisines according to your preferences.",
            rating: 5,
          },
          {
            icon: "",
            title: "Nannies & Caretakers",
            description: "Experienced childcare providers and caretakers for elderly or special needs family members.",
            rating: 4,
          },
          {
            icon: "",
            title: "Drivers",
            description: "Professional drivers with excellent knowledge of local routes and safety protocols.",
            rating: 5,
          },
        ],
      },
    },
    contact: {
      hero: {
        title: "Contact Us",
        subtitle: "Get in touch with Crown Shield Agency for premium manpower solutions tailored to your needs.",
      },
      contactInfo: {
        items: [
          {
            icon: "Phone",
            title: "Call Us",
            content: "+91 98765 43210",
            link: "tel:+919876543210",
          },
          {
            icon: "Mail",
            title: "Email Us",
            content: "info@crownshieldagency.com",
            link: "mailto:info@crownshieldagency.com",
          },
          {
            icon: "MapPin",
            title: "Visit Us",
            content: "123 Taratala Road, Kolkata",
            link: "https://goo.gl/maps/123",
          },
        ],
      },
      mapLocation: {
        title: "Our Location",
        embedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14744.846842277644!2d88.32145562219547!3d22.52167326631969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c91a8d2d49%3A0xc6ee508c74cf031d!2sTaratala%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1645536248000!5m2!1sen!2sin",
      },
    },
    careers: {
      hero: {
        title: "Join Our Team",
        subtitle:
          "Build your career with Crown Shield Agency and be part of a team dedicated to excellence in manpower solutions.",
        backgroundImage:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2013.47.43_eb6e73e6.jpg-Hh18mtQmI8vt5AvFuc4mBynGIUE0Ha.jpeg",
        buttons: [
          {
            text: "View Current Openings",
            href: "#openings",
            variant: "primary",
          },
        ],
      },
      jobOpenings: {
        title: "Current Openings",
        subtitle: "Join our team of professionals and grow your career with Crown Shield Agency.",
        jobs: [
          {
            title: "Security Supervisor",
            location: "Kolkata, West Bengal",
            type: "Full-time",
            experience: "5+ years",
            description:
              "Looking for an experienced security supervisor to oversee security operations and team management.",
            requirements: [
              "Previous experience in security management",
              "Strong leadership and communication skills",
              "Knowledge of security protocols and procedures",
              "Valid security certification",
            ],
          },
          {
            title: "Senior Electrician",
            location: "Kolkata, West Bengal",
            type: "Full-time",
            experience: "3+ years",
            description:
              "Seeking a skilled electrician with experience in industrial and commercial electrical systems.",
            requirements: [
              "ITI certification in electrical",
              "Experience with industrial electrical systems",
              "Knowledge of safety regulations",
              "Troubleshooting skills",
            ],
          },
          {
            title: "HR Coordinator",
            location: "Kolkata, West Bengal",
            type: "Full-time",
            experience: "2+ years",
            description: "Seeking an HR professional to handle recruitment and employee relations.",
            requirements: [
              "Bachelor's degree in HR or related field",
              "Experience in recruitment",
              "Strong interpersonal skills",
              "Knowledge of labor laws",
            ],
          },
        ],
      },
    },
    blog: {
      hero: {
        title: "Industry Insights",
        subtitle:
          "Stay updated with the latest trends, news, and expert perspectives in manpower solutions and security services.",
      },
      blogPosts: [
        {
          title: "The Future of Security Services in the Digital Age",
          excerpt: "Explore how technology is transforming the security industry and what it means for businesses.",
          image: "/placeholder.svg?height=400&width=600",
          date: "Feb 25, 2024",
          readTime: "5 min read",
          category: "Security",
        },
        {
          title: "Best Practices for Electrical Safety in Commercial Buildings",
          excerpt:
            "Learn about essential electrical safety measures and maintenance protocols for commercial properties.",
          image: "/placeholder.svg?height=400&width=600",
          date: "Feb 20, 2024",
          readTime: "4 min read",
          category: "Electrical",
        },
        {
          title: "The Impact of Professional Manpower Solutions on Business Growth",
          excerpt: "Discover how quality manpower solutions can drive business success and operational efficiency.",
          image: "/placeholder.svg?height=400&width=600",
          date: "Feb 15, 2024",
          readTime: "6 min read",
          category: "Business",
        },
        {
          title: "Training and Development in the Security Industry",
          excerpt: "Insights into modern training methods and professional development for security personnel.",
          image: "/placeholder.svg?height=400&width=600",
          date: "Feb 10, 2024",
          readTime: "4 min read",
          category: "Training",
        },
        {
          title: "Maintaining Work-Life Balance for Domestic Staff",
          excerpt: "Guidelines for creating healthy work environments and schedules for domestic help professionals.",
          image: "/placeholder.svg?height=400&width=600",
          date: "Feb 5, 2024",
          readTime: "3 min read",
          category: "Lifestyle",
        },
        {
          title: "Industry Trends: The Evolution of Manpower Solutions",
          excerpt: "Analysis of current trends and future predictions in the manpower solutions industry.",
          image: "/placeholder.svg?height=400&width=600",
          date: "Feb 1, 2024",
          readTime: "5 min read",
          category: "Industry",
        },
      ],
    },
  },
  shared: {
    callToAction: {
      title: "Ready to Experience Premium Manpower Solutions?",
      subtitle:
        "Contact Crown Shield Agency today for a free consultation and discover how our services can meet your specific needs.",
      button: {
        text: "Get a Free Consultation",
        href: "/contact",
        variant: "primary",
      },
    },
    footer: {
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-27%20at%2012.26.46_3fc88e65.jpg-MjlPwfLJn2I7UdXRi9EsE5SkMyXxJ9.jpeg",
      description:
        "Your trusted partner for premium manpower solutions, providing exceptional security guards, electricians, mechanics, and domestic help services.",
      socialLinks: [
        {
          platform: "Facebook",
          url: "#",
          icon: "Facebook",
        },
        {
          platform: "Twitter",
          url: "#",
          icon: "Twitter",
        },
        {
          platform: "Instagram",
          url: "#",
          icon: "Instagram",
        },
        {
          platform: "LinkedIn",
          url: "#",
          icon: "Linkedin",
        },
      ],
      quickLinks: [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Services", href: "/services" },
        { text: "Careers", href: "/careers" },
        { text: "Blog", href: "/blog" },
        { text: "Contact", href: "/contact" },
      ],
      services: [
        { text: "Security Guards", href: "/services#security-guards" },
        { text: "Electricians", href: "/services#electricians" },
        { text: "Mechanics", href: "/services#mechanics" },
        { text: "Domestic Help", href: "/services#domestic-help" },
      ],
      contactInfo: {
        address: "Crown Shield Agency Pvt. Ltd., 123 Taratala Road, Kolkata, West Bengal 700088",
        phone: "+91 98765 43210",
        email: "info@crownshieldagency.com",
      },
      copyright: "© 2024 Crown Shield Agency Pvt. Ltd. All rights reserved.",
    },
    whatsApp: {
      phoneNumber: "919876543210",
      message: "Hello, I'd like to inquire about your services.",
    },
  },
}

export default cms


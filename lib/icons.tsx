import React from "react"
import {
  Shield,
  Zap,
  PenToolIcon as Tool,
  Home,
  Check,
  Award,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Target,
  Eye,
  Star,
} from "lucide-react"
import type { ReactNode } from "react"

// This utility function maps icon names to their components
export const getIconByName = (iconName: string): ReactNode => {
  const icons: Record<string, ReactNode> = {
    Shield: <Shield />,
    Zap: <Zap />,
    Tool: <Tool />,
    Home: <Home />,
    Check: <Check />,
    Award: <Award />,
    Clock: <Clock />,
    Users: <Users />,
    MapPin: <MapPin />,
    Phone: <Phone />,
    Mail: <Mail />,
    Facebook: <Facebook />,
    Twitter: <Twitter />,
    Instagram: <Instagram />,
    Linkedin: <Linkedin />,
    Target: <Target />,
    Eye: <Eye />,
    Star: <Star />,
  }

  return icons[iconName] || null
}

// This function returns the icon with specified size and color
export const getIcon = (iconName: string, size = 24, className = ""): ReactNode => {
  const IconComponent = getIconByName(iconName)

  if (!IconComponent) return null

  // Clone the element with new props
  return React.cloneElement(IconComponent as React.ReactElement, {
    className: `w-${size} h-${size} ${className}`,
    size,
  })
}


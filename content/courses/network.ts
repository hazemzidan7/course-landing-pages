import type { Course } from '@/lib/courses/types';

// Real EDUZAH course. hero.image/gallery[].src intentionally omitted until
// real photos exist at public/courses/network/ — CourseImage falls back to
// the branded placeholder. Add once available, e.g.:
// hero.image = { src: '/courses/network/hero.webp', alt: 'EDUZAH Network Engineering training' }
export const networkCourse: Course = {
  id: 'network',
  slug: 'network',
  categoryId: 'technology',
  status: 'active',
  meta: {
    title: 'Network Engineering Diploma — EDUZAH',
    description:
      'Build practical networking and infrastructure skills from networking fundamentals through advanced routing, enterprise services and security.',
  },
  hero: {
    badge: 'Technology Program',
    headline: 'Network Engineering Diploma',
    subheadline:
      'Build practical networking and infrastructure skills from networking fundamentals through advanced routing, enterprise services and security.',
  },
  quickInfo: {
    duration: '20 Weeks · 140 Hours',
    format: 'Online / Offline',
    language: 'English',
  },
  curriculum: [
    {
      title: 'Computer Networking (CCNA Level)',
      description:
        'Introduction to Networking, OSI vs TCP/IP, Networking Protocols, IPv4 & Subnetting, IPv6, Static Routing, OSPFv2, DHCP, NAT / PAT, WLAN, Network Security, ACLs, VLANs, Inter-VLAN Routing, Trunking, STP / PVST+ / RSTP, Port Security',
    },
    {
      title: 'Advanced Networking (CCNP Level)',
      description:
        'EtherChannel, LACP / PAgP, MST / RSTP, Loop Guard, BPDU Guard, Storm Control, VTP, HSRP, VRRP, IP SLA, Multicast, OSPFv3, EIGRP, Route Redistribution, Policy-Based Routing, Python for Networking, Cisco DevNet, GNS3, Packet Tracer',
    },
    {
      title: 'BGP',
      description: 'iBGP / eBGP, Neighbors & Sessions, Path Selection, AS Path, Local Preference, MED, Weight, Route Filtering, Labs',
    },
    {
      title: 'MPLS & VPN',
      description: 'MPLS, Labels & LDP, MPLS Forwarding, Layer 2 / Layer 3 VPN, Traffic Engineering, GMPLS',
    },
    {
      title: 'Windows Server (MCSA Core)',
      description:
        'Virtual Machines, Windows Server, Active Directory, GPO, NTFS, File Sharing, DHCP, DNS, WDS, RSAT, Backup & Restore, Trusts, Additional Domain Controllers',
    },
    {
      title: 'Palo Alto Firewall Basics',
      description: 'NGFW, Security Zones & Rules, NAT, Port Forwarding, URL Filtering, Application Filtering, VPN, DHCP / DNS, Hands-on Labs',
    },
  ],
  skills: [
    'Routing & Switching',
    'VLANs & Network Security',
    'BGP & MPLS',
    'Windows Server & Active Directory',
    'Palo Alto Firewalls',
    'Network Automation (Python)',
  ],
  gallery: [
    { alt: 'EDUZAH Network Engineering training session' },
    { alt: 'EDUZAH Network Engineering workshop' },
    { alt: 'EDUZAH Network Engineering lab session' },
  ],
};

import { PersonaContent, Testimonial } from './types';

export const PERSONA_DATA: Record<string, PersonaContent> = {
  mike: {
    id: 'mike',
    label: "Buying Used Car?",
    icon: "fa-car",
    heroHeadline: "Buying Used Car on Marketplace? $89.95 Mobile Scan Reveals Hidden $3K+ Defects",
    heroSubhead: "Autel Ultra scanner catches transmission codes sellers won't mention",
    heroCta: "Book Pre-Purchase Scan Now",
    heroPain: "Don't get ripped off like I did last time",
    problemTitle: "Marketplace Mike's Nightmare",
    problemText: "Found a $15K Honda CR-V? The seller says it 'runs great.' Get transmission codes revealed BEFORE you buy. Don't inherit someone else's problem."
  },
  annie: {
    id: 'annie',
    label: "Check Engine Light?",
    icon: "fa-triangle-exclamation",
    heroHeadline: "Check Engine Light? $89.95 Same-Day Mobile Scan - We Come to Your Parking Lot",
    heroSubhead: "2-hour turnaround. Know before breakdown. No work time lost.",
    heroCta: "Book Same-Day Scan",
    heroPain: "Can't miss work but can't ignore warning light",
    problemTitle: "Anxious Annie's Dashboard Panic",
    problemText: "Warning light popped on during your 7AM commute? Don't stress all day. Book a same-day scan at your office parking lot and drive home with peace of mind."
  },
  rita: {
    id: 'rita',
    label: "Family Vehicle?",
    icon: "fa-house-medical",
    heroHeadline: "Elderly Parent's Car Warning Light? $89.95 Professional Scan + PDF Report Emailed to You",
    heroSubhead: "We visit their location. You get professional documentation.",
    heroCta: "Schedule Family Vehicle Scan",
    heroPain: "Can't personally check Mom's car 2hrs away",
    problemTitle: "Remote Rita's Family Worry",
    problemText: "Mom's car is 2hrs away and has a light on. You can't get there. We visit her location, treat her with respect, and email the professional report directly to you."
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Michael R.",
    role: "Warehouse Supervisor",
    text: "Saved me from buying a lemon! The $89.95 scan found a transmission slip code the seller cleared 10 mins before I arrived. Best money spent.",
    stars: 5,
    persona: 'mike'
  },
  {
    id: 2,
    name: "Sarah J.",
    role: "Office Admin",
    text: "Steve came to my office parking lot. didn't even have to leave my desk. Had the PDF report before lunch. Super convenient.",
    stars: 5,
    persona: 'annie'
  },
  {
    id: 3,
    name: "Rita M.",
    role: "Registered Nurse",
    text: "I live in Orlando but Mom is in Tampa. They went to her house, scanned the Corolla, and emailed me the report instantly. Such a relief.",
    stars: 5,
    persona: 'rita'
  }
];

export type PersonaType = 'mike' | 'annie' | 'rita';

export interface PersonaContent {
  id: PersonaType;
  label: string;
  icon: string;
  heroHeadline: string;
  heroSubhead: string;
  heroCta: string;
  heroPain: string;
  problemTitle: string;
  problemText: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  stars: number;
  persona: PersonaType;
}

export interface ReferenceEntry {
  id: string;
  name: string;
  category: string;
  primaryColor: string;
  background: string;
  foreground: string;
  fontFamily: string;
  headingWeight: string;
  radius: string;
  mood: string;
}

export interface ReferenceDetail extends ReferenceEntry {
  designMd: string;
  accent?: string;
  border?: string;
  mono?: string;
}

export interface Overrides {
  primaryColor: string;
  fontFamily: string;
  headingWeight: string;
  borderRadius: string;
  darkMode: boolean;
}

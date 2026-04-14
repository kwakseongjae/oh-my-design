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

export interface StylePreferences {
  buttonStyle?: string;   // "sharp" | "rounded"
  inputStyle?: string;    // "bordered" | "underline"
  headerStyle?: string;   // "glass" | "solid"
  cardStyle?: string;     // "bordered" | "elevated"
  depthStyle?: string;    // "flat" | "layered"
  density?: string;       // "compact" | "spacious"
  [key: string]: string | undefined;
}

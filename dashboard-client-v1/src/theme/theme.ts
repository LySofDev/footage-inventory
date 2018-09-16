export interface BoxShadows {
  lowest: string;
  lower: string;
  middle: string;
  higher: string;
  highest: string;
}

export interface Colors {
  primary: string;
  accent: string;
  warn: string;
  background: string;
}

export interface Devices {
  tablet: number;
  desktop: number;
}

export interface Font {
  size: string;
  family: string;
}

export interface Theme {
  boxShadows: BoxShadows;
  colors: Colors;
  devices: Devices;
  font: Font;
  inverted: boolean;
}

export type FloatingElement = {
  width: number;
  height: number;
  left: string;
  top: string;
  duration: number;
  y: number;
  x: number;
};

export const floatingElements: FloatingElement[] = [
  { width: 240, height: 240, left: "8%", top: "18%", duration: 12, y: 42, x: -28 },
  { width: 360, height: 360, left: "72%", top: "12%", duration: 16, y: -36, x: 22 },
  { width: 280, height: 280, left: "48%", top: "56%", duration: 14, y: 30, x: 34 },
  { width: 180, height: 180, left: "18%", top: "74%", duration: 18, y: -44, x: 26 },
  { width: 320, height: 320, left: "82%", top: "68%", duration: 15, y: 38, x: -32 },
];

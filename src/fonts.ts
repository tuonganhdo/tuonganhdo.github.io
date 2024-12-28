import { DM_Sans, VT323 } from "next/font/google"
import "@/app/globals.css";

export const sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const display = VT323({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
import './globals.css';
import { Layout } from '@/components/Site';
export const metadata={title:'Solomon Media Group | Predictable Lead Flow',description:'Paid acquisition systems that turn demand into qualified opportunities and booked jobs.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Layout>{children}</Layout></body></html>}
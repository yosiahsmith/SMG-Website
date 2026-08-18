import './globals.css';
import { Layout } from '../components/Site';
export const metadata={title:'Solomon Media Group | Predictable Lead Flow',description:'Paid acquisition, lead qualification, and booking systems for businesses ready to grow.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Layout>{children}</Layout></body></html>}

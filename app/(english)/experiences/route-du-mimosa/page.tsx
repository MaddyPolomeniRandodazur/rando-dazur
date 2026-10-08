import MimosaPage from "../../../components/MimosaPage";
import { getMimosaMetadata } from "../../../lib/mimosa-metadata";
export const revalidate = 3600;
export function generateMetadata() { return getMimosaMetadata("en"); }
export default function Page() { return <MimosaPage locale="en" />; }

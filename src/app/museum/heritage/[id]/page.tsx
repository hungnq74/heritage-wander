import { notFound } from "next/navigation";
import dbConnect from "@/lib/db";
import Heritage from "@/models/Heritage";
import { HeritageDetailContent } from "@/components/museum/heritage-detail-content";

export const dynamic = "force-dynamic";

export default async function HeritageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  await dbConnect();
  const node = await Heritage.findOne({ id }).lean();
  
  if (!node) notFound();

  // Convert Mongoose document to plain object
  const serializedNode = JSON.parse(JSON.stringify(node));

  return <HeritageDetailContent node={serializedNode} />;
}

import { notFound } from "next/navigation";
import { columnDetails } from "@/data/columnDetails";
import ColumnDetail from "@/pages/column/page";

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = columnDetails[id];

  if (!data) notFound();

  return <ColumnDetail data={data} />;
}

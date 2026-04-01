import { MuseumGrid } from "@/components/museum/museum-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, ArrowLeftRight } from "lucide-react";
import dbConnect from "@/lib/db";
import Heritage from "@/models/Heritage";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

export default async function MuseumPage() {
  await dbConnect();
  const nodes = await Heritage.find({}).lean();
  const heritageNodes = JSON.parse(JSON.stringify(nodes)); // Plain object for client components
  const t = await getTranslations("museum");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{t("personalMuseum")}</p>
        <h1 className="text-3xl font-black">
          {t("title")} <span className="text-primary italic">{t("titleHighlight")}</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t("subtitle")}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          {t("subtitleEn")}
        </p>
      </div>

      <Tabs defaultValue="collection">
        <TabsList className="mb-6 h-10 bg-secondary rounded-xl p-1">
          <TabsTrigger value="collection" className="gap-1.5 text-sm rounded-lg">
            <LayoutGrid className="size-3.5" />
            {t("tabs.collection")}
          </TabsTrigger>
          <TabsTrigger value="trade" className="gap-1.5 text-sm rounded-lg">
            <ArrowLeftRight className="size-3.5" />
            {t("tabs.trade")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="collection">
          <MuseumGrid nodes={heritageNodes} />
        </TabsContent>

        <TabsContent value="trade">
          <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
            <div className="size-16 rounded-2xl bg-secondary flex items-center justify-center">
              <ArrowLeftRight className="size-7 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t("trade.title")}</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                {t("trade.subtitle")}
              </p>
              <p className="text-xs text-muted-foreground italic mt-0.5">{t("trade.subtitleEn")}</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

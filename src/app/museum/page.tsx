import { MuseumGrid } from "@/components/museum/museum-grid";
import { HERITAGE_NODES, TOTAL_ITEMS } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, ArrowLeftRight } from "lucide-react";

export default function MuseumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Personal Museum</p>
        <h1 className="text-3xl font-black">
          Bảo Tàng <span className="text-primary italic">Của Tôi</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Khám phá làng nghề Huế, mở khóa vật phẩm văn hóa độc đáo.
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          Collect cultural artifacts from heritage sites across Hue, Vietnam.
        </p>
      </div>

      <Tabs defaultValue="collection">
        <TabsList className="mb-6 h-10 bg-secondary rounded-xl p-1">
          <TabsTrigger value="collection" className="gap-1.5 text-sm rounded-lg">
            <LayoutGrid className="size-3.5" />
            Bộ Sưu Tập
          </TabsTrigger>
          <TabsTrigger value="trade" className="gap-1.5 text-sm rounded-lg">
            <ArrowLeftRight className="size-3.5" />
            Trao Đổi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="collection">
          <MuseumGrid nodes={HERITAGE_NODES} />
        </TabsContent>

        <TabsContent value="trade">
          <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
            <div className="size-16 rounded-2xl bg-secondary flex items-center justify-center">
              <ArrowLeftRight className="size-7 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Trao Đổi Vật Phẩm</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-xs">
                Trao đổi vật phẩm trùng lặp với bạn bè. Tính năng sắp ra mắt.
              </p>
              <p className="text-xs text-muted-foreground italic mt-0.5">Trade duplicate items with friends. Coming soon.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

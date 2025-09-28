import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data?: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
        <div className="relative h-full w-full flex flex-col justify-center items-center text-center gap-y-8 p-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white drop-shadow-lg">
            {data?.label ?? ""}
          </div>
          <div className="text-white/90 text-lg sm:text-xl max-w-md">
            Discover amazing products with unbeatable quality
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
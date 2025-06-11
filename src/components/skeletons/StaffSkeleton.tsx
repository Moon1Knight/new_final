import { Skeleton } from "@/components/ui/skeleton";

export function StaffSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-25 to-gray-100">
      <div className="container mx-auto px-3 py-12 max-w-[85rem]">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-64 mx-auto mb-6" />
          <Skeleton className="h-1 w-32 mx-auto mb-6" />
          <Skeleton className="h-20 max-w-3xl mx-auto" />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-md border border-purple-100">
                <Skeleton className="w-[35mm] h-[45mm] mx-auto" />
                <div className="p-3 text-center">
                  <Skeleton className="h-4 w-24 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import { notFound } from "next/navigation";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
    params: Promise<{
        categoryid: string
    }>
    searchParams: Promise<{
        colorId?: string
        sizeId?: string
    }>
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const resolvedParams = await params
    const resolvedSearchParams = await searchParams
    const products = await getProducts({
        categoryId: resolvedParams.categoryid,
        colorId: resolvedSearchParams?.colorId,
        sizeId: resolvedSearchParams?.sizeId
    })
    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(resolvedParams.categoryid)

    return (
        <div className="min-h-screen">
            {category && (
                <div className="animate-fade-in">
                    <Billboard
                        data={category.billboard as any}
                    />
                </div>
            )}
            <div className="pb-24">
                <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
                    <MobileFilters 
                        sizes={sizes}
                        colors={colors}
                    />
                    <div className="hidden lg:block space-y-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
                            <Filter 
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter 
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </div>
                    <div className="mt-6 lg:col-span-3 lg:mt-0">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                {category?.name}
                            </h1>
                            <p className="text-gray-600">
                                {products.length} product{products.length !== 1 ? 's' : ''} found
                            </p>
                        </div>
                        {products.length === 0 && <NoResults />}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                          {products.map((item) => (
                            <ProductCard 
                            key={item.id}
                            data={item}
                            />
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage;
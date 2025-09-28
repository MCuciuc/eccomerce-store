import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("32f507bc-0c45-4d77-bfa3-767f4e74782d")
    return (
        <div className="min-h-screen">
            <div className="space-y-16 pb-16">
                <div className="animate-fade-in">
                    <Billboard data={billboard} />
                </div>
            </div>
            <div className="flex flex-col gap-y-12">
                <div className="text-center space-y-4 animate-slide-in">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Featured Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our handpicked selection of premium products, carefully curated for quality and style.
                    </p>
                </div>
                <div className="animate-fade-in">
                    <ProductList title="" items={products} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-pink-100 min-h-screen">
            <div className="max-w-xl mx-auto text-center py-16 px-6">
                <h1 className="font-serif font-bold text-4xl text-pink-800 mb-8">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}

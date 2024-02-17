export default function MenuItem(){
    return(
        <div className="bg-gray-300 p-4 rounded-lg text-center group hover:bg-yellow-50 transition-all hover:shadow-2xl hover:shadow-yellow-950">
            <img src="/pizza.png" alt="pizza"/>
            <h4 className="font-semibold text-xl my-2">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">
            Use the text generator to create your own text! The Lorem Ipsum 
            </p>
            <button className="bg-primary text-white rounded-full px-6 py-2">
                Add to cart $12
            </button>

        </div>
    );
}
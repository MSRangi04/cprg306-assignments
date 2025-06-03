export default function Item(props) {
    return (
        <div className="bg-green-200 hover:bg-green-400 text-gray-800 border border-green-600 w-60 h-24 m-3 p-4 rounded-lg flex flex-col justify-center">
            <h3 className="text-green-800 font-bold text-base">{props.sName}</h3>
            <p className="text-xs mt-1">Quantity: {props.sQuantity} | Category: {props.sCategory}</p>
        </div>
    );
}

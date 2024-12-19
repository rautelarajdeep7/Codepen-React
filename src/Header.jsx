
const Header = () => {
    return (
        <div className="bg-gray-900 text-white flex justify-between px-2 py-4">
            <div className="bg-gray-800 rounded-lg">
                <i classList="fa-solid fa-magnifying-glass p-2 text-gray-200"></i>
                <input type="text" placeholder=" Search CodePen..." className="w-64 bg-gray-800 p-2 px-1 outline-none rounded-md" />
            </div>
            {/* To use font awesome search icon, we used font-awesome cdn link in index.html */}
            <div className="flex gap-3">
                <button className="px-3 bg-green-500 rounded text-black hover:text-white hover:bg-green-700">Sign Up</button>
                <button className="px-3 bg-gray-700 hover:bg-gray-600 rounded ">Log In</button>
            </div>
        </div>
    )
}

export default Header

export default function LoginForm() {
    return (
        <div className="flex flex-col gap-8">
            <h3 className="text-4xl">Login</h3>
            <form action="submit" className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-300 mt-4">Name:</label>
                <input type="text" id="name" className="p-4 rounded-md" placeholder="Write here..." />
                <label htmlFor="email" className="text-gray-300 mt-4">Email:</label>
                <input type="email" id="email" className="p-4 rounded-md" placeholder="Write here..." />
                <label htmlFor="phone" className="text-gray-300 mt-4">Phone number:</label>
                <input type="number" id="phone" className="p-4 rounded-md" placeholder="Write here..." />
                <button type="submit" className="bg-indigo-800 p-4 rounded-md w-40 mt-4">Login</button>
            </form>
        </div>
    )
}
export default function SignInSection() {
    return (
        <div className="max-w-md mt-5">
            <form className="space-y-2">
                <div>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full px-4 py-2 border  rounded-md font-normal font-popins
                        bg-gray-200 dark:bg-gray-950 
                        focus:bg-whiteMist dark:focus:bg-gray-900 
                        border-gray-300 dark:border-gray-700
                       
                        outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600"
                        placeholder="you@example.com"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blackNeutral dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 hover:cursor-pointer text-white font-semibold rounded-md transition duration-300 font-NotoSerif"
                >
                    Sign Up
                </button>
            </form>

            <p className="mt-2 text-sm text-gray-800 dark:text-gray-400">
                By signing up, you agree to our{" "}
                <a href="/" className="font-semibold hover:underline">
                    Privacy Policy
                </a>
                .
            </p>
        </div>
    );
}

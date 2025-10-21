export default function HowItWorksCard({ id, icon, title, description }) {
    return (
        <div>
            <div className="flex flex-col m-5 p-5 items-center justify-center text-center max-w-70 gap-3">
                <div className="p-2 bg-green-300  rounded-full w-15 h-15 flex justify-center">
                    {icon}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}

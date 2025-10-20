export default function FeatureCard({ icon, title, description }) {
    return (
        <div className="flex flex-col m-5 p-5 items-left rounded-xl shadow-xl justify-center hover:shadow-2xl max-w-100 gap-5">
            {icon}
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

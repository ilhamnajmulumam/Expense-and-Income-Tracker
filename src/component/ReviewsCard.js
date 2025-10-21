export default function ReviewsCard({ star, review, name, position }) {
    return (
        <div className="flex flex-col shadow-xl gap-2 p-10 max-w-100">
            <h2>{star}</h2>
            <p className="italic">{review}</p>
            <h3 className="font-bold">{name}</h3>
            <h4>{position}</h4>
        </div>
    );
}

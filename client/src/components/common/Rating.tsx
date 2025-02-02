import { Star } from "lucide-react";

const StarRating = ({
  rating = 0,
  size = 12,
}: {
  rating?: number;
  size?: number;
}) => {
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          size={size}
          className={`${
            index <= normalizedRating
              ? "text-light-60 fill-light-60"
              : "text-[#D4D7DA] fill-[#D4D7DA]"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;

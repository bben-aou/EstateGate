import { TRatingInputProps } from "@/interfaces/inputs/types";

const RatingInput = (props: TRatingInputProps) => {
  const { value = 1, onChange, onBlur } = props;
  const handleRatingChange = (rating: number) => {
    onChange(rating);
  };

  return (
    <div className="rating rating-sm gap-1">
      {[1, 2, 3, 4, 5].map((rating) => (
        <input
          key={rating}
          type="radio"
          name="rating"
          className={`mask mask-star-2 ${
            value >= rating ? "bg-light-60" : "bg-gray-700"
          } `}
          checked={value === rating}
          onChange={() => handleRatingChange(rating)}
          onBlur={onBlur}
        />
      ))}
    </div>
  );
};

export default RatingInput;

import Marquee from "@/components/ui/marquee";
import ReviewCard from "@/components/customerTestimonial/reviewsSection/ReviewCard";
import { reviews } from "@/DummyData/reviews";

const ReviewsSection = () => {
  const reviewsMapping = reviews.map((review) => (
    <ReviewCard key={review.username} {...review} />
  ));
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:my-[40px] ">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {reviewsMapping}
      </Marquee>
    </div>
  );
};
export default ReviewsSection;

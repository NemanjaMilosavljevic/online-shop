import FilterCard from "@/components/filter section/filterCard";
import Meals from "@/components/meals/Meals";
import {
  filterMealsBySubcategory,
  getMaxPrice,
  filterMealsByQueryParams,
} from "@/lib/db";

const SubcategoryMeals = ({ params, searchParams }) => {
  const price = searchParams.price?.includes("-")
    ? +searchParams.price?.split("-")[1]
    : +searchParams.price || getMaxPrice().price;

  let filteredMeals;
  if (JSON.stringify(searchParams) === "{}") {
    filteredMeals = filterMealsBySubcategory(params.subcategorySlug);
  } else {
    filteredMeals = filterMealsByQueryParams(
      searchParams.vegge === "true",
      searchParams.fasting === "true",
      price,
      params.subcategorySlug,
      "subcategory"
    );
  }
  return (
    <div className="d-flex flex-column position-relative mt-5 container-fluid">
      <FilterCard />

      <Meals meals={filteredMeals} searchModal={false} favMealPage={false} />
    </div>
  );
};

export default SubcategoryMeals;

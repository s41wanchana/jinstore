import Tag from "./Tag";

export default function Categories() {
  return (
    <div id="categories-nav-container" className="flex gap-6">
      <Tag
        id={"fruit-n-vegies-nav"}
        imageUrl={"/images/categories-img/fruit-n-vegies-category.png"}
        text={"Fruits & Vegetables"}
      />
      <Tag
        id={"baby-n-pregnancy-nav"}
        imageUrl={"/images/categories-img/baby-n-pregnancy.png"}
        text={"Baby & Pregnancy"}
      />
      <Tag
        id={"beverages-nav"}
        imageUrl={"/images/categories-img/beverages.png"}
        text={"Beverages"}
      />
      <Tag
        id={"meats-n-seafood-nav"}
        imageUrl={"/images/categories-img/meats-n-seafood.png"}
        text={"Meats & Seafood"}
      />
      <Tag
        id={"biscuits-n-snacks-nav"}
        imageUrl={"/images/categories-img/biscuits-n-snacks.png"}
        text={"Biscuits & Snacks"}
      />
      <Tag
        id={"breads-n-bakery-nav"}
        imageUrl={"/images/categories-img/breads-n-bakery.png"}
        text={"Breads & Bakery"}
      />
      <Tag
        id={"breakfast-n-dairy-nav"}
        imageUrl={"/images/categories-img/breakfast-n-dairy.png"}
        text={"Breakfast & Dairy"}
      />
      <Tag
        id={"frozenfoods-nav"}
        imageUrl={"/images/categories-img/frozenfoods.png"}
        text={"Frozen Foods"}
      />
      <Tag
        id={"grocery-n-staples-nav"}
        imageUrl={"/images/categories-img/grocery-n-staples.png"}
        text={"Grocery & Staples"}
      />
    </div>
  );
}

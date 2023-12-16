import { useDispatch } from "react-redux";
import { sorting } from "../../features/filters/filterSlice";

const Sorting = () => {
  const dispatch = useDispatch()

    return (
    <div class="sidebar-content">
    <h4>Sort</h4>
    <select onChange={e=>dispatch(sorting(e.target.value))}  name="sort" id="lws-sort" class="w-full max-w-[150px] border-2 rounded-md text-gray-500">
      <option  value="">Default</option>
      <option value="newest">Newest</option>
      <option  value="liked">Most Liked</option>
    </select>
  </div>
  )
};
export default Sorting;
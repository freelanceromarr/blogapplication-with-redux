import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../features/filters/filterSlice";

const Filter = ()=>{
  const blogFilters = useSelector(state=>state.filters);
  const dispatch = useDispatch()
  

    return (
        <div class="sidebar-content">
          <h4>Filter</h4>
          <div class="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input onChange={e=>dispatch(filter(''))} type="radio" name="filter" id="lws-all" checked={blogFilters.filter===''? true: false} class="radio" />
              <label for="lws-all">All</label>
            </div>
            <div>
              <input onChange={e=>dispatch(filter('saved'))} type="radio" checked={blogFilters.filter==='saved'? true: false} name="filter" id="lws-saved" class="radio" />
              <label for="lws-saved">Saved</label>
            </div>
          </div>
        </div>
    )
}
export default Filter;
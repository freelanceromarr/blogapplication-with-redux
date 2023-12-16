const Filter = ()=>{
    return (
        <div class="sidebar-content">
          <h4>Filter</h4>
          <div class="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input type="radio" name="filter" id="lws-all" checked class="radio" />
              <label for="lws-all">All</label>
            </div>
            <div>
              <input type="radio" name="filter" id="lws-saved" class="radio" />
              <label for="lws-saved">Saved</label>
            </div>
          </div>
        </div>
    )
}
export default Filter;
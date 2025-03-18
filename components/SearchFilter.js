const SearchFilter = () => {
  return (
    <div className="container container-1400">
      <div
        className="search-filter-inner"
        data-aos="zoom-out-down"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="filter-item clearfix">
          <div className="icon">
          <i className="fas fa-book"></i>
          </div>
          <span className="title">MISIÓN</span>
          
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
          
          <i className="fas fa-lightbulb"></i>
          </div>
          <span className="title">VISIÓN</span>
          
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
          <i className="fas fa-graduation-cap"></i>
          </div>
          <span className="title">OBJETIVOS</span>
          {/* <select name="date" id="date">
            <option value="value1">OBJETIVOS</option>
            <option value="value2">10</option>
            <option value="value2">20</option>
          </select> */}
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
          <i className="fas fa-university"></i> 
          </div>
          <span className="title">CARRERA ACREDITADA</span>
        </div>
        <div className="search-button">
          <button className="theme-btn">
            <span data-hover="IR">VER</span>
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchFilter;

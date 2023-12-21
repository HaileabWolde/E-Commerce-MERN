const RatingComponent = ({value, text})=>{
    return (
        <div className="rating">
        <span style={{ color: '#00FF00' }}>
          <i
            className={
              value >= 1
                ? "fas fa-star"
                : value >= 0.5
                ? "fas fa-star-half-alt"
                : "fas fa-start"
            }
          ></i>
        </span>
        <span style={{ color: '#00FF00' }}>
          <i
            className={
              value >= 2
                ? "fas fa-star"
                : value >= 1.5
                ? "fas fa-star-half-alt"
                : "fas fa-start"
            }
          ></i>
        </span>
        <span style={{ color: '#00FF00' }}>
          <i
            className={
              value >= 3
                ? "fas fa-star"
                : value >= 2.5
                ? "fas fa-star-half-alt"
                : "fas fa-start"
            }
          ></i>
        </span>
        <span style={{ color: '#00FF00' }}>
          <i
            className={
              value >= 4
                ? "fas fa-star"
                : value >= 3.5
                ? "fas fa-star-half-alt"
                : "fas fa-start"
            }
          ></i>
        </span>
        <span style={{ color: '#00FF00' }}>
          <i
            className={
              value >= 5
                ? "fas fa-star"
                : value >= 4.5
                ? "fas fa-star-half-alt"
                : "fas fa-start"
            }
          ></i>
        </span>
        <span>{text}</span>
      </div>
    )
}
export default RatingComponent
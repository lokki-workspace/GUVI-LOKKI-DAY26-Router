import PropTypes from "prop-types";

Content.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

// Card.propTypes = {
//   data : {
//       id : PropTypes.number.isRequired,
//       title : PropTypes.string.isRequired,
//       description : PropTypes.string.isRequired,
//       image : PropTypes.string.isRequired,
//       date : PropTypes.number.isRequired
//   }
// };

function Content({ data }) {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
        <div className="card h-100">
          <img src={data.image} className="card-img-top mb-2" alt="card_img" />
          <div className="card-body px-4 mt-3">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <p className="card-sm-txt">Go to menu </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Content;
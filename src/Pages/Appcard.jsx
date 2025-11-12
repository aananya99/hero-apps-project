import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Appcard = ({ app }) => {
  const { id, title, image, ratingAvg, downloads } = app;

  return (
    <Link to={`/apps-details/${id}`}>
      <div
        className="
        card bg-base-100 border shadow-md rounded-2xl overflow-hidden
        hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]
        transition-transform duration-300 ease-out cursor-pointer
        active:scale-[0.98]
      "
      >
        <figure className="h-56 w-full overflow-hidden ">
          <img
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 p-5"
            src={image}
            alt={title}
          />
        </figure>

        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold mb-3">{title}</h2>

          <div className="flex justify-between items-center">
            <button className="btn btn-sm bg-transparent border-none text-[#00D390] hover:bg-[#00D390]/10 flex items-center gap-2">
              <FontAwesomeIcon icon={faDownload} />
              {downloads}
            </button>

            <button className="btn btn-sm bg-transparent border-none text-[#FF8811] hover:bg-[#FF8811]/10 flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} />
              {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Appcard;

/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { useApi } from "../context/RequestApi";


function Estimate({ allResults }) {
  const { responses, estimate } = useApi();
  let selectedOption = {};

  const FinalResult = parseInt(
    estimate.elec.carbon_kg * 3.66 +
    estimate.flight.carbon_kg * 3.66 +
    responses.carResponse * 0.22 +
    responses.waterResponse * 0.00013 +
    responses.foodResponse * 4 * 12.5,
    10
  );

  if (FinalResult <= 550) {
    // eslint-disable-next-line prefer-destructuring
    selectedOption = allResults[0];
  } else if (FinalResult <= 751) {
    // eslint-disable-next-line prefer-destructuring
    selectedOption = allResults[1];
  } else {
    // eslint-disable-next-line prefer-destructuring
    selectedOption = allResults[2];
  }

  return (
    <div>
      <div className="final_result">
        <img src={selectedOption.image} alt="green gauge" />
        <p> Résultat estimé : {FinalResult} kg de CO2</p>
        <h3>{selectedOption.title}</h3>
        <p>Vous avez {selectedOption.greenpoint} Green Point</p>
      </div>
      <div className="conclu-container">
        <p className="conclusion">{selectedOption.conclusion}</p>
        <h4>Avez-vous pensé à :</h4>
        <ul>
          {selectedOption.axes.map((axis, index) => (
            <li key={`axis-${index + 1}`}>{axis}</li>
          ))}
        </ul>
      </div>
    </div >
  )
    ;
}

Estimate.propTypes = {
  allResults: PropTypes.func.isRequired,
};


export default Estimate;

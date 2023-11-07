import { useState } from "react";

function QuizzCar({ setCurrentQuestion }) {
  const [quizzCarResponse, setQuizzCarResponse] = useState(0);
  const [showCarQuestions, setShowCarQuestions] = useState(false);

  return (
    <div className="question">
      <div>
        <label htmlFor="didYouHaveACar">Avez vous une voiture?</label>
        <div>
          <button
            type="button"
            name="didYouHaveACar"
            id="didYouHaveACar"
            onClick={() => setShowCarQuestions(true)}
          >
            Oui
          </button>
          <button
            type="button"
            name="didYouHaveACar"
            id="didYouHaveACar"
            onClick={() => setCurrentQuestion(3)}
          >
            Non
          </button>
        </div>
      </div>

      {showCarQuestions && (
        <div className="question">
          <div>
            <label htmlFor="whatTypeOfFuel">
              Quel type de carburant utilisez-vous?
            </label>
            <div>
              <select name="whatTypeOfFuel" id="whatTypeOfFuel">
                <option value="electric">Electrique</option>
                <option value="fuel">Essence</option>
                <option value="gazoil">Diesel</option>
              </select>
            </div>
          </div>

          <div className="question">
            <label htmlFor="howManyKm">
              Combien de kilomètres parcourez-vous chaque mois?
            </label>
            <input
              type="number"
              name="howManyKm"
              id="howManyKm"
              min="0"
              onChange={(e) => setQuizzCarResponse(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizzCar;

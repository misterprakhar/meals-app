import { useGlobalContext } from "../context";
import { IoClose } from "react-icons/io5";

const Favorites = () => {
	const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
	return (
		<section className="favorites">
			<div className="favorites-content">
				<h4>Favorites</h4>
				<div className="favorites-container">
					{favorites.map((item) => {
						const { idMeal, strMealThumb: image, strMeal } = item;
						return (
							<div className="favorite-item" key={idMeal}>
								<img
									src={image}
									alt=""
									className="img favorite-img"
									onClick={() => selectMeal(idMeal, true)}
								/>
								<p className="favorite-title">{strMeal}</p>
								<button className="remove-btn" onClick={() => removeFromFavorites(idMeal)}>
									<IoClose />
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Favorites;

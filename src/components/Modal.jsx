import { useGlobalContext } from "../context";

const Modal = () => {
	const { selectedMeal, closeModal } = useGlobalContext();
	const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal;

	const handleModalClick = (e) => {
		if (e.target === e.currentTarget) closeModal();
	};

	return (
		<aside className="modal-overlay" onClick={handleModalClick}>
			<div className="modal-container">
				<img src={image} alt={title} className="img modal-img" />
				<div className="modal-content">
					<h4>{title}</h4>
					<p>Cooking Instructions</p>
					<p>{text}</p>
					<a href={source} target="_blank" rel="noreferrer">
						Original Source
					</a>
					<button className="btn btn-hipster close-btn" onClick={closeModal}>
						Close
					</button>
				</div>
			</div>
		</aside>
	);
};

export default Modal;

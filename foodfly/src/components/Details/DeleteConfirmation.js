import "./DeleteModal.css"

export function DeleteRecipeModal({ recipe, onDelete, isOpen, setIsOpen }) {
  const handleDelete = () => {
    onDelete(recipe);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete {recipe.title}?</p>
            <button onClick={handleDelete}>Yes, delete</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
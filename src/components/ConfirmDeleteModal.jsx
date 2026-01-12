import "./ConfirmDeleteModal.scss";

export default function ConfirmDeleteModal({
  equipment,
  onCancel,
  onConfirm
}) {
  if (!equipment) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>Excluir equipamento</h3>

        <p>
          Tem certeza que deseja excluir o equipamento abaixo?
        </p>

        <div className="equipment-info">
          <strong>{equipment.tipo}</strong>
          <span>{equipment.marca}</span>
          <span>{equipment.modelo}</span>
        </div>

        <div className="modal-actions">
          <button className="cancel" onClick={onCancel}>
            Cancelar
          </button>
          <button
            className="danger"
            onClick={() => onConfirm(equipment.id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

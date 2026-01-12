import { useEffect, useState } from "react";
import EquipmentList from "./EquipmentList";
import EquipmentForm from "./EquipmentForm";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import "./EquipmentPage.scss";

export default function EquipmentPage() {
  const [equipments, setEquipments] = useState([]);
  const [editingEquipment, setEditingEquipment] = useState(null);
  const [equipmentToDelete, setEquipmentToDelete] = useState(null);

  async function loadEquipments() {
    try {
      const res = await fetch("http://localhost:8081/equipment");
      if (!res.ok) throw new Error("Erro ao buscar equipamentos");

      const data = await res.json();

      setEquipments(
        data.map(eq => ({
          id: eq.id,
          tipo: eq.type,
          marca: eq.brand,
          modelo: eq.model,
          numeroSerie: eq.serial_number,
          macAddress: eq.mac_address,
          patrimonio: eq.asset_tag,
          status: eq.status,
          localizacao: eq.location,
        }))
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadEquipments();
  }, []);

  /* ================= EDITAR ================= */
  function handleEdit(equipment) {
    setEditingEquipment(equipment);
  }

  /* ================= DELETE ================= */
  function requestDelete(equipment) {
    setEquipmentToDelete(equipment); // abre modal com dados
  }

  async function confirmDelete(id) {
    try {
      await fetch(`http://localhost:8081/equipment/${id}`, {
        method: "DELETE",
      });

      setEquipments(prev =>
        prev.filter(eq => eq.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar equipamento", error);
    } finally {
      setEquipmentToDelete(null); // fecha modal
    }
  }

  return (
    <div className="equipment-page">
      <EquipmentList
        equipments={equipments}
        onEdit={handleEdit}
        onDelete={requestDelete}
      />

      {/* FORMULÁRIO (CRIAR / EDITAR) */}
      {editingEquipment && (
        <EquipmentForm
          equipment={editingEquipment}
          onClose={() => setEditingEquipment(null)}
          onSave={loadEquipments}
        />
      )}

      {/* MODAL DE CONFIRMAÇÃO DE DELETE */}
      <ConfirmDeleteModal
        equipment={equipmentToDelete}
        onCancel={() => setEquipmentToDelete(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./EquipmentForm.scss";

export default function EquipmentForm({ onClose, onSave, equipment }) {
  const [form, setForm] = useState({
    type: "",
    brand: "",
    model: "",
    serial_number: "",
    mac_address: "",
    asset_tag: "",
    status: "ESTOQUE",
    location: "DEPOSITO",
    notes: "",
  });

  // 🔥 PREENCHE O FORMULÁRIO QUANDO FOR EDIÇÃO
  useEffect(() => {
    if (equipment) {
      setForm({
        type: equipment.tipo,
        brand: equipment.marca,
        model: equipment.modelo,
        serial_number: equipment.numeroSerie,
        mac_address: equipment.macAddress,
        asset_tag: equipment.patrimonio || "",
        status: equipment.status,
        location: equipment.localizacao,
        notes: equipment.notes || "",
      });
    }
  }, [equipment]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const url = equipment
      ? `http://localhost:8081/equipment/${equipment.id}`
      : "http://localhost:8081/equipment";

    const method = equipment ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar equipamento");
      }

      onSave();
      onClose();
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar equipamento");
    }
  }

  return (
    <div className="equipment-overlay">
      <div className="equipment-card">
        <header>
          <h2>{equipment ? "Editar Equipamento" : "Cadastrar Equipamento"}</h2>
          <button type="button" onClick={onClose}>×</button>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="grid">

            <div className="field">
              <label>Tipo de Equipamento</label>
              <select name="type" value={form.type} onChange={handleChange} required>
                <option value="">Selecione</option>
                <option value="ROTEADOR">Roteador</option>
                <option value="ONU">ONU</option>
                <option value="SWITCH">Switch</option>
                <option value="AP">Access Point</option>
              </select>
            </div>

            <div className="field">
              <label>Marca</label>
              <input name="brand" value={form.brand} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Modelo</label>
              <input name="model" value={form.model} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Nº de Série</label>
              <input name="serial_number" value={form.serial_number} onChange={handleChange} required />
            </div>

            <div className="field">
              <label>MAC Address</label>
              <input name="mac_address" value={form.mac_address} onChange={handleChange} />
            </div>

            <div className="field">
              <label>Patrimônio</label>
              <input name="asset_tag" value={form.asset_tag} onChange={handleChange} />
            </div>

            <div className="field">
              <label>Status</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="ESTOQUE">Em estoque</option>
                <option value="INSTALADO">Instalado</option>
                <option value="MANUTENCAO">Manutenção</option>
                <option value="DEFEITO">Defeito</option>
                <option value="BAIXADO">Baixado</option>
              </select>
            </div>

            <div className="field">
              <label>Localização</label>
              <select name="location" value={form.location} onChange={handleChange}>
                <option value="DEPOSITO">Depósito</option>
                <option value="TECNICO">Técnico</option>
                <option value="CLIENTE">Cliente</option>
              </select>
            </div>

          </div>

          <div className="field full">
            <label>Observações</label>
            <textarea name="notes" rows="3" value={form.notes} onChange={handleChange} />
          </div>

          <footer>
            <button type="button" className="cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="save">
              {equipment ? "Salvar Alterações" : "Salvar Equipamento"}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}

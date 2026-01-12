import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./EquipmentList.scss";

export default function EquipmentList({ equipments, onEdit, onDelete }) {
  if (!equipments.length) {
    return (
      <div className="equipment-empty">
        Nenhum equipamento cadastrado.
      </div>
    );
  }

  return (
    <div className="equipment-list">

      {/* DESKTOP */}
      <div className="equipment-table">
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Série</th>
              <th>Patrimônio</th>
              <th>MAC</th>
              <th>Status</th>
              <th>Localização</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((eq) => (
              <tr key={eq.id}>
                <td>{eq.tipo}</td>
                <td>{eq.marca}</td>
                <td>{eq.modelo}</td>
                <td>{eq.numeroSerie}</td>
                <td>{eq.patrimonio || "-"}</td>
                <td>{eq.macAddress || "-"}</td>
                <td>
                  <span className={`status ${eq.status.toLowerCase()}`}>
                    {eq.status}
                  </span>
                </td>
                <td>{eq.localizacao}</td>
                <td className="actions">
                  <button onClick={() => onEdit(eq)}>
                    <FaEdit />
                  </button>
                  <button onClick={() => onDelete(eq)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE */}
      <div className="equipment-cards">
        {equipments.map((eq) => (
          <div className="equipment-card" key={eq.id}>
            <header>
              <strong>{eq.tipo}</strong>
              <span className={`status ${eq.status.toLowerCase()}`}>
                {eq.status}
              </span>
            </header>

            <p><b>Marca:</b> {eq.marca}</p>
            <p><b>Modelo:</b> {eq.modelo}</p>
            <p><b>Série:</b> {eq.numeroSerie}</p>
            <p><b>Patrimônio:</b> {eq.patrimonio || "-"}</p>
            <p><b>MAC:</b> {eq.macAddress || "-"}</p>
            <p><b>Localização:</b> {eq.localizacao}</p>

            <div className="card-actions">
              <button onClick={() => onEdit(eq)}>
                <FaEdit />
              </button>
              <button onClick={() => onDelete(eq)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

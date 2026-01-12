import React, { useState } from "react";
import EquipmentForm from "./EquipmentForm";
import "./ProductCreateButton.scss";

export default function ProductCreateButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Controle de Equipamentos</h1>
        <p className="hero-subtitle">
          Gerencie seus equipamentos de forma prática e rápida
        </p>

        <button
          className="hero-btn"
          onClick={() => setShowForm(true)}
        >
          Cadastrar Equipamento
        </button>
      </section>

      {showForm && (
        <EquipmentForm onClose={() => setShowForm(false)} />
      )}
    </>
  );
}

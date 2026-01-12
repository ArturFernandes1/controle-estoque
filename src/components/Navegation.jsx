import React from "react";
import { Link } from "react-router-dom";
import "./Navegation.scss";

export default function Navegation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">INÍCIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stock">ESTOQUE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTATO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">SUPORTE</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

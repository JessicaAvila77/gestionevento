"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { eventosContext } from "./Context/usuariosContext";
import { useEventosContext } from "./Provider/providerUsuarios";

export default function Home() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUsuario } = useEventosContext();

  const [error, setError] = useState("");
  const router = useRouter();

  function iniciarSesion() {
    setError("");

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.mensaje) {
          setError("Credenciales incorrectas");
          return;
        }

        setUsuario(data);

        router.push(
          data.rol === "admin"
            ? "/administrador"
            : "/usuario"
        );
      })
      .catch(() => setError("Error al conectar con el servidor"));
  }

  return (
    <div className="grid place-items-center h-screen">
      <main className="flex flex-col gap-4">

       <h1>Gestión de Eventos</h1>
        <h2>Inicio de Sesión</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          onClick={iniciarSesion}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>
      </main>
    </div>
  );
}

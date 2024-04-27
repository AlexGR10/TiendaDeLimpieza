import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import productosJSON from '/public/data/usuarios.json'; // Importa el archivo JSON de usuarios

// Componente para la sección de perfil
function PerfilSection({ title, content, isEditing, onToggleEdit, onSave }) {
  return (
    <div>
      <h3>
        {isEditing ? (
          <>
            <span onClick={onSave}>💾</span> {/* Icono de guardar */}
          </>
        ) : (
          <>
            <span onClick={onToggleEdit}>🖉</span> {/* Icono de lápiz */}
          </>
        )}
        {title}
      </h3>
      {content}
    </div>
  );
}

function Perfil() {
  // Obtenemos el userId del contexto de autenticación
  const { userId, logout } = useContext(AuthContext);

  // Busca el usuario en el JSON por su ID
  const user = productosJSON.customer.find(user => user.id === userId);

  // Verifica si se encontró el usuario
  if (!user) {
    return <div>No se encontró el usuario.</div>;
  }

  // Variables para almacenar los datos del usuario y habilitar la edición
  const [nombre, setNombre] = useState(user.nombre);
  const [username, setUsername] = useState(user.usuario);
  const [password, setPassword] = useState(user.contraseña);
  const [email, setEmail] = useState(user.correo_electronico);
  const [street, setStreet] = useState(user.calle);
  const [fracc, setFracc] = useState(user.fraccionamiento);
  const [codeP, setCodeP] = useState(user.codigo_postal);
  const [pago, setPago] = useState(user.metodo_pago);

  // Estados para controlar la edición de cada sección
  const [perfilEditing, setPerfilEditing] = useState(false);
  const [direccionEditing, setDireccionEditing] = useState(false);
  const [metodoPagoEditing, setMetodoPagoEditing] = useState(false);

  // Función para guardar los cambios y salir del modo de edición
  const saveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en el backend
    setPerfilEditing(false);
    setDireccionEditing(false);
    setMetodoPagoEditing(false);
  };

  return (
    <div>
      {/* Sección de perfil */}
      <PerfilSection
        title={`Perfil del Usuario ${user.nombre}`}
        content={
          <>
            <p>
              <strong>Nombre:</strong>
              {perfilEditing ? (
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              ) : (
                <>{nombre}</>
              )}
            </p>
            <p>
              <strong>Usuario:</strong>
              {perfilEditing ? (
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              ) : (
                <>{username}</>
              )}
            </p>
            <p>
              <strong>Contraseña:</strong>
              {perfilEditing ? (
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              ) : (
                <>{password}</>
              )}
            </p>
            <p>
              <strong>Correo Electrónico:</strong>
              {perfilEditing ? (
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              ) : (
                <>{email}</>
              )}
            </p>
          </>
        }
        isEditing={perfilEditing}
        onToggleEdit={() => setPerfilEditing(!perfilEditing)}
        onSave={saveChanges}
      />

      {/* Sección de dirección */}
      <PerfilSection
        title="Dirección"
        content={
          <>
            <p>
              <strong>Calle:</strong>
              {direccionEditing ? (
                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
              ) : (
                <>{street}</>
              )}
            </p>
            <p>
              <strong>Fraccionamiento:</strong>
              {direccionEditing ? (
                <input type="text" value={fracc} onChange={(e) => setFracc(e.target.value)} />
              ) : (
                <>{fracc}</>
              )}
            </p>
            <p>
              <strong>Código Postal:</strong>
              {direccionEditing ? (
                <input type="text" value={codeP} onChange={(e) => setCodeP(e.target.value)} />
              ) : (
                <>{codeP}</>
              )}
            </p>
          </>
        }
        isEditing={direccionEditing}
        onToggleEdit={() => setDireccionEditing(!direccionEditing)}
        onSave={saveChanges}
      />

      {/* Sección de método de pago */}
      <PerfilSection
        title="Método de Pago"
        content={
          <>
            <p>
              <strong>Método:</strong>
              {metodoPagoEditing ? (
                <select value={pago} onChange={(e) => setPago(e.target.value)}>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Tarjeta">Tarjeta</option>
                  <option value="PayPal">PayPal</option>
                </select>
              ) : (
                <>{pago}</>
              )}
            </p>
          </>
        }
        isEditing={metodoPagoEditing}
        onToggleEdit={() => setMetodoPagoEditing(!metodoPagoEditing)}
        onSave={saveChanges}
      />

      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
}

export default Perfil;

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        fontFamily: "system-ui",
      }}
    >
      <div style={{ width: "100%", maxWidth: 420, padding: 24 }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>
          HOPE KPI
        </h1>

        <p style={{ marginBottom: 20 }}>
          Ingresa tu código de cita para comenzar tu evaluación clínica.
        </p>

        <input
          type="text"
          placeholder="Ej. HKPI-4F92A"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            border: "1px solid #ccc",
            marginBottom: 12,
            fontSize: 16,
          }}
        />

        <button
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            backgroundColor: "#111",
            color: "#fff",
            border: "none",
            fontSize: 16,
          }}
        >
          Continuar
        </button>

        <p style={{ marginTop: 16, fontSize: 12, color: "#666" }}>
          Tu información es confidencial y puedes continuar más tarde.
        </p>
      </div>
    </main>
  );
}
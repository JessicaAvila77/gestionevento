import ProviderEventos from "../Provider/providerUsuarios";

export default function NameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Usuario</h1>
      {children}
    </div>
  );
}
import { getSession } from "@/proxy";

export default async function AdminUsersPage() {
  const session = await getSession();
  if (!session) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
      <p className="text-neutral-500 text-sm">Panel de administración para gestionar permisos y cuentas.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 bg-card text-card-foreground rounded-2xl border border-border shadow-sm">
            <div className="w-10 h-10 bg-muted rounded-full mb-3" />
            <div className="h-4 w-24 bg-muted rounded mb-2" />
            <div className="h-3 w-32 bg-muted/50 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

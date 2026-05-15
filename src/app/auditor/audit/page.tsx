import { getSession } from "@/proxy";

export default async function GenericAuditorPage() {
  const session = await getSession();
  if (!session) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Registro de Auditoría</h1>
      <p className="text-neutral-500 text-sm">Vista detallada de los registros del sistema.</p>
      <div className="mt-8 border border-neutral-100 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-950 shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
            <tr>
              <th className="px-6 py-4 font-semibold">Evento</th>
              <th className="px-6 py-4 font-semibold">Usuario</th>
              <th className="px-6 py-4 font-semibold">Fecha</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-50 dark:divide-neutral-900">
            {[1, 2, 3].map((i) => (
              <tr key={i}>
                <td className="px-6 py-4">Acceso al sistema</td>
                <td className="px-6 py-4">Usuario {i}</td>
                <td className="px-6 py-4 text-neutral-400">Hace 2 horas</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { getSession } from "@/proxy";

export default async function AuditorReportsPage() {
  const session = await getSession();
  if (!session) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Reportes de Cumplimiento</h1>
      <p className="text-neutral-500 text-sm">Análisis detallado del cumplimiento normativo y seguridad de los contenidos.</p>
      <div className="mt-4 p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
        <div className="h-[200px] w-full bg-neutral-50 dark:bg-neutral-800/50 rounded-xl flex items-end p-4 gap-2">
          {[40, 70, 45, 90, 65, 80].map((h, i) => (
            <div key={i} className="flex-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-t-lg transition-all" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

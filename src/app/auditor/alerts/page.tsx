import { getSession } from "@/proxy";

export default async function AuditorAlertsPage() {
  const session = await getSession();
  if (!session) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Alertas Críticas</h1>
      <p className="text-neutral-500 text-sm">Notificaciones en tiempo real sobre infracciones de seguridad o fallos en las pantallas.</p>
      <div className="mt-4 space-y-3">
        {[1, 2].map((i) => (
          <div key={i} className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-2xl flex items-center gap-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <div className="h-4 w-64 bg-red-200/50 dark:bg-red-900/50 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

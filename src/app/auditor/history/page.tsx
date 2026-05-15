import { getSession } from "@/proxy";

export default async function AuditorHistoryPage() {
  const session = await getSession();
  if (!session) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Historial de Cambios</h1>
      <p className="text-neutral-500 text-sm">Cronología de todas las modificaciones realizadas en la plataforma.</p>
      <div className="mt-8 space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-neutral-100 dark:before:bg-neutral-800">
             <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-emerald-500" />
             <p className="font-medium text-sm">Actualización de contenido</p>
             <p className="text-xs text-neutral-400 mt-1">14 de Mayo, 2026 - 15:30</p>
          </div>
        ))}
      </div>
    </div>
  );
}

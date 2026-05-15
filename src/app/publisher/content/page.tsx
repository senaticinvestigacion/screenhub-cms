import { getSession } from "@/proxy";

export default async function PublisherContentPage() {
  const session = await getSession();
  if (!session) return null;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Gestión de Contenidos</h1>
      <p className="text-neutral-500 text-sm">Crea y edita los contenidos que se mostrarán en las pantallas.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {[1, 2].map((i) => (
          <div key={i} className="aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm flex items-center justify-center">
            <span className="text-neutral-400 text-xs">Vista previa del contenido {i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

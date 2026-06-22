import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRightIcon, 
  MonitorIcon, 
  ShieldCheckIcon, 
  ZapIcon
} from "lucide-react";
import { hasUsers } from "@/features/auth";

export default async function Home() {
  const usersExist = await hasUsers();
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Image 
                src="/logo.png" 
                alt="ScreenHub Logo" 
                width={24} 
                height={24} 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">ScreenHub</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Iniciar Sesión</Button>
            </Link>
            {!usersExist && (
              <Link href="/sign-up">
                <Button size="sm" className="rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                  Comenzar Gratis
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
          <div className="container relative z-10 px-4 md:px-8 text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Próxima Generación de Cartelería Digital
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Gestiona tus pantallas <br className="hidden md:block" /> como nunca antes.
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              ScreenHub es la plataforma centralizada que permite a administradores, publicadores y auditores colaborar en tiempo real para gestionar contenidos dinámicos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Link href="/sign-in">
                <Button size="lg" className="h-14 px-8 rounded-2xl text-lg font-semibold shadow-xl shadow-primary/20 hover:scale-105 transition-transform group">
                  Ir al Dashboard
                  <ArrowRightIcon className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              {!usersExist && (
                <Link href="/sign-up">
                  <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl text-lg font-semibold border-2 hover:bg-muted/50 transition-colors">
                    Ver Demostración
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Abstract Shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container px-4 md:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-card border shadow-sm space-y-4 hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MonitorIcon className="size-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Gestión Visual</h3>
                <p className="text-muted-foreground leading-relaxed">Monitorea y controla todas tus pantallas desde un solo panel interactivo en tiempo real.</p>
              </div>
              <div className="p-8 rounded-3xl bg-card border shadow-sm space-y-4 hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ShieldCheckIcon className="size-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Roles y Permisos</h3>
                <p className="text-muted-foreground leading-relaxed">Arquitectura basada en roles (Admin, Auditor, Publisher) para una colaboración segura.</p>
              </div>
              <div className="p-8 rounded-3xl bg-card border shadow-sm space-y-4 hover:shadow-md transition-shadow group">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <ZapIcon className="size-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Entrega Rápida</h3>
                <p className="text-muted-foreground leading-relaxed">Optimizado con Next.js y Turbopack para una carga instantánea de contenidos multimedia.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-card">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Image src="/logo.png" alt="ScreenHub" width={20} height={20} />
            <span className="font-bold">ScreenHub</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 ScreenHub Inc. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

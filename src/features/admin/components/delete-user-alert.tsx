"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { User } from "@/generated/prisma";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteUserAction } from "../actions/user.actions";
import { Button } from "@/components/ui/button";

interface DeleteUserAlertProps {
  user: User | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteUserAlert({ user, open, onOpenChange }: DeleteUserAlertProps) {
  const [isPending, setIsPending] = useState(false);

  async function handleDelete() {
    if (!user) return;
    
    setIsPending(true);
    try {
      const res = await deleteUserAction(user.id);
      if (res.success) {
        toast.success("Usuario eliminado exitosamente");
        onOpenChange(false);
      } else {
        toast.error(res.error || "Hubo un error al eliminar el usuario");
      }
    } catch (error) {
      toast.error("Ocurrió un error inesperado");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente la cuenta de <strong>{user?.name}</strong> ({user?.email}) y removerá todos sus datos asociados del sistema.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancelar</AlertDialogCancel>
          <Button variant="destructive" onClick={handleDelete} disabled={isPending}>
            {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Eliminar
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

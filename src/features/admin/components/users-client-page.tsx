"use client";

import { useState } from "react";
import { User } from "@/generated/prisma";
import { UsersTable } from "./users-table";
import { CreateUserDialog } from "./create-user-dialog";
import { EditRoleDialog } from "./edit-role-dialog";
import { DeleteUserAlert } from "./delete-user-alert";

interface UsersClientPageProps {
  initialUsers: User[];
}

export function UsersClientPage({ initialUsers }: UsersClientPageProps) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  // Dialog states
  const [isEditRoleOpen, setIsEditRoleOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleEditRole = (user: User) => {
    setSelectedUser(user);
    setIsEditRoleOpen(true);
  };

  const handleDelete = (user: User) => {
    setSelectedUser(user);
    setIsDeleteOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
          <p className="text-neutral-500 text-sm">
            Panel de administración para gestionar permisos y cuentas.
          </p>
        </div>
        <CreateUserDialog />
      </div>

      <UsersTable 
        users={initialUsers} 
        onEditRole={handleEditRole} 
        onDelete={handleDelete} 
      />

      <EditRoleDialog 
        user={selectedUser} 
        open={isEditRoleOpen} 
        onOpenChange={setIsEditRoleOpen} 
      />
      
      <DeleteUserAlert 
        user={selectedUser} 
        open={isDeleteOpen} 
        onOpenChange={setIsDeleteOpen} 
      />
    </div>
  );
}

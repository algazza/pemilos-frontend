import AdminSidebar from "@/components/admin/AdminSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className='dark'>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <main className="overflow-hidden text-foreground p-8">
            <Outlet />
          </main>
          <Toaster />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default AdminLayout;

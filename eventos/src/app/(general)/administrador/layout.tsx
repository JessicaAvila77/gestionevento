export default function  AdminLayout({
    children
   }: {
    children: React.ReactNode;
   }) {
     return (
       <div>
         <h1>Administrador</h1>
         {children}
       </div>
     );
   }

import {MainLayout} from '@/app/routes/dashboard/page';
import {BrowserRouter,Routes,Route,} from ' react-router-dom';


export function AppRoutes({children,}: {
    children: React.ReactNode
  }){
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout children={undefined} />}/>
        <Route path="/mainlayout" element={<MainLayout children={children} />}/>
    
      </Routes>
      </BrowserRouter>
    );
}
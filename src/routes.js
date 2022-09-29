import About from "./pages/about/about";
import Hotel from "./pages/hotel/hotel";
import RoomList from "./pages/room/room";
import LoginPage from "./pages/login/login-page";
import RegisterPage from "./pages/register/register-page";
import NotFound from "./pages/errors/not-found";
import RoomDescription from "./pages/room/room-description";
import HotelAjout from "./pages/hotel/hotel-ajout";
import Reservation from "./pages/reservation/reservation"
import RoomAjout from "./pages/room/room-ajout";
import HotelModification from "./pages/hotel/hotel-modification";
import ChambreModification from "./pages/room/room-modification";


export const routes = [
    {
        path: '',
        element: <About />
    },
    {
        path: 'a-propos',
        element: <About />
    },
    {
        path: 'hotels',
        element: <Hotel />
    },
    {
        path: 'hotelAjout',
        element: <HotelAjout />
    },
    {
        path: 'hotelModification/:idHotel',
        element: <HotelModification />
    },
    {
        path: 'chambres/:idHotel',
        element: <RoomList />   
    },
    {
        path: 'chambres',
        element: <RoomList />   
    },
    {
        path: 'roomAjout/:idHotel',
        element: <RoomAjout />
    },
    {
        path: 'chambreModification/:idChambre',
        element: <ChambreModification />
    },
    {
        path: 'description/:idChambre',
        //dans votre <Link to ='/description/${id}'> 
        element: <RoomDescription/>,
        
    },
    {
        path: 'reservation',
        element: <Reservation />
    },
    {
        path: 'connexion',
        element: <LoginPage />    
    },
    {
        path: 'enregistrement',
        element: <RegisterPage />    
    },
    {
        path: '*',
        element: <NotFound />   
    }
]
import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ClientPage() {
    const [user,setUser] = useState([]);
    const [places,setPlaces] = useState([]);
    useEffect(() => {
      axios.get('/user-places').then(({data}) => {
        setPlaces(data);
      });
    }, []);
      
    return(
        <div>
        <AccountNav />
          <div className="text-center">
          </div>
          <div className="mt-4" > 
            {places.length > 0 && places.map(place => (
              <div className="flex cursor-pointer gap-4 p-4 bg-gray-100 p-4 rounded-2xl">
               <div className="flex w-32 h-32 bg-gray-300 shrink-0 rounded-2xl" >
                  {place.photos.length >0 && (
                  <img className="object-cover rounded-2xl" src={'http://localhost:4000/'+place.photos[0]} alt="" />
                    )}
            </div>     
          <div className="grow-0 shrink">
         <h2 className="text-xl ">{place.title}</h2>
         </div>
        </div >
      ))}
          </div>
      </div>
    );
}
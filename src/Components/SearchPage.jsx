import { useSelector } from "react-redux";
import Usercard from "./UserCard";

const SearchPage = () => {
  const filterCard = useSelector((laxman) => laxman.search);
  console.log(filterCard);
  
  if (!filterCard) return;
  if (filterCard.length === 0) {
    return <div className="flex items-center justify-center">No username found !</div>;
  }

  return (
    <>
    {filterCard.map(card=><Usercard key={card._id} userdata={card}/>)}
    
;</>)
    
};
export default SearchPage;

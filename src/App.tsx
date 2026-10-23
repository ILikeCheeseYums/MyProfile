export default function App(){

  return(
  <>
  <NavBar/>
  </>)
}

function NavBar(){
  return(
  <nav className="flex justify-between p-5 text-3xl align-middle bg-gradient-to-b from-white to-gray-150">
    <h1 className="p-1">Shwetank's Page</h1>
    <ul className="flex gap-3">
      <li className="border-black border rounded-2xl p-1 hover:bg-lime-400 hover:text-white hover:border-white"><a href="#">About</a></li>
      <li className="border-black border rounded-2xl p-1 hover:bg-lime-400 hover:text-white hover:border-white"><a href="#">Stack</a></li>
      <li className="border-black border rounded-2xl p-1 hover:bg-lime-400 hover:text-white hover:border-white"><a href="#">Projects</a></li>
    </ul>
  </nav>)
}
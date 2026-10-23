export default function App(){

  return(
  <>
  <NavBar/>
  </>)
}

function NavBar(){
  return(
  <nav className="flex justify-between p-5 text-3xl bg-white">
    <h1>Shwetank's Page</h1>
    <ul className="flex gap-3">
      <li><a href="#">About</a></li>
      <li><a href="#">Stuff Ik</a></li>
      <li><a href="#">Projects</a></li>
    </ul>
  </nav>)
}
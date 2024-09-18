function NavBar() {
  return (
    <div className="w-full h-20 sticky top-0 z-10 flex items-center border-b justify-between " style={{background:"#F9F9F9"}}>
      <div className="w-full h-20 flex items-end justify-center  sticky top-16">
        <ul className="flex items-center w-1/2 justify-between">
          <li className="py-3 px-4 list active-list">User</li>
          <li className="py-3 px-4 list">Instructor</li>
          <li className="py-3 px-4 list">Staff</li>
          <li className="py-3 px-4 list">Staff</li>
        </ul>
      </div>
      <div className="w-12 h-12 rounded-full bg-green-300 mr-5 cursor-pointer">
        <img src="/src/assets/consultant.png" alt="Image" />
      </div>
    </div>
  );
}

export default NavBar;

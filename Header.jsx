function Header() {
  return (
    <>
      <header>
        <div>
         <img src="L.jpeg" width="170rem" height="50rem" alt="logo"></img>
        <i class="fa-solid fa-angle-down"></i>
        </div>
        <input
          type="search"
          placeholder="Search stocks,smallcases,indices,mutualfunds"
        ></input>
        <ul>
          <li><i class="fa-brands fa-google-drive"></i>social</li>
          <li>
          <i class="fa-solid fa-user"></i>
            login
          </li>
          <li>
          <i class="fa-solid fa-angle-down"></i>
          <ul className="header-last-ul">
                <li><button>login</button></li>
                <li><button><i class="fa-solid fa-briefcase"></i>Portfolio</button></li>
                <li><button><i class="fa-solid fa-basket-shopping"></i>Basket</button></li>
                <li><button><i class="fa-solid fa-bookmark"></i>Watchlist</button></li>
                <li><button><i class="fa-solid fa-rocket"></i>Go pro</button></li>
                <li><button><i class="fa-regular fa-circle-question"></i>Support</button></li>
            </ul>
          </li>
               
        </ul>
      
      </header>
    </>
  );
}

export default Header;

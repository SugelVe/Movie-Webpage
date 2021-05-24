import classes from "../components/layout/MainNavigation.module.css";


function Favorites(){
   
   return <div>
        <header className={classes.header}>
        <div className={classes.logo}>Movieflix</div>
        <nav>
          <ul>
          
            <li>New Releases</li>
             <li> Favorites</li>
            <li>About us</li>
            
          </ul>
          <form >
            <input
              className={classes.search}
            ></input>
          </form>
          <ul className='filter'>
          <label>Filter by:</label>
          <input type="radio" id="category" name="rating" value=""></input>
          <label>Category</label>
          <input type="radio" id="rating" name="rating" value=""></input>
          <label>Rating</label>
          <input type="radio" id="rating" name="rating" value=""></input>
          <label>Year</label>
          </ul>
        </nav>
      </header>
    </div>
}

export default Favorites;
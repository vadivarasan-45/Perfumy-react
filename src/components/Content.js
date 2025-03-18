import one from "../assets/images/perfumy-one.jpg"
import two from "../assets/images/perfumy-two.jpg"
import three from "../assets/images/perfumy-three.jpg"

function Content()
{
  return(
    <div class="products">
      <div class="box">
      <img src={one} alt="one"></img>
      <p>Fogg Wood Extreme, Eau De Parfum,  Long-lasting Perfume, Men's Perfume Long Lasting Perfume  100ml</p>
      </div>

      <div class="box">
      <img src={two} alt="two"></img>
      <p>Fogg Wood Extreme,  Eau De Parfum,  Long-lasting Perfume, Men's Perfume Long Lasting Perfume 
        100ml</p>
      </div>

      <div class="box">
      <img src={three} alt="three"></img>
      <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume |Premium Long Lasting Perfume</p>
      </div>

    </div>
    )
}

export default Content
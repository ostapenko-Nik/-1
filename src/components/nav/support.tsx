import Denchik1 from '/Users/nostapenko597/Desktop/sitee/food/src/components/nav/Denchik1.png'
import kir from '/Users/nostapenko597/Desktop/sitee/food/src/components/nav/kir.png'
import nik from '/Users/nostapenko597/Desktop/sitee/food/src/components/nav/nik.png'
export default function Supp() {
  return (
    <section className='sect-prof'>
      <div className="menu-main2">
        <br /><br /><br />
        <div className="img-prof">
          <img src={Denchik1} alt="Дархан" width="500px"/>
          <p className="p-prof">Дархан</p>
        </div>

        <div className="img-prof">
          <img src={nik} alt="Дархан" width="580px"/>
          <p className="p-prof">Никита</p>
        </div>

        <div className="img-prof">
          <img src={kir} alt="Дархан" width="500px" />
          <p className="p-prof">Кирилл</p>
        </div>
        
      </div>
    </section>
  )
}

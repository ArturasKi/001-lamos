import { useContext } from "react";
import Duomenys from "../../Contexts/Duomenys";

function Bebras() {
  const { counter1 } = useContext(Duomenys); // objektas patenka i skliaustelius ir subyra;
  const { counter2 } = useContext(Duomenys);

  return (
    <div>
      <h1>{counter1}</h1>
      <h1>{counter2}</h1>
      {/* <Duomenys.Consumer>
                    {
                        data => <h1>{data.counter1} </h1>
                    }
            </Duomenys.Consumer> */}
    </div>
  );
}

export default Bebras;

import {IoIosArrowDropleft} from "react-icons/io";
const Button = () => {
  return (
    <section className="flex ">
      <IoIosArrowDropleft className=" pointer fontWeight1 iconcolor" size={23}/>
      <button className="button pointer  heading1  fontWeight1">Back</button>
    </section>
  );
};
export { Button };
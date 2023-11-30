import image1 from "../assets/images/image1.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.jpg";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto md:p-8 lg:-mt-8">
        <div className="grid grid-cols-1 container md:grid-cols-2 gap-4 p-6">
          <div className="bg-gray-200  flex flex-col justify-center items-center p-4 gap-8">
            <p className="font-sans text-medium ">
              A Game of Thrones takes place over the course of one year on or
              near the fictional continent of Westeros. The story begins when
              King Robert visits the northern castle Winterfell to ask Ned Stark
              to be his right-hand assistant, or Hand of the King. The previous
              Hand, Jon Arryn, died under suspicious circumstances. Robert comes
              with his queen, Cersei Lannister, and his retinue, which includes
              a number of Lannisters. Just after the royal party arrives, Ned’s
              wife, Catelyn, receives a message claiming that the Lannister
              family was responsible for the death of the former Hand. She tells
              Ned, who accepts the position as Hand in order to protect Robert
              from the Lannisters.
            </p>
            <Button
              url={"/page404"}
              text={"More details..."}
              className={"hover:bg-hoverColor"}
            />
          </div>
          <div className="bg-gray-300 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="h-6 md:h-20 spacing-y-2 bg-primary rounded"></div>
                <img src={image1} alt="image1.png" />
                <img src={image2} alt="image2.png" />
              </div>
              <div className="space-y-3">
                <img
                  className=" rounded-md  "
                  src={image3}
                  alt="image3.png"
                  height={"100px"}
                />
                <div className="h-8 md:h-20 spacing-y-2 bg-primary rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;

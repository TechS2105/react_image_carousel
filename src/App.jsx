import React from 'react';
import '../public/style/App.css';
import Images from './componants/images';

// let myName = "Rahul Sarkar";
let name = "SSD";
// let newEmployee = () => {

//   return "Romesh Roy";

// }

let image1 = "https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let image2 =
  "https://cdn.pixabay.com/photo/2023/06/02/15/46/ai-generated-8035998_1280.png";

let image3 =
  "https://cdn.pixabay.com/photo/2023/06/02/15/39/ai-generated-8035973_1280.png";

let image4 =
  "https://cdn.pixabay.com/photo/2023/05/03/10/36/ai-generated-7967242_1280.png";

function App() {
  
  return (
    <>
      <h1> Hello, This is a React Image Carousel </h1>
      <p>
        Developed By {name}
      </p>

      <div className="container">

        <div className="images">

          <Images image={image1} />

          <Images image={image2} />

          <Images image={image3} />

          <Images image={image4} />

        </div>

        <div className="images">

          <Images image={image1} />

          <Images image={image2} />

          <Images image={image3} />

          <Images image={image4} />

        </div>

        <div className="images">

          <Images image={image1} />

          <Images image={image2} />

          <Images image={image3} />

          <Images image={image4} />

        </div>

      </div>

    </>
    
  );

}

export default App;
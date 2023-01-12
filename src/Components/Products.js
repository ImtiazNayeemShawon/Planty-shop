import React from "react";
import "../Styles/Product.css";
import Tree1 from "../Assets/tree1.jpg";
import Tree2 from "../Assets/tree2.jpg";
import Tree3 from "../Assets/tree3.jpg";

export default function Products() {
  const ratingStar = (
    <svg
      aria-hidden="true"
      class="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>First star</title>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );

  return (
    <div>
      <div className="product-intro">
        <h1>Explore our products</h1>
        <p>Everyhing you need, any type of plant</p>
        <div className="Products">
          <div>
            <img src={Tree1} alt="tree1" />
            <h5>Monstera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$510</span> <s id="discount">800$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree2} alt="tree1" />
            <h5>Mengifera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$110</span> <s id="discount">400$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree3} alt="tree1" />
            <h5>Bonoshai vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$6000</span> <s id="discount">8000$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree1} alt="tree1" />
            <h5>Monstera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$510</span> <s id="discount">800$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree2} alt="tree1" />
            <h5>Mengifera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$110</span> <s id="discount">400$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree3} alt="tree1" />
            <h5>Bonoshai vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$6000</span> <s id="discount">8000$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree1} alt="tree1" />
            <h5>Monstera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$510</span> <s id="discount">800$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree2} alt="tree1" />
            <h5>Mengifera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$110</span> <s id="discount">400$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree3} alt="tree1" />
            <h5>Bonoshai vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$6000</span> <s id="discount">8000$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree1} alt="tree1" />
            <h5>Monstera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$510</span> <s id="discount">800$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree2} alt="tree1" />
            <h5>Mengifera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$110</span> <s id="discount">400$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree3} alt="tree1" />
            <h5>Bonoshai vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$6000</span> <s id="discount">8000$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree1} alt="tree1" />
            <h5>Monstera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$510</span> <s id="discount">800$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree2} alt="tree1" />
            <h5>Mengifera vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$110</span> <s id="discount">400$</s>{" "}
            <button id="view">view</button>
          </div>
          <div>
            <img src={Tree3} alt="tree1" />
            <h5>Bonoshai vl</h5>
            <span className="rate">
              {" "}
              {ratingStar}
              {ratingStar}
              {ratingStar}
              {ratingStar}
            </span>
            <span>$6000</span> <s id="discount">8000$</s>{" "}
            <button id="view">view</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

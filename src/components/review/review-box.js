const template = document.createElement("template");
template.innerHTML = `
<style>


.review-box {
    background-color: white;
    display: flex;
    flex-direction: column;
    color: black;
    align-items: center;
    justify-content: center;
    padding: 1.5em;
    border-radius: 1.5em;
  }
  
      .review-box h4 {
        font-size: 2.5rem;
        margin: 0;
      }
      
      .review-box p {
        font-size: 1.5rem;
      }
  .review-container > div img {
    width: 100px;
    height: 100px;
  }
  
  @media (min-width: 1024px) {
    .review-box h4 {
      font-size: 2rem;
      margin: 0;
    }
    
    .review-box p {
      font-size: 1rem;
    }

    .review-box {
    padding: 1em;
    }
    
  }

  @media (min-width: 1440px) {
    .review-box h4 {
      font-size: 2.5rem;
      margin: 0;
    }
    
    .review-box p {
      font-size: 1.5rem;
    }
    .review-box {
    padding: 1em;
    }
  }
</style>
<div class="review-box">
<img src="./public/images/users/elonmusk.png" alt="" />
    <h4><slot name="username">User 69</slot></h4>
    <p>
    <slot name="review">Lorem ipsum dolor</slot>
    </p>
  </div>

`;

class ReviewBox extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("my-review-box", ReviewBox);

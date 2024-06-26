const template = document.createElement("template");
template.innerHTML = `
<style>
form {
    width: 70%;
    max-width: 480px;
  }
  .form-group {
    position: relative;
    margin-bottom: 20px;
  }
  .form-group input {
    width: 100%;
    padding-top: 10px;
    padding-left: 2px;
    padding-right: 2px;
    padding-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s ease;
  }
  .form-group label {
    position: absolute;
    left: 12px;
    top: 12px;
    font-size: 14px;
    color: #777;
    transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
  }
  .form-group input:focus {
    border-color: #d07026;
    outline: none;
  }
  .form-group input:focus + label,
  .form-group input:not(:placeholder-shown) + label {
    top: -6px;
    font-size: 12px;
    color: #d07026;
    background-color: #ffffff;
    padding: 0 4px;
    border-radius: 4px;
    left: 8px;
  }
  
  .radio-container {
    margin: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .panel {
    display: none;
    border: 1px solid #ccc;
  }
  .label {
    border: 1px solid gainsboro;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .panel.show {
    display: flex;
    min-height: max-content;
    flex-direction: column;
    padding: 1em;
  }

  h4 {
    font-size: 2.5rem;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 0.5em;

  }

    
      
</style>
<h4>Payment</h4>

<div class="radio-container">
<label class="label">
  <div>
    <input type="radio" name="expandable" value="Cash" /> Cash
  </div>
  <img
    src="../public/images/icons8-cash-on-delivery-48.png"
    alt=""
    height="40"
    width="40"
  />
</label>

<label class="label">
  <div>
    <input type="radio" name="expandable" value="Credit" /> Credit
    Card
  </div>

  <div>
    <img
      src="../public/images/icons8-mastercard-48.png"
      alt=""
      height="40"
      width="40"
    />
    <img
      src="../public/images/icons8-visa-48.png"
      alt=""
      height="40"
      width="40"
    />
  </div>
</label>
<label class="label">
  <div>
    <input type="radio" name="expandable" value="Paypal_GCash" />
    Paypal/GCash
  </div>
  <div>
    <img
      src="../public/images/icons8-paypal.svg"
      alt=""
      height="40"
      width="40"
    />
    <img
      src="../public/images/icons8-gcash.svg"
      alt=""
      height="40"
      width="40"
    />
  </div>
</label>
</div>
`;

class PaymentForm extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const radios = this.shadowRoot.querySelectorAll('input[name="expandable"]');
    const panels = this.shadowRoot.querySelectorAll(".panel");

    radios.forEach((radio) => {
      radio.addEventListener("change", () => {
        panels.forEach((panel) => {
          panel.classList.remove("show");
        });
        const selectedPanel = this.shadowRoot.querySelector(`#${radio.value}`);
        if (selectedPanel) {
          selectedPanel.classList.add("show");
        }

        data.prop = radio.value;
      });
    });

    const data = {
      payment: "",
    };

    const saveInfo = () => {
      const paymentInfo = {
        payment: data.prop.payment,
      };

      localStorage.setItem("payment-info", JSON.stringify(paymentInfo));

      console.log(JSON.parse(localStorage.getItem("payment-info")));
    };

    const checkAllFieldsPopulated = (value) => {
      if (value) {
        this.dispatchEvent(
          new CustomEvent("paymentCompleted", {
            detail: { ...data },
            bubbles: true,
            composed: true,
          })
        );
        console.log("Comp");
      } else {
        this.dispatchEvent(
          new CustomEvent("notCompletePayment", {
            detail: { ...data },
            bubbles: true,
            composed: true,
          })
        );
        console.log("Not");
      }
    };

    // FOr payment Method
    Object.defineProperty(data, "prop", {
      get: function () {
        return data;
      },
      set: function (value) {
        console.log("Setting payment");
        this.payment = value;
        saveInfo();
        checkAllFieldsPopulated(value);
      },
    });

    checkAllFieldsPopulated(data.prop.payment);
  }
}

customElements.define("my-payment-form", PaymentForm);

/**
 * 
 * 
 * <div id="Credit" class="panel">
    <div class="form-group">
      <input type="text" placeholder=" " id="name" />
      <label for="name">Name on Card</label>
    </div>
    <div class="form-group">
      <input type="text" placeholder=" " id="cardNO" />
      <label for="name">Card Number</label>
    </div>
    <div class="form-group">
      <input type="Date" placeholder=" " id="date" />
      <label for="name">Expiration Date</label>
    </div>
    <div class="form-group">
      <input type="text" placeholder=" " id="cvv" />
      <label for="name">CVV</label>
    </div>
</div>

 */

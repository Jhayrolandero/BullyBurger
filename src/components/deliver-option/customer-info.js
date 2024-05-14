const template = document.createElement("template");
template.innerHTML = `
<style>
  form {
    max-width: 480px;
  }
  .form-group {
    position: relative;
    margin-bottom: 20px;
  }
  .form-group input {
    width: 100%;
    padding: 10px;
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
</style>
<form id="myForm">
  <div class="form-group">
    <input type="text" name="name" placeholder=" " id="name" />
    <label for="name">Name</label>
  </div>
  <div class="form-group">
    <input type="text" name="address" placeholder=" " id="address" />
    <label for="address">Address</label>
  </div>
  <div class="form-group">
    <input type="text" name="phonenumber" placeholder=" " id="phone" />
    <label for="phone">Phone Number</label>
  </div>
</form>
<div>
  <h3>Form Data:</h3>
  <p>Name: <span id="displayName"></span></p>
  <p>Address: <span id="displayAddress"></span></p>
  <p>Phone Number: <span id="displayPhone"></span></p>
</div>
`;

class CustomerForm extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const data = {
      value: "",
    };

    const nameForm = this.shadowRoot.getElementById("name");
    const displayNameEl = this.shadowRoot.getElementById("displayName");

    // Binding the printVal function to the custom element context
    const printVal = () => {
      displayNameEl.innerText = data.prop;
    };

    Object.defineProperty(data, "prop", {
      get: function () {
        console.log("Getter called");
        return this.value;
      },
      set: function (value) {
        console.log("Setter called");
        this.value = value;
        nameForm.value = value;
        printVal();
      },
    });

    // Attaching the event listener on keyup events
    nameForm.addEventListener("keyup", (event) => {
      console.log(event.target);
      data.prop = event.target.value;
    });

    // Initial rendering
    printVal();
  }
}

customElements.define("my-customer-form", CustomerForm);

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

  h4 {
    font-size: 2.5rem;
    text-align: center;
    border-bottom: 1px solid black;
    padding-bottom: 0.5em;
  }
</style>
<form id="customerForm">
<h4>Customer Form</h4>
  <div class="form-group">
    <input type="text" name="name" placeholder=" " id="name" required/>
    <label for="name">Name</label>
  </div>
  <div class="form-group">
    <input type="text" name="address" placeholder=" " id="address" />
    <label for="address">Address</label>
  </div>
  <div class="form-group">
    <input type="text" name="phonenumber" placeholder=" " id="phone" required/>
    <label for="phone">Phone Number</label>
  </div>
</form>
`;

class CustomerForm extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const data = {
      name: "",
      address: "",
      phone: "",
    };

    const nameForm = this.shadowRoot.getElementById("name");
    const addressForm = this.shadowRoot.getElementById("address");
    const phoneForm = this.shadowRoot.getElementById("phone");

    const saveInfo = () => {
      const customerInfo = {
        name: data.prop.name,
        address: data.prop.address,
        phone: data.prop.phone,
      };

      // Save the info obvdata.prop.phone
      localStorage.setItem("customer-info", JSON.stringify(customerInfo));
    };

    const checkAllFieldsPopulated = () => {
      if (data.name && data.address && data.phone) {
        this.dispatchEvent(
          new CustomEvent("formCompleted", {
            detail: { ...data },
            bubbles: true,
            composed: true,
          })
        );
      } else {
        this.dispatchEvent(
          new CustomEvent("notCompleteForm", {
            detail: { ...data },
            bubbles: true,
            composed: true,
          })
        );
      }
    };

    const checkCacheValue = () => {
      data.prop = phoneForm;
      data.prop = nameForm;
      data.prop = addressForm;
    };

    Object.defineProperty(data, "prop", {
      get: function () {
        return data;
      },
      set: function (value) {
        switch (value.id) {
          case "name":
            this.name = value.value;
            nameForm.name = value.value;
            break;
          case "phone":
            this.phone = value.value;
            phoneForm.name = value.value;
            break;
          case "address":
            this.address = value.value;
            addressForm.name = value.value;
            break;
        }
        saveInfo();
        checkAllFieldsPopulated();
      },
    });

    checkAllFieldsPopulated();
    checkCacheValue();
    // Attaching the event listener on keyup events
    nameForm.addEventListener("keyup", (event) => {
      data.prop = event.target;
    });

    addressForm.addEventListener("keyup", (event) => {
      data.prop = event.target;
    });

    phoneForm.addEventListener("keyup", (event) => {
      data.prop = event.target;
    });
  }
}

customElements.define("my-customer-form", CustomerForm);

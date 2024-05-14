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
<div class="form-group">
<input type="text" placeholder=" " id="name" />
<label for="name">Name</label>
</div>
<div class="form-group">
<input type="text" placeholder=" " id="name" />
<label for="name">Address</label>
</div>
<div class="form-group">
<input type="text" placeholder=" " id="name" />
<label for="name">Phone Number</label>
</div>`;

class CustomerForm extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

customElements.define("my-customer-form", CustomerForm);

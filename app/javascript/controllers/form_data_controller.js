import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-data"
export default class extends Controller {
  static targets = ["streetSelector"]

  logData(e) {
    let newOpts = e.map(
      (e) => {
        let el = document.createElement('option')
        el['value'] = e.postal_code
        el.text     = e.street
        //console.log(el)
        //`<option value="${e.postal_code}">${e.street}</option>`
        return el
      }
    )
    let streetSel = document.getElementById('street-selector');
    streetSel.replaceChildren(...newOpts)
    //this.citySelectTarget.append(newOpts)
  }

  citySelectHandler(e) {
    let cityNameUpperCase = e.target.value
    console.log(`Hello, ${cityNameUpperCase}!`)

    fetch(`/streets/search/?city=${cityNameUpperCase}`)
      .then((response) => response.json())
      .then((data) => this.logData(data));
  }
}

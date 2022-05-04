import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-data"
export default class extends Controller {
  static targets = ["streetSelector"]

  setStreetData(e) {
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

  setCityData(e) {
    let newOpts = e.map(
      (e) => {
        let el = document.createElement('option')
        el['value'] = e.city
        el.text     = `${e.city.slice(0, 1)}${e.city.toLowerCase().slice(1)}`
        ////console.log(el)
        ////`<option value="${e.postal_code}">${e.street}</option>`
        return el
      }
    )
    console.log(newOpts)
    document.getElementById('city-select').replaceChildren(...newOpts)
  }

  citySelectHandler(e) {
    let cityNameUpperCase = e.target.value
    console.log(`Hello, ${cityNameUpperCase}!`)

    fetch(`/streets/search/?city=${cityNameUpperCase}`)
      .then((response) => response.json())
      .then((data) => this.setStreetData(data));
  }

  postalCodeHandler(e) {
    let postalCode = e.target.value
    if(postalCode.length >= 3) {
      console.log(`postalCode, ${postalCode}!`)

      fetch(`/postal-codes/${postalCode}/cities/`)
        .then((response) => response.json())
        .then((data) => this.setCityData(data));
        //.then((response) => console.log(response.body))

    }
  }
}

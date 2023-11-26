
  let opciones = document.getElementById("opciones").addEventListener('change', function(){
    
    let opcion = this.value
    let precios = document.getElementById("precios")

    switch (opcion) {
      case 'opcion1':
        precios.innerHTML= `
                <div class="p-3 rounded-3 border border-3 border-secondary-subtle bg-danger">
                            <h4>El basico tiene un coste de $500.</h4></div>`
        break;
      case 'opcion2':
        precios.innerHTML= `
                <div class="p-3 rounded-3 border border-3 border-secondary-subtle bg-danger">
                            <h4>El intermedio tiene un coste de $1000.</h4></div>`
        break;
      case 'opcion3':
        precios.innerHTML= `
                <div class="p-3 rounded-3 border border-3 border-secondary-subtle bg-danger">
                            <h4>El premium tiene un coste de $1500.</h4></div>`
        break;
        
        default:
          precios.innerHTML= `
                <div class="p-3 rounded-3 border border-3 border-secondary-subtle bg-danger">
                            <h4>Elije uno!</h4></div>`
        break;
    }

  })

  let btn_form = document.getElementById("btn-form")
  btn_form.addEventListener("click", (e)=>{
    e.preventDefault()
    
  })
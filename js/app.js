
  let opciones = document.getElementById("opciones").addEventListener('change', function(){
    
    let opcion = this.value
    let precios = document.getElementById("precios")

    switch (opcion) {
      case 'opcion1':
        precios.innerHTML= `<div class="rounded-3 border border-3 border-secondary-subtle bg-danger" text-bg-danger rounded-3">El basico tiene un coste de $500.</div>`
        break;
      case 'opcion2':
        precios.innerHTML= `<div class="rounded-3 border border-3 border-secondary-subtle bg-danger" text-bg-danger rounded-3" >El intermedio tiene un coste de $1000.</div>`
        break;
      case 'opcion3':
        precios.innerHTML= `<div class="rounded-3 border border-3 border-secondary-subtle bg-danger" text-bg-danger rounded-3">El premium tiene un coste de $1500.</div>`
        break;
        
        default:
          precios.innerHTML= `<div class="rounded-3 border border-3 border-secondary-subtle bg-danger" text-bg-danger rounded-3">Elije uno!</div>`
        break;
    }

  })
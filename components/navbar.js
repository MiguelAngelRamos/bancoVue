app.component('navbar', {
  props:['tituloprop', 'serviciosprop'],
  template:`
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{ tituloprop }}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <!-- v-bind:key  ó :key -->
        <li class="nav-item" v-for="(servicio, index) of serviciosprop" v-bind:key="index">
          <a class="nav-link active" aria-current="page" href="#"> {{ servicio }}</a>
        </li>  
      </ul>
    </div>
  </div>
</nav>`
});
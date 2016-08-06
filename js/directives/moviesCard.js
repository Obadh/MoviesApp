function moviesCard() {
    return {
        restrict: 'EA',
        scope: {
            movies: '='
        },
        template: `<div class="row">
                <div class="col s12">
                  <div class="card grey lighten-3">
                    <div class="card-content">
                      <span class="card-title">{{ movies.city }}</span>
                      <h4>{{ movies.main }}</h4>
                      <p> {{ movies.description }}</p>
                      <p> {{ movies.temperature }}</p>
                    </div>
                  </div>
                </div>
              </div>`
    };
}

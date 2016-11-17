class App extends React.Component {
  constructor() {
    super();
    this.state={
      movies: []
    }
  }

  componentDidMount(){
    let movieSearch = "Harry+Potter"
    let url = `http://www.omdbapi.com/?s=` + movieSearch
    $.ajax({
      url: url,
      method: "GET"
    })
    .done(response => {
      this.setState({movies: response.Search})
      console.log(response.Search);
    })
    .fail(response => {
      console.log(response);
    })
  }

    render() {
      return(
        <div id="wrapper">

        <div id="header-container" className="container-fluid">
          <header>
            <div id="brand" className="text-center">
              <h1>MMDb</h1>
            </div>
          </header>

          <div className="container-fluid">
            <div id="navbar" className="row">
              <form id="search-form">
                <button id="logo-button" type="button" name="icon-button" className="btn-lg"  aria-disabled="true">MMDb</button>
                <input type="text" name="query" placeholder="Find Movies..."/>
              </form>
            </div>
          </div>
        </div>

        <section className="main-container container-fluid responsive">

          <div id="trending-content" className="col-md-8 container-fluid">
            <h3>Trending Movies</h3>
          </div>

          <div id="sidebar-new" className="col-md-4 container-fluid">
            <h3>New Movies</h3>
          </div>
        </section>
        </div>
      )
    }

}

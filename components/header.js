class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark border-bottom border-light-subtle" data-bs-theme="dark">
    <div class="container-xl">

      <p class="navbar-brand py-0 my-0"><a href="index"><img id="brand_image" src="images/site-logo.png" style="height:37px; padding-right: 10px;"></a></p>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index">Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <!--<li class="nav-item">
            <a class="nav-link" href="#">Wikis</a>
          </li>-->
          <li class="nav-item">
            <a class="nav-link" href="downloads">Downloads</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="troubleshooting">Troubleshooting</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="server_setup">Server Setup</a>
          </li>                    
          <!--
          <li class="nav-item">
            <a class="nav-link" href="discords.html">Discords</a>
          </li>
          -->
        </ul>
      </div>
    </div>
    </nav>
    `;
  }
}

customElements.define('header-component', Header);

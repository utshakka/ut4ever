class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark border-bottom border-light-subtle" data-bs-theme="dark">
    <div class="container-sm" style="height:47px;">

      <p class="navbar-brand py-0 my-0"><a href="index"><img id="brand_image" src="images/site-logo.png" style="height:37px; padding-right: 0px;"></a></p>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto">
          <li class="nav-item pe-2">
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
          <li class="nav-item ps-2">
          <a class="nav-link" href="troubleshooting">Troubleshooting</a>
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

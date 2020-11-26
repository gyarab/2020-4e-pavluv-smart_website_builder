export default [
  {
    img:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/jquery/docs/sections/design-blocks/blocks/gallery/2.png",
    html: `<div class="container my-5 px-5 pt-5 pb-4 z-depth-1">
  

<!--Section: Content-->
<section class="dark-grey-text">
  
  <style>
    .d-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 100px;
      grid-gap: 7px;
    }

    .item {
      position: relative;
    }

    .item:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 4;
    }

    .item:nth-child(2) {
      grid-column: 2;
      grid-row: 0 / 3;
    }

    .item:nth-child(3) {
      grid-column: 2;
      grid-row: 2 / 3;
    }

    .item:nth-child(4) {
      grid-column: 2;
      grid-row: 3 / 3;
    }

    .item a {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      overflow: hidden;
    }

    .item img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  </style>

  <div class="row align-items-center">

    <div class="col-lg-6 mb-4">
      <h2 class="font-weight-normal mb-4">Lovely place to work</h2>
      <p class="lead text-muted">Beautifully designed by best interior designers for the best web designers</p>
      <p class="text-muted">We can combine beautiful, modern designs with clean, functional. And best of all, we
        are super passionate
        about our work. Thought does cognitive into follow and rationale annoyed.</p>
    </div>

    <div class="col-lg-6 mb-4">

      <div id="mdb-lightbox-ui"></div>

      <div class="d-grid mdb-lightbox">
        <figure class="item">
          <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg"
            class="z-depth-1 rounded" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg" />
          </a>
        </figure>
        <figure class="item">
          <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg"
            class="z-depth-1 rounded" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg" />
          </a>
        </figure>
        <figure class="item">
          <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg"
            class="z-depth-1 rounded" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg" />
          </a>
        </figure>
        <figure class="item">
          <a href="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg"
            class="z-depth-1 rounded" data-size="1600x1067">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(13).jpg" />
          </a>
        </figure>
      </div>

    </div>

  </div>

</section>
<!--Section: Content-->


</div>`,
  },
  {
    img:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/jquery/docs/sections/design-blocks/blocks/gallery/1.png",
    html: `<div class="container my-5">


<!--Section: Content-->
<section class="text-center dark-grey-text">
  
  <style>
    .carousel-multi-item.v-2 .carousel-inner .carousel-item.active,
    .carousel-multi-item.v-2 .carousel-item-next,
    .carousel-multi-item.v-2 .carousel-item-prev {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex; }
    .carousel-multi-item.v-2 .carousel-item-right.active,
    .carousel-multi-item.v-2 .carousel-item-next {
      -webkit-transform: translateX(50%);
      -ms-transform: translateX(50%);
      transform: translateX(50%); }
    .carousel-multi-item.v-2 .carousel-item-left.active,
    .carousel-multi-item.v-2 .carousel-item-prev {
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%); }
    .carousel-multi-item.v-2 .carousel-item-right,
    .carousel-multi-item.v-2 .carousel-item-left {
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0); }
  </style>
  
  <h3 class="font-weight-bold pb-4 mb-0 text-center">Gallery</h3>

  <div class="row">
    <div class="col-md-12">

      <div id="carousel-example-multi" class="carousel slide carousel-multi-item v-2" data-ride="carousel">

        <!--Controls-->
        <div class="controls-top">
          <a class="btn-floating bg-transparent z-depth-0 m-0" href="#carousel-example-multi" data-slide="prev"><i class="dark-grey-text fas fa-chevron-left"></i></a>
          <a class="btn-floating bg-transparent z-depth-0 m-0" href="#carousel-example-multi" data-slide="next"><i class="dark-grey-text fas fa-chevron-right"></i></a>
        </div>
        <!--/.Controls-->

        <div class="carousel-inner" role="listbox">

          <div class="carousel-item active">
            <div class="col-12 col-md-6 mb-4 mx-auto">
              <div class="view rounded z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(150).jpg" class="img-fluid rounded" alt="Sample image">
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="col-12 col-md-6 mb-4 mx-auto">
              <div class="view rounded z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg" class="img-fluid rounded" alt="Sample image">
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="col-12 col-md-6 mb-4 mx-auto">
              <div class="view rounded z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(138).jpg" class="img-fluid rounded" alt="Sample image">
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="col-12 col-md-6 mx-auto">
              <div class="view rounded z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg" class="img-fluid rounded" alt="Sample image">
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="col-12 col-md-6 mb-4 mx-auto">
              <div class="view rounded z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(148).jpg" class="img-fluid rounded" alt="Sample image">
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="col-12 col-md-6 mb-4 mx-auto">
              <div class="view rounded z-depth-1-half">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg" class="img-fluid rounded" alt="Sample image">
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>

</section>
<!--Section: Content-->


</div>`,
  },
  {
    img:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/jquery/docs/sections/design-blocks/blocks/gallery/3.png",
    html: `<div class="container my-5">

<!--Section: Content-->
<section class="text-center dark-grey-text mb-5">
  
  <h3 class="font-weight-bold pb-5 text-center">Gallery</h3>

  <div class="row">
    <div class="col-md-12">

      <!--Carousel Wrapper-->
      <div id="carousel-example-1z" class="carousel slide" data-ride="carousel">
        <!--Indicators-->
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-1z" data-slide-to="1"></li>
          <li data-target="#carousel-example-1z" data-slide-to="2"></li>
        </ol>
        <!--/.Indicators-->
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
          <!--First slide-->
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(10).jpg"
              alt="First slide">
          </div>
          <!--/First slide-->
          <!--Second slide-->
          <div class="carousel-item">
            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(11).jpg"
              alt="Second slide">
          </div>
          <!--/Second slide-->
          <!--Third slide-->
          <div class="carousel-item">
            <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/Architecture/12-col/img%20(12).jpg"
              alt="Third slide">
          </div>
          <!--/Third slide-->
        </div>
        <!--/.Slides-->
        <!--Controls-->
        <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        <!--/.Controls-->
      </div>
      <!--/.Carousel Wrapper-->

    </div>
  </div>

</section>
<!--Section: Content-->


</div>`,
  },
];

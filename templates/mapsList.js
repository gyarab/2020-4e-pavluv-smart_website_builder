export default [
  {
    img:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/jquery/docs/sections/design-blocks/blocks/maps/1.png",
    html: `<div class="container-fluid mt-3 mb-5">

<!-- Section: Block Content -->
<section class="mb-4">

  <style>
    .map-container {
      overflow: hidden;
      position: relative;
      height: 0;
    }

    .map-container iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  </style>

  <!-- Google Maps -->
  <div id="full-width-map" class="z-depth-1-half map-container" style="height: 500px">
    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
      style="border:0" allowfullscreen></iframe>
  </div>
  <!-- Google Maps -->

</section>
<!-- Section: Block Content -->

</div>`,
  },
  {
    img:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/jquery/docs/sections/design-blocks/blocks/maps/3.png",
    html: `<div class="container-fluid mt-3 mb-5">

<!-- Section: Block Content -->
<section class="mb-4">

  <style>
    .map-container {
      overflow: hidden;
      position: relative;
      height: 0;
    }

    .map-container iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  </style>

  <div class="card">

    <div class="row">
      <div class="col-md-6">

        <!-- Google Maps -->
        <div id="map-within-card-2" class="map-container rounded-left" style="height: 400px">
          <iframe src="https://maps.google.com/maps?q=Seattle&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
            style="border:0" allowfullscreen></iframe>
        </div>
        <!-- Google Maps -->

      </div>

      <div class="col-10 col-md-4 mx-auto align-self-center py-4">

        <h6 class="font-weight-bold grey-text text-uppercase small">Head Office</h6>
        <h5 class="font-weight-normal mb-4">Seattle, WA</h5>
        <p class="text-muted font-weight-light">2651 Main Street, Suit 124<br>Seattle, WA, 98101</p>
        <p class="text-muted font-weight-light mb-0">Phone: +1 987 123 6548<br>Email: hello@thetheme.io</p>

      </div>
    </div>

  </div>

</section>
<!-- Section: Block Content -->

</div>`,
  },
  {
    img:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/jquery/docs/sections/design-blocks/blocks/maps/2.png",
    html: `<div class="container my-5">

  
<!-- Section: Block Content -->
<section class="mb-4">

  <style>
    .map-container {
      overflow: hidden;
      position: relative;
      height: 0;
    }

    .map-container iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  </style>

  <div class="card">

    <div class="row my-md-5 py-md-4 p-3">
      <div class="col-md-10 mx-auto">

        <!-- Google Maps -->
        <div id="map-within-card" class="map-container" style="height: 400px">
          <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
            style="border:0" allowfullscreen></iframe>
        </div>
        <!-- Google Maps -->

      </div>
    </div>

  </div>

</section>
<!-- Section: Block Content -->


</div>`,
  },
];

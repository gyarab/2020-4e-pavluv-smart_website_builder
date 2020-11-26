export default [
  {
    img:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/jquery/docs/sections/design-blocks/blocks/steps/1.png",
    html: `<div class="container z-depth-1 my-5 pt-5 pb-3 px-5">

<!-- Section -->
<section>
  
  <style>
    .fa-play:before {
      margin-left: .3rem;
    }

    /* Steps */
    .step {
      list-style: none;
      margin: 0;
    }

    .step-element {
      display: flex;
      padding: 1rem 0;
    }

    .step-number {
      position: relative;
      width: 7rem;
      flex-shrink: 0;
      text-align: center;
    }

    .step-number .number {
      color: #bfc5ca;
      background-color: #eaeff4;
      font-size: 1.5rem;
    }

    .step-number .number {
      width: 48px;
      height: 48px;
      line-height: 48px;
    }

    .number {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 38px;
      border-radius: 10rem;
    }

    .step-number::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 48px;
      bottom: -2rem;
      margin-left: -1px;
      border-left: 2px dashed #eaeff4;
    }

    .step .step-element:last-child .step-number::before {
      bottom: 1rem;
    }
  </style>

  <!-- Modal -->
  <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
          <iframe id="player" class="embed-responsive-item" src="https://www.youtube.com/embed/7MUISDJ5ZZ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>

  <h3 class="font-weight-bold text-center dark-grey-text pb-2">Three Easy Steps</h3>
  <hr class="w-header my-4">
  <p class="lead text-center text-muted pt-2 mb-5">Explore the best MDB template in the market in a short 1-minute video.</p>

  <div class="row align-items-center">

    <div class="col-lg-6 mb-4">
      <div class="view z-depth-1-half rounded">
        <img class="rounded img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20(6).jpg" alt="Video title">
        <div class="mask flex-center rgba-black-light">
          <a id="play" class="btn-floating btn-primary btn-lg" data-toggle="modal" data-target="#modal1"><i class="fas fa-play"></i></a>
        </div>
      </div>
    </div>

    <div class="col-lg-6 mb-4">

      <ol class="step pl-0">
        <li class="step-element pb-0">
          <div class="step-number">
            <span class="number">1</span>
          </div>
          <div class="step-excerpt">
            <h6 class="font-weight-bold dark-grey-text mb-3">Write your requirements</h6>
            <p class="text-muted">Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
          </div>
        </li>
        <li class="step-element pb-0">
          <div class="step-number">
            <span class="number">2</span>
          </div>
          <div class="step-excerpt">
            <h6 class="font-weight-bold dark-grey-text mb-3">Sign the contract</h6>
            <p class="text-muted">Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
          </div>
        </li>
        <li class="step-element pb-0">
          <div class="step-number">
            <span class="number">3</span>
          </div>
          <div class="step-excerpt">
            <h6 class="font-weight-bold dark-grey-text mb-3">We start developing</h6>
            <p class="text-muted">Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
          </div>
        </li>
      </ol>

    </div>

  </div>
  
</section>
<!-- Section -->

</div>`,
  },
  {
    img:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/jquery/docs/sections/design-blocks/blocks/steps/3.png",
    html: `<div class="container z-depth-1 my-5 p-5">

<!-- Section -->
<section>
  
  <h3 class="font-weight-bold text-center dark-grey-text pb-2">A Few Easy Steps</h3>
  <hr class="w-header my-4">
  <p class="lead text-center text-muted pt-2 pb-3 mb-5">We are so proud of our product. It's really easy to create a landing page for your product.</p>

  <div class="row dark-grey-text">

    <div class="col-md-6 col-xl-4 mb-4">
      <div class="media">
        <div class="mr-4">
          <span class="text-primary"><i class="icon-fa fas fa-file-alt fa-2x"></i></span>
        </div>
        <div class="media-body">
          <h6 class="font-weight-bold">Step One</h6>
          <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium eaque ipsa doloremque laudantium.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xl-4 mb-4">
      <div class="media">
        <div class="mr-4">
          <span class="text-danger"><i class="icon-fa fas fa-bullhorn fa-2x"></i></span>
        </div>
        <div class="media-body">
          <h6 class="font-weight-bold">Step Two</h6>
          <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium eaque ipsa doloremque laudantium.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xl-4 mb-4">
      <div class="media">
        <div class="mr-4">
          <span class="text-info"><i class="icon-fa fas fa-code fa-2x"></i></span>
        </div>
        <div class="media-body">
          <h6 class="font-weight-bold">Step Three</h6>
          <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium eaque ipsa doloremque laudantium.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xl-4 mb-4">
      <div class="media">
        <div class="mr-4">
          <span class="text-warning"><i class="icon-fa fas fa-comments fa-2x"></i></span>
        </div>
        <div class="media-body">
          <h6 class="font-weight-bold">Step Four</h6>
          <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium eaque ipsa doloremque laudantium.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xl-4 mb-4">
      <div class="media">
        <div class="mr-4">
          <span class="text-muted"><i class="icon-fa fas fa-cogs fa-2x"></i></span>
        </div>
        <div class="media-body">
          <h6 class="font-weight-bold">Step Five</h6>
          <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium eaque ipsa doloremque laudantium.</p>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xl-4 mb-4">
      <div class="media">
        <div class="mr-4">
          <span class="text-success"><i class="icon-fa far fa-handshake fa-2x"></i></span>
        </div>
        <div class="media-body">
          <h6 class="font-weight-bold">Step Six</h6>
          <p class="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium eaque ipsa doloremque laudantium.</p>
        </div>
      </div>
    </div>

  </div>

</section>
<!-- Section -->

</div>`,
  },
  {
    img:
      "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/jquery/docs/sections/design-blocks/blocks/steps/2.png",
    html: `<div class="container z-depth-1 my-5 py-5 px-4 px-lg-0">

<!-- Section -->
<section>
  
  <style>
    .timeline {
      position: relative;
      list-style: none;
      padding: 1rem 0;
      margin: 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      margin-left: -1px;
      background-color: #50a1ff;
    }

    .timeline-element {
      position: relative;
      width: 50%;
      padding: 1rem 0;
      padding-right: 2.5rem;
      text-align: right;
    }

    .timeline-element::before {
      content: '';
      position: absolute;
      right: -8px;
      top: 1.35rem;
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid #50a1ff;
      background-color: #fff;
    }

    .timeline-element:nth-child(even)::before {
      right: auto;
      left: -8px;
    }

    .timeline-element:nth-child(even) {
      margin-left: 50%;
      padding-left: 2.5rem;
      padding-right: 0;
      text-align: left;
    }

    @media (max-width: 767.98px) {
      .timeline::before {
        left: 8px;
      }
    }

    @media (max-width: 767.98px) {
      .timeline-element {
        width: 100%;
        text-align: left;
        padding-left: 2.5rem;
        padding-right: 0;
      }
    }

    @media (max-width: 767.98px) {
      .timeline-element::before {
        top: 1.25rem;
        left: 1px;
      }
    }

    @media (max-width: 767.98px) {
      .timeline-element:nth-child(even) {
        margin-left: 0rem;
      }
    }

    @media (max-width: 767.98px) {
      .timeline-element {
        width: 100%;
        text-align: left;
        padding-left: 2.5rem;
        padding-right: 0;
      }
    }

    @media (max-width: 767.98px) {
      .timeline-element:nth-child(even)::before {
        left: 1px;
      }
    }

    @media (max-width: 767.98px) {
      .timeline-element::before {
        top: 1.25rem;
      }
    }
  </style>
  
  <h3 class="font-weight-bold text-center dark-grey-text pb-2">Our History</h3>
  <hr class="w-header my-4">
  <p class="lead text-center text-muted pt-2 mb-5">MDB founded to help startups, and it still shapes the way we work today.</p>
  
  <div class="row">
    <div class="col-lg-8 mx-auto">

      <ol class="timeline">
        <li class="timeline-element">
          <h5 class="font-weight-bold dark-grey-text mb-3">Launched our website</h5>
          <p class="grey-text font-small"><time datetime="2017-02-08">08 Feb 2017</time></p>
          <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam adipisci reiciendis porro natus laudantium similique. 
            Explicabo amet ipsum fugiat aliquam alias.</p>
        </li>

        <li class="timeline-element">
          <h5 class="font-weight-bold dark-grey-text mb-3">Got the first 100 users</h5>
          <p class="grey-text font-small"><time datetime="2017-08-17">17 Aug 2017</time></p>
          <p><img class="img-fluid z-depth-1-half rounded" src="https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20(6).jpg" alt="..."></p>
          <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam adipisci reiciendis porro natus laudantium similique. 
            Explicabo amet ipsum fugiat aliquam alias.</p>
        </li>

        <li class="timeline-element">
          <h5 class="font-weight-bold dark-grey-text mb-3">Raised $1.4 million in seed funding</h5>
          <p class="grey-text font-small"><time datetime="2018-03-26">26 Mar 2019</time></p>
          <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam adipisci reiciendis porro natus laudantium similique. 
            Explicabo amet ipsum fugiat aliquam alias.</p>
        </li>

        <li class="timeline-element">
          <h5 class="font-weight-bold dark-grey-text mb-3">Team size increased to 20</h5>
          <p class="grey-text font-small"><time datetime="2018-04-14">14 Apr 2019</time></p>
          <p class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ullam adipisci reiciendis porro natus laudantium similique. 
            Explicabo amet ipsum fugiat aliquam alias.</p>
        </li>
      </ol>

    </div>
  </div>
  
</section>
<!-- Section -->

</div>`,
  },
];

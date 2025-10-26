<?php
include_once("db.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WPoets Full Stack Test - Meghna Pujari</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <!-- Header Section -->
  <div class="header-section">
    <div class="container">
      <div class="text-center">
        <h2 class="fade-in">DelphianLogic in Action</h2>
        <p class="fade-in">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
      </div>
    </div>
  </div>
  <!-- Main Content with Slider System -->
  <div class="main-content slide-in">
    <div class="container-fluid">
      <div class="row">
        <!-- Column 1 - Tabs / Accordion -->
        <div class="col-md-3 col-12" style="background-color:white;">
          <div id="sectionTabs" class="list-group d-none d-md-block"></div>
          <div class="accordion d-md-none" id="sectionAccordion"></div>
        </div>

        <!-- Column 2 - Slider -->
        <div class="col-md-6 col-12 mb-4">
          <div id="sliderArea" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" id="sliderContent"></div>
            <button class="carousel-control-prev" type="button" data-bs-target="#sliderArea" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#sliderArea" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        <!-- Column 3 - Image Preview -->
        <div class="col-md-3 col-12">
          <img id="imagePreview" alt="Preview" class="img-fluid rounded shadow-sm">
          <!-- <div class="preview-info mt-3 text-center"> 
            <h5 id="previewTitle" class="text-light"></h5>
            <p id="previewSubtitle" class="text-muted small"></p>
          </div>-->
        </div>
      </div>
    </div>
  </div>


  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/script.js"></script>
</body>
</html>
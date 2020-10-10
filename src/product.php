<?php include_once 'include/header.php' ?>

<main>

  <section class="section">
    <div class="container">
      <h1 class="section__title">Кухни эмаль</h1>

      <div class="product">
        <div class="product__main">
          <div class="product__gallery product-gallery">
            <div class="product-gallery__main">
              <img id="gallery-current" class="product-gallery__image product-gallery__image--current" src="img/product/1.jpg" alt="">

              <div class="product-gallery__prev"></div>
              <div class="product-gallery__next"></div>
            </div>
            <!-- /.product-gallery__main -->

            <div id="gallery-thumbs" class="product-gallery__thumbnails">
              <div class="product-gallery__secondary">
                <img class="product-gallery__image" src="img/product/thumbs/1.jpg" alt="">
              </div>
              <!-- /.product-gallery__secondary -->

              <div class="product-gallery__secondary">
                <img class="product-gallery__image" src="img/product/thumbs/2.jpg" alt="">
              </div>
              <!-- /.product-gallery__secondary -->

              <div class="product-gallery__secondary">
                <img class="product-gallery__image" src="img/product/thumbs/3.jpg" alt="">
              </div>
              <!-- /.product-gallery__secondary -->

              <div class="product-gallery__secondary">
                <img class="product-gallery__image" src="img/product/thumbs/4.jpg" alt="">
              </div>
              <!-- /.product-gallery__secondary -->

              <div class="product-gallery__secondary">
                <img class="product-gallery__image" src="img/product/thumbs/5.jpg" alt="">
              </div>
              <!-- /.product-gallery__secondary -->
            </div>
            <!-- /.product-gallery__thumbnails -->
          </div>
          <!-- /.product__gallery -->

          <div class="product__description">
            <h2 class="product__title">Современные фасады из эмали обладают рядом преимуществ:</h2>
            <ul class="product__list">
              <li class="product__advantage">Долговечность и стойкость к внешним воздействиям за счет грунтовки, многослойного покрытия эмалью, лакировки и полировки поверхности</li>
              <li class="product__advantage">Крашенная поверхность устойчива к влаге и повышенным температурам</li>
              <li class="product__advantage">Не требуют специального ухода</li>
              <li class="product__advantage">Для фасада из эмали характерна яркая и насыщенная колористика, практически неограниченный выбор цвета (более 300 оттенков)
            </ul>

            <div class="product__action">
              <div class="product__price">
                Цена за погон. метр - от 17 080руб
              </div>
              <!-- /.product__price -->

              <button class="product__button button button-secondary">
                <span class="button-secondary__text">Рассчитать стоимость</span>
              </button>
            </div>
            <!-- /.product__action -->
          </div>
          <!-- /.product__description -->
        </div>
        <!-- /.product__main -->

        <div class="product__extra product-extra">
          <div class="product-extra__wrapper">
            <div class="product-extra__card">
              <h3 class="product-extra__title">Цветовые решения для эмалированных кухонь</h3>
              <div class="product-extra__picture">
                <img src="img/product/extra/1.jpg" alt="" class="product-extra__image">
              </div>
              <!-- /.product-extra__picture -->

              <button class="product-extra__button button button-primary">Посмотреть</button>
            </div>
            <!-- /.product-extra__card -->

            <div class="product-extra__card">
              <h3 class="product-extra__title">Варианты фасада</h3>
              <div class="product-extra__picture">
                <img src="img/product/extra/2.jpg" alt="" class="product-extra__image">
              </div>
              <!-- /.product-extra__picture -->

              <button class="product-extra__button button button-primary">Посмотреть</button>
            </div>
            <!-- /.product-extra__card -->

          </div>
          <!-- /.product-extra__wrapper -->
        </div>
        <!-- /.product__extra -->
      </div>
      <!-- /.product -->
    </div>
    <!-- /.container -->
  </section>

  <?php include_once 'include/callback.php' ?>

</main>

<?php include_once 'include/footer.php' ?>
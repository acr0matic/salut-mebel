<?php include_once 'include/header.php' ?>

<main>

  <section class="section section--breadcrumbs">
    <div class="container">
      <ul class="section__breadcrumbs breadcrumbs">
        <li class="breadcrumbs__item">
          <a href="" class="breadcrumbs__link link">Главная</a>
        </li>

        <li class="breadcrumbs__item breadcrumbs__item--active">контакты</li>
      </ul>
      <h2 class="section__title">Контакты</h2>

      <div class="contact">
        <div class="contact__wrapper">
          <div class="contact__card contact-card">
            <h3 class="contact-card__title">Салон при фабрике</h3>
            <p class="contact-card__text">
              М. Нагорная, Электролитный проезд, дом 3, строение 2
            </p>

            <div class="contact-card__communication">
              <a href="tel:+79005003040" class="contact-card__link">+79005003040</a>
              <a href="mailto:9785951@mail.ru" class="contact-card__link">9785951@mail.ru</a>
            </div>
            <!-- /.contact-card__communication -->

            <p class="contact-card__text contact-card__text--important">
              На фабрике действует пропускная система.
              Необходимо заказать ПРОПУСК
              для прохода на территорию фабрики
            </p>
          </div>
          <!-- /.contact__card -->
        </div>
        <!-- /.contact__wrapper -->
      </div>
      <!-- /.contact -->
    </div>
    <!-- /.container -->
  </section>

  <section class="section">
    <div class="container">
      <div class="map">
        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A31d27a0dad283184df1e76668d1fa3370fa8eed2d34eb90ad918e8eae525e570&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"></script>
      </div>
      <!-- /.map -->
    </div>
    <!-- /.container -->
  </section>

  <?php include_once 'include/callback.php' ?>

</main>

<?php include_once 'include/footer.php' ?>
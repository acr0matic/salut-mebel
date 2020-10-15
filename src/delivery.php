<?php include_once 'include/header.php' ?>

<main>

  <section class="section section--breadcrumbs">
    <div class="container">
      <ul class="section__breadcrumbs breadcrumbs">
        <li class="breadcrumbs__item">
          <a href="" class="breadcrumbs__link link">Главная</a>
        </li>

        <li class="breadcrumbs__item breadcrumbs__item--active">доставка и монтаж</li>
      </ul>
      <h2 class="section__title">Доставка и монтаж</h2>

      <div class="delivery">
        <div class="delivery__wrapper">
          <div class="delivery__content">
            <p class="delivery__text delivery__text--large">
              Компания “САЛЮТ МЕБЕЛЬ” заботится о своих покупателях
              и предлагает Вам не только широкий ассортимент кухонных гарнитуров, но и дополнительные
              услуги по доставке и установке приобретенной у нас мебели.
            </p>

            <h3 class="delivery__title">Замер</h3>
            <p class="delivery__text">
              Стоимость замера помещения:
              <br>
              По Москве - 1 500 руб.
              <br>
              За пределами МКАД - 1 500 руб. + 30 руб. за 1 км от МКАД
            </p>

            <p class="delivery__text">
              При оформлении договора в нашей компании, стоимость замера
              <br>
              <strong>1 500р вычитается</strong> из стоимости кухни.
            </p>

            <h3 class="delivery__title">Доставка</h3>
            <p class="delivery__text">
              Стоимость доставки составляет:
              <br>
              Москва (в пределах МКАД) - 1 500р.
              <br>
              Москва - Центр (в пределах 3-го транспортного кольца) - 3 000р.
              <br>
              За пределами МКАД - 1 500р + 30р за 1 км пути от МКАД.
            </p>

            <p class="delivery__text">
              Доставка мебели осуществляется в первой половине дня.
              Дата доставки устанавливается службой логистики, согласно
              внутреннему графику компании. Дата доставки согласовывается
              с покупателем <strong>не менее чем за 2 дня</strong> до назначенной даты.
            </p>

            <h3 class="delivery__title">Установка</h3>
            <p class="delivery__text">
              Установка по Москве - 8% от стоимости кухни.
              <br>
              Установка по Московской области - 9-10% от стоимости кухни
            </p>
          </div>
          <!-- /.delivery__content -->

          <div class="delivery__picture">
            <img src="img/delivery/delivery.jpg" alt="" class="delivery__image">
          </div>
          <!-- /.delivery__picture -->
        </div>
        <!-- /.delivery__wrapper -->
      </div>
      <!-- /.delivery -->
    </div>
    <!-- /.container -->
  </section>

  <?php include_once 'include/calculation.php' ?>

</main>

<?php include_once 'include/footer.php' ?>
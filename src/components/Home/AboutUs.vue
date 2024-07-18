<template>
  <section class="about-us">
    <div class="container">
      <div class="about-restaurant">
        <div class="about-us-right">
          <div class="title">
            <h1>درباره ی رستوران</h1>
            <h2>درباره ما :)</h2>
            <div class="stars">
              <i v-for="(item, index) in 4" :key="index" class="fas fa-star-of-life"></i>
            </div>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
              طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
              فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
              گیرد.
            </p>
            <div class="stars">
              <i v-for="(item, index) in 4" :key="index" class="fas fa-star-of-life"></i>
            </div>
            <button>اطلاعات بیشتر</button>
          </div>
        </div>
        <div class="about-us-left">
          <div class="about-img">
            <img src="../../assets/images/about-us-img.png" alt="about-us-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>